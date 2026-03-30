import { useState } from "react";
import Layout from "@/components/Layout";
import heroDog from "@/assets/hero-dog.jpg";
import jimmyImg from "@/assets/jimmy-story.jpg";
import { Heart, Thermometer, Activity, Shield, ArrowRight, Brain, Video, CheckCircle } from "lucide-react";
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroDog}
            alt="Doberman wearing WagVitals smart health collar"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-20">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4 animate-fade-in">
            Smart Health Collar for Dogs
          </p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Know<br />
            <span className="text-gradient-gold italic">Before.</span>
          </h1>
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-lg mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Continuous vitals. AI guidance. $25 vet calls. So you never miss what your dog is trying to tell you.
          </p>
          <p className="font-body text-sm text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            100+ dog owners on the waitlist · NSF I-Corps SP26-004 · Jason Calacanis Founder University
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Reserve Your Founding Spot — $49
              <ArrowRight size={18} />
            </a>
          </div>
          <p className="mt-3 font-body text-xs text-muted-foreground animate-fade-in" style={{ animationDelay: "0.35s" }}>
            $49 deposit today + $200 at delivery = <strong className="text-foreground">$249 total</strong> · Fully refundable · Early 2027
          </p>
          <p className="mt-1 font-body text-xs text-accent animate-fade-in" style={{ animationDelay: "0.4s" }}>
            ✓ Fully refundable — if WagVitals doesn't ship, you get 100% of your $49 back.
          </p>
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
              <div key={item.stat} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "forwards" }}>
                <span className="font-display text-5xl sm:text-6xl font-bold text-gradient-gold">{item.stat}</span>
                <p className="font-body text-sm text-muted-foreground mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jimmy's Story */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">The Story Behind WagVitals</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 italic">
                Why this <span className="text-gradient-gold">matters.</span>
              </h2>
              <blockquote className="font-body text-lg text-muted-foreground leading-relaxed border-l-2 border-primary pl-6">
                "I lost my dog Jimmy without warning. No signs. No time to act. I built WagVitals so every pet owner has the data to act early — before it's too late."
              </blockquote>
              <p className="mt-4 font-body text-sm text-blush">— Bunny, Founder & CEO</p>
              <a
                href={STRIPE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 font-body text-sm text-primary hover:underline transition-colors"
              >
                Reserve your founding spot →
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={jimmyImg}
                alt="Jimmy, the inspiration behind WagVitals"
                loading="lazy"
                width={800}
                height={1024}
                className="rounded-2xl w-full max-w-md mx-auto glow-gold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Bridge + Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">The 3-Layer Platform</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 italic">
            What we <span className="text-gradient-gold">track.</span>
          </h2>
          <p className="font-body text-base text-muted-foreground italic max-w-2xl mx-auto mb-16">
            "If Jimmy had been wearing WagVitals, I would have seen the warning signs. Here is what it tracks — and why each one matters."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Heart Rate",
                desc: "Catch irregular rhythms before they become emergencies. Continuous optical monitoring so you know instantly if something changes.",
                spec: "MAX30101 optical sensor",
                color: "text-destructive",
              },
              {
                icon: Thermometer,
                title: "Body Temperature",
                desc: "Fever alerts before your dog shows visible signs. Non-invasive infrared tracking catches spikes early — when action still matters.",
                spec: "MLX90614 non-contact IR",
                color: "text-primary",
                badge: "Industry First — No Competitor Has This",
              },
              {
                icon: Activity,
                title: "Activity & Rest",
                desc: "See when behavior changes — rest, play, stress, sleep. Know the difference between a lazy day and a sign something is wrong.",
                spec: "NRF52840 6-axis IMU",
                color: "text-accent",
              },
              {
                icon: Brain,
                title: "AI Health Guidance",
                desc: "Plain-English alerts and recommendations based on your dog's live biometric trends. Know what the numbers mean — before you call the vet.",
                spec: "Vitals+ App feature",
                color: "text-primary",
              },
              {
                icon: Video,
                title: "$25 Vet Calls",
                desc: "20-minute on-demand video call with a licensed vet who sees your dog's actual vitals in real time. Expert care when you need it.",
                spec: "On-demand via Vitals+ App",
                color: "text-destructive",
              },
            ].map((feature, i) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-2xl p-8 text-left hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.12}s`, animationFillMode: "forwards" }}
              >
                <feature.icon size={32} className={`${feature.color} mb-5`} />
                {feature.badge && (
                  <span className="inline-block bg-destructive/10 text-destructive text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {feature.badge}
                  </span>
                )}
                <h3 className="font-display text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-2">{feature.desc}</p>
                <p className="font-body text-xs text-primary">{feature.spec}</p>
              </div>
            ))}
          </div>
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Reserve Your Founding Spot — $49
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Why WagVitals — Competitor Positioning */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Why WagVitals?</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 italic">
            Nobody else does <span className="text-gradient-gold">all three.</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            The only collar that monitors heart rate, body temperature, AND activity together — no other consumer collar does this.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { title: "Heart Rate", desc: "Others do it — but not with continuous AI-backed insights.", icon: Heart },
              { title: "Activity", desc: "Every tracker does this. It's table stakes.", icon: Activity },
              { title: "Body Temperature", desc: "We own this. No competitor offers continuous temp at a consumer price.", icon: Thermometer, highlight: true },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up ${item.highlight ? "bg-destructive/10 border-destructive/30" : "bg-card border-border"}`}
                style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "forwards" }}
              >
                <item.icon size={28} className={item.highlight ? "text-destructive mb-4" : "text-primary mb-4"} />
                <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                {item.highlight && (
                  <span className="inline-block mt-3 text-xs font-semibold text-destructive bg-destructive/10 px-3 py-1 rounded-full">Our Moat</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 italic">
            Simple <span className="text-gradient-gold">pricing.</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            Less than a coffee a month. More than a $1,500 vet bill saved.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-card rounded-2xl p-8 border border-border opacity-0 animate-fade-in-up hover:-translate-y-1 transition-transform duration-300" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
              <h3 className="font-display text-2xl font-bold mb-2">Smart Collar</h3>
              <span className="font-display text-5xl font-bold text-gradient-gold">$249</span>
              <p className="font-body text-sm text-muted-foreground mt-2">One-time purchase</p>
              <p className="font-body text-xs text-accent mt-1">$49 deposit now + $200 at delivery</p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border opacity-0 animate-fade-in-up hover:-translate-y-1 transition-transform duration-300" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
              <h3 className="font-display text-2xl font-bold mb-2">Vitals+ App</h3>
              <span className="font-display text-5xl font-bold text-gradient-gold">$15</span>
              <span className="font-body text-lg text-muted-foreground">/mo</span>
              <p className="font-body text-sm text-muted-foreground mt-2">Cancel anytime</p>
              <p className="font-body text-xs text-accent mt-1">AI guidance · $25 vet calls · trends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founding 50 CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Limited to 50 Members</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 italic">
            The Founding <span className="text-gradient-gold">50.</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Be one of the first 50 people to own WagVitals. Lock in founding pricing, get direct access to the team, and shape the future of pet health monitoring.
          </p>

          {/* Spots Remaining */}
          <div className="max-w-md mx-auto mb-10">
            <div className="flex items-center justify-between mb-2">
              <span className="font-body text-sm text-muted-foreground">42 of 50 spots remaining</span>
              <span className="font-body text-sm text-primary font-semibold">16% claimed</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-gold h-full rounded-full transition-all duration-1000" style={{ width: "16%" }} />
            </div>
          </div>

          <div className="inline-flex flex-col items-center bg-muted rounded-2xl p-10 border border-border glow-gold opacity-0 animate-fade-in-up hover:-translate-y-1 transition-transform duration-300" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <span className="font-display text-6xl font-bold text-gradient-gold">$49</span>
            <span className="font-body text-sm text-muted-foreground mt-2">Reserve today · $200 at delivery · <strong className="text-foreground">$249 total</strong></span>
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Reserve Your Founding Spot
              <ArrowRight size={18} />
            </a>
            <p className="mt-3 font-body text-xs text-accent">
              ✓ Fully refundable — if WagVitals doesn't ship, you get 100% back.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
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

      {/* Email Waitlist */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-xl">
          <h3 className="font-display text-2xl font-bold mb-3 italic">
            Not ready to commit <span className="text-gradient-gold">$49?</span>
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-6">
            Join the free waitlist — stay updated on launch, prototype progress, and Kickstarter invite.
          </p>
          {waitlistSubmitted ? (
            <div className="bg-card rounded-xl p-6 border border-border">
              <CheckCircle size={24} className="text-accent mx-auto mb-2" />
              <p className="font-body text-sm text-foreground">You're on the list! We'll keep you updated.</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-card border border-border rounded-full px-6 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="bg-gradient-gold text-primary-foreground font-body font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <blockquote className="font-display text-3xl sm:text-4xl italic leading-snug">
                "WagVitals is solving a real problem pet owners face — early detection saves lives."
              </blockquote>
              <p className="mt-4 font-body text-sm text-primary">— Daniel Baum, Veterinary Advisor</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-muted rounded-xl p-6 border border-border opacity-0 animate-fade-in-up hover:-translate-y-1 transition-transform duration-300" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                <div className="flex items-center gap-3 mb-2">
                  <Shield size={20} className="text-primary" />
                  <span className="font-body text-sm font-semibold">NSF I-Corps Validated</span>
                </div>
                <p className="font-body text-xs text-muted-foreground">Cohort SP26-004 · Kent State University</p>
              </div>
              <div className="bg-muted rounded-xl p-6 border border-border opacity-0 animate-fade-in-up hover:-translate-y-1 transition-transform duration-300" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
                <div className="flex items-center gap-3 mb-2">
                  <Heart size={20} className="text-destructive" />
                  <span className="font-body text-sm font-semibold">Clinically Advised</span>
                </div>
                <p className="font-body text-xs text-muted-foreground">Daniel Baum, Veterinary Advisor</p>
              </div>
              <div className="bg-muted rounded-xl p-6 border border-border opacity-0 animate-fade-in-up hover:-translate-y-1 transition-transform duration-300" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                <div className="flex items-center gap-3 mb-2">
                  <Shield size={20} className="text-primary" />
                  <span className="font-body text-sm font-semibold">Working prototype in 4–8 weeks</span>
                </div>
                <p className="font-body text-xs text-muted-foreground">FCC certification next · Kickstarter launch · Early 2027 delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
