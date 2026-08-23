import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AppHeader from "@/components/app/AppHeader";
import MobileBottomNavigation from "@/components/app/MobileBottomNavigation";

export default function MobileHomeScreen() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white pb-28 text-[#292621]">
      <div className="mx-auto w-full max-w-120 px-5 pt-6 sm:px-7 sm:pt-8">
        <AppHeader />

        <section className="pt-10" aria-labelledby="welcome-title">
          <p className="text-sm text-[#71685e]">Chào mừng bạn đến với W°</p>
          <h1 id="welcome-title" className="mt-2 text-[27px] font-normal leading-snug tracking-[-0.025em] text-[#292621] sm:text-[31px]">
            Hôm nay, bạn muốn thưởng thức gì?
          </h1>
        </section>

        <section className="mt-9" aria-labelledby="featured-drink-title">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="featured-drink-title" className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#7a7065]">
              Gợi ý hôm nay
            </h2>
            <span className="text-xs text-[#857a6e]">Được yêu thích</span>
          </div>

          <article className="mt-4 overflow-hidden border border-[#e6e0d8] bg-[#fbfaf8]">
            <div className="relative h-56 bg-[#e4e5db] sm:h-64">
              <Image
                src="/images/hero/hero-mobile.png"
                alt="Matcha BYLOCOFFEE của W° BYLOCOFFEE"
                fill
                sizes="(max-width: 480px) calc(100vw - 40px), 432px"
                className="object-cover object-[center_76%]"
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-normal tracking-[-0.02em] text-[#292621]">Matcha BYLOCOFFEE</h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-[#71685e]">
                    Matcha thanh mát, hòa quyện cùng lớp sữa dịu nhẹ.
                  </p>
                </div>
                <p className="shrink-0 pt-0.5 text-sm font-medium text-[#3d3832]">55.000đ</p>
              </div>
              <Link
                href="/menu"
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-[#4b5442] px-4 text-sm font-medium text-white transition-colors hover:bg-[#3e4636] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4b5442] focus-visible:ring-offset-2"
              >
                Đặt nước
                <ArrowRight size={16} strokeWidth={1.7} aria-hidden="true" />
              </Link>
            </div>
          </article>
        </section>
      </div>
      <MobileBottomNavigation />
    </main>
  );
}
