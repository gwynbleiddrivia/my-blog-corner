import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import classNames from "@/utils/classNames";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "My Blog Corner",
  description: "This is a simple blog site built using nextjs",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="dark" className="transition-all">
      <body
        className={classNames(
          roboto.variable,
          "container w-full mx-auto font-roboto"
        )}
      >
          <div className="flex max-h-screen flex-col justify-between">
            <div>
              <Navbar />
              <main className="mt-5">{children}</main>
            </div>
            <Footer />
          </div>
      </body>
    </html>
  );
};

export default RootLayout;
