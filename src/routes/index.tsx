import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, ArrowRight, MapPin, Phone, Menu, X, Dumbbell, Activity, Music2, StretchHorizontal, Move, UserRound, MessageCircle, Clock3, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business, enquiryUrl } from "@/lib/gym";
import strength from "@/assets/strength.jpg.asset.json";
import cardio from "@/assets/cardio.jpg.asset.json";
import floor from "@/assets/floor.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "THE IRON GYM | Strength & Fitness in Wadgaon Sheri, Pune" },
      { name: "description", content: "Strength training, cardio, Zumba, yoga and fitness coaching at THE IRON GYM in Wadgaon Sheri, Pune. Call +91 96890 48613 for membership enquiries." },
      { property: "og:title", content: "THE IRON GYM — Wadgaon Sheri, Pune" },
      { property: "og:description", content: "Your neighbourhood. Your training ground. Explore strength training, cardio and group fitness at THE IRON GYM in Pune." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const navigation = [["The gym", "about"], ["Training", "training"], ["Our space", "space"], ["Find us", "location"]];
const services = [
  { number: "01", name: "Strength training", description: "Build your foundation with weight training and strength-focused workouts.", icon: Dumbbell },
  { number: "02", name: "Cardio & fitness", description: "Keep moving with cardio equipment and general fitness workouts.", icon: Activity },
  { number: "03", name: "Zumba", description: "Bring energy to your routine with dance-based group fitness.", icon: Music2 },
  { number: "04", name: "Yoga & stretching", description: "Make room for flexibility, mobility and mindful movement.", icon: StretchHorizontal },
  { number: "05", name: "Aerobics", description: "An active, full-body approach to your everyday fitness routine.", icon: Move },
  { number: "06", name: "Fitness coaching", description: "Guided workouts for your strength and weight-management goals.", icon: UserRound },
];

function Brand() {
  return <a href="#home" className="brand" aria-label="THE IRON GYM home"><Dumbbell aria-hidden="true" /><span>THE IRON<span className="brand-sub">GYM · PUNE</span></span></a>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prepared, setPrepared] = useState<string | null>(null);
  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setPrepared(enquiryUrl(String(data.get("name") ?? ""), String(data.get("phone") ?? ""), String(data.get("interest") ?? "Membership enquiry")));
  }

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="location-strip"><div className="page-width"><span><MapPin size={12} /> WADGAON SHERI, PUNE</span><a href={business.phoneHref}>LET’S TALK <ArrowUpRight size={12} /> {business.phone}</a></div></div>
    <header className="site-header" id="home">
      <div className="page-width header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <Button asChild variant="gym" size="gym" className="header-cta"><a href="#enquire">Join the gym <ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation">{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={16} /></a>)}<a href="#enquire" onClick={() => setMenuOpen(false)}>Membership enquiry<ArrowUpRight size={16} /></a></nav>}
    </header>
    <main id="main">
      <section className="gym-hero" aria-labelledby="hero-title">
        <img className="hero-photo" src={strength.url} alt="Strength-training benches and weight machines in THE IRON GYM’s sunlit workout area" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="page-width hero-content">
          <div className="eyebrow"><span className="blue-line" /> YOUR NEIGHBOURHOOD. YOUR TRAINING GROUND.</div>
          <h1 id="hero-title">THE IRON<br /><span>GYM.</span></h1>
          <p className="hero-tagline">Show up. Put in the work.<br />Build a stronger you.</p>
          <p className="hero-description">Strength, cardio and group fitness.<br />Right here in Wadgaon Sheri, Pune.</p>
          <div className="hero-actions"><Button asChild variant="gym" size="gym"><a href="#enquire">Start your journey <ArrowUpRight /></a></Button><Button asChild variant="gymOutline" size="gym"><a href={business.phoneHref}><Phone /> Call the gym</a></Button></div>
          <a className="hero-scroll" href="#about"><span>BUILT FOR YOUR EVERYDAY</span><ChevronDown size={16} /></a>
        </div>
        <div className="hero-photo-caption"><span className="caption-dot" /> THE REAL SPACE. THE REAL WORK.</div>
        <div className="hero-side-label">ESTABLISH YOUR ROUTINE.</div>
      </section>

      <div className="training-ticker" aria-label="Training options"><div className="page-width"><span>STRENGTH</span><span className="ticker-cross">+</span><span>CARDIO</span><span className="ticker-cross">+</span><span>GROUP FITNESS</span><span className="ticker-cross">+</span><span>YOUR NEXT CHAPTER</span><ArrowUpRight /></div></div>

      <section className="page-width about-section section-space" id="about">
        <div><p className="eyebrow muted-eyebrow">01 / THE GYM</p><h2>A local gym.<br />A stronger <span className="text-primary">everyday.</span></h2></div>
        <div className="about-copy"><p>Big goals start with a place to begin. THE IRON GYM is your neighbourhood fitness centre in Wadgaon Sheri — a space for strength, movement and building a routine that lasts.</p><p>From your first workout to your next strength goal, find gym equipment, guided workouts and group fitness that fit the way you want to train.</p><div className="about-points"><span><Check /> Beginner-friendly training</span><span><Check /> Guided fitness workouts</span><span><Check /> Strength & weight-management focus</span></div><a className="text-link" href="#training">Find your way to train <ArrowUpRight size={18} /></a></div>
      </section>

      <section className="training-section section-space" id="training">
        <div className="page-width"><div className="section-heading"><div><p className="eyebrow muted-eyebrow">02 / YOUR TRAINING</p><h2>Different goals.<br />One training ground.</h2></div><p>Lift. Move. Stretch. Find your rhythm.<br />Choose the training that feels like you.</p></div>
          <div className="services-grid">{services.map(({ number, name, description, icon: Icon }) => <article className="service" key={number}><div className="service-top"><Icon strokeWidth={1.5} /><span>{number}</span></div><h3>{name}</h3><p>{description}</p></article>)}</div>
          <div className="training-note"><Clock3 size={16} /><span>For current class timings and availability, speak with the gym.</span><a href={business.phoneHref}>Ask about classes <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section className="page-width section-space space-section" id="space"><div className="section-heading"><div><p className="eyebrow muted-eyebrow">03 / INSIDE THE IRON GYM</p><h2>No filters.<br />Just your next workout.</h2></div><a className="text-link" href={business.maps} target="_blank" rel="noopener noreferrer">Come take a look <ArrowUpRight size={18} /></a></div>
        <div className="photo-grid"><figure><img src={cardio.url} alt="Treadmills and cardio equipment inside THE IRON GYM in Wadgaon Sheri" loading="lazy" /><figcaption><span>01 / CARDIO ZONE</span><ArrowUpRight size={18} /></figcaption></figure><figure><img src={floor.url} alt="THE IRON GYM workout floor with weight equipment, mirrors and a punching bag" loading="lazy" /><figcaption><span>02 / THE TRAINING FLOOR</span><ArrowUpRight size={18} /></figcaption></figure></div>
      </section>

      <section className="enquiry-section section-space" id="enquire"><div className="page-width enquiry-grid"><div><p className="eyebrow muted-eyebrow">04 / MAKE YOUR MOVE</p><h2>Your first step.<br /><span className="text-primary">Starts here.</span></h2><p className="enquiry-copy">Have a goal in mind? Let’s talk about it.<br />Get in touch for membership options, fees<br className="desktop-break" /> and the right training for you.</p><a href={business.phoneHref} className="contact-number"><Phone size={21} />{business.phone}</a><p className="small-note">Prefer a conversation? Give us a call.</p></div>
          <form className="enquiry-form" onSubmit={prepareEnquiry} onChange={() => setPrepared(null)}><h3>Membership enquiry</h3><label htmlFor="name">Your name</label><input id="name" name="name" placeholder="Full name" autoComplete="name" required maxLength={80} /><label htmlFor="phone">Phone number <span>(optional)</span></label><input id="phone" name="phone" placeholder="Your contact number" type="tel" autoComplete="tel" maxLength={20} /><label htmlFor="interest">I’m interested in</label><div className="select-wrap"><select id="interest" name="interest" defaultValue="Membership options"><option>Membership options</option><option>Strength training</option><option>Cardio & general fitness</option><option>Zumba, yoga & group classes</option><option>Fitness coaching</option><option>Trial availability</option></select><ChevronDown size={16} /></div>
            {prepared ? <div className="prepared-enquiry" role="status"><p><Check size={16} /> Your enquiry is ready.</p><Button asChild variant="gym" size="gym"><a href={prepared} target="_blank" rel="noopener noreferrer">Open WhatsApp & send <ArrowUpRight /></a></Button><p className="small-note">Send the message in WhatsApp to complete your enquiry.</p></div> : <Button type="submit" variant="gym" size="gym" className="form-submit"><MessageCircle /> Enquire on WhatsApp <ArrowUpRight /></Button>}
            <p className="small-note">Enquiries continue in WhatsApp. No details are stored on this website. If WhatsApp is unavailable, please call.</p>
          </form></div></section>

      <section className="page-width section-space location-section" id="location"><div className="location-details"><p className="eyebrow muted-eyebrow">05 / FIND YOUR TRAINING GROUND</p><h2>Closer to home.<br />Closer to your goals.</h2><div className="location-info"><MapPin /><div><h3>Wadgaon Sheri, Pune</h3><p>{business.address}</p></div></div><div className="location-info"><Clock3 /><div><h3>Opening hours</h3><dl className="hours"><div><dt>Monday – Saturday</dt><dd>{business.weekdayHours}</dd></div><div><dt>Sunday</dt><dd>{business.sundayHours}</dd></div></dl></div></div><div className="location-actions"><Button asChild variant="gym" size="gym"><a href={business.maps} target="_blank" rel="noopener noreferrer">Get directions <ArrowUpRight /></a></Button><a className="text-link" href={business.maps} target="_blank" rel="noopener noreferrer">View on Google <ArrowUpRight size={16} /></a></div></div><div className="location-panel"><div className="location-panel-top"><MapPin size={26} /><span>YOUR NEIGHBOURHOOD GYM</span></div><div className="location-panel-city">PUNE<span>.</span></div><p className="location-panel-area">Wadgaon Sheri</p><p className="location-panel-landmark">Old Mundhwa Road<br />Near Bollywood Cinema<br />Maharashtra 411014</p><a href={business.maps} target="_blank" rel="noopener noreferrer" className="location-panel-link">Open location in Google Maps <ArrowUpRight size={20} /></a></div></section>

      <section className="closing-band"><div className="page-width"><h2>SHOW UP FOR YOURSELF.</h2><a href="#enquire">Let’s get started <ArrowUpRight /></a></div></section>
    </main>
    <footer className="site-footer"><div className="page-width"><div className="footer-top"><div><Brand /><p>YOUR NEIGHBOURHOOD. YOUR TRAINING GROUND.</p></div><nav aria-label="Footer navigation">{navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><div className="footer-contact"><a href={business.phoneHref}><Phone size={15} />{business.phone}</a><a href={enquiryUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} />WhatsApp enquiry <ArrowUpRight size={14} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} THE IRON GYM. All rights reserved.</span><span>WADGAON SHERI · PUNE</span><span>CRAFTED BY <strong>VORTEX.IO <ArrowUpRight size={12} /></strong></span></div></div></footer>
    <Button asChild variant="gym" size="icon" className="floating-whatsapp"><a href={enquiryUrl()} aria-label="Enquire with THE IRON GYM on WhatsApp" title="WhatsApp membership enquiry" target="_blank" rel="noopener noreferrer"><MessageCircle /></a></Button>
    <div className="mobile-contact-bar"><a href={business.phoneHref}><Phone />Call</a><a href={enquiryUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle />WhatsApp</a><a href="#enquire"><Dumbbell />Join us</a><a href={business.maps} target="_blank" rel="noopener noreferrer"><MapPin />Directions</a></div>
  </>;
}
