import Hero from "@/components/Hero";
import Preview from "@/components/Preview";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="hidden lg:block">
        <Preview />
      </div>
    </main>
  );
}
