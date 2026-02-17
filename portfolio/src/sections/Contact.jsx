import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nithiishdanasekar@gmail.com',
      href: 'mailto:nithiishdanasekar@gmail.com',
      color: 'hover:text-gold-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'nithiish-s-d',
      href: 'https://www.linkedin.com/in/nithiish-s-d',
      color: 'hover:text-gold-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@NithiishSD',
      href: 'https://github.com/NithiishSD',
      color: 'hover:text-gold-500',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-parchment-200/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <h2 className="section-title text-center">Get In Touch</h2>
          <p className="text-center font-body text-lg text-ink-600 mb-12 max-w-2xl mx-auto">
            Whether you want to collaborate on a project, discuss opportunities, or just say hello
            — I'd love to hear from you!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="paper-card p-6 text-center hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                      <Icon className={`text-gold-600 group-hover:text-parchment-50 transition-colors`} size={28} />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ink-900 mb-2">
                    {link.label}
                  </h3>
                  <p className="font-body text-ink-600 group-hover:text-gold-600 transition-colors">
                    {link.value}
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* Direct Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="mailto:nithiishdanasekar@gmail.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gold-500 text-parchment-50 font-sans font-semibold rounded-lg hover:bg-gold-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <Send size={20} />
              <span>Send me an email</span>
            </a>
          </motion.div>

          {/* Footer Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="font-serif text-xl italic text-ink-600">
              "Learning by building, improving by consistency"
            </p>
            <div className="mt-4 w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
