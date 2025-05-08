
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Como o useBein pode ajudar a reduzir glosas?',
    answer: 'O sistema analisa preventivamente cada guia TISS através de algoritmos inteligentes que identificam inconsistências e erros comuns que geram glosas, como códigos incompatíveis, regras de autorização não seguidas ou documentação incompleta, permitindo correção antes do envio às operadoras.',
  },
  {
    question: 'É necessário instalar algum software para usar o useBein?',
    answer: 'Não, o useBein é uma solução 100% web (SaaS), acessível de qualquer dispositivo com internet. Basta criar sua conta e começar a usar imediatamente, sem necessidade de instalação ou configurações complexas de infraestrutura.',
  },
  {
    question: 'O useBein se integra com outros sistemas de gestão médica?',
    answer: 'Sim, o useBein possui API para integração com os principais sistemas de prontuário eletrônico e agendamento do mercado. Nossa equipe técnica oferece suporte completo para configuração das integrações, facilitando a transição e minimizando impactos operacionais.',
  }, 
  {
    question: 'O Lipe me ama?',
    answer: 'Sim', 
  },
  {
    question: 'Como funciona a segurança dos dados no useBein?',
    answer: 'Utilizamos criptografia de ponta a ponta, servidores com certificação de segurança internacional e conformidade total com a LGPD. Seus dados são armazenados com redundância e backups automatizados, garantindo segurança e confidencialidade em todas as operações.',
  },
  {
    question: 'É possível utilizar o sistema em múltiplas unidades de atendimento?',
    answer: 'Sim, nossos planos Professional e Enterprise permitem configurar múltiplas unidades de atendimento, com controle de acesso por usuário e relatórios consolidados ou segmentados por unidade, ideal para redes de clínicas e hospitais com várias filiais.',
  },
  {
    question: 'Qual o tempo médio para implementação do useBein?',
    answer: 'A implementação básica leva em média 1 semana, incluindo configuração inicial, importação de dados e treinamento da equipe. Para cenários mais complexos com múltiplas integrações, o prazo médio é de 3 semanas, sempre com acompanhamento dedicado da nossa equipe.',
  },
];

const FAQ = () => {
  return (
    <section className="section-padding mesh-bg" id="help">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-heading-lg mb-4">Perguntas <span className="gradient-text">Frequentes</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Encontre respostas para as dúvidas mais comuns sobre o useBein
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-100 rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium py-4 text-gray-800 hover:text-bein-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
