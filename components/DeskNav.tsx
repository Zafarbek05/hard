"use client";

import Link from "next/link";
import { navlinks } from "../constants/index";
import { usePathname, useRouter } from "next/navigation";
import cn from "clsx";

const DeskNav = () => {
    const path = usePathname();
    const router = useRouter();
    return (
        <header>
            <div className="desk_nav">
                {navlinks.map(({ title, URL }) => {
                    return (
                        <Link
                            href={URL}
                            key={title}
                            className={cn(
                                "text-base font-semibold text-gray-900",
                                {
                                    "text-blue-500":
                                        path === URL ||
                                        path.startsWith(`${URL}/`),
                                }
                            )}
                        >
                            {title}
                        </Link>
                    );
                })}
            </div>
        </header>
    );
};

export default DeskNav;
