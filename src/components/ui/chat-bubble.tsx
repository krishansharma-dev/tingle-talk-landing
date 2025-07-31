import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  animate?: boolean;
}

export const ChatBubble = ({ 
  className, 
  children, 
  variant = "primary",
  animate = false 
}: ChatBubbleProps) => {
  return (
    <div 
      className={cn(
        "chat-bubble text-white",
        animate && "chat-bubble-float",
        className
      )}
    >
      {children}
    </div>
  );
};