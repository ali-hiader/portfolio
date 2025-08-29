"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { HTMLAttributes, useState } from "react";

interface ScriptCopyBtnProps extends HTMLAttributes<HTMLDivElement> {
  showMultiplePackageOptions?: boolean;
  codeLanguage: string;
  command: string;
  className?: string;
}

export function ScriptCopyBtn({ command, className }: ScriptCopyBtnProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "mx-auto flex max-w-md items-center justify-center",
        className
      )}
    >
      <div className="w-full space-y-2">
        <div className="relative flex items-center">
          <button
            type="button"
            className="flex cursor-pointer items-center gap-2 py-3 text-base font-light text-black outline-hidden transition-all duration-300 hover:text-black/60 dark:text-white/75 dark:hover:text-white/90"
          >
            {command}
          </button>
          <Button
            variant="outline"
            size="icon"
            className="relative ml-2 rounded-md cursor-pointer"
            onClick={copyToClipboard}
            aria-label={copied ? "Copied" : "Copy to clipboard"}
          >
            <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
            <Copy
              className={`h-4 w-4 transition-all duration-300 ${
                copied ? "scale-0" : "scale-100"
              }`}
            />
            <Check
              className={`absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ${
                copied ? "scale-100" : "scale-0"
              }`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
