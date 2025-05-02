
import { FileText, ShieldAlert, PieChart } from 'lucide-react';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section className="section-padding bg-gray-50" id="features">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-heading-lg mb-4">Por que usar o <span className="gradient-text">useBein</span>?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Nossa plataforma otimiza o processo de faturamento da sua clínica ou consultório
            com ferramentas inteligentes desenvolvidas especificamente para a área da saúde.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          <FeatureCard 
            icon={FileText}
            title="Automação TISS"
            description="Gere guias TISS automaticamente com base nos atendimentos realizados, evitando erros e economizando tempo."
          />
          
          <FeatureCard 
            icon={ShieldAlert}
            title="Anti-Glosa"
            description="Sistema inteligente de prevenção de glosas que identifica possíveis problemas antes do envio às operadoras."
            iconBackground="bg-gradient-to-r from-bein-purple to-bein-purple-dark"
          />
          
          <FeatureCard 
            icon={PieChart}
            title="Dashboards"
            description="Visualize o desempenho financeiro com dashboards customizados que mostram indicadores relevantes para sua gestão."
            iconBackground="bg-gradient-to-r from-bein-cyan to-bein-purple"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
