import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import { projects } from "../data/portfolio";
import SocialLinks from "../components/SocialLinks/SocialLinks";
// import CartoonImage from "../components/CartoonImage/CartoonImage";

const Home: React.FC = () => {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 2);

  const technologies = [
    "React",
    "TypeScript",
    "Redux",
    "Node.js",
    "React Router",
    "Tailwind CSS",
    // "Python",
    // "PostgreSQL",
    // "AWS",
  ];

  const onResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "My_Resume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-dark-900 via-dark-800 to-russian-green-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-russian-green-400 to-russian-green-600 bg-clip-text text-transparent">
                  John Doe
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Developer dedicated to building clean, scalable, and
                user-focused web applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button size="lg" icon={ArrowRight}>
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={Download}
                onClick={onResumeDownload}
              >
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-6"
            >
              <SocialLinks type={2} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              passion for development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-russian-green-900/30 text-russian-green-300 text-sm rounded-full border border-russian-green-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          href={project.githubUrl}
                        >
                          GitHub
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" href={project.liveUrl}>
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button size="lg" icon={ArrowRight}>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* <CartoonImage /> */}

      {/* Skills Preview */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies I Love
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm passionate about modern web technologies and always learning
              new tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="bg-dark-700 p-6 rounded-xl shadow-lg text-center border border-dark-600"
              >
                <div className="w-12 h-12 bg-russian-green-900/30 rounded-lg mx-auto mb-3 flex items-center justify-center border border-russian-green-700">
                  <span className="text-russian-green-400 font-bold text-lg">
                    {tech.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-white">{tech}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
