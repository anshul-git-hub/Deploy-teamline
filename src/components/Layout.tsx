import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { PageLoader } from "./PageLoader";
import { EnquiryPopup } from "./EnquiryPopup";
import { StickyEnquiryBar } from "./StickyEnquiryBar";
import { useReveal } from "@/hooks/useReveal";

export function Layout({ children }: { children: React.ReactNode }) {
  useReveal();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PageLoader />
      <Navbar />
      <StickyEnquiryBar />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <FloatingActions />
      <EnquiryPopup />
    </div>
  );
}
