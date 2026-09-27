import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Focus",
    description:
      "Frontend with React & Tailwind, plus backend APIs with Node.js, Express, and MongoDB.",
  },
  {
    icon: Rocket,
    title: "Real-Time Systems",
    description:
      "Building scalable apps with WebSockets, Redis caching, and Socket.IO.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "GDSC volunteer — mentoring peers and supporting coding events.",
  },
  {
    icon: Lightbulb,
    title: "AI & Cloud",
    description:
      "Working knowledge of PyTorch, TensorFlow, RAG, and Oracle Cloud AI Foundations.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building scalable apps,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one feature at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Anthropic-certified in Claude Code & Model Context Protocol (MCP). Computer Science undergraduate (CGPA: 8.5) who builds and ships production-ready systems end-to-end — full-stack platforms, RAG-based LLM pipelines, and AI-assisted automation workflows — using modern AI coding assistants to move fast without sacrificing code quality. Comfortable working independently, translating ambiguous requirements into scalable, secure, user-centric solutions, and picking up new tools and protocols on the fly.
              </p>
              <p>
                Currently pursuing B.Tech in Computer Science & Engineering at
                Veer Surendra Sai University of Technology (VSSUT), Burla, with
                a CGPA of 8.5. My coursework spans DSA, OS, DBMS, OOP (C++),
                Computer Networks, AI, and Machine Learning.
              </p>
              <p>
                Based in Berhampur, Odisha — I'm always exploring new
                technologies across web, cloud, SAP ABAP, and cybersecurity.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I focus on building products that are fast, secure, and
                delightful — from real-time chat platforms to interview tools
                that streamline collaboration."
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
