import Hero from "./Hero"
import AboutUs from "./AboutUs";
import Programs from "./Programs";
import VolunteerForm from "./VolunteerForm";
import Testimonials from "./Testimonials";
import ContactSection from "./ContactSection";
import Donar from "./Donate";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <div >
      <Navbar />
      <Hero />
      <AboutUs />
      <Programs />
      <VolunteerForm />
      <Testimonials />
      <Donar />
      <ContactSection />
      <Footer />
      </div>
    </>
  );
}
