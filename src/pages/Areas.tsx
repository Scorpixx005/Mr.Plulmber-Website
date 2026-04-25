import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CTASection from "@/components/site/CTASection";
import { areas } from "@/data/site";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/Header";

const Areas = () => {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Plumbing across Auckland — wherever you are."
        subtitle="Our local teams cover the whole region, from the Hibiscus Coast to South Auckland. Same friendly service, every suburb."
      >
        <Button asChild variant="hero" size="lg"><Link to="/contact">Check availability</Link></Button>
        <Button asChild variant="navOutline" size="lg"><a href={PHONE_HREF}>Call {PHONE_DISPLAY}</a></Button>
      </PageHero>

      <section className="section container-px mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2">
          {areas.map((a) => (
            <article key={a.group} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-accent text-white shadow-glow">
                  <MapPin className="h-5 w-5" />
                </div>
                <h2 className="font-display font-bold text-2xl text-primary">{a.group}</h2>
              </div>
              <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                {a.suburbs.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-foreground/80">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" /> {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link to="/contact">Book in {a.group}</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Areas;
