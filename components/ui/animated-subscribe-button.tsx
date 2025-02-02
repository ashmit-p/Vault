"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps,  AnimatePresence, motion  } from "motion/react";
import React from "react";
import Image from "next/image";

interface AnimatedSubscribeButtonProps
  extends Omit<HTMLMotionProps<"button">, "ref"> {
  subscribeStatus?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const AnimatedSubscribeButton = React.forwardRef<
  HTMLButtonElement,
  AnimatedSubscribeButtonProps
>(
  (
    
    {  className,  ...props },
    //  subscribeStatus = false, onClick, children,
    ref,
  ) => {
    // const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

    // if (
    //   React.Children.count(children) !== 2 ||
    //   !React.Children.toArray(children).every(
    //     (child) => React.isValidElement(child) && child.type === "span",
    //   )
    // ) {
    //   throw new Error(
    //     "AnimatedSubscribeButton expects two children, both of which must be <span> elements.",
    //   );
    // }

    // const childrenArray = React.Children.toArray(children);
    // const initialChild = childrenArray[0];
    // const changeChild = childrenArray[1];

    return (
      <AnimatePresence mode="wait">
        {/* isSubscribed ? */}
        { (
          <motion.button
            ref={ref}
            className={cn(
              "flex h-10  items-center justify-center overflow-hidden rounded-lg  bg-[#081927] px-2 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900",
              className,
            )}
            // onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            //   // setIsSubscribed(false);
            //   onClick?.(e);
            // }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...props}
          >
            <motion.span
              key="action"
              className="relative flex size-full items-center justify-center font-semibold "
              initial={{ y: -50 }}
              animate={{ y: 0 }}
            >
              {/* {changeChild} Use children for subscribed state */}
              {/* Upload */}
              <Image src="/assets/icons/upload-svgrepo.svg" alt='upload' width={28} height={28} className="transition-all hover:-translate-y-1"/>
            </motion.span>
          </motion.button>
        ) 
        // : (
        //   <motion.button
        //     ref={ref}
        //     className={cn(
        //       "relative flex h-10 w-fit cursor-pointer items-center justify-center rounded-lg border-none bg-neutral-900 px-6 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900",
        //       className,
        //     )}
        //     onClick={(e) => {
        //       setIsSubscribed(true);
        //       onClick?.(e);
        //     }}
        //     initial={{ opacity: 0 }}
        //     animate={{ opacity: 1 }}
        //     exit={{ opacity: 0 }}
        //     {...props}
        //   >
        //     <motion.span
        //       key="reaction"
        //       className="relative flex items-center justify-center font-semibold"
        //       initial={{ x: 0 }}
        //       exit={{ x: 50, transition: { duration: 0.1 } }}
        //     >
        //       {initialChild} {/* Use children for unsubscribed state */}
        //     </motion.span>
        //   </motion.button>
        // )
        }
      </AnimatePresence>
    );
  },
);

AnimatedSubscribeButton.displayName = "AnimatedSubscribeButton";
