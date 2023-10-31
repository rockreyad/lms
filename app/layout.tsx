import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

const dosis = Dosis({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin-ext", "vietnamese", "latin"],
});

export const metadata: Metadata = {
  title: "Unlock Your Child's Digital Skills | Tangnest LMS",
  description:
    "Discover our interactive courses designed to empower children with essential digital skills. Join us and unlock your child's potential. Enroll today",
  keywords:
    "tangnest, lms, Interactive learning for kids, Digital education for kids, Child-friendly online courses, Interactive learning for kids, Educational tech for children, Online courses for young learners, digital, skills, children, kids, education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dosis.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
