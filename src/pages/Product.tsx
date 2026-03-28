import Layout from "@/components/Layout";
import collarImg from "@/assets/collar-product.jpg";
import appMockup from "@/assets/app-mockup.jpg";
import { Heart, Thermometer, Activity, Cpu, ArrowRight, Check, X } from "lucide-react";

const STRIPE_LINK = "https://buy.stripe.com/00w28r3BugcRfDPeiU";

const Product = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">The WagVitals Collar</p>
              <h1 className="font-display text-5xl sm:text-6xl font-bold italic mb-6">
                Health data,<br /><span className="text-gradient-gold">always on.</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground mb-8 max-w-lg">
                A premium ceramic smart collar that continuously monitors your dog's heart rate, body temperature, and activity — sending real-time alerts to your phone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={STRIPE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Reserve Now — $49
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <img
              src={collarImg}
              alt="WagVitals smart health collar product render"
              width={1024}
              height={1024}
              className="rounded-2xl w-full max-w-lg mx-auto glow-gold"
            />
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 text-center">Technical Specifications</p>
          <h2 className="font-display text-4xl font-bold italic mb-16 text-center">
            Precision <span className="text-gradient-gold">engineering.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, label: "Heart Rate", spec: "MAX30101", desc: "Optical pulse oximetry sensor for continuous heart rate tracking" },
              { icon: Thermometer, label: "Temperature", spec: "MLX90614", desc: "Non-contact infrared thermometer for real-time body temp" },
              { icon: Activity, label: "Activity", spec: "NRF52840", desc: "Built-in accelerometer for movement, sleep & behavior patterns" },
              { icon: Cpu, label: "Housing", spec: "Zirconia Ceramic", desc: "Medical-grade ceramic — hypoallergenic, durable, and premium" },
            ].map((s, i) => (
              <div key={s.label} className="bg-muted rounded-2xl p-6 border border-border opacity-0 animate-fade-in-up hover:-translate-y-1 transition-transform duration-300" style={{ animationDelay: `${i * 0.12}s`, animationFillMode: "forwards" }}>
                <s.icon size={24} className="text-primary mb-4" />
                <h3 className="font-display text-xl font-bold mb-1">{s.label}</h3>
                <p className="font-body text-xs text-primary font-semibold mb-2">{s.spec}</p>
                <p className="font-body text-xs text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Mockup */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <img
              src={appMockup}
              alt="WagVitals companion app showing health dashboard"
              loading="lazy"
              width={800}
              height={1024}
              className="rounded-2xl w-full max-w-sm mx-auto"
            />
            <div>
              <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Companion App</p>
              <h2 className="font-display text-4xl font-bold italic mb-6">
                Your dog's health,<br /><span className="text-gradient-gold">at a glance.</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Real-time heart rate & temperature dashboard",
                  "Activity tracking with daily/weekly trends",
                  "Smart alerts when vitals deviate from baseline",
                  "Share health reports with your vet instantly",
                  "Track multiple dogs on one account",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3 text-center">How We Compare</p>
          <h2 className="font-display text-4xl font-bold italic mb-16 text-center">
            WagVitals vs. the <span className="text-gradient-gold">rest.</span>
          </h2>
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
                {[
                  ["Heart Rate", true, false, false, true],
                  ["Body Temperature", true, false, false, true],
                  ["Activity Tracking", true, true, true, true],
                  ["GPS Location", false, false, true, false],
                  ["Real-time Alerts", true, false, false, true],
                  ["Ceramic Housing", true, false, false, false],
                  ["Affordable Pricing", true, true, true, false],
                ].map(([feature, ...vals]) => (
                  <tr key={feature as string} className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground">{feature as string}</td>
                    {(vals as boolean[]).map((v, i) => (
                      <td key={i} className="py-3 px-4 text-center">
                        {v ? <Check size={16} className="inline text-primary" /> : <X size={16} className="inline text-muted-foreground/40" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold italic mb-16">
            Simple <span className="text-gradient-gold">pricing.</span>
          </h2>
          <div className="inline-flex flex-col items-center bg-card rounded-2xl p-10 border border-border glow-gold max-w-md w-full opacity-0 animate-fade-in-up hover:-translate-y-1 transition-transform duration-300" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <h3 className="font-display text-2xl font-bold mb-2">WagVitals Collar</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="font-display text-5xl font-bold text-gradient-gold">$249</span>
            </div>
            <p className="font-body text-sm text-muted-foreground mb-6">+ $15/month Vitals+ subscription</p>
            <ul className="space-y-3 text-left mb-8 w-full">
              {[
                "Continuous heart rate monitoring",
                "Real-time temperature tracking",
                "Activity & sleep analysis",
                "Smart health alerts",
                "Vet-shareable reports",
                "Zirconia ceramic housing",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                  <Check size={14} className="text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-center"
            >
              Reserve Your Founding Spot — $49
            </a>
            <p className="mt-3 font-body text-xs text-muted-foreground">Fully refundable · Early 2027 delivery</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
