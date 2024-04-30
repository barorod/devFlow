"use client";

import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSideBar = () => {
  const pathName = usePathname();

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((i) => (
          <Link
            className={`${
              pathName === i.route
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900"
            }  flex items-center justify-start gap-4 bg-transparent p-4`}
            key={i.label}
            href={i.route}>
            <Image
              src={i.imgURL}
              alt={i.label}
              width={20}
              height={20}
              style={{ color: "transparent" }}
            />
            {i.label}
          </Link>
        ))}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary inline-flex h-9 min-h-[41px] w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-slate-50 shadow-none transition-colors hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                height={20}
                width={20}
                className="invert-colors lg:hidden"
                style={{ color: "transparent" }}
              />
              <span className="primary-text-gradient max-lg:hidden">
                Sign In
              </span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 inline-flex h-9 min-h-[41px] w-full items-center justify-center rounded-lg border bg-slate-900 px-4 py-3 text-sm font-medium shadow-none transition-colors hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 dark:focus-visible:ring-slate-300">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="sign up"
                height={20}
                width={20}
                className="invert-colors lg:hidden"
                style={{ color: "transparent" }}
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};
export default LeftSideBar;
