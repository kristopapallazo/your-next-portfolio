import React, { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { projects } from "../data/portfolio";
import ProjectsList from "../components/ProjectList/ProjectLIst";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  );

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.technologies.some((tech) =>
            tech.toLowerCase().includes(filter.toLowerCase())
          )
        );

  return (
    <div className="py-20 bg-dark-900 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            development. Each project represents a unique challenge and learning
            experience.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Filter className="w-5 h-5 text-gray-300 mr-2" />
            <span className="text-gray-300 font-medium">
              Filter by technology:
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-russian-green-600 text-white"
                  : "bg-dark-800 text-gray-300 hover:bg-dark-700 border border-dark-600"
              }`}
            >
              All
            </button>
            {allTechnologies.slice(0, 8).map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === tech
                    ? "bg-russian-green-600 text-white"
                    : "bg-dark-800 text-gray-300 hover:bg-dark-700 border border-dark-600"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <ProjectsList filteredProjects={filteredProjects} />
      </div>
    </div>
  );
};

export default Projects;
