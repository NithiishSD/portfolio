import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React'],
      color: 'from-gold-400 to-gold-500',
    },
    {
      title: 'Backend',
      skills: ['Flask', 'MySQL', 'Oracle'],
      color: 'from-gold-500 to-gold-600',
    },
    {
      title: 'Languages',
      skills: ['C', 'C++', 'Python', 'JavaScript'],
      color: 'from-gold-400 to-gold-500',
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Linux', 'Windows'],
      color: 'from-gold-500 to-gold-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title text-center">
            Skills & Technologies
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="paper-card p-6 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className={`font-serif text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                      <span className="font-body text-ink-700">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="font-body text-lg text-ink-600 italic">
              Constantly learning and expanding my toolkit to solve real-world problems
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
