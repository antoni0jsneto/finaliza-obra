
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import apiServerClient from '@/lib/apiServerClient';

const QuoteRequestModal = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Apartamento',
    size: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.phone || !formData.email || !formData.size) {
      toast({
        title: 'Erro',
        description: 'Por favor, preencha todos os campos obrigatórios.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const response = await apiServerClient.fetch('/contact/send-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao enviar mensagem');
      }

      const data = await response.json();

      toast({
        title: 'Sucesso!',
        description: data.message || 'Sua solicitação foi enviada com sucesso!',
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        propertyType: 'Apartamento',
        size: '',
        message: '',
      });

      onClose();
    } catch (error) {
      console.error('Error submitting quote request:', error);
      toast({
        title: 'Erro',
        description: error.message || 'Erro ao enviar solicitação. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#0A2540]">
            Solicitar Orçamento
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name" className="text-gray-700">
              Nome Completo *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome"
              className="mt-1 text-gray-900"
              required
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-gray-700">
              Telefone *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
              className="mt-1 text-gray-900"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-700">
              E-mail *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              className="mt-1 text-gray-900"
              required
            />
          </div>

          <div>
            <Label htmlFor="propertyType" className="text-gray-700">
              Tipo de Imóvel *
            </Label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2BB673]"
              required
            >
              <option value="Apartamento">Apartamento</option>
              <option value="Casa">Casa</option>
              <option value="Comercial">Comercial</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div>
            <Label htmlFor="size" className="text-gray-700">
              Tamanho Aproximado (m²) *
            </Label>
            <Input
              id="size"
              name="size"
              type="number"
              value={formData.size}
              onChange={handleChange}
              placeholder="120"
              className="mt-1 text-gray-900"
              required
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-gray-700">
              Mensagem (opcional)
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Descreva suas necessidades..."
              className="mt-1 text-gray-900"
              rows={4}
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#2BB673] hover:bg-[#25a063] text-white"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar Solicitação'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteRequestModal;
