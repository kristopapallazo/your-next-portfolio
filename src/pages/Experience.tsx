import { FC } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";
import Card from "../components/UI/Card";
import { experiences } from "../data/portfolio";

const Experience: FC = () => {
  const achievements = [
    {
      title: "Led team of 5 developers",
      description:
        "Successfully managed and mentored a team of junior developers",
    },
    {
      title: "100k+ users served",
      description: "Built applications that serve over 100,000 active users",
    },
    {
      title: "50+ projects delivered",
      description: "Completed over 50 projects across various industries",
    },
    {
      title: "99.9% uptime achieved",
      description: "Maintained high availability for production applications",
    },
  ];

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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Experience</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my
            career as a developer.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <Award className="w-8 h-8 text-russian-green-400 mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Professional Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-russian-green-700 hidden md:block" />

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 md:ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-20 top-6 w-4 h-4 bg-russian-green-500 rounded-full border-4 border-dark-900 shadow-lg hidden md:block" />

                <Card className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {experience.position}
                      </h3>
                      <h4 className="text-xl text-russian-green-400 font-semibold mb-2">
                        {experience.company}
                      </h4>
                    </div>
                    <div className="flex items-center text-gray-300 mb-2 md:mb-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-medium">{experience.duration}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-russian-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-white mb-3">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-700 text-gray-300 text-sm rounded-full border border-dark-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Education
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Bachelor of Science in Computer Science
                  </h3>
                  <h4 className="text-lg text-russian-green-400 font-semibold">
                    University of Technology
                  </h4>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>2015 - 2019</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Graduated with honors, focusing on software engineering,
                algorithms, and web development. Active member of the Computer
                Science Society and participated in multiple hackathons.
              </p>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>San Francisco, CA</span>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
