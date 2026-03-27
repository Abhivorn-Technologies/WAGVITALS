import Layout from "@/components/Layout";
import heroDog from "@/assets/hero-dog.jpg";
import jimmyImg from "@/assets/jimmy-story.jpg";
import { Heart, Thermometer, Activity, Shield, ArrowRight } from "lucide-react";
import { STRIPE_CHECKOUT_URL as STRIPE_LINK } from "@/lib/constants";

const Index = () => {
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
          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Real-time heart rate, body temperature & activity — so you never miss what your dog is trying to tell you.
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
          <p className="mt-4 font-body text-xs text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
            $49 today · $200 at delivery · Fully refundable · Early 2027
          </p>
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

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">3 Sensors. One Collar.</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-16 italic">
            What we <span className="text-gradient-gold">track.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Heart Rate",
                desc: "Continuous optical heart rate monitoring using the MAX30101 sensor. Detects irregular rhythms early.",
                color: "text-destructive",
              },
              {
                icon: Thermometer,
                title: "Body Temperature",
                desc: "Non-invasive infrared temperature tracking with the MLX90614 sensor. Alerts on fever spikes.",
                color: "text-primary",
              },
              {
                icon: Activity,
                title: "Activity & Rest",
                desc: "Movement and sleep pattern analysis via NRF52840 accelerometer. Know when behavior changes.",
                color: "text-accent",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-2xl p-8 text-left hover:border-primary/30 transition-colors"
              >
                <feature.icon size={32} className={`${feature.color} mb-5`} />
                <h3 className="font-display text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
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
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Be one of the first 50 people to own WagVitals. Lock in founding pricing, get direct access to the team, and shape the future of pet health monitoring.
          </p>
          <div className="inline-flex flex-col items-center bg-muted rounded-2xl p-10 border border-border glow-gold">
            <span className="font-display text-6xl font-bold text-gradient-gold">$49</span>
            <span className="font-body text-sm text-muted-foreground mt-2">Reserve today · $200 at delivery</span>
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Reserve Your Founding Spot
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <blockquote className="font-display text-3xl sm:text-4xl italic leading-snug">
                "WagVitals is solving a real problem pet owners face — early detection saves lives."
              </blockquote>
              <p className="mt-4 font-body text-sm text-primary">— Daniel Baum, Veterinary Advisor</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Shield size={20} className="text-primary" />
                  <span className="font-body text-sm font-semibold">NSF I-Corps Validated</span>
                </div>
                <p className="font-body text-xs text-muted-foreground">Cohort SP26-004 · Kent State University</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Heart size={20} className="text-destructive" />
                  <span className="font-body text-sm font-semibold">Clinically Advised</span>
                </div>
                <p className="font-body text-xs text-muted-foreground">Daniel Baum, Veterinary Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
