"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Gift,
  House,
  ShoppingBag,
  ShoppingCart,
  UserRound,
  type LucideIcon,
} from "lucide-react";

type NavigationItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const navigationItems: NavigationItem[] = [
  { href: "/", label: "Home", icon: House },
  { href: "/menu", label: "Đặt nước", icon: ShoppingBag },
  { href: "/offers", label: "Ưu đãi", icon: Gift },
  { href: "/cart", label: "Giỏ hàng", icon: ShoppingCart },
  { href: "/account", label: "Tài khoản", icon: UserRound },
];

export default function MobileBottomNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Điều hướng chính"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e5dfd7] bg-white px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2"
    >
      <div className="mx-auto grid max-w-120 grid-cols-5 gap-1">
        {navigationItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`flex min-h-11 min-w-0 flex-col items-center justify-center gap-1 px-1 py-1 text-center transition-colors ${
                isActive
                  ? "text-[#4b5442]"
                  : "text-[#746b61] hover:text-[#4b5442]"
              }`}
            >
              <span
                className={`flex h-6 w-9 items-center justify-center transition-colors ${
                  isActive ? "border-b border-[#4b5442]" : "border-b border-transparent"
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 1.8 : 1.5} />
              </span>
              <span className="truncate text-[10px] font-medium leading-3">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
