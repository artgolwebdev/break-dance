import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1660404871825-6172f096ebfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGJydXRhbGlzdCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTc4NTY5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Concrete background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-4"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ 
              fontFamily: 'Impact, Arial Black, sans-serif',
              textShadow: '4px 4px 0px #ff6b35, 8px 8px 0px rgba(0,0,0,0.5)',
              letterSpacing: '-0.05em'
            }}
          >
            BREAK
          </motion.h1>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-black mb-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            style={{ 
              fontFamily: 'Impact, Arial Black, sans-serif',
              color: '#ff6b35',
              transform: 'skew(-5deg)',
              textShadow: '2px 2px 0px black'
            }}
          >
            DANCE
          </motion.h2>
          
          <motion.div 
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
          >
            <span className="block bg-white text-black px-4 py-2 transform -skew-x-6 inline-block">
              ריקוד רחוב מאתגר קצבי ומלא אנרגיה
            </span>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Description Section */}
      <section className="py-20 px-4 bg-gray-100 text-black">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none" style={{ 
                fontFamily: 'Impact, Arial Black, sans-serif',
                textShadow: '3px 3px 0px #ff6b35',
                transform: 'skew(-2deg)'
              }}>
                BREAKDANCE
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <motion.p 
                  className="bg-black text-white p-4 transform skew-x-1"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  ריקוד רחוב מאתגר קצבי ומלא אנרגיה, המשלב תנועות ריקוד עם תרגילי אקרובטיקה.
                </motion.p>
                
                <motion.p 
                  className="bg-red-500 text-white p-4 transform -skew-x-1"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  החוג מסייע בפיתוח חוש קצב, יכולת משחק, ביטחון עצמי ועמידה מול קהל, תוך חיזוק שרירי הגוף.
                </motion.p>
                
                <motion.p 
                  className="bg-orange-500 text-white p-4 transform skew-x-1"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  הברייקדאנס תופס היום מקום מרכזי בתרבות ההיפ הופ, כמו שניתן לראות על במות של כל העולם, תחרויות בין להקות, הופעות, סרטי קולנוע כמו "סטפ אפ", וכו'.
                </motion.p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative overflow-hidden transform rotate-3">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1605450984717-5b2386930f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2RhbmNpbmclMjBzdHJlZXQlMjBkYW5jZSUyMHVyYmFufGVufDF8fHx8MTc1Nzg1Njk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Breakdancer in action"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-red-500 text-white p-4 transform -rotate-6"
                whileHover={{ scale: 1.1, rotate: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="font-black text-xl">ENERGY!</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-6xl md:text-8xl font-black text-center mb-16"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            style={{ 
              fontFamily: 'Impact, Arial Black, sans-serif',
              textShadow: '4px 4px 0px #ff6b35'
            }}
          >
            המדריך
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0, rotate: -5 }}
              whileInView={{ x: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              className="relative"
            >
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1534250399880-716a209574ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGhpcCUyMGhvcCUyMGN1bHR1cmV8ZW58MXx8fHwxNzU3ODU2OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Instructor Artyom"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                <motion.div 
                  className="absolute bottom-4 left-4 bg-orange-500 text-white px-4 py-2 transform -skew-x-12"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <p className="font-black text-xl">ARTYOM</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <motion.h3 
                className="text-4xl font-black mb-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ 
                  fontFamily: 'Impact, Arial Black, sans-serif',
                  color: '#ff6b35',
                  textShadow: '2px 2px 0px black'
                }}
              >
                ארטיום גולובן (ארט.ארטיק)
              </motion.h3>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <motion.p 
                  className="bg-gray-800 p-4 border-l-4 border-red-500"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  ארטיום החל לרקוד בגיל 10 יחד עם קבוצת ברייקדאנס מובילה בסצנת הברייקדאנס העולמית.
                </motion.p>
                
                <motion.p 
                  className="bg-gray-800 p-4 border-l-4 border-orange-500"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  בגיל 14 זכה במקום שני באוקראינה. ב-2006 זכה במקום ראשון בישראל וטס עם להקת הברייקדאנס "אריות ציון" לייצג את ישראל בגרמניה.
                </motion.p>
                
                <motion.p 
                  className="bg-gray-800 p-4 border-l-4 border-yellow-500"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  השתתף בתוכנית הטלוויזיה "הדבר הגדול הבא" והיה חבר בלהקות "ברייקרהוליקס" ו"אנסטופבולז" איתם זכה באליפויות ארציות ובתחרויות בין לאומיות.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competition Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="relative mb-12"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1686729917714-ced212e45227?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVha2RhbmNlJTIwYmF0dGxlJTIwY29tcGV0aXRpb258ZW58MXx8fHwxNzU3ODU2OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Breakdance battle"
              className="w-full h-64 md:h-96 object-cover rounded-none"
            />
            
            <motion.div 
              className="absolute inset-0 bg-black/70 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="text-center">
                <motion.h3 
                  className="text-4xl md:text-6xl font-black text-white mb-4"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  style={{ 
                    fontFamily: 'Impact, Arial Black, sans-serif',
                    textShadow: '3px 3px 0px #ff6b35'
                  }}
                >
                  BATTLE READY
                </motion.h3>
                
                <motion.p 
                  className="text-xl md:text-2xl text-white"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  תחרויות ואליפויות ארציות ובינלאומיות
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Class Details */}
      <section className="py-20 px-4 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-5xl md:text-7xl font-black mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              fontFamily: 'Impact, Arial Black, sans-serif',
              textShadow: '3px 3px 0px #ff6b35',
              transform: 'skew(-2deg)'
            }}
          >
            פרטי השיעורים
          </motion.h2>
          
          <motion.div 
            className="bg-black text-white p-8 transform -skew-x-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <div className="transform skew-x-2">
              <motion.p 
                className="text-2xl md:text-3xl font-black mb-4"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                לילדי כיתות א'-ו'
              </motion.p>
              
              <motion.p 
                className="text-xl mb-4"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                חלוקה לקבוצות גיל
              </motion.p>
              
              <motion.p 
                className="text-lg"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                יום ראשון / מגוונים אלון-הדר
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="mb-12"
          >
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8" style={{ 
              fontFamily: 'Impact, Arial Black, sans-serif',
              textShadow: '4px 4px 0px #ff6b35'
            }}>
              JOIN THE
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-orange-500 mb-8" style={{ 
              fontFamily: 'Impact, Arial Black, sans-serif',
              textShadow: '2px 2px 0px black',
              transform: 'skew(-5deg)'
            }}>
              MOVEMENT
            </h3>
          </motion.div>
          
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.a
              href="https://www.migvanim.com/html5/ProLookup.taf?_ID=49047&did=4455&G=12550&SM="
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.1, 
                rotate: [-1, 1, -1, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="text-2xl md:text-3xl px-12 py-6 bg-red-500 hover:bg-red-600 text-white border-4 border-white transform -skew-x-6 transition-all duration-300 hover:skew-x-6"
                style={{ 
                  fontFamily: 'Impact, Arial Black, sans-serif',
                  textShadow: '2px 2px 0px black',
                  boxShadow: '8px 8px 0px rgba(0,0,0,0.5)'
                }}
              >
                הרשמה לחוג
              </Button>
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {['POWER', 'RHYTHM', 'STYLE', 'BATTLE'].map((word, index) => (
              <motion.div
                key={word}
                className="bg-white text-black p-4 transform rotate-1"
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ rotate: -1, scale: 1.05 }}
              >
                <p className="font-black text-lg">{word}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}