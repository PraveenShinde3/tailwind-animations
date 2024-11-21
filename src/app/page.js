import BasicAnimationGuide from "@/components/BasicAnimationGuide";
import CardHolder from "@/components/CardHolder";
import Header from "@/components/Header";
import Settings from "@/components/Settings";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto container  min-h-screen py-8 pb-20 gap-16 sm:py-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex gap-4 items-center px-6 sm:px-16 md:px-40 lg:px-60 xl:px-80 sm:gap-6 ">
        <Header />
      </header>
      <main className="flex mx-6 sm:mx-12 md:mx-24 lg:mx-32 xl:mx-44 flex-col gap-8 py-6 items-center sm:items-start">
        <BasicAnimationGuide />
        <Settings />
        <CardHolder />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm pt-10 text-zinc-500">
          Made by{" "}
          <Link
            href="https://praveenshinde.com/"
            className="font-medium underline underline-offset-4 text-zinc-900"
          >
            Praveen Shinde
          </Link>
        </p>
      </footer>
    </div>
  );
}
