import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "./Header";
import ctaImage from "@/assets/cta-pipes.jpg";

const CTASection = () => {
  return (
    <section className="section container-px mx-auto max-w-7xl">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero text-primary-foreground shadow-elevated">
        <img
          src={ctaImage}
          alt="Plumber working on chrome pipes"
          loading="lazy"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative grid gap-8 p-8 md:p-14 lg:grid-cols-[1.4fr_1fr] items-center">
          <div>
            <span className="eyebrow text-accent">Ready when you are</span>
            <h2 className="heading-lg mt-3">Auckland's plumbers, on call today.</h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl">
              Whether it's a dripping tap or a burst pipe at 2am, our licensed team is one call away. Free quotes, upfront pricing, guaranteed work.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild variant="white" size="xl">
              <a href={PHONE_HREF}><Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
