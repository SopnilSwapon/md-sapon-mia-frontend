import AppFooter from "@/app/components/shared/AppFooter";
import AppNavbar from "@/app/components/shared/AppNavbar";
import BannerSec from "@/app/components/Banner";
import CourseDesignSection from "@/app/components/CourseDesignSec";
import CourseSection from "@/app/components/CourseSection";
import PricingSection from "@/app/components/PricingSection";
import StruggleToFocusSec from "@/app/components/StruggleAndNoWorriesSection";
import TestimonialSection from "@/app/components/TestimonialSection";
import VideoSection from "@/app/components/VideoSection";

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
