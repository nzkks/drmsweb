'use client';

import Link from 'next/link';
import { useLenis } from 'lenis/react';

import { useReadingProgress } from '@/hooks';

const ToTopLinkWithProgress = ({
  size = 120,
  strokeWidth = 10,
}: {
  size?: number;
  strokeWidth?: number;
}) => {
  const lenis = useLenis();

  const completion = useReadingProgress();
  if (completion < 10 || completion > 95) return;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashOffset = circumference - (completion / 100) * circumference;
  const halfSize = size / 2;

  return (
    <Link
      href="#top"
      onClick={(e) => {
        if (lenis) {
          e.preventDefault();
          lenis.scrollTo('#top');
        }
      }}
      className="group fixed bottom-4 right-4 z-50"
    >
      <div className={`relative size-${size}`}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            className="stroke-current text-background"
            strokeWidth={strokeWidth}
            cx={halfSize}
            cy={halfSize}
            r={radius}
            fill="transparent"
          />

          <circle
            className="stroke-current text-accent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            cx={halfSize}
            cy={halfSize}
            r={radius}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashOffset}
            transform={`rotate(-90 ${halfSize} ${halfSize})`}
          />

          <path
            d="M1.50005 1.05005C1.25152 1.05005 1.05005 1.25152 1.05005 1.50005C1.05005 1.74858 1.25152 1.95005 1.50005 1.95005L13.5 1.95005C13.7486 1.95005 13.95 1.74858 13.95 1.50005C13.95 1.25152 13.7486 1.05005 13.5 1.05005H1.50005ZM3.93188 7.43169C3.75614 7.60743 3.75614 7.89236 3.93188 8.06809C4.10761 8.24383 4.39254 8.24383 4.56827 8.06809L7.05007 5.58629V13.5C7.05007 13.7485 7.25155 13.95 7.50007 13.95C7.7486 13.95 7.95007 13.7485 7.95007 13.5L7.95007 5.58629L10.4319 8.06809C10.6076 8.24383 10.8925 8.24383 11.0683 8.06809C11.244 7.89235 11.244 7.60743 11.0683 7.43169L7.81827 4.18169C7.64254 4.00596 7.35761 4.00596 7.18188 4.18169L3.93188 7.43169Z"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-foreground group-hover:fill-heading"
            transform="translate(10 12) scale(2)"
          ></path>
        </svg>
      </div>
    </Link>
  );
};

export default ToTopLinkWithProgress;
