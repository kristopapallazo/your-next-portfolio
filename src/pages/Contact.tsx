import { FC, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import { socialLinks } from "../data/portfolio";

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's
            discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send me a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 text-white rounded-lg focus:ring-2 focus:ring-russian-green-500 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 text-white rounded-lg focus:ring-2 focus:ring-russian-green-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 text-white rounded-lg focus:ring-2 focus:ring-russian-green-500 focus:border-transparent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 text-white rounded-lg focus:ring-2 focus:ring-russian-green-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                <Button type="submit" size="lg" icon={Send} className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {socialLinks.map((info) => (
                  <div key={info.label} className="flex items-center">
                    <div className="w-12 h-12 bg-russian-green-900/30 rounded-lg flex items-center justify-center mr-4 border border-russian-green-700">
                      <info.icon className="w-6 h-6 text-russian-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{info.label}</h3>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-gray-300 hover:text-russian-green-400 transition-colors"
                        >
                          {info.href}
                        </a>
                      ) : (
                        <span className="text-gray-300">{info.href}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>
              <div className="flex space-x-4">
                <SocialLinks />
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Let's Work Together
              </h2>
              <p className="text-gray-300 mb-4">
                I'm currently available for freelance projects and full-time
                opportunities. Whether you have a project in mind or just want
                to chat about technology, I'd love to hear from you.
              </p>
              <p className="text-gray-300">
                Response time: Usually within 24 hours
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
