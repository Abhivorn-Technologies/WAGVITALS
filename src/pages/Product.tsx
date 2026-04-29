import Layout from "@/components/Layout";
import ScrollAnimate from "@/components/ScrollAnimate";
import SmoothImage from "@/components/SmoothImage";
import heroDog from "@/assets/hero-dog.jpeg";
import dogPitbull from "@/assets/dog-pitbull.jpg";
import dogGolden from "@/assets/dog-golden.jpg";
import dogGoldenFounding from "@/assets/goldenretriever_founding.jpg";
import { Heart, Thermometer, Activity, Cpu, ArrowRight, Check, X, Brain, Stethoscope, Dna } from "lucide-react";
import { STRIPE_CHECKOUT_URL as STRIPE_LINK } from "@/lib/constants";

const Product = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-stretch">
            <div className="flex flex-col justify-center">
              <ScrollAnimate animation="fade-in">
                <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">The WagVitals Collar</p>
              </ScrollAnimate>
              <ScrollAnimate animation="fade-in-up" delay={0.1}>
                <h1 className="font-display text-5xl sm:text-6xl font-bold italic mb-6">
                  Health data,<br /><span className="text-gradient-gold">always on.</span>
                </h1>
              </ScrollAnimate>
              <ScrollAnimate animation="fade-in-up" delay={0.2}>
                <p className="font-body text-lg text-muted-foreground mb-8 max-w-lg">
                  A premium ceramic smart collar that continuously monitors your dog's heart rate, body temperature, and activity — with AI guidance and $25 vet calls on demand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" className="bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    Reserve Now — $49 <ArrowRight size={18} />
                  </a>
                </div>
                <p className="mt-3 font-body text-xs text-accent">✓ Fully refundable — $49 deposit + $200 at delivery = $249 total</p>
              </ScrollAnimate>
            </div>
            <ScrollAnimate animation="scale-in" delay={0.2} className="h-full">
              <SmoothImage src={heroDog} alt="Doberman wearing WagVitals smart health collar with precision module" width={1024} height={1024} className="rounded-2xl w-full h-full object-cover min-h-[350px] lg:min-h-0 glow-gold" wrapperClassName="w-full h-full" />
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimate animation="fade-in-up">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 text-center">Designed for Every Dog</p>
            <h2 className="font-display text-4xl font-bold italic mb-12 text-center">
              See it in <span className="text-gradient-gold">action.</span>
            </h2>
          </ScrollAnimate>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: heroDog, alt: "Doberman with WagVitals collar", label: "Doberman · 18.2kg · 72 HR Cycle" },
              { img: dogPitbull, alt: "Pitbull with WagVitals collar", label: "Pitbull · 24.5kg · 72 HR Cycle" },
              { img: dogGolden, alt: "Golden Retriever with WagVitals collar", label: "Golden Retriever · 29.5kg · 72 HR Cycle" },
            ].map((dog, i) => (
              <ScrollAnimate key={dog.label} animation="fade-in-up" delay={i * 0.15}>
                <div className="rounded-2xl overflow-hidden border border-border hover:-translate-y-1 transition-transform duration-300">
                  <SmoothImage src={dog.img} alt={dog.alt} loading="lazy" className="w-full h-72 object-cover" wrapperClassName="h-72" />
                  <div className="p-4 bg-card"><p className="font-body text-xs text-muted-foreground">{dog.label}</p></div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimate animation="fade-in-up">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 text-center">Technical Features</p>
            <h2 className="font-display text-4xl font-bold italic mb-16 text-center">Precision Features & <span className="text-gradient-gold">Engineering.</span></h2>
          </ScrollAnimate>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Thermometer, label: "Continuous Temperature Monitoring", spec: "", desc: "The only consumer collar that monitors your dog's body temperature continuously. Temperature is the first thing that changes when something is wrong — hours before your dog shows any symptoms.", badge: "Industry First" },
              { icon: Heart, label: "Heart Rate and Activity Tracking", spec: "", desc: "Monitors resting heart rate and activity patterns 24 hours a day. Changes in activity rhythm are one of the earliest signs that something is wrong." },
              { icon: Brain, label: "AI Health Prediction", spec: "Vitals+ App", desc: "Our AI learns your dog's personal health baseline over 30 days. It sends you an alert when vital signs deviate from their normal — 24 to 48 hours before symptoms appear. Not population averages. Your dog's individual normal." },
              { icon: Stethoscope, label: "Veterinary Intelligence Portal", spec: "Vet-Link feature", desc: "Your vet gets access to 30 days of continuous health data before every appointment. Pre-visit AI summaries. Post-surgical monitoring from home. Better data means better care." },
              { icon: Dna, label: "Genetic Integration — Coming 2027", spec: "Platform Roadmap", desc: "A one-time DNA test combined with continuous health data will enable personalized diet plans and medication recommendations based on your dog's unique genetic profile. Precision medicine for your pet." },
            ].map((s, i) => (
              <ScrollAnimate key={s.label} animation="fade-in-up" delay={i * 0.1} className="w-full md:w-[calc(50%-24px)] lg:w-[calc(33.333%-24px)]">
                <div className="bg-muted rounded-2xl p-5 border border-border hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
                  <div className="min-h-[22px] mb-2">
                    {s.badge ? (
                      <span className="inline-block bg-destructive/10 text-destructive text-[9px] font-semibold px-2 py-0.5 rounded-full">{s.badge}</span>
                    ) : null}
                  </div>
                  <s.icon size={24} className="text-primary mb-3" />
                  <h3 className="font-display text-lg lg:text-xl font-bold mb-1.5 leading-none whitespace-nowrap">
                    {s.label}
                  </h3>
                  <p className="font-body text-[11px] text-primary font-semibold mb-1.5">{s.spec}</p>
                  <p className="font-body text-[11px] text-muted-foreground leading-tight">{s.desc}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
          <ScrollAnimate animation="fade-in" delay={0.3}>
            <div className="text-center mt-10">
              <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-sm text-primary hover:underline transition-colors">Reserve your founding spot →</a>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* App Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimate animation="slide-in-left">
              <SmoothImage src={dogGoldenFounding} alt="Golden Retriever wearing WagVitals collar" loading="lazy" width={800} height={1024} className="rounded-2xl w-full max-w-sm mx-auto glow-gold" />
            </ScrollAnimate>
            <ScrollAnimate animation="slide-in-right" delay={0.1}>
              <div>
                <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Companion App</p>
                <h2 className="font-display text-4xl font-bold italic mb-6">Your dog's health,<br /><span className="text-gradient-gold">at a glance.</span></h2>
                <ul className="space-y-4">
                  {["Real-time heart rate & temperature dashboard", "Activity tracking with daily/weekly trends", "AI health guidance — plain-English alerts", "Smart alerts when vitals deviate from baseline", "Share health reports with your vet instantly", "Track multiple dogs on one account"].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-body text-sm text-muted-foreground"><Check size={16} className="text-primary mt-0.5 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimate animation="fade-in-up">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 text-center">How We Compare</p>
            <h2 className="font-display text-4xl font-bold italic mb-6 text-center">WagVitals vs. the <span className="text-gradient-gold">rest.</span></h2>
            <p className="font-body text-base text-muted-foreground text-center max-w-2xl mx-auto mb-16">The only collar that monitors heart rate, body temperature, AND activity together — no other consumer collar does this.</p>
          </ScrollAnimate>
          <ScrollAnimate animation="fade-in-up" delay={0.15}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] font-body text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-muted-foreground font-normal">Feature</th>
                    <th className="py-4 px-4 text-primary font-semibold">WagVitals</th>
                    <th className="py-4 px-4 text-muted-foreground">FitBark</th>
                    <th className="py-4 px-4 text-muted-foreground">Tractive</th>
                    <th className="py-4 px-4 text-muted-foreground">PetPace</th>
                  </tr>
                </thead>
                <tbody>
                  {([
                    ["Heart Rate", true, false, false, true],
                    ["Body Temperature", true, false, false, true],
                    ["Activity Tracking", true, true, true, true],
                    ["AI Health Guidance", true, false, false, false],
                    ["GPS Location", false, false, true, false],
                    ["Real-time Alerts", true, false, false, true],
                    ["Ceramic Housing", true, false, false, false],
                    ["Affordable Pricing", true, true, true, false],
                  ] as [string, boolean, boolean, boolean, boolean][]).map(([feature, ...vals]) => (
                    <tr key={feature} className="border-b border-border">
                      <td className="py-3 px-4 text-muted-foreground">{feature}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="py-3 px-4 text-center">
                          {v ? <Check size={16} className="inline text-primary" /> : <X size={16} className="inline text-muted-foreground/40" />}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <ScrollAnimate animation="fade-in-up">
            <h2 className="font-display text-4xl font-bold italic mb-4">Simple <span className="text-gradient-gold">pricing.</span></h2>
            <p className="font-body text-base text-muted-foreground mb-16">Less than a vet co-pay a month. More than a $1,500 vet bill saved.</p>
          </ScrollAnimate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <ScrollAnimate animation="fade-in-up" delay={0.1}>
              <div className="bg-card rounded-2xl p-10 border border-border glow-gold hover:-translate-y-1 transition-transform duration-300 h-full">
                <h3 className="font-display text-2xl font-bold mb-2">WagVitals Collar</h3>
                <span className="font-display text-5xl font-bold text-gradient-gold">$249</span>
                <p className="font-body text-sm text-muted-foreground mt-2">One-time purchase</p>
                <ul className="space-y-3 text-left mt-6 mb-8">
                  {["Continuous heart rate monitoring", "Real-time temperature tracking", "Activity & sleep analysis", "Zirconia ceramic housing"].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-body text-sm text-muted-foreground"><Check size={14} className="text-primary shrink-0" />{item}</li>
                  ))}
                </ul>
                <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer" className="w-full block bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-center">Reserve — $49 Deposit</a>
                <p className="mt-3 font-body text-xs text-accent">✓ Fully refundable · $49 now + $200 at delivery</p>
              </div>
            </ScrollAnimate>
            <ScrollAnimate animation="fade-in-up" delay={0.25}>
              <div className="bg-card rounded-2xl p-10 border border-border hover:-translate-y-1 transition-transform duration-300 h-full">
                <h3 className="font-display text-2xl font-bold mb-2">Vitals+ Subscription</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-5xl font-bold text-gradient-gold">$15</span>
                  <span className="font-body text-lg text-muted-foreground">/mo</span>
                </div>
                <p className="font-body text-sm text-muted-foreground mt-2">Cancel anytime</p>
                <ul className="space-y-3 text-left mt-6 mb-8">
                  {["AI health guidance & alerts", "30-day trend analytics", "Vet-shareable health reports", "Track multiple dogs"].map((item) => (
                    <li key={item} className="flex items-center gap-3 font-body text-sm text-muted-foreground"><Check size={14} className="text-primary shrink-0" />{item}</li>
                  ))}
                </ul>
                <div className="w-full block bg-muted text-foreground font-body font-semibold px-8 py-4 rounded-full text-center border border-border">Included with Collar</div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
