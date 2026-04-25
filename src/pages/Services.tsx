import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CTASection from "@/components/site/CTASection";
import { services } from "@/data/site";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/Header";

const Services = () => {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Plumbing services for every Auckland home & business."
        subtitle="From a quick fix to a full renovation, our licensed team delivers quality work, fair pricing and zero hassle."
      >
        <Button asChild variant="hero" size="lg"><Link to="/contact">Get a Free Quote</Link></Button>
        <Button asChild variant="navOutline" size="lg"><a href={PHONE_HREF}>Call {PHONE_DISPLAY}</a></Button>
      </PageHero>

      <section className="section container-px mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article key={s.slug} className="rounded-2xl border border-border bg-card p-7 md:p-8 shadow-card hover:shadow-elevated transition-shadow">
                <div className="flex items-start gap-5">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-accent text-white shrink-0 shadow-glow">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display font-bold text-2xl text-primary">{s.title}</h2>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{s.description}</p>
                    <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> {b}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <Button asChild variant="outline">
                        <Link to="/contact">Request a quote <ArrowRight className="h-4 w-4" /></Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Services;
