import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BackToTop } from "@/components/site/BackToTop";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
