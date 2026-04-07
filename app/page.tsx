import AppNavbar from "@/components/AppNavbar";
import BannerSec from "@/components/Banner";
import CourseDesignSection from "@/components/CourseDesignSec";
import CourseSection from "@/components/CourseSection";
import StruggleToFocusSec from "@/components/StruggleAndNoWorriesSection";
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
    </main>
  );
}
