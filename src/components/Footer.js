import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Star, Users } from 'lucide-react';

const Footer = () => {
  const skoolLink = "https://www.skool.com/cashflowlatinos";

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Parallax effect

  return (
    <footer className="bg-black border-t border-green-500/20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </motion.div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-3xl p-12 mb-8">
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Tu Momento Es Ahora
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Miles de latinos ya están transformando su vida financiera. No dejes que el tiempo 
              pase y te arrepientas de no haber tomado acción hoy. Tu futuro financiero te está esperando.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href={skoolLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-xl hover:shadow-green-500/25 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5" />
                Unirme a CashFlow Latino
              </motion.a>
            </div>

            <div className="flex items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="font-medium">+2,500 Miembros Activos</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 font-medium">4.9/5 Satisfacción</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-green-500/20 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://utfs.io/f/2vMRHqOYUHc0YpnrUdHLxysUGcrlHAMdQ0Ba6XFOPIJgkW1b" // Nuevo logo
                alt="CashFlow Latino" 
                className="h-8 w-auto"
              />
              <span className="text-white font-bold text-lg">CashFlow Latino</span>
            </div>

            <div className="text-gray-400 text-center md:text-right">
              <p className="mb-2">© 2025 CashFlow Latino. Todos los derechos reservados.</p>
              <p className="text-sm">Transformando vidas financieras en toda Latinoamérica</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;