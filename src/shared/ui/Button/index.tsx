import { cn } from "@/shared/lib";

type ButtonProps = {
  type?: string;
  label?: string;
  Icon?: React.ReactNode;
};

export const Button = ({ label, Icon, type = "primary" }: ButtonProps) => (
  <button
    type="button"
    className={cn(
      "cursor-pointer rounded-[6px] transition duration-200",
      type === "primary" &&
        "text-[rgb(255, 255, 255)] h-[40px] px-[16px] text-[13.8px] leading-[21px] font-medium hover:bg-[#29292a]",
      type === "secondary" &&
        "h-[32px] border border-[#29292A] bg-[#151516] px-[10px] py-[4.5px] text-[14px] leading-[21px] text-[#ACADAE] hover:bg-[#232324] hover:text-[#fff]"
    )}
  >
    {Icon && Icon}

    {label}
  </button>
);
