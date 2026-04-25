import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, subtitle, children }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, hsl(var(--accent)/0.6), transparent 40%), radial-gradient(circle at 80% 60%, hsl(190 80% 50%/0.4), transparent 50%)" }} />
      <div className="relative container-px mx-auto max-w-7xl py-20 md:py-28">
        {eyebrow && <span className="eyebrow text-accent">{eyebrow}</span>}
        <h1 className="heading-xl mt-4 max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80 leading-relaxed">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
};

export default PageHero;
