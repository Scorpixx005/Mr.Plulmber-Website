import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, Clock, MapPin, CheckCircle2, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import PageHero from "@/components/site/PageHero";
import { services } from "@/data/site";
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/site/Header";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Quote request received — we'll call you within 1 business hour.");
  };

  return (
    <>
      <PageHero
        eyebrow="Get a quote"
        title="Tell us what's going on — we'll take it from there."
        subtitle="Fill in the form and a real person will get back to you within 1 business hour. For emergencies, please call us directly."
      />

      <section className="section container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-7 md:p-10 shadow-card">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-accent text-white shadow-glow">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="heading-md mt-6 text-primary">Thanks — we've got it!</h2>
                <p className="mt-3 text-muted-foreground">A team member will call you within 1 business hour. For urgent issues, please call {PHONE_DISPLAY}.</p>
                <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>Submit another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <h2 className="font-display font-bold text-2xl text-primary">Request a free quote</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required placeholder="Your full name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" required placeholder="021 234 5678" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="you@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="address">Suburb / Address</Label>
                    <Input id="address" required placeholder="e.g. Mt Eden, Auckland" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label>Service needed</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent>
                      {services.map((s) => (
                        <SelectItem key={s.slug} value={s.slug}>{s.title}</SelectItem>
                      ))}
                      <SelectItem value="other">Not sure / Something else</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="msg">Tell us what's going on</Label>
                  <Textarea id="msg" rows={5} placeholder="Brief description of the issue or job…" />
                </div>
                <Button type="submit" variant="accent" size="xl" className="justify-self-start">
                  Send my quote request
                </Button>
                <p className="text-xs text-muted-foreground">We respond within 1 business hour. For emergencies call {PHONE_DISPLAY}.</p>
              </form>
            )}
          </div>

          {/* Side info */}
          <aside className="space-y-5">
            <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-7 shadow-elevated">
              <h3 className="font-display font-bold text-xl">Prefer to talk?</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">Call us directly — we usually answer first ring during business hours.</p>
              <Button asChild variant="white" size="lg" className="mt-5 w-full">
                <a href={PHONE_HREF}><Phone className="h-4 w-4" /> {PHONE_DISPLAY}</a>
              </Button>
            </div>

            <div className="rounded-3xl border border-emergency/30 bg-emergency/5 p-7">
              <div className="flex items-center gap-2 text-emergency font-bold">
                <AlertTriangle className="h-5 w-5" /> Emergency?
              </div>
              <p className="mt-2 text-sm text-foreground/80">Don't fill in a form. Call our 24/7 emergency line and we'll be on the way.</p>
              <Button asChild variant="emergency" size="lg" className="mt-4 w-full">
                <a href={PHONE_HREF}><Phone className="h-4 w-4" /> Emergency line</a>
              </Button>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <h3 className="font-display font-bold text-lg text-primary">Get in touch</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <div className="font-semibold text-primary">Email</div>
                    <a href="mailto:hello@mrplumber.co.nz" className="text-muted-foreground hover:text-accent">hello@mrplumber.co.nz</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <div className="font-semibold text-primary">Hours</div>
                    <div className="text-muted-foreground">Mon–Sat 7am–6pm<br/>24/7 emergencies</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <div className="font-semibold text-primary">Service area</div>
                    <div className="text-muted-foreground">Auckland-wide</div>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
