import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CTASection from "@/components/site/CTASection";
import { reviews } from "@/data/site";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/Header";

const Reviews = () => {
  return (
    <>
      <PageHero
        eyebrow="Customer reviews"
        title="What Auckland says about us."
        subtitle="Over 380 verified reviews and a 4.9-star average. Here's what our customers say in their own words."
      >
        <Button asChild variant="hero" size="lg"><Link to="/contact">Get a Free Quote</Link></Button>
        <Button asChild variant="navOutline" size="lg"><a href={PHONE_HREF}>Call {PHONE_DISPLAY}</a></Button>
      </PageHero>

      <section className="section container-px mx-auto max-w-7xl">
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-accent text-accent" />)}
          </div>
          <span className="font-display font-bold text-xl text-primary">4.9 / 5</span>
          <span className="text-muted-foreground">· 380+ reviews</span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article key={r.name} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="flex gap-0.5 mb-4">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
              </div>
              <p className="text-foreground/85 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-semibold text-primary">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.area}, Auckland</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Reviews;
