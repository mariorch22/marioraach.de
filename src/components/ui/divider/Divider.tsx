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
        'mt-6 h-1 w-full opacity-0 max-w-[60rem] mx-auto animate-fade-in-expand',
        className
      )}
      style={{
        height: '1px',
        background: 'linear-gradient(to right, transparent, var(--ds-gray-alpha-200), transparent)',
        opacity: 0.3,
      }}
    />
  );
};

export default Divider;
