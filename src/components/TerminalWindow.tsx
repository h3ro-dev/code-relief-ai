import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TerminalWindowProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export const TerminalWindow = ({ children, className, title = "terminal" }: TerminalWindowProps) => {
  return (
    <div className={cn("terminal-window", className)}>
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border/30">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-error-red"></div>
          <div className="w-3 h-3 rounded-full bg-warning-yellow"></div>
          <div className="w-3 h-3 rounded-full bg-primary"></div>
        </div>
        <span className="text-xs text-muted-foreground ml-2">{title}</span>
      </div>
      {children}
    </div>
  );
};

interface CodeBlockProps {
  children: ReactNode;
  language?: string;
  className?: string;
}

export const CodeBlock = ({ children, language, className }: CodeBlockProps) => {
  return (
    <div className={cn("code-block", className)}>
      {language && (
        <div className="text-xs text-muted-foreground mb-2">
          <span className="code-comment">// {language}</span>
        </div>
      )}
      <pre className="whitespace-pre-wrap">{children}</pre>
    </div>
  );
};

interface TerminalPromptProps {
  command?: string;
  output?: ReactNode;
  className?: string;
}

export const TerminalPrompt = ({ command, output, className }: TerminalPromptProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      {command && (
        <div className="flex items-center gap-2">
          <span className="terminal-prompt">$</span>
          <span className="text-foreground">{command}</span>
        </div>
      )}
      {output && <div className="pl-4 text-muted-foreground">{output}</div>}
    </div>
  );
};