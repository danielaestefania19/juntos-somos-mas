import Hero from "./Hero"
import AboutUs from "./AboutUs";
import Programs from "./Programs";
import VolunteerForm from "./VolunteerForm";
import Testimonials from "./Testimonials";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <>
    <div >
      <Hero />
      <AboutUs />
      <Programs />
      <VolunteerForm />
      <Testimonials />
      <ContactSection />
      </div>
    </>
  );
}
