// import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "../../Home/Dropdown";
import { MenuItem } from "./menuData/menu";
import { useTranslations } from "next-intl";
import { Link } from "@/app/libs/i18nNavigation";
type Props = {
  item: MenuItem;
  path: string;
};

const NavbarItem = ({ item, path }: Props) => {
  console.log(path)
  const [isDrop, setIsDrop] = useState(false);
  const t = useTranslations("Dictionary")
  return (
    <div
      onMouseEnter={() => setIsDrop(true)}
      onMouseLeave={() => setIsDrop(false)}
    >
      {/* MAIN ITEM */}
      <Link
        href={`${item.link}`}
        className={`
                block col-span-1 text-base font-bold text-center subpixel-antialiased uppercase transition-all
                z-40
                ${
                  path.split("/")[1] === item.link
                    ? "border-b-2 border-dark-main"
                    : "border-transparent border-b-2 hover:border-b-2 hover:border-dark-main "
                }
                `}
      >
        {t(item.name)}
      </Link>
      {/* DROP DOWN */}
      {item.dropdownMenu.length > 0 && isDrop && (
        <Dropdown menuData={item.dropdownMenu} />
      )}
    </div>
  );
};

export default NavbarItem;
