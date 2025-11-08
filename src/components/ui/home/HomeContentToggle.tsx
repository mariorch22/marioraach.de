'use client';
import { Children, ReactNode, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  leftLabel?: string;
  rightLabel?: string;
  className?: string;
};

export default function HomeContentToggle({
  children,
  leftLabel = 'Blog',
  rightLabel = 'Essays',
  className,
}: Props) {
  const [selected, setSelected] = useState<'left' | 'right'>('left');

  const [left, right] = useMemo(() => {
    const arr = Children.toArray(children);
    return [arr[0] ?? null, arr[1] ?? null];
  }, [children]);

  return (
    <div className={cn('w-full', className)}>
      {/* Underline tabs */}
      <nav className="mt-6 border-b border-gray-alpha-800">
        <ul className="flex gap-6 text-sm">
          <li>
            <button
              type="button"
              onClick={() => setSelected('left')}
              className={cn(
                'inline-block border-b-2 pb-3',
                selected === 'left'
                  ? 'border-white'
                  : 'border-transparent hover:border-gray-alpha-600'
              )}
            >
              {leftLabel}
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => setSelected('right')}
              className={cn(
                'inline-block border-b-2 pb-3',
                selected === 'right'
                  ? 'border-white'
                  : 'border-transparent hover:border-gray-alpha-600'
              )}
            >
              {rightLabel}
            </button>
          </li>
        </ul>
      </nav>

      {/* Content: only show selected on all screen sizes */}
      <div className="grid grid-cols-1 gap-10 mt-6">
        <div
          aria-hidden={selected !== 'left'}
          className={cn(selected === 'left' ? 'block' : 'hidden')}
        >
          {left}
        </div>
        <div
          aria-hidden={selected !== 'right'}
          className={cn(selected === 'right' ? 'block' : 'hidden')}
        >
          {right}
        </div>
      </div>
    </div>
  );
}
