import { Link } from "react-router-dom";
import { Heart, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-2xl font-bold">
              Wag<span className="text-gradient-gold">Vitals</span>
            </Link>
            <p className="mt-3 text-muted-foreground font-body text-sm max-w-md italic">
              "When pets speak through data."
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/wagvitals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@wagvitals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                TikTok
              </a>
              <a
                href="mailto:bunny@wagvitals.com"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Email
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">Pages</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Product", "Founding 50", "About", "Contact"].map((page) => (
                <Link
                  key={page}
                  to={page === "Home" ? "/" : page === "Founding 50" ? "/founding50" : `/${page.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                >
                  {page}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm font-semibold text-foreground mb-4 tracking-wide uppercase">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:bunny@wagvitals.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} /> bunny@wagvitals.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Kent, Ohio
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground font-body leading-relaxed max-w-4xl">
            WagVitals is a pre-production pet wellness wearable currently in development. This is a reservation for a founding member pre-order, not a final purchase. Device specifications may evolve prior to delivery. Estimated delivery: Early 2027. WagVitals tracks biometric trends and activity — it is not a medical device and does not diagnose or treat health conditions. All $49 deposits are fully refundable if the product does not ship.
          </p>
          <div className="flex items-center gap-1 mt-6 text-xs text-muted-foreground">
            <span>© 2026 WagVitals. Made with</span>
            <Heart size={12} className="text-blush" />
            <span>for every dog.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
