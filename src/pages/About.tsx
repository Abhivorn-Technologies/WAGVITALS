import Layout from "@/components/Layout";
import jimmyImg from "@/assets/jimmy-story.jpg";
import { Shield, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Our Story</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold italic mb-6">
            When pets speak<br />through <span className="text-gradient-gold">data.</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            WagVitals was born from loss — and built with the conviction that no pet owner should ever be blindsided again.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <img
              src={jimmyImg}
              alt="Jimmy, the dog who inspired WagVitals"
              loading="lazy"
              width={800}
              height={1024}
              className="rounded-2xl w-full max-w-md mx-auto glow-gold"
            />
            <div>
              <h2 className="font-display text-4xl font-bold italic mb-6">
                Jimmy's <span className="text-gradient-gold">Legacy</span>
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  I lost my dog Jimmy without warning. No signs. No time to act. One day he was fine — the next, it was too late. The guilt of not knowing haunted me.
                </p>
                <p>
                  I asked myself: What if I could have known? What if a simple collar could have told me his heart rate was irregular, or his temperature was spiking?
                </p>
                <p>
                  That question became WagVitals — a smart health monitoring collar that gives pet owners the data to act early, before it's too late.
                </p>
              </div>
              <p className="mt-6 font-body text-sm text-primary font-semibold">
                — Bunny (Bhuvaneshwar Reddy Kosna), Founder & CEO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 text-center">The Team</p>
          <h2 className="font-display text-4xl font-bold italic mb-16 text-center">
            Built by people who <span className="text-gradient-gold">care.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Bunny",
                role: "Founder & CEO",
                desc: "Lost his dog Jimmy. Built WagVitals so no other owner goes through the same.",
                icon: Heart,
              },
              {
                name: "Joe",
                role: "Hardware Lead",
                desc: "Engineering the ceramic sensor housing and embedded systems architecture.",
                icon: Users,
              },
              {
                name: "Daniel Baum",
                role: "Veterinary Advisor",
                desc: "Clinical advisor ensuring WagVitals data is medically meaningful and actionable.",
                icon: Shield,
              },
            ].map((member, i) => (
              <div
                key={member.name}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "forwards" }}
              >
                <member.icon size={28} className="text-primary mb-4" />
                <h3 className="font-display text-2xl font-bold">{member.name}</h3>
                <p className="font-body text-sm text-primary mb-3">{member.role}</p>
                <p className="font-body text-sm text-muted-foreground">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / NSF */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <Shield size={40} className="text-primary mx-auto mb-6" />
          <h2 className="font-display text-3xl font-bold italic mb-4">NSF I-Corps Validated</h2>
          <p className="font-body text-muted-foreground mb-2">Cohort SP26-004 · Kent State University</p>
          <p className="font-body text-sm text-muted-foreground mt-6">
            WagVitals was selected for the National Science Foundation's Innovation Corps program, validating our technology and market approach through rigorous customer discovery.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
