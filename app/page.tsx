import AppNavbar from "@/components/AppNavbar";
import BannerSec from "@/components/Banner";
import StruggleToFocusSec from "@/components/StruggleToFocus";
import VideoSection from "@/components/VideoSection";
export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <AppNavbar />
      <BannerSec />
      <VideoSection />
      <StruggleToFocusSec />
    </main>
  );
}
