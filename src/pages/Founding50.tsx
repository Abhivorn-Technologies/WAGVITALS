import Layout from "@/components/Layout";
import { ArrowRight, Shield, Lock, Users, Star, Check, CheckCircle } from "lucide-react";
import { STRIPE_CHECKOUT_URL as STRIPE_LINK } from "@/lib/constants";

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

          {/* Spots Remaining Counter */}
          <div className="max-w-md mx-auto mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-body text-sm text-muted-foreground">42 of 50 spots remaining</span>
              <span className="font-body text-sm text-primary font-semibold">16% claimed</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-gold h-full rounded-full transition-all duration-1000" style={{ width: "16%" }} />
            </div>
          </div>

          <div className="inline-flex items-center gap-3 bg-muted rounded-full px-6 py-3 border border-border mb-12">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive" />
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
          <div className="max-w-xl mx-auto bg-card rounded-3xl border border-border p-10 glow-gold opacity-0 animate-fade-in-up hover:-translate-y-1 transition-transform duration-300" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <div className="text-center mb-8">
              <span className="font-display text-6xl font-bold text-gradient-gold">$49</span>
              <p className="font-body text-sm text-muted-foreground mt-2">Reserve today · $200 at delivery</p>
              <p className="font-body text-base text-foreground font-semibold mt-1">$49 deposit + $200 at delivery = <span className="text-gradient-gold">$249 total</span></p>
              <p className="font-body text-xs text-muted-foreground mt-1">+ $15/mo Vitals+ subscription (cancel anytime)</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { icon: Star, text: "Founding Member status — forever" },
                { icon: Lock, text: "Locked-in pricing — never pay more" },
                { icon: Users, text: "Direct access to the WagVitals team" },
                { icon: Shield, text: "Premium zirconia ceramic housing" },
                { icon: Check, text: "Priority shipping — first batch" },
                { icon: Check, text: "Shape product features with your feedback" },
                { icon: Check, text: "AI health guidance & $25 vet calls included" },
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
              className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-2"
            >
              Reserve Your Founding Spot — $49
              <ArrowRight size={18} />
            </a>

            <p className="mt-3 font-body text-xs text-accent text-center">
              ✓ Fully refundable — if WagVitals doesn't ship, you get 100% of your $49 back.
            </p>
            <p className="mt-2 font-body text-xs text-muted-foreground text-center">
              Secure checkout via Stripe.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
            {[
              { icon: Shield, text: "NSF I-Corps Validated" },
              { icon: CheckCircle, text: "Clinically Advised — Daniel Baum" },
              { icon: Shield, text: "Kent State University" },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <badge.icon size={16} className="text-primary" />
                <span className="font-body">{badge.text}</span>
              </div>
            ))}
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
              { step: "02", title: "We build & test", desc: "Working prototype in 4–8 weeks. Your feedback helps shape the final product." },
              { step: "03", title: "Receive your collar", desc: "Pay the remaining $200 at delivery. Total: $249. Estimated: Early 2027." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: `${Number(item.step) * 0.15}s`, animationFillMode: "forwards" }}>
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
          <Shield size={40} className="text-accent mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold italic mb-4">100% Refundable</h2>
          <p className="font-body text-muted-foreground">
            Your $49 deposit is fully refundable at any time if WagVitals does not ship. No risk, no commitment — just your spot secured.
          </p>
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Reserve Your Founding Spot — $49
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Founding50;
