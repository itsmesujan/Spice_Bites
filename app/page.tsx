import type { Metadata } from "next";
import Header            from "@/components/Header";
import Footer            from "@/components/Footer";
import Hero              from "@/components/sections/Hero";
import TrustBar          from "@/components/sections/TrustBar";
import About             from "@/components/sections/About";
import SignatureFeatures  from "@/components/sections/SignatureFeatures";
import MenuPreview        from "@/components/sections/MenuPreview";
import ChefStory          from "@/components/sections/ChefStory";
import GallerySection     from "@/components/sections/GallerySection";
import CourseCta          from "@/components/sections/CourseCta";
import StoreInfo          from "@/components/sections/StoreInfo";

export const metadata: Metadata = {
  title: "スパイスバイツ | 平針・天白区の本格インド料理レストラン",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <SignatureFeatures />
        <MenuPreview />
        <ChefStory />
        <GallerySection />
        <CourseCta />
        <StoreInfo />
      </main>
      <Footer />
    </>
  );
}
