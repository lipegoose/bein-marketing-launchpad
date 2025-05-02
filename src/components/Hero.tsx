
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-bg pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-heading-xl font-bold mb-6 leading-tight">
              Faturamento Inteligente
              <span className="gradient-text block"> para Saúde</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Automatize a geração de guias TISS, reduza glosas e tenha total controle sobre seus faturamentos com dashboards inteligentes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center">
                Comece agora 
                <ArrowRight size={18} />
              </button>
              <button className="btn-outline w-full sm:w-auto justify-center">
                Agende uma demo
              </button>
            </div>
          </div>
          
          <div className="lg:ml-auto relative animate-float">
            <div className="relative bg-white p-2 rounded-xl shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-bein"></div>
              <img 
                src="/dashboard-mockup.png" 
                alt="Dashboard useBein" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            
            <div className="absolute -z-10 -right-20 -top-20 w-64 h-64 bg-bein-cyan/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -left-20 -bottom-20 w-64 h-64 bg-bein-purple/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border-2 border-bein-purple/20 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-bein-cyan/20 rounded-full"></div>
    </section>
  );
};

export default Hero;
