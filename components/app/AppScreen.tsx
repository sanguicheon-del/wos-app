import type { ReactNode } from "react";
import AppHeader from "@/components/app/AppHeader";
import MobileBottomNavigation from "@/components/app/MobileBottomNavigation";

type AppScreenProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function AppScreen({
  eyebrow,
  title,
  description,
  children,
}: AppScreenProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white pb-28 text-[#292621]">
      <div className="mx-auto min-h-screen max-w-120 px-5 pt-6 sm:px-7 sm:pt-8">
        <AppHeader />

        <section className="pt-10">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#7a7065]">{eyebrow}</p>
          <h1 className="mt-3 max-w-xl text-[28px] font-normal leading-snug tracking-[-0.025em] text-[#292621] sm:text-[32px]">
            {title}
          </h1>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#71685e]">{description}</p>
        </section>

        <section className="mt-9">{children}</section>
      </div>
      <MobileBottomNavigation />
    </main>
  );
}
