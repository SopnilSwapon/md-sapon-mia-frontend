import AppFooter from "@/components/AppFooter";
import AppNavbar from "@/components/AppNavbar";
import BannerSec from "@/components/Banner";
import CourseDesignSection from "@/components/CourseDesignSec";
import CourseSection from "@/components/CourseSection";
import PricingSection from "@/components/PricingSection";
import StruggleToFocusSec from "@/components/StruggleAndNoWorriesSection";
import TestimonialSection from "@/components/TestimonialSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <AppNavbar />
      <BannerSec />
      <VideoSection />
      <StruggleToFocusSec />
      <CourseDesignSection />
      <CourseSection />
      <TestimonialSection />
      <PricingSection />
      <AppFooter />
    </main>
  );
}
