import { Link } from "react-router-dom";
import { Droplets, Phone, Mail, MapPin, Clock } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "./Header";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-accent">
                <Droplets className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl font-extrabold">
                Mr.<span className="text-accent"> Plumber</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Trusted plumbing across Auckland. Fast response, quality workmanship, fair pricing — every job, every time.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-base mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              {["Emergency Plumbing","Hot Water","Drain Unblocking","Leak Detection","Bathroom & Kitchen","Roof Plumbing"].map((s) => (
                <li key={s}><Link to="/services" className="hover:text-accent transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-base mb-4">Service Areas</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              {["Auckland Central","North Shore","West Auckland","East Auckland","South Auckland","Hibiscus Coast"].map((s) => (
                <li key={s}><Link to="/areas" className="hover:text-accent transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-base mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href={PHONE_HREF} className="hover:text-accent">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <a href="mailto:hello@mrplumber.co.nz" className="hover:text-accent">hello@mrplumber.co.nz</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>Auckland-wide service</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>Mon–Sat 7am–6pm · 24/7 emergencies</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row gap-3 justify-between text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Mr. Plumber Ltd. NZ Registered Master Plumbers.</p>
          <p>Auckland, New Zealand</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
