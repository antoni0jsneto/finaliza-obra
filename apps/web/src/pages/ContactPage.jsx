
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import apiServerClient from '@/lib/apiServerClient';

const ContactPage = () => {
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
        description: data.message || 'Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.',
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
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: 'Erro',
        description: error.message || 'Erro ao enviar mensagem. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contato - Finaliza Obra</title>
        <meta
          name="description"
          content="Entre em contato com a Finaliza Obra. Solicite um orçamento gratuito ou tire suas dúvidas. Atendimento rápido e personalizado."
        />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Breadcrumb */}
        <div className="bg-[#F2F4F7] py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-[#2BB673] transition-colors">
                Home
              </Link>
              <ChevronRight size={16} />
              <span className="text-[#0A2540] font-medium">Contato</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
                Entre em Contato
              </h1>
              <p className="text-xl text-gray-600">
                Estamos prontos para atender você. Preencha o formulário ou entre em contato pelos nossos canais.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-[#F2F4F7]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h2 className="text-2xl font-bold text-[#0A2540] mb-6">
                  Solicite um Orçamento
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
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

                  <Button
                    type="submit"
                    className="w-full bg-[#2BB673] hover:bg-[#25a063] text-white"
                    disabled={loading}
                  >
                    {loading ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Contact Details */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-[#0A2540] mb-6">
                    Informações de Contato
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-[#2BB673] mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#0A2540]">Telefone</p>
                        <p className="text-gray-600">(11) 99999-9999</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-[#2BB673] mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#0A2540]">E-mail</p>
                        <p className="text-gray-600">contato@finalizaobra.com.br</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-[#2BB673] mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#0A2540]">Endereço</p>
                        <p className="text-gray-600">São Paulo, SP - Brasil</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-[#2BB673] mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#0A2540]">Horário de Atendimento</p>
                        <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                        <p className="text-gray-600">Sábado: 8h às 12h</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-[#0A2540] mb-6">
                    Nossa Localização
                  </h2>
                  <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975359033844!2d-46.65844368502207!3d-23.561414984682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização da Finaliza Obra"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
