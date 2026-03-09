import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle,
  ClipboardCheck,
  Wrench,
  FileCheck,
  Home,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import QuoteRequestModal from "@/components/QuoteRequestModal";

const HomePage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Limpeza pós-obra pesada",
      description:
        "Remoção completa de resíduos, poeira e sujeira de construção.",
      benefits: [
        "Equipamentos profissionais",
        "Produtos especializados",
        "Equipe treinada",
      ],
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Revisão de acabamentos",
      description:
        "Inspeção detalhada e correção de imperfeições em pintura e acabamentos.",
      benefits: [
        "Olhar técnico especializado",
        "Correções precisas",
        "Garantia de qualidade",
      ],
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Pequenos reparos",
      description:
        "Ajustes finais em instalações hidráulicas, elétricas e estruturais.",
      benefits: [
        "Profissionais qualificados",
        "Rapidez na execução",
        "Materiais de qualidade",
      ],
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Checklist técnico final",
      description:
        "Verificação completa de todos os sistemas e acabamentos da obra.",
      benefits: [
        "Relatório detalhado",
        "Identificação de pendências",
        "Documentação completa",
      ],
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Preparação para entrega de imóvel",
      description:
        "Deixamos seu imóvel impecável e pronto para ocupação ou venda.",
      benefits: [
        "Limpeza profunda",
        "Organização completa",
        "Pronto para usar",
      ],
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Visita técnica",
      description:
        "Agendamos uma visita para avaliar o imóvel e entender suas necessidades.",
    },
    {
      number: "02",
      title: "Orçamento detalhado",
      description:
        "Apresentamos um orçamento completo e transparente, sem surpresas.",
    },
    {
      number: "03",
      title: "Execução",
      description:
        "Nossa equipe realiza todos os serviços com qualidade e pontualidade.",
    },
    {
      number: "04",
      title: "Entrega revisada",
      description:
        "Fazemos uma vistoria final para garantir que tudo está perfeito.",
    },
  ];

  const faqs = [
    {
      question: "Quanto tempo leva para finalizar uma obra?",
      answer:
        "O prazo varia de acordo com o tamanho e complexidade do imóvel. Em média, imóveis de até 100m² levam de 3 a 5 dias úteis. Imóveis maiores podem levar de 7 a 10 dias. Fornecemos um cronograma detalhado no orçamento.",
    },
    {
      question: "Vocês oferecem garantia dos serviços?",
      answer:
        "Sim! Oferecemos garantia de 90 dias para todos os serviços de reparo e acabamento. Para limpeza, garantimos a qualidade do serviço e refazemos qualquer ponto que não atenda aos padrões acordados.",
    },
    {
      question: "Como funciona o orçamento?",
      answer:
        "Realizamos uma visita técnica gratuita para avaliar o imóvel. Após a visita, enviamos um orçamento detalhado em até 24 horas, discriminando todos os serviços e valores. Não cobramos taxa de visita.",
    },
    {
      question: "Quais materiais e equipamentos vocês utilizam?",
      answer:
        "Utilizamos apenas produtos profissionais de alta qualidade e equipamentos modernos. Todos os materiais de limpeza são biodegradáveis e seguros. Para reparos, trabalhamos com marcas reconhecidas no mercado.",
    },
    {
      question: "Atendem obras comerciais também?",
      answer:
        "Sim! Atendemos tanto obras residenciais quanto comerciais. Temos experiência com escritórios, lojas, consultórios e outros estabelecimentos comerciais.",
    },
    {
      question: "É necessário estar presente durante o serviço?",
      answer:
        "Não é obrigatório, mas recomendamos que alguém esteja presente no início e no final do serviço. Caso não seja possível, podemos combinar outras formas de acesso e comunicação.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Finaliza Obra - Serviços de Finalização e Limpeza Pós-Obra
        </title>
        <meta
          name="description"
          content="Serviços completos de limpeza técnica, revisão e finalização pós-obra. Sua obra pronta para usar, sem dor de cabeça. Orçamento gratuito."
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center h-screen overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1543520957-79092490ef66"
              alt="Obra finalizada com acabamento impecável"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/90 to-[#0A2540]/70" />
          </div>

          {/* Content */}
          <div className="container relative z-10 px-4 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
                Sua obra pronta para morar.
                <br />
                Sem dor de cabeça.
              </h1>
              <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-200 md:text-2xl">
                Serviços completos de limpeza técnica, revisão e finalização
                pós-obra.
              </p>
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-[#2BB673] hover:bg-[#25a063] text-white text-lg px-8 py-6 rounded-lg shadow-lg"
                size="lg"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-[#F2F4F7]">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
                Nossos Serviços
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Soluções completas para deixar sua obra impecável e pronta para
                uso
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-xl"
                >
                  <div className="text-[#2BB673] mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 text-[#2BB673] mr-2 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white md:py-24">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
                Como Funciona
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Processo simples e transparente do início ao fim
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-[#2BB673] text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#0A2540] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-[#F2F4F7]">
          <div className="container px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
                Perguntas Frequentes
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600">
                Tire suas dúvidas sobre nossos serviços
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="overflow-hidden bg-white rounded-lg shadow-md"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex items-center justify-between w-full px-6 py-4 text-left transition-colors hover:bg-gray-50"
                  >
                    <span className="text-lg font-semibold text-[#0A2540]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#2BB673] transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-[#0A2540] text-white">
          <div className="container px-4 mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                Pronto para finalizar sua obra?
              </h2>
              <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
                Solicite um orçamento gratuito e sem compromisso. Nossa equipe
                entrará em contato em até 24 horas.
              </p>
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-[#2BB673] hover:bg-[#25a063] text-white text-lg px-8 py-6 rounded-lg shadow-lg"
                size="lg"
              >
                Solicitar Orçamento Agora
                <ArrowRight className="ml-2" />
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

export default HomePage;
