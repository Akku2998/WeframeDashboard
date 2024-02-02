import { Urbanist } from "next/font/google";
import { Layout, Hero, TopArticles } from "@/components";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });

export default function Home() {
  return (
    <main lang="en" className={`${urbanist.variable} sans-serif`}>
      <Layout>
        <div className="p-10">
          <Hero />
        </div>
        <TopArticles />
      </Layout>
    </main>
  );
}
