
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, CheckCircle, Wrench, ClipboardCheck, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuoteRequestModal from '@/components/QuoteRequestModal';

const ServicesPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const services = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Limpeza Técnica Especializada',
      image: 'https://images.unsplash.com/photo-1588514356449-0ee12d101f83',
      description: 'Remoção completa de resíduos de construção, poeira fina, manchas de cimento e outros materiais que ficam após a obra. Utilizamos equipamentos profissionais e produtos específicos para cada tipo de superfície.',
      benefits: [
        'Equipamentos de alta potência para remoção de sujeira pesada',
        'Produtos biodegradáveis e seguros para todos os tipos de acabamento',
        'Limpeza de vidros, esquadrias, pisos, azulejos e revestimentos',
        'Remoção de resíduos e entulhos',
        'Polimento e proteção de superfícies',
      ],
      differentials: [
        'Equipe treinada e uniformizada',
        'Seguro de responsabilidade civil',
        'Equipamentos de última geração',
        'Produtos profissionais importados',
      ],
    },
    {
      icon: <CheckCircle className="w-12 h-12" />,
      title: 'Correção de Imperfeições',
      image: 'https://images.unsplash.com/photo-1573492466940-3156e63dc25b',
      description: 'Identificação e correção de falhas em pintura, acabamentos, rejuntes e outros detalhes que comprometem a qualidade final da obra. Nossa equipe técnica possui olhar treinado para detectar imperfeições.',
      benefits: [
        'Inspeção detalhada de todos os ambientes',
        'Correção de falhas em pintura e textura',
        'Ajuste de rejuntes e acabamentos',
        'Nivelamento de superfícies',
        'Retoque em áreas danificadas',
      ],
      differentials: [
        'Profissionais com experiência em acabamento fino',
        'Uso de materiais compatíveis com os originais',
        'Garantia de 90 dias para correções',
        'Relatório fotográfico antes e depois',
      ],
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Revisão Hidráulica e Elétrica Básica',
      image: 'https://images.unsplash.com/photo-1588514356449-0ee12d101f83',
      description: 'Verificação e ajustes finais em instalações hidráulicas e elétricas. Testamos torneiras, registros, interruptores, tomadas e outros pontos para garantir o funcionamento adequado.',
      benefits: [
        'Teste de todas as torneiras e registros',
        'Verificação de vazamentos',
        'Teste de interruptores e tomadas',
        'Ajuste de pressão de água',
        'Verificação de disjuntores',
      ],
      differentials: [
        'Eletricistas e encanadores certificados',
        'Equipamentos de teste profissionais',
        'Identificação preventiva de problemas',
        'Relatório técnico detalhado',
      ],
    },
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: 'Vedação e Ajustes Finais',
      image: 'https://images.unsplash.com/photo-1573492466940-3156e63dc25b',
      description: 'Aplicação de silicone, vedação de frestas, ajuste de portas e janelas, e outros acabamentos que garantem conforto térmico, acústico e estético do imóvel.',
      benefits: [
        'Aplicação de silicone em áreas úmidas',
        'Vedação de frestas e juntas',
        'Ajuste de portas e janelas',
        'Regulagem de fechaduras e dobradiças',
        'Instalação de rodapés e acabamentos',
      ],
      differentials: [
        'Materiais de primeira linha',
        'Acabamento impecável',
        'Atenção aos detalhes',
        'Garantia de vedação',
      ],
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: 'Entrega Técnica para Construtoras',
      image: 'https://images.unsplash.com/photo-1588514356449-0ee12d101f83',
      description: 'Serviço especializado para construtoras que precisam entregar imóveis em condições perfeitas. Realizamos checklist completo, correções necessárias e preparação final para vistoria do cliente.',
      benefits: [
        'Checklist técnico completo de 150+ itens',
        'Correção de todas as pendências identificadas',
        'Limpeza profunda pré-entrega',
        'Documentação fotográfica completa',
        'Acompanhamento na vistoria do cliente',
      ],
      differentials: [
        'Experiência com grandes construtoras',
        'Equipe dedicada para cada projeto',
        'Cumprimento rigoroso de prazos',
        'Suporte pós-entrega',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Serviços de Finalização de Obra - Finaliza Obra</title>
        <meta
          name="description"
          content="Conheça nossos serviços especializados: limpeza técnica, correção de imperfeições, revisão hidráulica e elétrica, vedação e entrega técnica para construtoras."
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
              <span className="text-[#0A2540] font-medium">Serviços</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
                Serviços de Finalização de Obra
              </h1>
              <p className="text-xl text-gray-600">
                Soluções completas e especializadas para deixar sua obra impecável e pronta para uso. Qualidade, pontualidade e profissionalismo em cada detalhe.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-[#F2F4F7]">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 items-center bg-white rounded-lg shadow-lg overflow-hidden`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 p-8">
                    <div className="text-[#2BB673] mb-4">{service.icon}</div>
                    <h2 className="text-3xl font-bold text-[#0A2540] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-[#0A2540] mb-3">
                        O que está incluído:
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <CheckCircle className="w-5 h-5 text-[#2BB673] mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Differentials */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-[#0A2540] mb-3">
                        Nossos diferenciais:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.differentials.map((diff, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#2BB673]/10 text-[#2BB673] rounded-full text-sm font-medium"
                          >
                            {diff}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="bg-[#2BB673] hover:bg-[#25a063] text-white"
                    >
                      Solicitar Orçamento
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0A2540] text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Precisa de mais de um serviço?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Oferecemos pacotes personalizados com condições especiais para múltiplos serviços.
              </p>
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-[#2BB673] hover:bg-[#25a063] text-white text-lg px-8 py-6"
                size="lg"
              >
                Solicitar Orçamento Personalizado
              </Button>
            </motion.div>
          </div>
        </section>
      </div>

      <QuoteRequestModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};

export default ServicesPage;
