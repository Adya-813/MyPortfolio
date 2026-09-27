import {
  ArrowUpRight,
  Github,
  MessageSquare,
  Sparkles,
  Video,
  Users,
  Mic,
  Monitor,
} from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "EchoWave — AI Real-time Chat",
    description:
      "Integrated Google Gemini API for smart task suggestions (+35% productivity). Used Redis caching and WebSockets to optimize message delivery by 40%, with a secure Socket.IO auth layer that cut unauthorized access by 70%. Features file tree navigation, embedded code editor, and live preview.",
    tags: ["React", "Gemini API", "Redis", "Socket.IO", "WebSockets"],
    link: "https://github.com/Adya-813/Echowave",
    github: "https://github.com/Adya-813/Echowave",
    preview: "echowave",
  },
  {
    title: "PlanOva — Video Interview Platform",
    description:
      "Built with Clerk auth, Convex database, and Stream video calls — reducing development time by 30%. Added screen sharing, meeting recording, and scheduling to improve evaluation efficiency by 45% and cut scheduling conflicts by 25%. Responsive UI with Tailwind CSS.",
    tags: ["React", "Clerk", "Convex", "Stream", "Tailwind CSS"],
    link: "https://github.com/Adya-813/PlanOva",
    github: "https://github.com/Adya-813/PlanOva",
    preview: "planova",
  },
];

const EchoWavePreview = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-[#0f1f1e] via-[#132a28] to-[#0a1615] p-4 md:p-6">
    <div className="h-full rounded-xl border border-primary/20 bg-background/40 backdrop-blur-sm overflow-hidden flex flex-col shadow-2xl">
      {/* App header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-primary/15 bg-primary/5">
        <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">EchoWave</p>
          <p className="text-[10px] text-primary flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Gemini AI · Live
          </p>
        </div>
        <div className="ml-auto flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400/80" />
          <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
          <span className="w-2 h-2 rounded-full bg-green-400/80" />
        </div>
      </div>

      {/* Chat body */}
      <div className="flex-1 p-4 space-y-3 overflow-hidden">
        <div className="flex gap-2 max-w-[85%]">
          <div className="w-6 h-6 rounded-full bg-primary/30 shrink-0 mt-1" />
          <div className="rounded-2xl rounded-tl-sm bg-surface px-3 py-2 text-xs text-muted-foreground border border-border/40">
            Can you suggest tasks for the sprint based on our backlog?
          </div>
        </div>
        <div className="flex gap-2 max-w-[90%] ml-auto flex-row-reverse">
          <div className="w-6 h-6 rounded-full bg-primary/50 shrink-0 mt-1 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-primary-foreground" />
          </div>
          <div className="rounded-2xl rounded-tr-sm bg-primary/20 px-3 py-2 text-xs text-foreground border border-primary/30">
            Here are 3 prioritized tasks with Redis-cached suggestions…
          </div>
        </div>
        <div className="flex gap-2 max-w-[70%]">
          <div className="w-6 h-6 rounded-full bg-primary/30 shrink-0 mt-1" />
          <div className="rounded-2xl rounded-tl-sm bg-surface px-3 py-2 text-xs text-muted-foreground border border-border/40">
            Perfect — open the code editor preview.
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="px-4 py-3 border-t border-primary/15">
        <div className="h-9 rounded-full bg-surface border border-border/50 flex items-center px-4 text-xs text-muted-foreground/60">
          Message EchoWave…
        </div>
      </div>
    </div>
  </div>
);

const PlanOvaPreview = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-[#0c1220] via-[#121a2e] to-[#0a0f1a] p-4 md:p-6">
    <div className="h-full rounded-xl border border-sky-500/20 bg-background/40 backdrop-blur-sm overflow-hidden flex flex-col shadow-2xl">
      {/* Call header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-sky-500/15 bg-sky-500/5">
        <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center">
          <Video className="w-4 h-4 text-sky-400" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">PlanOva Interview</p>
          <p className="text-[10px] text-sky-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Recording · Screen share on
          </p>
        </div>
      </div>

      {/* Video grid */}
      <div className="flex-1 p-3 grid grid-cols-2 gap-2">
        {[
          { name: "Interviewer", accent: "from-sky-600/40 to-sky-900/60" },
          { name: "Candidate", accent: "from-teal-600/40 to-teal-900/60" },
          { name: "Panel", accent: "from-indigo-600/40 to-indigo-900/60" },
          { name: "You", accent: "from-primary/40 to-emerald-900/60" },
        ].map((tile) => (
          <div
            key={tile.name}
            className={`relative rounded-lg bg-gradient-to-br ${tile.accent} border border-white/10 flex items-center justify-center overflow-hidden`}
          >
            <Users className="w-8 h-8 text-white/30" />
            <span className="absolute bottom-1.5 left-1.5 text-[10px] font-medium text-white/90 bg-black/40 px-1.5 py-0.5 rounded">
              {tile.name}
            </span>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3 px-4 py-3 border-t border-sky-500/15">
        <div className="w-9 h-9 rounded-full bg-surface border border-border/50 flex items-center justify-center">
          <Mic className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="w-9 h-9 rounded-full bg-surface border border-border/50 flex items-center justify-center">
          <Video className="w-4 h-4 text-muted-foreground" />
        </div>
        <div className="w-9 h-9 rounded-full bg-surface border border-border/50 flex items-center justify-center">
          <Monitor className="w-4 h-4 text-sky-400" />
        </div>
        <div className="w-9 h-9 rounded-full bg-red-500/90 flex items-center justify-center">
          <span className="w-3 h-3 rounded-sm bg-white" />
        </div>
      </div>
    </div>
  </div>
);

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Real-time collaboration tools and interview platforms built with
            modern web and AI technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                {project.preview === "echowave" ? (
                  <EchoWavePreview />
                ) : (
                  <PlanOvaPreview />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-40 pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/40 backdrop-blur-[2px]">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/Adya-813"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
