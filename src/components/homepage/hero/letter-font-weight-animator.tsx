'use client';

import { useEffect } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  word: string;
  className?: string;
};

const LetterFontWeightAnimator = ({ word, className }: Props) => {
  useEffect(() => {
    const spans = document.querySelectorAll(
      '.hover-text span',
    ) as NodeListOf<HTMLSpanElement>;

    spans.forEach((span) => {
      span.addEventListener('mouseenter', function (this: typeof span) {
        this.style.fontWeight = '900';
        this.style.color = 'hsl(var(--accent))';

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = '700';
          leftNeighbor.style.color = 'hsla(var(--accent) / 0.4)';
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = '700';
          rightNeighbor.style.color = 'hsla(var(--accent) / 0.4)';
        }
      });

      span.addEventListener('mouseleave', function (this: typeof span) {
        this.style.fontWeight = '400';
        this.style.color = 'hsl(var(--heading))';

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = '400';
          leftNeighbor.style.color = 'hsl(var(--heading))';
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = '400';
          rightNeighbor.style.color = 'hsl(var(--heading))';
        }
      });
    });

    // return () => {
    //   spans.forEach((span) => {
    //     span.removeEventListener('mouseenter', function () {});
    //     span.removeEventListener('mouseleave', function () {});
    //   });
    // };
  }, []);

  const renderedWord = word.split('').map((letter, index) => (
    <span key={index} style={{ transition: '0.35s font-weight, 0.35s color' }}>
      {letter}
    </span>
  ));

  return <div className={cn('hover-text', className)}>{renderedWord}</div>;
};

export default LetterFontWeightAnimator;
