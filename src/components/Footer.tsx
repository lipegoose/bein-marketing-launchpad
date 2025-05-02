
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10">
          {/* Logo and description */}
          <div className="md:col-span-4">
            <img 
              src="/lovable-uploads/ccf5c56c-1c75-43cc-8b09-7afdd0fb84ac.png" 
              alt="useBein Logo" 
              className="h-10 mb-4" 
            />
            <p className="text-gray-400 mb-6">
              Plataforma de faturamento inteligente para a área da saúde.
              Automatize processos, reduza glosas e maximize seus resultados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-bein-cyan transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-bein-cyan transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-bein-cyan transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-bein-cyan transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Produto</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Preços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Atualizações</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#help" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentação</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Comece agora</h3>
            <button className="btn-primary mb-4">Experimente grátis</button>
            <p className="text-gray-400 text-sm">
              Teste grátis por 14 dias. Sem compromisso.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} useBein. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
