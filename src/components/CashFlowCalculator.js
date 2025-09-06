import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calculator, AlertTriangle, CheckCircle2, AlertCircle } from 'lucide-react';

const CashFlowCalculator = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [showResult, setShowResult] = useState(false);

  const skoolLink = "https://www.skool.com/cashflowlatinos";

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // Parallax effect

  const calculateCashFlow = () => {
    const incomeValue = parseFloat(income) || 0;
    const expensesValue = parseFloat(expenses) || 0;
    return incomeValue - expensesValue;
  };

  const getCashFlowStatus = (cashFlow) => {
    if (cashFlow > 1000) { // Cashflow excelente
      return {
        status: 'excellent',
        color: 'text-green-400',
        bgColor: 'bg-green-500/10',
        borderColor: 'border-green-500/30',
        icon: CheckCircle2,
        title: '¡Excelente!',
        message: 'Tu cashflow está en muy buena forma. ¡Sigue así!',
        recommendation: '¡Felicidades! Tienes un gran potencial. Aprende a multiplicar ese excedente y a invertir como un experto en nuestra comunidad.'
      };
    } else if (cashFlow > 0) { // Cashflow positivo pero con margen de mejora
      return {
        status: 'good',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-500/10',
        borderColor: 'border-yellow-500/30',
        icon: AlertCircle, // Icono de alerta para "Cuidado"
        title: '¡Cuidado!', // Título para "Cuidado"
        message: 'Tienes cashflow positivo, pero hay espacio para optimizar y crecer.',
        recommendation: 'No dejes tu dinero estancado. Únete a CashFlow Latino y descubre cómo maximizar tus ingresos y reducir gastos innecesarios.'
      };
    } else if (cashFlow === 0) { // Cashflow neutro
      return {
        status: 'neutral',
        color: 'text-gray-400',
        bgColor: 'bg-gray-500/10',
        borderColor: 'border-gray-500/30',
        icon: AlertTriangle, // Icono de alerta para "Alerta"
        title: '¡Alerta!', // Título para "Alerta"
        message: 'Tu cashflow está en cero. Es crucial tomar acción para evitar problemas futuros.',
        recommendation: 'Estás en el límite. Es momento de aprender a generar ingresos adicionales y controlar tus gastos. En CashFlow Latino te mostramos el camino.'
      };
    } else { // Cashflow negativo
      return {
        status: 'poor',
        color: 'text-red-400',
        bgColor: 'bg-red-500/10',
        borderColor: 'border-red-500/30',
        icon: AlertTriangle,
        title: '¡Atención!',
        message: 'Tu cashflow es negativo. Estás gastando más de lo que ganas.',
        recommendation: 'Necesitas un cambio urgente. En CashFlow Latino te daremos las herramientas y el apoyo para revertir esta situación y construir un futuro financiero sólido.'
      };
    }
  };

  const handleCalculate = () => {
    if (income && expenses) {
      setShowResult(true);
    }
  };

  const cashFlow = calculateCashFlow();
  const status = getCashFlowStatus(cashFlow);
  const StatusIcon = status.icon;

  return (
    <section id="calculadora" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-yellow-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 animate-blob animation-delay-6000"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
            <Calculator className="w-4 h-4 text-green-400" />
            <span className="text-green-400 font-medium">Herramienta Gratuita</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Calculadora de CashFlow
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre el estado real de tus finanzas en segundos. Esta herramienta te dará 
            una visión clara de tu situación financiera actual.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-3xl p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Ingresa Tus Datos</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Ingresos Mensuales ($)
                  </label>
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    placeholder="Ej: 5000"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Gastos Mensuales ($)
                  </label>
                  <input
                    type="number"
                    value={expenses}
                    onChange={(e) => setExpenses(e.target.value)}
                    placeholder="Ej: 3500"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors duration-300"
                  />
                </div>

                <motion.button
                  onClick={handleCalculate}
                  disabled={!income || !expenses}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-black px-6 py-4 rounded-xl font-bold text-lg hover:from-green-400 hover:to-green-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-green-500/25"
                  whileHover={{ scale: income && expenses ? 1.02 : 1 }}
                  whileTap={{ scale: income && expenses ? 0.98 : 1 }}
                >
                  Calcular Mi CashFlow
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-3xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Tu Resultado</h3>
              
              {showResult ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`${status.bgColor} ${status.borderColor} border rounded-2xl p-6 mb-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      <StatusIcon className={`w-8 h-8 ${status.color}`} />
                      <div>
                        <h4 className={`text-xl font-bold ${status.color}`}>{status.title}</h4>
                        <p className="text-gray-300">{status.message}</p>
                      </div>
                    </div>
                    
                    <div className="text-center py-4">
                      <p className="text-gray-400 mb-2">Tu CashFlow Mensual:</p>
                      <p className={`text-4xl font-bold ${status.color}`}>
                        ${cashFlow.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 rounded-xl p-4 mb-6">
                    <p className="text-gray-300 mb-3">
                      <strong>Recomendación:</strong> {status.recommendation}
                    </p>
                  </div>

                  <motion.a
                    href={skoolLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-black px-6 py-4 rounded-xl font-bold text-center hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Mejorar Mi CashFlow Ahora
                  </motion.a>
                </motion.div>
              ) : (
                <div className="flex items-center justify-center h-64 text-gray-500">
                  <div className="text-center">
                    <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Ingresa tus datos para ver tu resultado</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashFlowCalculator;