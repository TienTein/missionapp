import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ReduxProvider } from "./redux/ReduxProvider";
import { Roboto } from "next/font/google";
import ProvidersWrapper from "./ProvidersWrapper";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ProvidersWrapper>
            <main className={`${roboto.className} bg-[#1F1E1C]`}>
              <Header />
              {children}
              <Footer />
            </main>
          </ProvidersWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
