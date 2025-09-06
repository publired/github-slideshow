import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, User } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'María González',
      location: 'México',
      role: 'Emprendedora Digital',
      content: 'En 6 meses pasé de tener deudas a generar $8,000 USD mensuales. Las estrategias de CashFlow Latino cambiaron completamente mi vida financiera.',
      rating: 5,
      result: '+$8,000/mes'
    },
    {
      name: 'Carlos Rodríguez',
      location: 'Colombia',
      role: 'Consultor de Negocios',
      content: 'La comunidad es increíble. Los mentores realmente se preocupan por tu éxito. Logré triplicar mis ingresos en menos de un año.',
      rating: 5,
      result: '+300% ingresos'
    },
    {
      name: 'Ana Martínez',
      location: 'Argentina',
      role: 'Inversora',
      content: 'Nunca pensé que podría entender las finanzas tan bien. Ahora manejo múltiples fuentes de ingresos y mi cashflow es completamente positivo.',
      rating: 5,
      result: 'CashFlow +$12K'
    },
    {
      name: 'Luis Fernández',
      location: 'Chile',
      role: 'E-commerce Owner',
      content: 'Las herramientas y el networking que obtuve aquí valen 10 veces más de lo que pagué. Mi negocio creció un 400% este año.',
      rating: 5,
      result: '+400% crecimiento'
    },
    {
      name: 'Isabella Torres',
      location: 'Perú',
      role: 'Coach Financiera',
      content: 'CashFlow Latino no solo mejoró mis finanzas, también me dio las herramientas para ayudar a otros. Ahora tengo mi propia consultoría.',
      rating: 5,
      result: 'Negocio propio'
    },
    {
      name: 'Diego Morales',
      location: 'Ecuador',
      role: 'Trader',
      content: 'La educación financiera que recibí aquí es de nivel mundial. Pasé de novato a trader rentable en 8 meses.',
      rating: 5,
      result: 'Trader rentable'
    }
  ];

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Parallax effect

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-yellow-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-6000"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-medium">Historias de Éxito</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Lo Que Dicen Nuestros Miembros
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resultados reales de personas reales que decidieron tomar control de sus finanzas 
            y transformar su vida para siempre.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-3xl p-8 hover:border-green-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  <p className="text-green-400 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <motion.div
                className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-green-400 font-bold text-lg">{testimonial.result}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6 text-lg">
            ¿Listo para escribir tu propia historia de éxito?
          </p>
          
          <motion.a
            href="https://skool.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-xl hover:shadow-green-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Comenzar Mi Transformación
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;