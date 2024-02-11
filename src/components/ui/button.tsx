import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          `
        w-auto 
        rounded-full 
        border
        border-transparent
        bg-black
        px-5 
        py-3 
        font-semibold 
        text-white
        transition
        hover:opacity-75
        disabled:cursor-not-allowed
        disabled:opacity-50
      `,
          disabled && "cursor-not-allowed opacity-75",
          className,
        )}
        disabled={disabled}
        // eslint-disable-next-line react/button-has-type
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
