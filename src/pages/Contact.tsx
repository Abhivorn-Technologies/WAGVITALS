import { useState, FormEvent, useRef } from "react";
import Layout from "@/components/Layout";
import ScrollAnimate from "@/components/ScrollAnimate";
import { Mail, MapPin, Send, Linkedin, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "@/lib/constants";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sendError, setSendError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validateName = (name: string) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(name)) {
      setNameError("Name should only contain alphabets");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);

    if (!isNameValid || !isEmailValid) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setSendError("");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setSubmitted(true);
    } catch (err: any) {
      console.error("EmailJS error:", err);
      const msg = err?.text || err?.message || "Something went wrong. Please try again or email us directly.";
      setSendError(msg);
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
              <ScrollAnimate animation="fade-in">
                <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">Get in Touch</p>
              </ScrollAnimate>
              <ScrollAnimate animation="fade-in-up" delay={0.1}>
                <h1 className="font-display text-5xl sm:text-6xl font-bold italic mb-6">
                  Let's <span className="text-gradient-gold">talk.</span>
                </h1>
              </ScrollAnimate>
              <ScrollAnimate animation="fade-in-up" delay={0.2}>
                <p className="font-body text-lg text-muted-foreground max-w-lg mx-auto">
                  Have questions about WagVitals? Want to learn more about the Founding 50? We'd love to hear from you.
                </p>
              </ScrollAnimate>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <ScrollAnimate animation="fade-in-up" delay={0.1} className="lg:col-span-3">
                {submitted ? (
                  <div className="bg-card rounded-2xl p-10 border border-border text-center">
                    <Send size={32} className="text-primary mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="font-body text-sm text-muted-foreground">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-body text-sm text-muted-foreground mb-2 block">Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          required 
                          onChange={(e) => validateName(e.target.value)}
                          className={`w-full bg-card border ${nameError ? 'border-destructive' : 'border-border'} rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`} 
                          placeholder="Your name" 
                        />
                        {nameError && (
                          <p className="text-destructive text-xs mt-1 font-body animate-fade-in">{nameError}</p>
                        )}
                      </div>
                      <div>
                        <label className="font-body text-sm text-muted-foreground mb-2 block">Email</label>
                        <input 
                          type="email" 
                          name="email" 
                          required 
                          onChange={(e) => validateEmail(e.target.value)}
                          className={`w-full bg-card border ${emailError ? 'border-destructive' : 'border-border'} rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors`} 
                          placeholder="your@email.com" 
                        />
                        {emailError && (
                          <p className="text-destructive text-xs mt-1 font-body animate-fade-in">{emailError}</p>
                        )}
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
                    {sendError && (
                      <p className="font-body text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
                        ⚠️ {sendError}
                      </p>
                    )}
                    <button type="submit" disabled={loading} className="bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-50">
                      {loading ? "Sending..." : "Send Message"} <Send size={16} />
                    </button>
                  </form>
                )}
              </ScrollAnimate>

              <div className="lg:col-span-2 space-y-6">
                <ScrollAnimate animation="slide-in-right" delay={0.15}>
                  <div className="bg-card rounded-2xl p-6 border border-border hover:-translate-y-1 transition-transform duration-300">
                    <Mail size={20} className="text-primary mb-3" />
                    <h3 className="font-display text-lg font-bold mb-1">Email</h3>
                    <a href="mailto:bunny@wagvitals.com" className="font-body text-sm text-primary hover:underline">bunny@wagvitals.com</a>
                    <p className="font-body text-xs text-muted-foreground mt-2 italic">For investors & press: bunny@wagvitals.com</p>
                  </div>
                </ScrollAnimate>
                <ScrollAnimate animation="slide-in-right" delay={0.25}>
                  <div className="bg-card rounded-2xl p-6 border border-border hover:-translate-y-1 transition-transform duration-300">
                    <MapPin size={20} className="text-primary mb-3" />
                    <h3 className="font-display text-lg font-bold mb-1">Location</h3>
                    <p className="font-body text-sm text-muted-foreground">Kent, Ohio</p>
                  </div>
                </ScrollAnimate>
                <ScrollAnimate animation="slide-in-right" delay={0.35}>
                  <div className="bg-card rounded-2xl p-6 border border-border hover:-translate-y-1 transition-transform duration-300">
                    <Linkedin size={20} className="text-primary mb-3" />
                    <h3 className="font-display text-lg font-bold mb-3">Connect</h3>
                    <div className="space-y-2">
                      <a href="https://www.linkedin.com/in/bhuvaneshwarreddy-kosna-644807190/" target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
                      <a href="https://www.instagram.com/wagvitals?igsh=MWl4cGJ4NmtlbjcyZg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">Instagram</a>
                      <a href="https://x.com/wagvitals?s=21" target="_blank" rel="noopener noreferrer" className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">X (Twitter)</a>
                    </div>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
