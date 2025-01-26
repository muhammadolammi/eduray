import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
// aos_-_css
import "./styles/aos.css";

import "../scripts/main";
import { AOSINIT } from "./Pages";
// import Redirector from "@/components/Redirector/page";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduRay",
  icons: {
    icon: "/tab-logo.png",
  },

 
  description : "EduRay is an online platform that helps learners prepare for university admission exams and other academic or professional assessments using personalized tools, curated resources, and self-paced learning.",
  keywords: ["EduRay", "online learning", "university exams", "self-paced learning", "curated resources"],
 

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSINIT />
      {/* <Redirector /> */}
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
