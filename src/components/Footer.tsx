import { Link } from "react-router-dom";
import { Heart, Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import wagvitalsLogo from "@/assets/wagvitals-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Roadmap Timeline */}
      <div className="border-b border-border py-10">
        <div className="container mx-auto px-4 lg:px-8">
          <h3 className="font-display text-xl font-bold text-center mb-8 italic">
            Our <span className="text-gradient-gold">Journey</span>
          </h3>
          <div className="flex items-center justify-between max-w-3xl mx-auto relative">
            <div className="absolute top-4 left-0 right-0 h-0.5 bg-border" />
            {[
              { label: "Waitlist Open", active: true, current: false },
              { label: "Prototype", active: true, current: false },
              { label: "Beta Testing", active: true, current: true },
              { label: "Kickstarter", active: false, current: false },
              { label: "Early 2027 Delivery", active: false, current: false },
            ].map((step) => (
              <div key={step.label} className="relative flex flex-col items-center z-10">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${step.current ? "bg-destructive border-destructive" : step.active ? "bg-primary border-primary" : "bg-muted border-border"}`}>
                  {step.current && <span className="text-xs font-bold text-destructive-foreground">●</span>}
                </div>
                <span className={`mt-2 font-body text-xs text-center max-w-[80px] ${step.current ? "text-destructive font-semibold" : step.active ? "text-primary" : "text-muted-foreground"}`}>
                  {step.label}
                </span>
                {step.current && <span className="text-[10px] text-destructive font-semibold mt-0.5">You Are Here</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block">
              <img src={wagvitalsLogo} alt="WagVitals" className="h-10" />
            </Link>
            <p className="mt-3 text-muted-foreground font-body text-sm max-w-md italic">
              "When pets speak through data."
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.linkedin.com/in/bhuvaneshwarreddy-kosna-644807190/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">LinkedIn</a>
              <a href="https://www.instagram.com/wagvitals?igsh=MWl4cGJ4NmtlbjcyZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Instagram</a>
              <a href="https://x.com/wagvitals?s=21" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">X</a>
              <a href="mailto:bunny@wagvitals.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">Email</a>
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
              <a href="https://www.linkedin.com/in/bhuvaneshwarreddy-kosna-644807190/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Linkedin size={14} /> LinkedIn
              </a>
              <a href="https://www.instagram.com/wagvitals?igsh=MWl4cGJ4NmtlbjcyZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Instagram size={14} /> Instagram
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground italic">
              For investors & press: bunny@wagvitals.com
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground font-body leading-relaxed max-w-4xl">
            WagVitals is a pet health wearable in active development, targeting Early 2027 delivery. This is a reservation for a founding member pre-order, not a final purchase. Device specifications may evolve prior to delivery. WagVitals tracks biometric trends and activity — it is not a medical device and does not diagnose or treat health conditions. All $49 deposits are fully refundable.
          </p>
          <div className="flex flex-wrap items-center gap-1 mt-6 text-xs text-muted-foreground">
            <span>© 2026 WagVitals. Made with</span>
            <Heart size={12} className="text-blush" />
            <span>for every dog.</span>
            <span className="mx-1">•</span>
            <a 
              href="https://abhivorn.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors font-semibold"
              aria-label="Visit Abhivorn Technologies website"
            >
              Developed by Abhivorn Technologies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
