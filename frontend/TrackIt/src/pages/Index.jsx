import AdminSection from "../components/landing/AdminSection";
import CTASection from "../components/landing/CTASection";
import FeaturesSection from "../components/landing/FeaturesSection";
import Footer from "../components/landing/Footer";
import HeroSection from "../components/landing/HeroSection";
import Navbar from "../components/landing/Navbar";
import ProblemSection from "../components/landing/ProblemSection";
import ReportingSection from "../components/landing/ReportingSection";
import UseCasesSection from "../components/landing/UseCasesSection";
import UserSection from "../components/landing/UserSection";
import WorkflowSection from "../components/landing/WorkflowSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <ProblemSection />
        <FeaturesSection />
        <UserSection />
        <AdminSection />
        <ReportingSection />
        <WorkflowSection />
        <UseCasesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
