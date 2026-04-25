import { Link } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";
import { PHONE_HREF } from "./Header";

const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-elevated">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 h-12 rounded-full bg-primary text-primary-foreground font-semibold text-sm"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 h-12 rounded-full bg-gradient-accent text-accent-foreground font-semibold text-sm shadow-glow"
        >
          <MessageSquare className="h-4 w-4" /> Get Quote
        </Link>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
