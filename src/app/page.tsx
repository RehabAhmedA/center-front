import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

let options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  // month: "numeric",
  // day: "2-digit",
  // hour: "2-digit",
  // minute: "2-digit",
  //   hour12: false,
  //   timeZoneName: "short",
  timeZone: "Africa/Cairo",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Button className="">
        Hello {new Date().toLocaleString("ar-EG", options)}
      </Button>
      <Button variant="link">
        Hello {new Date().toLocaleString("ar-EG", options)}
      </Button>
      <Footer />
    </main>
  );
}
