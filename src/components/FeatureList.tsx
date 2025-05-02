
import React from 'react';
import { Check, FileCheck, Calendar, Activity, Clock, UserPlus, ArrowUpDown, Lock } from 'lucide-react';

const features = [
  {
    icon: FileCheck,
    title: 'Geração automática de guias TISS',
    description: 'Crie guias TISS completas a partir dos dados do atendimento',
  },
  {
    icon: Calendar,
    title: 'Integração com agendas',
    description: 'Conecte com sistemas de agendamento e prontuários eletrônicos',
  },
  {
    icon: Activity,
    title: 'Monitoramento em tempo real',
    description: 'Acompanhe o status de pagamentos e pendências',
  },
  {
    icon: Clock,
    title: 'Histórico completo',
    description: 'Acesse todo o histórico de faturamentos e glosas',
  },
  {
    icon: UserPlus,
    title: 'Multi-usuários',
    description: 'Gerencie permissões para sua equipe de faturamento',
  },
  {
    icon: ArrowUpDown,
    title: 'Conciliação financeira',
    description: 'Compare valores faturados com valores recebidos',
  },
  {
    icon: Check,
    title: 'Validador de regras',
    description: 'Verifique automaticamente as regras de cada convênio',
  },
  {
    icon: Lock,
    title: 'Segurança total',
    description: 'Proteção de dados em conformidade com a LGPD',
  },
];

const FeatureList = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-heading-lg mb-4">Funcionalidades <span className="gradient-text">Principais</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Descubra todas as ferramentas disponíveis para otimizar seu faturamento
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={index} 
                className="flex items-start p-5 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="mr-4 text-bein-purple">
                  <Icon size={22} />
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureList;
