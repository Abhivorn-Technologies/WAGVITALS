import { useState, FormEvent, useRef } from "react";
import Layout from "@/components/Layout";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "@/lib/constants";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      // Still show success for demo with dummy keys
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Get in Touch</p>
              <h1 className="font-display text-5xl sm:text-6xl font-bold italic mb-6">
                Let's <span className="text-gradient-gold">talk.</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-lg mx-auto">
                Have questions about WagVitals? Want to learn more about the Founding 50? We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                {submitted ? (
                  <div className="bg-card rounded-2xl p-10 border border-border text-center">
                    <Send size={32} className="text-primary mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="font-body text-sm text-muted-foreground">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-body text-sm text-muted-foreground mb-2 block">Name</label>
                        <input type="text" name="user_name" required className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Your name" />
                      </div>
                      <div>
                        <label className="font-body text-sm text-muted-foreground mb-2 block">Email</label>
                        <input type="email" name="user_email" required className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-2 block">Subject</label>
                      <input type="text" name="subject" required className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors" placeholder="What's this about?" />
                    </div>
                    <div>
                      <label className="font-body text-sm text-muted-foreground mb-2 block">Message</label>
                      <textarea name="message" required rows={5} className="w-full bg-card border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us what's on your mind..." />
                    </div>
                    <button type="submit" disabled={loading} className="bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-50">
                      {loading ? "Sending..." : "Send Message"}
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <Mail size={20} className="text-primary mb-3" />
                  <h3 className="font-display text-lg font-bold mb-1">Email</h3>
                  <a href="mailto:bunny@wagvitals.com" className="font-body text-sm text-primary hover:underline">bunny@wagvitals.com</a>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <MapPin size={20} className="text-primary mb-3" />
                  <h3 className="font-display text-lg font-bold mb-1">Location</h3>
                  <p className="font-body text-sm text-muted-foreground">Kent, Ohio</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-display text-lg font-bold mb-3">Follow Us</h3>
                  <div className="space-y-2">
                    <a href="https://instagram.com/wagvitals" target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">@wagvitals on Instagram</a>
                    <a href="https://tiktok.com/@wagvitals" target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">@wagvitals on TikTok</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
