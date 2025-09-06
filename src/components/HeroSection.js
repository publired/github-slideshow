import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Users, Star } from 'lucide-react';

const HeroSection = () => {
  const skoolLink = "https://www.skool.com/cashflowlatinos";

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Parallax effect

  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center pt-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Star className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-medium">Comunidad #1 en Finanzas</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-green-400 to-green-500 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Domina Tu
              <br />
              <span className="text-green-400">CashFlow</span>
              <br />
              Como Un Pro
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Únete a la comunidad más exclusiva de emprendedores latinos que están 
              transformando su vida financiera. Aprende estrategias reales, conecta 
              con mentores exitosos y construye el futuro que mereces.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href={skoolLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-xl hover:shadow-green-500/25 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5" />
                Comenzar Ahora
              </motion.a>

              <motion.a
                href="#calculadora"
                className="border-2 border-green-500 text-green-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-500 hover:text-black transition-all duration-300 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Calcular Mi CashFlow
              </motion.a>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-8 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="font-medium">+2,500 Miembros</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 font-medium">4.9/5</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Resultados Reales</h3>
                <p className="text-gray-400">De nuestra comunidad</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Ingresos Promedio</span>
                    <span className="text-green-400 font-bold text-xl">+340%</span>
                  </div>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">CashFlow Positivo</span>
                    <span className="text-green-400 font-bold text-xl">89%</span>
                  </div>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Tiempo Promedio</span>
                    <span className="text-green-400 font-bold text-xl">3 meses</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-green-400/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;