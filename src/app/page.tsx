"use client";
import Navbar from "./_components/Navbar";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import DataTable from "./_components/DataTable";
import CompanyLogosSection from "./_components/IconsComponent";
import ScoutAISection from "./_components/AiComponent";
import ScoutTestimonialSection from "./_components/ScoutTestimonialSection";
import ScoutPricingSection from "./_components/ScoutPricingSection";
import ScoutDedicatedSupportSection from "./_components/ScoutDedicatedSupportSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-[#313839] to-[#493F49] text-white">
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Header />
      
      <DataTable />

      <CompanyLogosSection/>
      <ScoutAISection/>
      <ScoutTestimonialSection/>
      <ScoutPricingSection/>
      <ScoutDedicatedSupportSection/>
      {/* Footer */}
      <Footer />
    </div>
  );
}