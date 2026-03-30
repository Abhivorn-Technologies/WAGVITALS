import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollAnimate from "@/components/ScrollAnimate";
import SmoothImage from "@/components/SmoothImage";
import heroDog from "@/assets/hero-dog.jpg";
import dogPitbull from "@/assets/dog-pitbull.jpg";
import dogGolden from "@/assets/dog-golden.jpg";
import globalClevelandLogo from "@/assets/global-cleveland-logo.png";
import uarfLogo from "@/assets/uarf-logo.png";
import { Heart, Thermometer, Activity, Shield, ArrowRight, Brain, CheckCircle } from "lucide-react";
import { STRIPE_CHECKOUT_URL as STRIPE_LINK } from "@/lib/constants";

const Index = () => {
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    setWaitlistSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <SmoothImage src={heroDog} alt="Doberman wearing WagVitals smart health collar" width={1920} height={1080} className="w-full h-full object-cover object-top" wrapperClassName="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-20">
          <ScrollAnimate animation="fade-in" delay={0}>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Smart Health Collar for Dogs</p>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-in-up" delay={0.1}>
            <h1 className="font-display text-4xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6">
              Know<br /><span className="text-gradient-gold italic">Before.</span>
            </h1>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-in-up" delay={0.2}>
            <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-lg mb-4">
              Continuous vitals. AI guidance. $25 vet calls. So you never miss what your dog is trying to tell you.
            </p>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-in" delay={0.25}>
            <p className="font-body text-sm text-muted-foreground mb-8">
              200+ dog owners on the waitlist
            </p>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-in-up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" className="bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Reserve Your Founding Spot — $49 <ArrowRight size={18} />
              </a>
            </div>
            <p className="mt-3 font-body text-xs text-muted-foreground">
              $49 deposit today + $200 at delivery = <strong className="text-foreground">$249 total</strong> · Fully refundable · Early 2027
            </p>
            <p className="mt-1 font-body text-xs text-accent">
              ✓ Fully refundable — if WagVitals doesn't ship, you get 100% of your $49 back.
            </p>
          </ScrollAnimate>
        </div>
      </section>

      {/* Market Stats Bar */}
      <section className="py-16 bg-muted border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { stat: "$30B+", label: "Annual U.S. vet spending" },
              { stat: "$1,500", label: "Average emergency vet visit" },
              { stat: "90M", label: "Dog households in America" },
            ].map((item, i) => (
              <ScrollAnimate key={item.stat} animation="fade-in-up" delay={i * 0.15}>
                <span className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-gold">{item.stat}</span>
                <p className="font-body text-sm text-muted-foreground mt-2">{item.label}</p>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimate animation="fade-in-up">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 text-center">Real Dogs. Real Collar.</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-12 italic text-center">
              Built for <span className="text-gradient-gold">every breed.</span>
            </h2>
          </ScrollAnimate>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: heroDog, alt: "Doberman wearing WagVitals smart collar with precision module data feed", breed: "Doberman" },
              { img: dogPitbull, alt: "Pitbull wearing WagVitals collar showing real-time health monitoring", breed: "Pitbull" },
              { img: dogGolden, alt: "Golden Retriever wearing WagVitals collar with biometric tracking", breed: "Golden Retriever" },
            ].map((dog, i) => (
              <ScrollAnimate key={dog.breed} animation="fade-in-up" delay={i * 0.15}>
                <div className="rounded-2xl overflow-hidden border border-border hover:-translate-y-1 transition-transform duration-300">
                  <SmoothImage src={dog.img} alt={dog.alt} loading="lazy" className="w-full h-80 object-cover" wrapperClassName="h-80" />
                  <div className="p-4 bg-card">
                    <p className="font-body text-sm text-muted-foreground">{dog.breed}</p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
          <ScrollAnimate animation="fade-in" delay={0.3}>
            <div className="text-center mt-8">
              <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline transition-colors">
                Reserve your founding spot →
              </a>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Emotional Bridge + Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimate animation="fade-in-up">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">The 3-Layer Platform</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 italic">
              What we <span className="text-gradient-gold">track.</span>
            </h2>
            <p className="font-body text-base text-muted-foreground italic max-w-2xl mx-auto mb-16">
              "If Jimmy had been wearing WagVitals, I would have seen the warning signs. Here is what it tracks — and why each one matters."
            </p>
          </ScrollAnimate>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Heart Rate", desc: "Catch irregular rhythms before they become emergencies. Continuous monitoring — not just a snapshot — so you know the moment something shifts.", spec: "MAX30101 optical sensor", color: "text-destructive" },
              { icon: Thermometer, title: "Body Temperature", desc: "The only consumer collar that tracks this. Fever shows up in data hours before your dog acts sick — giving you time to act, not react.", spec: "MLX90614 non-contact IR", color: "text-primary", badge: "Industry First — No Competitor Has This" },
              { icon: Activity, title: "Activity & Rest", desc: "Know the difference between a lazy afternoon and something wrong. Track rest, play, stress, and sleep patterns over time.", spec: "NRF52840 6-axis IMU", color: "text-accent" },
              { icon: Brain, title: "AI Health Guidance", desc: "Your dog's vitals, translated. Plain-English alerts tell you what the numbers mean and when to call your vet — before it becomes an emergency.", spec: "Vitals+ App feature", color: "text-primary" },
            ].map((feature, i) => (
              <ScrollAnimate key={feature.title} animation="fade-in-up" delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-8 text-left hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                  <feature.icon size={32} className={`${feature.color} mb-5`} />
                  {feature.badge && (
                    <span className="inline-block bg-destructive/10 text-destructive text-xs font-semibold px-3 py-1 rounded-full mb-3">{feature.badge}</span>
                  )}
                  <h3 className="font-display text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-2">{feature.desc}</p>
                  <p className="font-body text-xs text-primary">{feature.spec}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
          <ScrollAnimate animation="scale-in" delay={0.2}>
            <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
              Reserve Your Founding Spot — $49 <ArrowRight size={18} />
            </a>
          </ScrollAnimate>
        </div>
      </section>

      {/* Why WagVitals */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimate animation="fade-in-up">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Why WagVitals?</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 italic">
              Nobody else does <span className="text-gradient-gold">all three.</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
              The only collar that monitors heart rate, body temperature, AND activity together — no other consumer collar does this.
            </p>
          </ScrollAnimate>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { title: "Heart Rate", desc: "Others do it — but not with continuous AI-backed insights.", icon: Heart },
              { title: "Activity", desc: "Every tracker does this. It's table stakes.", icon: Activity },
              { title: "Body Temperature", desc: "We own this. No competitor offers continuous temp at a consumer price.", icon: Thermometer, highlight: true },
            ].map((item, i) => (
              <ScrollAnimate key={item.title} animation="fade-in-up" delay={i * 0.15}>
                <div className={`rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 h-full ${item.highlight ? "bg-destructive/10 border-destructive/30" : "bg-card border-border"}`}>
                  <item.icon size={28} className={item.highlight ? "text-destructive mb-4" : "text-primary mb-4"} />
                  <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                  {item.highlight && <span className="inline-block mt-3 text-xs font-semibold text-destructive bg-destructive/10 px-3 py-1 rounded-full">Our Moat</span>}
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimate animation="fade-in-up">
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 italic">
              Simple <span className="text-gradient-gold">pricing.</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-12">
              Less than a coffee a month. More than a $1,500 vet bill saved.
            </p>
          </ScrollAnimate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <ScrollAnimate animation="fade-in-up" delay={0.1}>
              <div className="bg-card rounded-2xl p-8 border border-border hover:-translate-y-1 transition-transform duration-300 h-full">
                <h3 className="font-display text-2xl font-bold mb-2">Smart Collar</h3>
                <span className="font-display text-5xl font-bold text-gradient-gold">$249</span>
                <p className="font-body text-sm text-muted-foreground mt-2">One-time purchase</p>
                <p className="font-body text-xs text-accent mt-1">$49 deposit now + $200 at delivery</p>
              </div>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-in-up" delay={0.25}>
              <div className="bg-card rounded-2xl p-8 border border-border hover:-translate-y-1 transition-transform duration-300 h-full">
                <h3 className="font-display text-2xl font-bold mb-2">Vitals+ App</h3>
                <span className="font-display text-5xl font-bold text-gradient-gold">$15</span>
                <span className="font-body text-lg text-muted-foreground">/mo</span>
                <p className="font-body text-sm text-muted-foreground mt-2">Cancel anytime</p>
                <p className="font-body text-xs text-accent mt-1">AI guidance · health trends · reports</p>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Founding 50 CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimate animation="fade-in-up">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Limited to 50 Members</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 italic">
              The Founding <span className="text-gradient-gold">50.</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Be one of the first 50 people to own WagVitals. Lock in founding pricing, get direct access to the team, and shape the future of pet health monitoring.
            </p>
          </ScrollAnimate>

          <ScrollAnimate animation="scale-in" delay={0.1}>
            <div className="max-w-md mx-auto mb-10">
              <div className="flex items-center justify-between mb-2">
               <span className="font-body text-sm text-muted-foreground">All 50 spots claimed!</span>
                <span className="font-body text-sm text-primary font-semibold">100% filled</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-gold h-full rounded-full transition-all duration-1000" style={{ width: "100%" }} />
              </div>
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-in-up" delay={0.2}>
            <div className="inline-flex flex-col items-center bg-muted rounded-2xl p-10 border border-border glow-gold hover:-translate-y-1 transition-transform duration-300">
              <span className="font-display text-6xl font-bold text-gradient-gold">$49</span>
              <span className="font-body text-sm text-muted-foreground mt-2">Reserve today · $200 at delivery · <strong className="text-foreground">$249 total</strong></span>
              <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" className="mt-6 bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2">
                Reserve Your Founding Spot <ArrowRight size={18} />
              </a>
              <p className="mt-3 font-body text-xs text-accent">✓ Fully refundable — if WagVitals doesn't ship, you get 100% back.</p>
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-in" delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
              {[
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

      {/* Email Waitlist */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-xl">
          <ScrollAnimate animation="fade-in-up">
            <h3 className="font-display text-2xl font-bold mb-3 italic">
              Not ready to commit <span className="text-gradient-gold">$49?</span>
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              Join the free waitlist — stay updated on launch, prototype progress, and Kickstarter invite.
            </p>
          </ScrollAnimate>
          <ScrollAnimate animation="scale-in" delay={0.1}>
            {waitlistSubmitted ? (
              <div className="bg-card rounded-xl p-6 border border-border">
                <CheckCircle size={24} className="text-accent mx-auto mb-2" />
                <p className="font-body text-sm text-foreground">You're on the list! We'll keep you updated.</p>
              </div>
            ) : (
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3">
                <input type="email" required value={waitlistEmail} onChange={(e) => setWaitlistEmail(e.target.value)} placeholder="your@email.com" className="flex-1 bg-card border border-border rounded-full px-6 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" />
                <button type="submit" className="bg-gradient-gold text-primary-foreground font-body font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity">Join Waitlist</button>
              </form>
            )}
          </ScrollAnimate>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-muted border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimate animation="fade-in">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-8 text-center">Backed & Validated By</p>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-in-up" delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              <img src={globalClevelandLogo} alt="Global Cleveland" className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
              <img src={uarfLogo} alt="University of Akron Research Foundation" className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimate animation="slide-in-left">
              <blockquote className="font-display text-3xl sm:text-4xl italic leading-snug">
                "WagVitals is solving a real problem pet owners face — early detection saves lives."
              </blockquote>
              <p className="mt-4 font-body text-sm text-primary">— Daniel Baum, Veterinary Advisor</p>
            </ScrollAnimate>
            <div className="flex flex-col gap-6">
              {[
                { icon: Heart, title: "Clinically Advised", desc: "Daniel Baum, Veterinary Advisor", iconColor: "text-destructive" },
                { icon: Shield, title: "Working prototype in 4–8 weeks", desc: "FCC certification next · Kickstarter launch · Early 2027 delivery" },
              ].map((item, i) => (
                <ScrollAnimate key={item.title} animation="slide-in-right" delay={i * 0.15}>
                  <div className="bg-muted rounded-xl p-6 border border-border hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon size={20} className={item.iconColor || "text-primary"} />
                      <span className="font-body text-sm font-semibold">{item.title}</span>
                    </div>
                    <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
