import Hero from "../components/layout/Hero/Hero";

// 🔽 sections
import Contact from "../components/sections/contact/Contact";
import Location from "../components/sections/contact/Location";
import Address from "../components/sections/contact/Address";
import SocialMedia from "../components/sections/contact/SocialMedia";
import CTA from "../components/sections/contact/CTA";

export default function ContactPage() {
  return (
    <>
      <Hero
        size="small"
        title="ติดต่อเรา"
        type="image"
        src="/images/contact-hero.jpg"
      />

      <Contact />
      <Location />
      <Address />
      <SocialMedia />
      <CTA />
    </>
  );
}