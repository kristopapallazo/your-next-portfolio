// import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users } from "lucide-react";
import Card from "../components/UI/Card";
import { skills } from "../data/portfolio";

const About: React.FC = () => {
  const skillCategories = {
    frontend: skills.filter((skill) => skill.category === "frontend"),
    backend: skills.filter((skill) => skill.category === "backend"),
    tools: skills.filter((skill) => skill.category === "tools"),
    design: skills.filter((skill) => skill.category === "design"),
  };

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "I believe in writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description:
        "Great user experience starts with thoughtful design and attention to detail.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing for speed and efficiency to deliver the best user experience.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively with teams to bring ideas to life and solve problems.",
    },
  ];

  return (
    <div className="py-20 bg-dark-900 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            I'm a passionate full-stack developer with over 5 years of
            experience creating digital solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Profile"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">My Journey</h2>
            <p className="text-gray-300 leading-relaxed">
              My journey into web development started during my computer science
              studies, where I discovered my passion for creating interactive
              experiences. Since then, I've worked with startups and established
              companies, helping them build scalable web applications.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in React, TypeScript, and Node.js, but I'm always
              eager to learn new technologies. When I'm not coding, you can find
              me contributing to open source projects, writing technical
              articles, or exploring the latest in web development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I believe in the power of technology to solve real-world problems
              and create meaningful experiences for users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-dark-800 py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Drives Me
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These are the principles that guide my work and approach to
              development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="w-16 h-16 bg-russian-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-russian-green-700">
                    <value.icon className="w-8 h-8 text-russian-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Here's a breakdown of my technical skills and proficiency levels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(skillCategories).map(
              ([category, categorySkills], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 capitalize">
                      {category}
                    </h3>
                    <div className="space-y-4">
                      {categorySkills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium text-white">
                              {skill.name}
                            </span>
                            <span className="text-gray-300">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-dark-700 rounded-full h-2">
                            <motion.div
                              className="bg-russian-green-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
