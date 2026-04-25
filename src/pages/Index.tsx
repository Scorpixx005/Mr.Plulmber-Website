import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Clock, MapPin, Star, CheckCircle2, PhoneCall, ClipboardList, Wrench, Sparkles, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/hero-plumber.jpg";
import { services, areas, reviews, trustPoints, faqs } from "@/data/site";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/Header";
import CTASection from "@/components/site/CTASection";

const Index = () => {
  const featuredServices = services.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 15% 20%, hsl(var(--accent)/0.5), transparent 45%), radial-gradient(circle at 85% 80%, hsl(195 90% 50%/0.35), transparent 50%)" }} />
        <div className="relative container-px mx-auto max-w-7xl pt-16 md:pt-24 pb-16 md:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
            <div className="animate-fade-up">
              <span className="eyebrow text-accent">Auckland's trusted plumbers</span>
              <h1 className="heading-xl mt-4">
                Plumbing problems, <span className="text-accent">solved fast.</span>
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/85 max-w-xl leading-relaxed">
                From dripping taps to 2am emergencies, our licensed Auckland team turns up on time, fixes it right, and leaves your place cleaner than they found it.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="navOutline" size="xl">
                  <a href={PHONE_HREF}><Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}</a>
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-foreground/80">
                <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> 60-min response</span>
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Auckland-wide</span>
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> Master Plumbers</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-white/10">
                <img
                  src={heroImg}
                  alt="Mr. Plumber technician repairing a kitchen sink"
                  width={1600}
                  height={1200}
                  className="w-full h-[420px] md:h-[520px] object-cover"
                />
              </div>
              <div className="hidden md:flex absolute -bottom-6 -left-6 bg-background text-foreground rounded-2xl shadow-elevated p-5 gap-4 items-center max-w-xs">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                </div>
                <div className="text-sm">
                  <div className="font-bold text-primary">4.9 / 5 rating</div>
                  <div className="text-muted-foreground text-xs">From 380+ Auckland customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-soft">
        <div className="container-px mx-auto max-w-7xl py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {trustPoints.map((p) => (
              <div key={p} className="flex items-center gap-2 text-sm font-medium text-primary/80">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">Our services</span>
            <h2 className="heading-lg mt-3 text-primary">Everything plumbing, under one trusted roof.</h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/services">View all services <ChevronRight className="h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                to="/services"
                className="group relative rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-soft text-accent group-hover:bg-gradient-accent group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-bold text-xl text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-soft">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Why Mr. Plumber</span>
            <h2 className="heading-lg mt-3 text-primary">Plumbing you can actually rely on.</h2>
            <p className="mt-4 text-muted-foreground">No surprise fees. No no-shows. Just skilled local plumbers who treat your home like their own.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, title: "Always on time", text: "We turn up when we say we will — and call ahead so you're never waiting around." },
              { icon: ShieldCheck, title: "Fully guaranteed", text: "Workmanship guarantee on every job. If it's not right, we make it right." },
              { icon: Wrench, title: "Skilled & certified", text: "Licensed Master Plumbers with the experience to fix it once, properly." },
              { icon: Sparkles, title: "Clean & tidy", text: "Drop sheets, shoe covers, and a tidy site. We leave your home better than we found it." },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl bg-card p-6 shadow-card">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent text-white">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg text-primary">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY */}
      <section className="section container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-14">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-emergency/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-emergency px-3 py-1 text-xs font-bold uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" /> 24 / 7 Emergency
              </span>
              <h2 className="heading-lg mt-4">Burst pipe? Flood? We're on the way.</h2>
              <p className="mt-4 text-primary-foreground/80 max-w-xl">
                Plumbing emergencies don't wait for business hours. Our after-hours team responds across Auckland day and night — fast, calm and ready to fix.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                {["Burst & leaking pipes","Hot water failures","Blocked toilets & drains","Flooding & water damage"].map((i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Button asChild variant="emergency" size="xl">
                <a href={PHONE_HREF}><PhoneCall className="h-5 w-5" /> Emergency: {PHONE_DISPLAY}</a>
              </Button>
              <Button asChild variant="navOutline" size="xl">
                <Link to="/emergency">Emergency details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-soft">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Simple process</span>
            <h2 className="heading-lg mt-3 text-primary">Sorted in 4 easy steps.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: PhoneCall, title: "Get in touch", text: "Call or send a quote request — we respond fast." },
              { icon: ClipboardList, title: "We assess", text: "Diagnose the issue and give a clear, upfront price." },
              { icon: Wrench, title: "We fix it", text: "Skilled hands, quality parts, tidy work site." },
              { icon: Sparkles, title: "Peace of mind", text: "Backed by our workmanship guarantee." },
            ].map((s, i) => (
              <div key={s.title} className="relative rounded-2xl bg-card p-6 shadow-card">
                <span className="absolute -top-3 -right-3 grid h-10 w-10 place-items-center rounded-full bg-gradient-accent text-white font-bold text-sm shadow-glow">{i + 1}</span>
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-soft text-accent">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section container-px mx-auto max-w-7xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Reviews</span>
          <h2 className="heading-lg mt-3 text-primary">Loved by Auckland homes & businesses.</h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}
            </div>
            <span className="font-semibold text-primary">4.9 / 5</span>
            <span className="text-muted-foreground text-sm">· 380+ verified reviews</span>
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0,6).map((r) => (
            <article key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-0.5 mb-4">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <p className="text-foreground/85 leading-relaxed">"{r.text}"</p>
              <div className="mt-5 pt-4 border-t border-border">
                <div className="font-semibold text-primary text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.area}, Auckland</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* AREAS */}
      <section className="section bg-soft">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="eyebrow">Coverage</span>
              <h2 className="heading-lg mt-3 text-primary">Serving every corner of Auckland.</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/areas">All service areas <ChevronRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <div key={a.group} className="rounded-2xl bg-card p-6 shadow-card">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-soft text-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-primary">{a.group}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {a.suburbs.slice(0,5).join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section container-px mx-auto max-w-3xl">
        <div className="text-center">
          <span className="eyebrow">Questions</span>
          <h2 className="heading-lg mt-3 text-primary">Frequently asked.</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CTASection />
    </>
  );
};

export default Index;
