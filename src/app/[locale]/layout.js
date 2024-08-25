import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Client from "./Client"; // Import the Client Component
import { Poppins, Noto_Kufi_Arabic } from "next/font/google";
import Header from "@/components/home/Header";
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/common/default-footer";

// Cairo font
const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--title-font-family",
});

// Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--title-font-family",
});

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale == "ar" ? "rtl" : "ltr"}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`body ${
          locale == "ar" ? notoKufiArabic.variable : poppins.variable
        }`}
        cz-shortcut-listen="false"
      >
        <div className="wrapper ovh">
          <NextIntlClientProvider messages={messages}>
            {/* Render the Client Component */}
            <Client>
              {/* Main Header Nav */}
              <Header />
              {/* End Main Header Nav */}
              {/* Mobile Nav  */}
              <MobileMenu />
              {/* End Mobile Nav  */}
              {children}
              {/* Start Our Footer */}
              <section
                style={{ background: "#425d79" }}
                className="footer-style1 pt60 pb-0"
              >
                <Footer />
              </section>
              {/* End Our Footer */}
            </Client>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
