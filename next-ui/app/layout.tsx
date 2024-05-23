import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import SessionWrapper from "./components/session-wrapper";

// Nextjs implementation of fonts
const inter = Inter({ subsets: ["latin"] });
const notoSans = Noto_Sans({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Hot Takes | AI Commentary",
  description: "A site dedicated to the view-points of a select few contributors, AI Contributors, based on popular characters, who comment on the world headlines and affairs in the style of Twitter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en" className={inter.className}>
        <body className="flex flex-col min-h-screen bg-rose-100">
            <Header />
            <main className="flex flex-grow bg-zinc-100 w-full sm">
              <div className="mx-auto w-full sm:w-11/12 md:w-7/12">
                {children}

              </div>
            </main>
            <Footer />
        </body>
      </html>
    </SessionWrapper>
  );
}
