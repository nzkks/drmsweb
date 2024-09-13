'use client';

import 'lenis/dist/lenis.css';
import { ReactLenis } from 'lenis/react';
import { LenisOptions } from 'lenis';

type Props = {
  root?: boolean;
  options?: LenisOptions;
};

const Lenis = ({ root, options }: Props) => {
  return <ReactLenis root={root} options={{ ...options }} />;
};

export default Lenis;
