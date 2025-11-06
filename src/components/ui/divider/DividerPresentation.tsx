import { cn } from '@/lib/utils';


interface DividerProps {
  className?: string;
}

/**
 * Responsible for rendering a divider component
 * 
 * @param className - Optional className
 * @returns Divider component
 */
const Divider = ({ className }: DividerProps) => {
  return (
    <div
      role="separator"
      aria-label="Divider"
      className={cn(
        'mt-6 h-1 w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 max-w-[60rem] mx-auto animate-fade-in-expand',
        className,
      )}
      style={{
        height: '1px',
        background: 'linear-gradient(to right, transparent, #e5e7eb, transparent)',
        opacity: 0.3,
      }}
    />
  );
};

export default Divider;