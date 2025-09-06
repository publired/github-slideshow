import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Star, Rocket, Shield, Heart, Settings } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Comunidad Exclusiva',
      description: 'Conecta con emprendedores exitosos de toda Latinoamérica que comparten tus mismas metas financieras.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Star,
      title: 'Mentores Expertos',
      description: 'Acceso directo a mentores que han construido imperios financieros y están dispuestos a compartir sus secretos.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Rocket,
      title: 'Estrategias Probadas',
      description: 'Métodos y técnicas que han generado millones en cashflow positivo para nuestros miembros.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Soporte 24/7',
      description: 'Nunca estarás solo. Nuestra comunidad está activa las 24 horas para apoyarte en cada paso.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Networking Real',
      description: 'Forma alianzas estratégicas, encuentra socios de negocio y crea conexiones que cambiarán tu vida.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: Settings,
      title: 'Herramientas Premium',
      description: 'Acceso a calculadoras avanzadas, plantillas, cursos exclusivos y recursos que valen miles de dólares.',
      color: 'from-gray-500 to-slate-500'
    }
  ];

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Parallax effect

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
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
            <span className="text-green-400 font-medium">Beneficios Exclusivos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            ¿Por Qué Elegir CashFlow Latino?
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            No es solo una comunidad, es tu trampolín hacia la libertad financiera. 
            Descubre todo lo que obtienes al unirte a nosotros.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-3xl p-8 hover:border-green-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>

                <motion.div
                  className="mt-6 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://skool.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-xl hover:shadow-green-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket className="w-5 h-5" />
            Acceder a Todos los Beneficios
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;