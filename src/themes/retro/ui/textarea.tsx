import * as React from 'react';

import {cn} from '@/lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({className, ...props}, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full border-2 border-[#808080] border-t-[#000] border-l-[#000] bg-[#000080] text-neon-cyan px-3 py-2 text-base ring-offset-background placeholder:text-dim-text focus-visible:outline-none focus-visible:border-neon-cyan focus-visible:ring-1 focus-visible:ring-neon-cyan disabled:cursor-not-allowed disabled:opacity-50 font-body',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export {Textarea};
