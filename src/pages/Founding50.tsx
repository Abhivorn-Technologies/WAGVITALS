import Layout from "@/components/Layout";
import { ArrowRight, Shield, Lock, Users, Star, Check } from "lucide-react";

const STRIPE_LINK = "https://buy.stripe.com/00w28r3BugcRfDPeiU";

const Founding50 = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Exclusive Pre-Order</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold italic mb-6">
            The Founding <span className="text-gradient-gold">50.</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Only 50 founding member spots available. Be among the first to experience WagVitals and shape the future of pet health monitoring.
          </p>

          {/* Counter */}
          <div className="inline-flex items-center gap-3 bg-muted rounded-full px-6 py-3 border border-border mb-12">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
            </span>
            <span className="font-body text-sm text-muted-foreground">
              Spots are filling up — reserve yours today
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl mx-auto bg-card rounded-3xl border border-border p-10 glow-gold">
            <div className="text-center mb-8">
              <span className="font-display text-6xl font-bold text-gradient-gold">$49</span>
              <p className="font-body text-sm text-muted-foreground mt-2">Reserve today · $200 at delivery</p>
              <p className="font-body text-xs text-muted-foreground mt-1">Total: $249 · Fully refundable</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { icon: Star, text: "Founding Member status — forever" },
                { icon: Lock, text: "Locked-in pricing — never pay more" },
                { icon: Users, text: "Direct access to the WagVitals team" },
                { icon: Shield, text: "Premium zirconia ceramic housing" },
                { icon: Check, text: "Priority shipping — first batch" },
                { icon: Check, text: "Shape product features with your feedback" },
              ].map((perk) => (
                <div key={perk.text} className="flex items-center gap-3">
                  <perk.icon size={16} className="text-primary shrink-0" />
                  <span className="font-body text-sm text-foreground">{perk.text}</span>
                </div>
              ))}
            </div>

            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-2"
            >
              Reserve Your Founding Spot — $49
              <ArrowRight size={18} />
            </a>

            <p className="mt-4 font-body text-xs text-muted-foreground text-center">
              Secure checkout via Stripe. Your $49 deposit is fully refundable if WagVitals does not ship.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="font-display text-3xl font-bold italic mb-12 text-center">
            How it <span className="text-gradient-gold">works.</span>
          </h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Reserve your spot", desc: "Pay a $49 refundable deposit to secure your founding member position." },
              { step: "02", title: "We build & test", desc: "Your feedback helps shape the final product. We keep you updated every step of the way." },
              { step: "03", title: "Receive your collar", desc: "Pay the remaining $200 at delivery. Estimated: Early 2027." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <span className="font-display text-3xl font-bold text-primary shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <Shield size={40} className="text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold italic mb-4">100% Refundable</h2>
          <p className="font-body text-muted-foreground">
            Your $49 deposit is fully refundable at any time if WagVitals does not ship. No risk, no commitment — just your spot secured.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Founding50;
