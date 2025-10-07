import { User } from "@/assets";
import { Button, LinkButton } from "@/shared";

import { SearchBar } from "./ui/SearchBar";

export const Header = () => {
  return (
    <header className="w-[calc(100% - 52px)] fixed top-0 right-0 left-[52px] z-40 flex items-center justify-between border-b border-[#26272D] bg-[#141415] px-[24px] py-[12px]">
      <SearchBar />

      <div className="flex items-center gap-1.5">
        <Button label="Connect Wallet" />

        <hr className="h-[24px] w-[1px] border-0 bg-[#26272D]" />

        <LinkButton href="#" Icon={<User className="h-[20px] w-[20px]" />} />
      </div>
    </header>
  );
};
