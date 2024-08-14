'use client';

import { useReadingProgress } from '@/hooks';

const ToTopLinkWithProgress = ({
  size = 120,
  strokeWidth = 10,
}: {
  size?: number;
  strokeWidth?: number;
}) => {
  const completion = useReadingProgress();

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashOffset = circumference - (completion / 100) * circumference;
  const halfSize = size / 2;

  return (
    <div className="fixed bottom-4 right-4 z-50">
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

          <text
            x={halfSize}
            y={halfSize}
            fontSize="12"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {Number(completion.toFixed(1))}%
          </text>
        </svg>
      </div>
    </div>
  );
};

export default ToTopLinkWithProgress;
