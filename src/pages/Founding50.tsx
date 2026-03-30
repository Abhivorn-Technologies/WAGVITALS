import Layout from "@/components/Layout";
import ScrollAnimate from "@/components/ScrollAnimate";
import SmoothImage from "@/components/SmoothImage";
import dogGolden from "@/assets/dog-golden.jpg";
import foundersLogo from "@/assets/founders-logo.png";
import globalClevelandLogo from "@/assets/global-cleveland-logo.png";
import uarfLogo from "@/assets/uarf-logo.png";
import { ArrowRight, Shield, Lock, Users, Star, Check, CheckCircle } from "lucide-react";
import { STRIPE_CHECKOUT_URL as STRIPE_LINK } from "@/lib/constants";

const Founding50 = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimate animation="fade-in">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Exclusive Pre-Order</p>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-in-up" delay={0.1}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold italic mb-6">
              The Founding <span className="text-gradient-gold">50.</span>
            </h1>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-in-up" delay={0.2}>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Only 50 founding member spots available. Be among the first to experience WagVitals and shape the future of pet health monitoring.
            </p>
          </ScrollAnimate>

          <ScrollAnimate animation="scale-in" delay={0.25}>
            <div className="max-w-md mx-auto mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-body text-sm text-muted-foreground">42 of 50 spots remaining</span>
                <span className="font-body text-sm text-primary font-semibold">16% claimed</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-gold h-full rounded-full transition-all duration-1000" style={{ width: "16%" }} />
              </div>
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-in" delay={0.3}>
            <div className="inline-flex items-center gap-3 bg-muted rounded-full px-6 py-3 border border-border mb-12">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive" />
              </span>
              <span className="font-body text-sm text-muted-foreground">Spots are filling up — reserve yours today</span>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Product Image + Pricing Card */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <ScrollAnimate animation="slide-in-left">
              <SmoothImage src={dogGolden} alt="Golden Retriever wearing WagVitals smart collar" className="rounded-2xl w-full max-w-md mx-auto glow-gold" />
            </ScrollAnimate>
            <ScrollAnimate animation="slide-in-right" delay={0.1}>
              <div className="bg-card rounded-3xl border border-border p-10 glow-gold hover:-translate-y-1 transition-transform duration-300">
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
                <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-center flex items-center justify-center gap-2">
                  Reserve Your Founding Spot — $49 <ArrowRight size={18} />
                </a>
                <p className="mt-3 font-body text-xs text-accent text-center">✓ Fully refundable — if WagVitals doesn't ship, you get 100% of your $49 back.</p>
                <p className="mt-2 font-body text-xs text-muted-foreground text-center">Secure checkout via Stripe.</p>
              </div>
            </ScrollAnimate>
          </div>

          <ScrollAnimate animation="fade-in" delay={0.2}>
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
          </ScrollAnimate>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-12 bg-muted border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimate animation="fade-in-up">
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              <img src={foundersLogo} alt="Jason Calacanis Founder University" className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
              <img src={globalClevelandLogo} alt="Global Cleveland" className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
              <img src={uarfLogo} alt="University of Akron Research Foundation" className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <ScrollAnimate animation="fade-in-up">
            <h2 className="font-display text-3xl font-bold italic mb-12 text-center">How it <span className="text-gradient-gold">works.</span></h2>
          </ScrollAnimate>
          <div className="space-y-8">
            {[
              { step: "01", title: "Reserve your spot", desc: "Pay a $49 refundable deposit to secure your founding member position." },
              { step: "02", title: "We build & test", desc: "Working prototype in 4–8 weeks. Your feedback helps shape the final product." },
              { step: "03", title: "Receive your collar", desc: "Pay the remaining $200 at delivery. Total: $249. Estimated: Early 2027." },
            ].map((item) => (
              <ScrollAnimate key={item.step} animation="slide-in-left" delay={Number(item.step) * 0.12}>
                <div className="flex gap-6">
                  <span className="font-display text-3xl font-bold text-primary shrink-0">{item.step}</span>
                  <div>
                    <h3 className="font-display text-xl font-bold mb-1">{item.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <ScrollAnimate animation="scale-in">
            <Shield size={40} className="text-accent mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold italic mb-4">100% Refundable</h2>
            <p className="font-body text-muted-foreground">
              Your $49 deposit is fully refundable at any time if WagVitals does not ship. No risk, no commitment — just your spot secured.
            </p>
            <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
              Reserve Your Founding Spot — $49 <ArrowRight size={18} />
            </a>
          </ScrollAnimate>
        </div>
      </section>
    </Layout>
  );
};

export default Founding50;
