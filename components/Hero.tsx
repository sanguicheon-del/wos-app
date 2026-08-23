"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MobileHomeScreen from "@/components/app/MobileHomeScreen";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black">
      <Image
        src="/images/hero/hero-atelier-matcha-v1.png"
        alt="W° BYLOCOFFEE Hero Desktop"
        fill
        priority
        sizes="100vw"
        className="hidden object-cover object-center lg:block"
      />
      <div className="absolute inset-0 hidden bg-linear-to-t from-black/45 via-transparent to-black/8 lg:block" />
      <div className="absolute inset-0 hidden bg-[radial-gradient(circle_at_18%_45%,rgba(255,255,255,0.05),transparent_42%)] lg:block" />

      <div className="absolute left-16 top-12 z-20 hidden items-center gap-5 lg:flex">
        <span className="text-[58px] font-extralight tracking-tight text-[#ECE2D7]">W°</span>
        <div className="leading-5 text-[11px] uppercase tracking-[0.42em] text-[#C8BAAB]">
          <p>BYLOCOFFEE</p>
          
        </div>
      </div>

      <div className="absolute right-16 top-14 z-20 hidden lg:block">
        <p className="text-[11px] uppercase tracking-[0.45em] text-[#C9B9AA]">
          PREMIUM TAKE AWAY EXPERIENCE
        </p>
      </div>

      <div className="absolute left-16 top-1/2 z-20 hidden w-130 -translate-y-1/2 lg:left-32 lg:block xl:left-40">
        <p className="text-[10px] uppercase tracking-[0.65em] text-[#D7C9BB]">WELCOME TO</p>
        <h1 className="mt-8 text-[80px] font-extralight uppercase leading-[1.18] tracking-[0.12em] text-[#F2E8DD]">
          W° BYLOCOFFEE
          <br />
      
        </h1>
        <div className="mt-12 h-px w-20 bg-[#8D7866]" />
        <h2 className="mt-5 text-[18px] uppercase tracking-[0.34em] text-[#EEE4D9]">
          CRAFTED DRINKS. QUIET LUXURY.
        </h2>
        <p className="mt-10 max-w-130 text-[18px] leading-[2.45rem] tracking-[0.04em] text-[#C5B6A8]">
          Mỗi ly nước được tạo nên từ sự tỉ mỉ trong
          <br />
          nguyên liệu, hương vị và trải nghiệm để mỗi
          <br />
          lần thưởng thức đều đáng nhớ.
        </p>
        <Link
          href="/menu"
          className="group mt-6 inline-flex items-center gap-8 uppercase tracking-[0.34em] text-[#ECE2D8] transition-all duration-500"
        >
          <span className="text-[12px]">ĐẶT NGAY</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#8E7967] backdrop-blur-sm transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:border-[#ECE2D8] group-hover:bg-[#ECE2D8] group-hover:text-black">
            <ArrowRight size={14} strokeWidth={1.5} />
          </span>
        </Link>
      </div>

      <div className="absolute bottom-14 right-16 z-20 hidden text-right lg:block">
        <p className="text-[15px] uppercase tracking-[0.30em] text-[#EEE4D9]">W BYLOCOFFEE</p>
        <p className="mt-4 text-[11px] tracking-[0.30em] text-[#9B8877]">Premium Take Away Experience</p>
      </div>

      <div className="relative z-30 lg:hidden">
        <MobileHomeScreen />
      </div>
    </section>
  );
}
