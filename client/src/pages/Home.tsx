import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  AudioLines,
  BrainCircuit,
  ChevronDown,
  Circle,
  Command,
  Globe2,
  Menu,
  Mic,
  Play,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

type DemoMode = "general" | "voice";

const features = [
  { icon: BrainCircuit, title: "General intelligence", body: "Ask anything. Abhi turns a blank thought into a useful next step." },
  { icon: AudioLines, title: "Voice-first by design", body: "Speak naturally, then see your meaning clarified in Hinglish and English." },
  { icon: Globe2, title: "Always within reach", body: "A lightweight floating companion designed for the moments between apps." },
];

const steps = [
  ["01", "Open the portal", "A calm, cinematic start screen brings Abhi into focus."],
  ["02", "Say what you need", "Use your voice or type a question in your own rhythm."],
  ["03", "Move with clarity", "Get an easy Hinglish explanation and a polished English answer."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoMode, setDemoMode] = useState<DemoMode>("general");
  const [prompt, setPrompt] = useState("Explain Python inheritance in simple terms");
  const [isListening, setIsListening] = useState(false);
  const [hasResponse, setHasResponse] = useState(false);

  const scrollToDemo = () => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  const runDemo = () => {
    if (!prompt.trim()) {
      toast.error("Type a question first");
      return;
    }
    setHasResponse(true);
    setIsListening(false);
  };
  const toggleMic = () => {
    setIsListening((value) => !value);
    setDemoMode("voice");
    toast(isListening ? "Microphone paused" : "Listening for your question…");
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar container">
        <a className="brand" href="#top" aria-label="Abhi AI home"><span className="brand-mark"><Sparkles size={15} strokeWidth={2.4} /></span><span>abhi<span className="brand-dot">.</span>ai</span></a>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#privacy" onClick={() => setMenuOpen(false)}>Privacy</a>
          <button className="nav-cta" onClick={scrollToDemo}>Try the demo <ArrowRight size={15} /></button>
        </nav>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-pulse" /> THE ASSISTANT BETWEEN THOUGHT & ACTION</div>
            <h1>Intelligence,<br /><em>in your orbit.</em></h1>
            <p className="hero-subtitle">Abhi is a floating AI companion that listens, understands, and helps you move forward — without pulling you out of the moment.</p>
            <div className="hero-actions"><button className="primary-button" onClick={scrollToDemo}>Meet Abhi <ArrowRight size={17} /></button><button className="ghost-button" onClick={() => toast("The Android build is coming in the next milestone")}><span className="play-icon"><Play size={11} fill="currentColor" /></span> See the vision</button></div>
            <div className="hero-proof"><div className="avatar-stack"><span>AK</span><span>MS</span><span>RN</span></div><span>Designed for the way <strong>you think.</strong></span></div>
          </div>
          <div className="hero-visual reveal delay-one" aria-label="Holographic Abhi AI orb visual">
            <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" /><div className="orb-glow" />
            <img src="/manus-storage/abhi-ai-orb_36a3a38a.png" alt="Luminous holographic intelligence orb" />
            <div className="signal-card signal-top"><span className="signal-dot cyan" />Listening <span className="signal-wave"><i /><i /><i /><i /><i /></span></div>
            <div className="signal-card signal-bottom"><span className="mini-spark"><Sparkles size={12} /></span><span><b>Abhi is ready</b><small>Ask anything, naturally.</small></span><ChevronDown size={15} /></div>
            <div className="visual-label label-left">01 / INTUITION</div><div className="visual-label label-right">ABHI CORE / 01</div>
          </div>
        </section>

        <section className="ticker"><div className="ticker-track"><span>LISTEN</span><Circle size={6} fill="currentColor" /><span>UNDERSTAND</span><Circle size={6} fill="currentColor" /><span>TRANSLATE</span><Circle size={6} fill="currentColor" /><span>ACT</span><Circle size={6} fill="currentColor" /><span>LISTEN</span><Circle size={6} fill="currentColor" /><span>UNDERSTAND</span><Circle size={6} fill="currentColor" /><span>TRANSLATE</span><Circle size={6} fill="currentColor" /><span>ACT</span></div></section>

        <section className="section container" id="experience">
          <div className="section-heading"><div><div className="eyebrow">WHY ABHI</div><h2>Less interface.<br /><span>More instinct.</span></h2></div><p>AI should feel like an extension of your attention — not another tab asking for it.</p></div>
          <div className="feature-grid">{features.map(({ icon: Icon, title, body }, index) => <article className="feature-card" key={title}><div className="feature-number">0{index + 1}</div><div className="feature-icon"><Icon size={21} /></div><h3>{title}</h3><p>{body}</p><a href="#demo">Explore <ArrowRight size={14} /></a></article>)}</div>
        </section>

        <section className="demo-section" id="demo"><div className="container demo-layout">
          <div className="demo-copy"><div className="eyebrow">THE ABHI INTERFACE</div><h2>A quieter way to<br /><span>ask for more.</span></h2><p>Try the core of Abhi right here. Switch between modes to feel how your thought becomes a clearer response.</p><div className="mode-pills"><button className={demoMode === "general" ? "active" : ""} onClick={() => setDemoMode("general")}><Command size={14} /> G / General</button><button className={demoMode === "voice" ? "active" : ""} onClick={() => setDemoMode("voice")}><Mic size={14} /> E / Voice</button></div></div>
          <div className="assistant-window"><div className="assistant-head"><div className="assistant-id"><span className="assistant-orb"><Sparkles size={14} /></span><span><b>abhi</b><small>your floating intelligence</small></span></div><span className="online"><i /> online</span></div><div className="assistant-body"><div className="assistant-greeting"><span className="mini-eyebrow">{demoMode === "voice" ? "VOICE MODE / E" : "GENERAL MODE / G"}</span><h3>What’s on your mind?</h3><p>{demoMode === "voice" ? "Tap the mic and speak naturally. Abhi will translate the thought." : "Ask a question. Abhi will help you find the signal."}</p></div>
            {hasResponse && <div className="response-stack"><div className="response-card heard"><span>HEARD</span><p>{prompt}</p></div><div className="response-card hinglish"><span>HINGLISH</span><p>Python inheritance ka matlab hai ek class doosri class ke features aur methods ko use kar sakti hai.</p></div><div className="response-card english"><span>PROFESSIONAL ENGLISH</span><p>Inheritance enables a class to reuse and extend the properties and methods of another class.</p></div></div>}
            <div className="assistant-input"><input value={prompt} onChange={(event) => { setPrompt(event.target.value); setHasResponse(false); }} onKeyDown={(event) => event.key === "Enter" && runDemo()} aria-label="Ask Abhi a question" /><button className={isListening ? "mic-button listening" : "mic-button"} onClick={toggleMic} aria-label="Toggle microphone"><Mic size={18} /></button><button className="send-button" onClick={runDemo} aria-label="Send question"><ArrowRight size={18} /></button></div><div className="assistant-footer"><span><ShieldCheck size={13} /> Your thought stays yours</span><span><Zap size={13} /> Response in a moment</span></div>
          </div></div>
        </div></section>

        <section className="section container" id="how-it-works"><div className="eyebrow">A SIMPLE RITUAL</div><div className="steps-grid">{steps.map(([number, title, body]) => <div className="step" key={number}><span className="step-number">{number}</span><div><h3>{title}</h3><p>{body}</p></div><ArrowRight size={18} /></div>)}</div></section>

        <section className="privacy-band" id="privacy"><div className="container privacy-inner"><div className="privacy-symbol"><ShieldCheck size={25} /></div><div><div className="eyebrow">BUILT WITH INTENTION</div><h2>Helpful by default.<br /><span>Private by design.</span></h2></div><p>Your AI should work for you, not on you. Abhi’s architecture keeps your API keys server-side and your experience clear, calm, and in your control.</p><button className="outline-button" onClick={() => toast("Privacy architecture is documented in the project repository")}>Our principles <ArrowRight size={16} /></button></div></section>
        <section className="final-cta container"><div className="final-grid"><div><div className="eyebrow">YOUR NEXT THOUGHT</div><h2>Start with<br /><em>“Hey Abhi…”</em></h2></div><div className="final-side"><p>A new kind of assistant is taking shape — one that meets you where you are.</p><button className="primary-button" onClick={scrollToDemo}>Try the experience <ArrowRight size={17} /></button></div></div></section>
      </main>
      <footer className="footer container"><a className="brand" href="#top"><span className="brand-mark"><Sparkles size={15} strokeWidth={2.4} /></span><span>abhi<span className="brand-dot">.</span>ai</span></a><span>© 2026 Abhi AI. A calmer interface for a louder world.</span><div><a href="#privacy">Privacy</a><a href="https://github.com/Abhi147-r/abhi-ai" target="_blank" rel="noreferrer">GitHub <ArrowRight size={13} /></a></div></footer>
    </div>
  );
}
