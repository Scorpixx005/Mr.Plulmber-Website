import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Heart, Award, Users } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CTASection from "@/components/site/CTASection";
import vanImg from "@/assets/about-van.jpg";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/Header";

const About = () => {
  return (
    <>
      <PageHero
        eyebrow="About Mr. Plumber"
        title="A local Auckland team you can actually trust."
        subtitle="We started Mr. Plumber to bring back the kind of service that's hard to find — honest, skilled, and on time. Today we look after thousands of Auckland homes and businesses."
      >
        <Button asChild variant="hero" size="lg"><Link to="/contact">Work with us</Link></Button>
        <Button asChild variant="navOutline" size="lg"><a href={PHONE_HREF}>Call {PHONE_DISPLAY}</a></Button>
      </PageHero>

      <section className="section container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-elevated">
            <img src={vanImg} alt="Mr. Plumber service van" loading="lazy" width={1400} height={1000} className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="heading-lg mt-3 text-primary">Built on craftsmanship, run by real people.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Mr. Plumber was founded by a small crew of Auckland plumbers tired of seeing rushed work, hidden fees and missed appointments. We wanted to build a company where every job is done properly — and every customer is left genuinely happy.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today we're a tight-knit team of licensed plumbers, gasfitters and drainlayers covering the whole Auckland region. Whether it's a single tap or a 40-property maintenance contract, the standard never changes.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="font-display text-3xl font-extrabold text-accent">12+</div>
                <div className="text-sm text-muted-foreground mt-1">Years experience</div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-accent">15,000+</div>
                <div className="text-sm text-muted-foreground mt-1">Jobs completed</div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-accent">4.9★</div>
                <div className="text-sm text-muted-foreground mt-1">Average rating</div>
              </div>
              <div>
                <div className="font-display text-3xl font-extrabold text-accent">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Workmanship guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">What we stand for</span>
            <h2 className="heading-lg mt-3 text-primary">The values behind every job.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, t: "Do it once, do it right", d: "No shortcuts. Quality parts and proper methods, every time." },
              { icon: Heart, t: "Treat every home with care", d: "Drop sheets, shoe covers, and full clean-up — like it's our own." },
              { icon: Award, t: "Fair, upfront pricing", d: "You'll know the price before we start. No surprises, ever." },
              { icon: Users, t: "Local, friendly, reliable", d: "Real plumbers from Auckland, looking after Auckland." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl bg-card p-6 shadow-card">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-accent text-white">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg text-primary">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
