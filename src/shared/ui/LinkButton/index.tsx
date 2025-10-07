import Link from "next/link";

import { cn } from "@/shared/lib";

type LinkButtonProps = {
  href: string;
  type?: string;
  label?: string;
  Icon?: React.ReactNode;
};

export const LinkButton = ({
  href,
  Icon,
  label,
  type = "primary",
}: LinkButtonProps) => (
  <Link
    href={href}
    className={cn(
      "flex cursor-pointer items-center rounded-[6px] text-[14px] leading-[21px] transition duration-200",
      type === "primary" &&
        "text-[rgb(255, 255, 255)] h-[40px] px-[10px] font-medium hover:bg-[#29292a]",
      type === "secondary" &&
        "h-[32px] border border-[#29292A] bg-[#151516] px-[10px] py-[5px] text-[#ACADAE] hover:bg-[#232324] hover:text-[#fff]"
    )}
  >
    {Icon && <span className="h-fit w-fit text-[#ACADAE]">{Icon}</span>}

    {label && <span className={cn("", Icon && "ml-[4px]")}>{label}</span>}
  </Link>
);
