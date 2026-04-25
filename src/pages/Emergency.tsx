import { Button } from "@/components/ui/button";
import { Phone, Clock, ShieldCheck, AlertTriangle, CheckCircle2, MapPin } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/Header";

const Emergency = () => {
  return (
    <>
      {/* Big urgent hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-emergency/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-accent/25 blur-3xl" />
        <div className="relative container-px mx-auto max-w-7xl py-16 md:py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-emergency px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" /> 24 / 7 Available Now
          </span>
          <h1 className="heading-xl mt-5 max-w-3xl">Emergency plumber, anywhere in Auckland.</h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
            Burst pipes, floods, no hot water, blocked drains — call us right now. A licensed plumber will be on the way within the hour.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="emergency" size="xl">
              <a href={PHONE_HREF}><Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}</a>
            </Button>
            <Button asChild variant="navOutline" size="xl">
              <a href="#what-we-cover">What we cover</a>
            </Button>
          </div>
          <div className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl">
            {[
              { icon: Clock, label: "60-min response" },
              { icon: MapPin, label: "Auckland-wide" },
              { icon: ShieldCheck, label: "Licensed & insured" },
            ].map((i) => (
              <div key={i.label} className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                <i.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">{i.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="what-we-cover" className="section container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow">What we cover</span>
          <h2 className="heading-lg mt-3 text-primary">Common plumbing emergencies, sorted fast.</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Burst & leaking pipes", d: "We isolate the leak, contain the damage and repair on the spot." },
            { t: "No hot water", d: "Same-day diagnosis and repair or replacement of cylinders and gas systems." },
            { t: "Blocked toilets & drains", d: "Hydro-jetting and CCTV to clear blockages and prevent reoccurrence." },
            { t: "Overflowing or flooding", d: "Stop the water, dry the area and repair before damage spreads." },
            { t: "Gas leaks (with gasfitter)", d: "Make safe immediately and arrange certified repair work." },
            { t: "Storm & roof leaks", d: "Temporary sealing and full roof plumbing repair." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-emergency/10 text-emergency">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg text-primary">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-px mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <span className="eyebrow">While you wait</span>
              <h2 className="heading-md mt-3 text-primary">A few quick steps that can help.</h2>
              <ul className="mt-6 space-y-3 text-foreground/85">
                {[
                  "Turn off the main water supply at the toby.",
                  "Switch off power to wet areas at the mains if it's safe.",
                  "Move valuables and electronics away from water.",
                  "Open a tap at the lowest point to drain remaining pressure.",
                  "Take a few photos for insurance — we'll handle the rest.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" /><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-8 shadow-elevated flex flex-col justify-center">
              <h3 className="heading-md">Don't wait. Call now.</h3>
              <p className="mt-3 text-primary-foreground/80">Our after-hours team is on standby across Auckland tonight.</p>
              <Button asChild variant="emergency" size="xl" className="mt-6 self-start">
                <a href={PHONE_HREF}><Phone className="h-5 w-5" /> {PHONE_DISPLAY}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Emergency;
