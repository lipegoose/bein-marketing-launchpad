
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "O useBein transformou nosso processo de faturamento. Reduzimos as glosas em 67% e o tempo gasto no processo em mais de 80%.",
    author: "Dra. Maria Silva",
    role: "Diretora Clínica",
    company: "Clínica Saúde Integral",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    content: "Antes levávamos dias para fazer o fechamento mensal, agora é tudo automatizado e muito mais preciso. A visibilidade financeira que temos agora é impressionante.",
    author: "Dr. Pedro Costa",
    role: "Coordenador Médico",
    company: "Centro Médico Bem-Estar",
    avatar: "https://i.pravatar.cc/150?img=60",
  },
  {
    id: 3,
    content: "Como administradora, posso dizer que o useBein trouxe organização e segurança ao nosso faturamento. A equipe de suporte é excepcional.",
    author: "Ana Paula Santos",
    role: "Administradora",
    company: "Hospital São Lucas",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const goToPrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  useEffect(() => {
    intervalRef.current = setInterval(goToNext, 6000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
    
    // Reset the interval when manually changing
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(goToNext, 6000);
  };

  return (
    <section className="section-padding bg-gradient-bein text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-heading-lg mb-4">O que nossos clientes dizem</h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Histórias reais de profissionais da saúde que transformaram seus processos de faturamento
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className={`flex transition-transform duration-500 ease-out`} 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-2xl">
                    <div className="mb-6 text-white/90">
                      <Quote size={36} />
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl mb-8">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-white/80 text-sm">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-sm transition-colors"
            onClick={goToPrevious}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-sm transition-colors"
            onClick={goToNext}
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
