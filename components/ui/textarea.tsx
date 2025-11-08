import * as React from "react";
import { cn } from "@/lib/utils";

// Original Textarea component (keep this)
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full text-black rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

// New Textarea with Label component
export interface TextareaWithLabelProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helper?: string;
}

const TextareaWithLabel = React.forwardRef<
  HTMLTextAreaElement,
  TextareaWithLabelProps
>(({ label, error, helper, className, ...props }, ref) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          "flex min-h-[60px] w-full text-black rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        rows={4}
        ref={ref}
        {...props}
      />
      {helper && <p className="text-xs text-gray-500">{helper}</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
});

TextareaWithLabel.displayName = "TextareaWithLabel";

export { Textarea, TextareaWithLabel };
