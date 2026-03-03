import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div style={{ backgroundColor: '#0A2540' }} className="text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sobre */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                Finaliza<span style={{ color: '#2BB673' }}>Obra</span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Especialistas em limpeza técnica, revisão e finalização de obras. 
                Sua obra pronta, sem dor de cabeça.
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/servicos" className="text-gray-300 hover:text-white transition-colors">
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className="text-gray-300 hover:text-white transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link to="/contato" className="text-gray-300 hover:text-white transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Serviços */}
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Limpeza Pós-Obra</li>
                <li>Revisão de Acabamentos</li>
                <li>Pequenos Reparos</li>
                <li>Checklist Técnico</li>
                <li>Preparação de Imóvel</li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start space-x-2">
                  <Phone size={16} className="mt-1 flex-shrink-0" />
                  <span>(11) 9 9999-9999</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Mail size={16} className="mt-1 flex-shrink-0" />
                  <span>contato@finalizaobra.com.br</span>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span>São Paulo - SP</span>
                </li>
              </ul>

              {/* Redes Sociais */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ backgroundColor: '#0A2540', borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>© {currentYear} Finaliza Obra. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;