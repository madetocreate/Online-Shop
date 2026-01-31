import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductGrid from "@/components/ProductGrid";
import FeaturedBanner from "@/components/FeaturedBanner";
import Categories from "@/components/Categories";
import Story from "@/components/Story";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Marquee />
      <ProductGrid />
      <FeaturedBanner />
      <Categories />
      <Story />
      <Newsletter />
      <Footer />
    </>
  );
}
