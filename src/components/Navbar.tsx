import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const STRIPE_LINK = "https://buy.stripe.com/00w28r3BugcRfDPeiU";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Product" },
  { to: "/founding50", label: "Founding 50" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="font-display text-2xl font-bold tracking-wide">
          Wag<span className="text-gradient-gold">Vitals</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground font-body text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Reserve Spot
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-6 pt-2 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block py-3 font-body text-base transition-colors ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-center bg-gradient-gold text-primary-foreground font-body font-semibold px-5 py-3 rounded-full"
          >
            Reserve Your Spot — $49
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
