
import React from 'react';
import { Check, X } from 'lucide-react';

type PlanFeature = {
  name: string;
  starter: boolean;
  professional: boolean;
  enterprise: boolean;
};

const features: PlanFeature[] = [
  { 
    name: 'Geração de guias TISS', 
    starter: true, 
    professional: true, 
    enterprise: true 
  },
  { 
    name: 'Validação Anti-Glosa básica', 
    starter: true, 
    professional: true, 
    enterprise: true 
  },
  { 
    name: 'Dashboard simples', 
    starter: true, 
    professional: true, 
    enterprise: true 
  },
  { 
    name: 'Suporte por email', 
    starter: true, 
    professional: true, 
    enterprise: true 
  },
  { 
    name: 'Validação Anti-Glosa avançada', 
    starter: false, 
    professional: true, 
    enterprise: true 
  },
  { 
    name: 'Dashboards customizados', 
    starter: false, 
    professional: true, 
    enterprise: true 
  },
  { 
    name: 'Integrações via API', 
    starter: false, 
    professional: true, 
    enterprise: true 
  },
  { 
    name: 'Suporte prioritário', 
    starter: false, 
    professional: false, 
    enterprise: true 
  },
  { 
    name: 'Personalização branding', 
    starter: false, 
    professional: false, 
    enterprise: true 
  },
  { 
    name: 'Gerente de conta dedicado', 
    starter: false, 
    professional: false, 
    enterprise: true 
  },
];

const PricingTable = () => {
  return (
    <section className="section-padding" id="pricing">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-heading-lg mb-4">Planos e <span className="gradient-text">Preços</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Escolha o plano que melhor se adapta às necessidades do seu negócio
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-gray-600 mb-4">Para profissionais autônomos e pequenas clínicas</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">R$199</span>
                <span className="text-gray-500">/mês</span>
              </div>
              
              <button className="btn-outline w-full">Comece agora</button>
            </div>
            
            <div className="border-t border-gray-100">
              <ul className="p-6 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {feature.starter ? (
                      <Check size={18} className="text-green-500 mr-2" />
                    ) : (
                      <X size={18} className="text-gray-300 mr-2" />
                    )}
                    <span className={feature.starter ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Professional Plan */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-bein-purple transform scale-105 z-10">
            <div className="bg-gradient-bein text-white p-2 text-center text-sm font-medium">
              Mais popular
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Professional</h3>
              <p className="text-gray-600 mb-4">Para clínicas em crescimento</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">R$399</span>
                <span className="text-gray-500">/mês</span>
              </div>
              
              <button className="btn-primary w-full">Comece agora</button>
            </div>
            
            <div className="border-t border-gray-100">
              <ul className="p-6 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {feature.professional ? (
                      <Check size={18} className="text-green-500 mr-2" />
                    ) : (
                      <X size={18} className="text-gray-300 mr-2" />
                    )}
                    <span className={feature.professional ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-4">Para hospitais e redes de clínicas</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">R$799</span>
                <span className="text-gray-500">/mês</span>
              </div>
              
              <button className="btn-outline w-full">Entre em contato</button>
            </div>
            
            <div className="border-t border-gray-100">
              <ul className="p-6 space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {feature.enterprise ? (
                      <Check size={18} className="text-green-500 mr-2" />
                    ) : (
                      <X size={18} className="text-gray-300 mr-2" />
                    )}
                    <span className={feature.enterprise ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
