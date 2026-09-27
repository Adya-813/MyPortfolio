import { Award, Trophy, BadgeCheck, Users } from "lucide-react";

const achievements = [
  {
    icon: BadgeCheck,
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    detail: "OCI AI Foundations Associate · 2025",
  },
  {
    icon: BadgeCheck,
    title: "SAP ABAP Backend Developer",
    detail: "SAP-ABAP, Fiori & RAP Certification",
  },
  {
    icon: Trophy,
    title: "Flipkart Grid 7.0 — Semi-Finalist",
    detail: "National technology challenge by Flipkart",
  },
  {
    icon: Award,
    title: "Cisco Networking Academy",
    detail:
      "Introduction to Modern AI, Data Science, Apply AI, CCNA (ITN, SRWE, ENSA)",
  },
  {
    icon: Users,
    title: "NIC Odisha Winter Internship",
    detail: "SCI Location Tracking PWA Project",
  },
  {
    icon: Users,
    title: "GDSC Volunteer",
    detail: "Mentored peers and supported coding events",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certifications & Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Milestones that{" "}
            <span className="font-serif italic font-normal text-white">
              define the path.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Cloud, SAP, networking, and competitive tech achievements along the
            way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
