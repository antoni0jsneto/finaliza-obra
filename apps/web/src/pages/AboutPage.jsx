
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Target, Award, Users, Clock, Shield, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Qualidade',
      description: 'Compromisso com a excelência em cada detalhe do nosso trabalho.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Confiabilidade',
      description: 'Transparência e honestidade em todas as nossas relações.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Profissionalismo',
      description: 'Equipe qualificada e treinada para oferecer o melhor serviço.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Pontualidade',
      description: 'Respeito aos prazos acordados e compromisso com entregas no prazo.',
    },
  ];

  const differentials = [
    'Equipe técnica especializada e certificada',
    'Equipamentos profissionais de última geração',
    'Produtos de alta qualidade e biodegradáveis',
    'Seguro de responsabilidade civil',
    'Garantia de 90 dias para serviços de reparo',
    'Atendimento personalizado e consultivo',
    'Orçamento detalhado e transparente',
    'Suporte pós-entrega',
  ];

  return (
    <>
      <Helmet>
        <title>Sobre a Finaliza Obra - Quem Somos</title>
        <meta
          name="description"
          content="Conheça a Finaliza Obra: nossa missão, valores e compromisso com a qualidade na finalização de obras. Equipe qualificada e serviços profissionais."
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
              <span className="text-[#0A2540] font-medium">Sobre</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-6">
                Sobre a Finaliza Obra
              </h1>
              <p className="text-xl text-gray-600">
                Somos especialistas em transformar obras em lares prontos para morar. Com anos de experiência no mercado, oferecemos soluções completas de finalização e limpeza pós-obra.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-[#F2F4F7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 md:p-12 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <Target className="w-12 h-12 text-[#2BB673] mr-4" />
                  <h2 className="text-3xl font-bold text-[#0A2540]">Nossa Missão</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nossa missão é proporcionar tranquilidade e satisfação aos nossos clientes, entregando obras finalizadas com o mais alto padrão de qualidade. Acreditamos que cada detalhe importa e trabalhamos incansavelmente para garantir que seu imóvel esteja impecável e pronto para ser habitado ou comercializado.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
                Nossos Valores
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Princípios que guiam nosso trabalho e relacionamento com clientes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2BB673]/10 text-[#2BB673] rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentials Section */}
        <section className="py-16 bg-[#F2F4F7]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
                Nossos Diferenciais
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                O que nos torna a melhor escolha para finalizar sua obra
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {differentials.map((differential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                  >
                    <TrendingUp className="w-5 h-5 text-[#2BB673] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{differential}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1572891458752-1fde7b8074b6"
                    alt="Equipe qualificada da Finaliza Obra trabalhando em projeto"
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
                    Equipe Qualificada
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Nossa equipe é formada por profissionais experientes e certificados, com treinamento contínuo nas melhores práticas do mercado. Cada membro passa por rigoroso processo de seleção e capacitação.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Investimos constantemente em treinamento e atualização técnica para garantir que nossos serviços estejam sempre alinhados com as mais modernas técnicas e tecnologias do setor.
                  </p>
                  <p className="text-lg text-gray-700">
                    Todos os nossos profissionais são uniformizados, identificados e seguem rigorosos protocolos de segurança e qualidade.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-16 bg-[#0A2540] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Compromisso com Qualidade e Prazos
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Entendemos a importância de cumprir prazos e entregar trabalhos com a qualidade esperada. Por isso, estabelecemos processos rigorosos de controle de qualidade e gestão de projetos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-[#2BB673] mb-2">98%</div>
                  <p className="text-gray-300">Taxa de satisfação dos clientes</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2BB673] mb-2">100%</div>
                  <p className="text-gray-300">Cumprimento de prazos acordados</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2BB673] mb-2">500+</div>
                  <p className="text-gray-300">Obras finalizadas com sucesso</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
