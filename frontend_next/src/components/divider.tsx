import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
}

export const Divider = ({ className }: DividerProps) => (
  <div 
    className={cn(
      "mt-6 h-1 w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 max-w-[60rem] mx-auto animate-fade-in-expand",
      className
    )}
    style={{
      height: '1px',
      background: 'linear-gradient(to right, transparent, #e5e7eb, transparent)',
      opacity: 0.3,
    }}
  />
);