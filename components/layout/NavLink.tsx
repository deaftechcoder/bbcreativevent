"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({
  href,
  label,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        relative
        text-sm
        font-medium
        transition-all
        duration-300
        hover:text-pink-400
        ${
          isActive
            ? "text-pink-400"
            : "text-white"
        }
      `}
    >
      {label}

      <span
        className={`
          absolute
          -bottom-1
          left-0
          h-[2px]
          bg-gradient-to-r
          from-pink-500
          to-violet-500
          transition-all
          duration-300
          ${
            isActive
              ? "w-full"
              : "w-0 group-hover:w-full"
          }
        `}
      />
    </Link>
  );
}