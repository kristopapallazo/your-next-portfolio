import { FC } from "react";
import { motion } from "framer-motion";
import { Project } from "../../types";
import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectsList: FC<{ filteredProjects: Project[] }> = ({
  filteredProjects,
}) => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            layout
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-300 text-lg">
            No projects found with the selected filter.
          </p>
        </motion.div>
      )}
    </>
  );
};

export default ProjectsList;
