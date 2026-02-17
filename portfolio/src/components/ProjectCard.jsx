import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { useState } from 'react';

const ProjectCard = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -10, rotateY: 2 }}
        className="paper-card p-6 cursor-pointer group relative overflow-hidden"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/10 group-hover:to-gold-600/10 transition-all duration-300 rounded-lg"></div>

        <div className="relative z-10">
          {/* Icon/Emoji */}
          <div className="text-4xl mb-4">{project.emoji}</div>

          {/* Title */}
          <h3 className="font-serif text-2xl font-bold text-ink-900 mb-3 group-hover:text-gold-600 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="font-body text-ink-600 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-parchment-200 text-ink-700 text-sm font-sans rounded-full border border-gold-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links & Stars */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center space-x-1 text-ink-700 hover:text-gold-500 transition-colors"
              >
                <Github size={18} />
                <span className="text-sm font-sans">Code</span>
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center space-x-1 text-ink-700 hover:text-gold-500 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm font-sans">Live</span>
                </a>
              )}
            </div>
            <div className="flex items-center space-x-1 text-gold-500">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-sans">{project.stars}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-parchment-50 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-ink-700 hover:text-gold-500 text-2xl"
            >
              ×
            </button>

            <div className="text-5xl mb-4">{project.emoji}</div>
            <h3 className="font-serif text-3xl font-bold text-ink-900 mb-4">
              {project.title}
            </h3>

            <p className="font-body text-ink-700 mb-6 leading-relaxed">
              {project.fullDescription || project.description}
            </p>

            <div className="mb-6">
              <h4 className="font-serif text-xl font-bold text-ink-800 mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gold-500/10 text-gold-600 font-sans rounded-lg border-2 border-gold-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-ink-800 text-parchment-50 rounded-lg hover:bg-ink-700 transition-colors"
              >
                <Github size={20} />
                <span>View Code</span>
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gold-500 text-parchment-50 rounded-lg hover:bg-gold-600 transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
