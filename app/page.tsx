import About from "@/components/about";
import Blog from "@/components/blog";
import Brands from "@/components/brands";
import Classes from "@/components/classes";
import Hero from "@/components/hero";
import Membership from "@/components/membership";
import Team from "@/components/team";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Classes />
      <Team />
      <Membership />
      <Testimonial />
      <Blog />
      <Brands />
    </main>
  );
}
