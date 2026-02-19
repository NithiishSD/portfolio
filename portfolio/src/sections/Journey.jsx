import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Code, Users, Award } from 'lucide-react';

const Journey = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timeline = [
    {
      year: 'June 2024',
      title: 'Started M.Sc Software Systems',
      description: 'Began my journey at PSG College of Technology, diving deep into software systems and computational sciences.',
      icon: Calendar,
      color: 'bg-gold-500',
    },
    {
      year: 'October 2024',
      title: 'First C Project',
      description: 'Built Astroid Breaker Game - my first semester C package, mastering game logic and low-level programming.',
      icon: Code,
      color: 'bg-gold-500',
    },
    {
      year: 'February2025',
      title: 'LifeSync System',
      description: 'Developed organ transplant management system in C++, solving real-world healthcare challenges with structured programming.',
      icon: Award,
      color: 'bg-gold-500',
    },
    {
      year: 'March 2025',
      title: 'AI & Python Exploration',
      description: 'Created Sign Language Translator, exploring computer vision and machine learning with Python.',
      icon: Code,
      color: 'bg-gold-500',
    },
    {
      year: 'June 2025',
      title: 'Coding Club Leadership',
      description: 'Became active member of Coding Club, organized various technical events and workshops.',
      icon: Users,
      color: 'bg-gold-500',
    },
    {
      year: 'October 2025',
      title: 'Frontend Mastery',
      description: 'Built responsive Image Gallery with modern JavaScript, focusing on clean UI/UX and dynamic rendering.',
      icon: Code,
      color: 'bg-gold-600',
    },
    {
      year: 'March 2026',
      title: 'National Event Organizer',
      description: 'Currently undertaking organization of a national technical event, scaling leadership and project management skills.',
      icon: Award,
      color: 'bg-gold-600',
    },
    {
      year: ' Present ',
      title: 'Full-Stack Development',
      description: 'Working on multiple full-stack projects, mastering React, node js,express js and database integration.',
      icon: Code,
      color: 'bg-gold-600',
    },
  ];

  return (
    <section id="journey" className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <h2 className="section-title text-center">My Journey</h2>
          <p className="text-center font-body text-lg text-ink-600 mb-16 max-w-2xl mx-auto">
            Learning by building, improving by consistency
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold-500/30 transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-row`}
                  >
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-16 md:pl-0`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="paper-card p-6 hover:shadow-xl transition-all duration-300"
                      >
                        <div className={`flex items-center space-x-2 mb-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                          <span className="font-serif text-2xl font-bold text-gold-600">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-ink-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="font-body text-ink-600 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Icon */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                      <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-parchment-50 shadow-lg border-4 border-parchment-100`}>
                        <Icon size={20} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="paper-card p-8 max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl font-bold text-gold-600 mb-4">
                What's Next?
              </h3>
              <p className="font-body text-lg text-ink-700 leading-relaxed">
                Continuing to build, learn, and contribute to meaningful projects. Focused on
                mastering full-stack development, contributing to open source, and creating
                solutions that make a real impact.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
