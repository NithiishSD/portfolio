import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-parchment-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Photo & Bio */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Profile Photo */}
              <div className="flex justify-center md:justify-start mb-6">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="relative"
                >
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden border-4 border-gold-500/30 shadow-2xl">
                    <img
                      src="https://avatars.githubusercontent.com/u/178805412?v=4"
                      alt="Nithiish S D"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative corner */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gold-500 rounded-full opacity-20"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gold-600 rounded-full opacity-20"></div>
                </motion.div>
              </div>
              <p className="font-body text-lg leading-relaxed text-ink-700">
                I'm a <span className="gold-accent font-semibold">Full Stack Developer</span> and{' '}
                <span className="gold-accent font-semibold">problem solver</span> who focuses on
                writing clean, maintainable code and building practical, real-world applications.
              </p>
              <p className="font-body text-lg leading-relaxed text-ink-700">
                I believe in understanding fundamentals deeply and improving consistently through
                hands-on projects. My approach values{' '}
                <span className="italic">clarity, structure, and scalability</span> over shortcuts.
              </p>
              <p className="font-body text-lg leading-relaxed text-ink-700">
                As an active member of the Coding Club, I've organized various technical events and
                am currently undertaking a national technical event. I'm also a competitive athlete
                with a focus on physical fitness, and actively solve problems on{' '}
                <span className="gold-accent font-semibold">LeetCode</span> and{' '}
                <span className="gold-accent font-semibold">HackerRank</span> to enhance my coding proficiency.
              </p>
            </motion.div>

            {/* Right: Education Card */}
            <motion.div variants={itemVariants}>
              <div className="paper-card p-8 space-y-6">
                <h3 className="font-serif text-2xl font-bold text-ink-900 mb-6 border-b-2 border-gold-500/30 pb-3">
                  Education
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="text-gold-500 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-sans font-semibold text-lg text-ink-800">
                        M.Sc Software Systems
                      </h4>
                      <p className="font-body text-ink-600">
                        PSG College of Technology
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Calendar className="text-gold-500 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-body text-ink-700">
                        2nd Year | Graduating 2029
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="text-gold-500 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-body text-ink-700">
                        Peelamedu, Coimbatore, Tamil Nadu
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-gold-500/20">
                  <p className="font-body text-sm text-ink-600 italic">
                    "Learning by building, improving by consistency"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
