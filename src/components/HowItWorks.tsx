
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Integração',
    description: 'Conecte sua agenda médica e sistema de prontuários ao useBein com nossa API simples e segura.',
  },
  {
    number: '02',
    title: 'Configuração',
    description: 'Configure suas regras de faturamento, convênios e procedimentos com nossa interface intuitiva.',
  },
  {
    number: '03',
    title: 'Automatização',
    description: 'Gere guias automaticamente, acompanhe o status de pagamentos e analise seus resultados em tempo real.',
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding mesh-bg">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-heading-lg mb-4">Como <span className="gradient-text">Funciona</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Comece a usar o useBein em apenas três passos simples e transforme seu processo de faturamento
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(100%_-_16px)] w-full h-[2px] bg-gradient-bein"></div>
              )}
              
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 border border-gray-100">
                  <span className="text-4xl font-bold bg-gradient-bein text-transparent bg-clip-text">{step.number}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
