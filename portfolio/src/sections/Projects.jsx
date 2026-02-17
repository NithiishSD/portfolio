import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      emoji: '🤖',
      title: 'SignBridge - Real-Time Sign Language Translator',
      description: 'Real-time sign language translator using MediaPipe and TensorFlow to recognize hand gestures from webcam input.',
      fullDescription: 'Developed a real-time sign language translator using MediaPipe and TensorFlow to recognize hand gestures from webcam input. Built a custom machine learning model integrated with OpenCV for accurate gesture classification, and designed a user-friendly GUI with CustomTkinter for live translation display. Implemented optimization techniques for improved accuracy and performance.',
      tech: ['Python', 'TensorFlow', 'MediaPipe', 'OpenCV', 'CustomTkinter', 'Machine Learning'],
      github: 'https://github.com/NithiishSD/SIGN-LANGUAGE-TRANSLATOR',
      stars: 1,
    },
    {
      emoji: '❤️',
      title: 'LifeSync - Organ Donation Management',
      description: 'Organ donation management system using C++, Qt, and SQL with priority queues for donor-receiver matching.',
      fullDescription: 'Developed an organ donation management system using C++, Qt, and SQL. Implemented priority queues to match donors and receivers based on urgency and compatibility. Used graph-based distance matrices to minimize hospital transfer times. Designed user-friendly donor and receiver interfaces for efficient interaction.',
      tech: ['C++', 'Qt', 'SQL', 'Data Structures', 'Graph Algorithms'],
      github: 'https://github.com/NithiishSD/LifeSync',
      stars: 1,
    },
    {
      emoji: '🎮',
      title: 'Asteroid Breaker Game',
      description: '2D arcade game featuring paddle-ball mechanics, collision detection, and multimedia integration.',
      fullDescription: 'Developed a 2D arcade game featuring paddle-ball mechanics, collision detection, and multimedia integration using C and SDL2 libraries. First semester C package project demonstrating strong problem-solving skills and understanding of game physics.',
      tech: ['C', 'SDL2', 'Game Development', 'Collision Detection'],
      github: 'https://github.com/NithiishSD/astroid-breaker-game',
      stars: 1,
    },
    {
      emoji: '🖼️',
      title: 'Arceus Gallery',
      description: 'Responsive image gallery web app with Unsplash API integration featuring dynamic masonry layout.',
      fullDescription: 'Responsive image gallery web app with Unsplash API integration, featuring dynamic masonry layout, advanced search functionality, interactive modal system with custom animations, and modern glass-morphism UI design. Built with HTML5, CSS3, and JavaScript ES6.',
      tech: ['HTML5', 'CSS3', 'JavaScript ES6', 'Unsplash API', 'Responsive Design'],
      github: 'https://github.com/NithiishSD/image-gallery',
      stars: 1,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-parchment-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          <h2 className="section-title text-center">Featured Projects</h2>
          <p className="text-center font-body text-lg text-ink-600 mb-12 max-w-2xl mx-auto">
            A collection of projects showcasing clean code, problem-solving, and real-world
            applications
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/NithiishSD?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gold-500 text-gold-600 font-sans font-semibold rounded-lg hover:bg-gold-500 hover:text-parchment-50 transition-all"
            >
              <span>View All Repositories</span>
              <span>→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
