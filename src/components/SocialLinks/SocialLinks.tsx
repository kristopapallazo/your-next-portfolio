import { FC } from "react";
import { socialLinks } from "../../data/portfolio";
// import { Github, Linkedin, Mail, Gitlab } from "lucide-react";

const SocialLinks: FC<{ type?: number }> = ({ type = 1 }) => {
  let className;
  let iconClassName;

  switch (type) {
    case 1: {
      className =
        "p-3 bg-dark-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-dark-700";
      iconClassName =
        "w-6 h-6 text-gray-300 hover:text-russian-green-400 transition-colors";
      break;
    }

    case 2: {
      className =
        "p-3 bg-dark-800 rounded-full hover:bg-russian-green-600 transition-colors group";
      iconClassName = "w-5 h-5 group-hover:scale-110 transition-transform";
      break;
    }

    default: {
      className =
        "p-3 bg-dark-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-dark-700";
      iconClassName =
        "w-6 h-6 text-gray-300 hover:text-russian-green-400 transition-colors";
      break;
    }
  }

  const items = socialLinks.map(({ icon: Icon, href, label }) => (
    <a
      key={label}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
    >
      <Icon className={iconClassName} />
    </a>
  ));

  return <div className="flex space-x-6">{items}</div>;
};

export default SocialLinks;
