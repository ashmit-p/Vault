/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/ui/dock";
import Image from "next/image";
import FileUploader from "./FileUploader";
import { navItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo({ userId, accountId, className }:{ userId:string; accountId:string; className?:string; }) {
  const pathname=usePathname();
  return (
    <div className="mb-6 ">
      <Dock direction="middle" className="flex min-w-[45vw] justify-between gap-8 self-center overflow-hidden px-10">
        {navItems.map((item, i) => (
          <DockIcon key={i} className={cn("size-6 ", pathname === item.url && 'shad-active')}>
            <Link href={item.url} className={cn("lg:w-full", pathname === item.url && 'shad-active')} >
                 
                <Image src={item.icon} alt={item.name} width={24} height={24} className={cn("nav-icon", pathname === item.url && "nav-icon-active")} />
                 
                {/* <p className='hidden lg:block'>{item.name}</p> */}
            </Link>
          </DockIcon>
          ))}
        <DockIcon className="lg:w-full">
            <FileUploader ownerId={userId} accountId={accountId} />
        </DockIcon>
      </Dock>
    </div>
  );
}


