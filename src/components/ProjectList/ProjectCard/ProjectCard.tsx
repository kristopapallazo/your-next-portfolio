import { FC, memo /* useCallback, useEffect, useState */ } from "react";
import { Github, ExternalLink } from "lucide-react";
import Card from "../../UI/Card";
import { Project } from "../../../types";
import Button from "../../UI/Button";
// import mql from "@microlink/mql";

const ProjectCard: FC<{ project: Project }> = memo(({ project }) => {
  // const { liveUrl } = project;

  // const [preview, setPreview] = useState<string | null>(null);

  // const onFetchPreview = useCallback(async () => {
  //   try {
  //     if (!liveUrl) throw new Error("Live URL is not provided!");

  //     const res = await mql(liveUrl, { screenshot: true });
  //     console.log("res", res);
  //     if (
  //       !res ||
  //       res.statusCode !== 200 ||
  //       !res.data ||
  //       !res?.data?.screenshot?.url
  //     ) {
  //       throw new Error("Failed to fetch preview image!");
  //     }
  //     //   const blob = await res.blob();
  //     const preview = res?.data?.screenshot?.url;
  //     if (!preview) throw new Error("Preview image URL is not available!");
  //     setPreview(preview);
  //   } catch (error) {
  //     console.error("Error fetching project preview:", error);
  //     setPreview(null);
  //   }
  // }, [liveUrl]);

  // useEffect(() => {
  //   onFetchPreview();
  // }, [onFetchPreview]);

  return (
    <Card className="h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img
          src={project?.image}
          // src={preview || project?.image}
          //   src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          {project.featured && (
            <span className="px-2 py-1 bg-russian-green-900/30 text-russian-green-300 text-xs rounded-full border border-russian-green-700">
              Featured
            </span>
          )}
        </div>

        <p className="text-gray-300 mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-russian-green-900/30 text-russian-green-300 text-sm rounded-full border border-russian-green-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              icon={Github}
              href={project.githubUrl}
              className="flex-1"
            >
              Code
            </Button>
          )}
          {project.liveUrl && (
            <Button
              size="sm"
              icon={ExternalLink}
              href={project.liveUrl}
              className="flex-1"
            >
              Demo
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
});

export default ProjectCard;
