import { cn } from '@/lib/utils';

type Props = {
  word: string;
  className?: string;
};

const LetterFontWeightAnimator = ({ word, className }: Props) => {
  const renderedWord = word.split('').map((letter, index) => (
    <span
      key={index}
      className="font-thin transition-all hover:font-black hover:text-accent"
    >
      {letter}
    </span>
  ));

  return <div className={cn('w-[275px]', className)}>{renderedWord}</div>;
};

export default LetterFontWeightAnimator;
