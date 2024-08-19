import twSettings from './tailwind.settings';

const fsMin = twSettings.typography.fontSizeMin;
const fsMax = twSettings.typography.fontSizeMax;
const msFactorMin = twSettings.typography.msFactorMin;
const msFactorMax = twSettings.typography.msFactorMax;
const screenMin = twSettings.screensRem.min;
const screenMax = twSettings.screensRem['2xl'];

// Calc Min and Max Fontsize
const calcMulti = (multiMin = 0, multiMax = 0) => {
  return {
    fsMin: fsMin * Math.pow(msFactorMin, multiMin),
    fsMax: fsMax * Math.pow(msFactorMax, multiMax || multiMin),
  };
};

// build the clamp property
const clamp = (multiMin = 0, multiMax = null) => {
  const _calcMulti = calcMulti(multiMin, multiMax || multiMin);
  const _fsMin = _calcMulti.fsMin;
  const _fsMax = _calcMulti.fsMax;
  return `clamp(${_fsMin}rem, calc(${_fsMin}rem + (${_fsMax} - ${_fsMin}) * ((100vw - ${screenMin}rem) / (${screenMax} - ${screenMin}))), ${_fsMax}rem)`;
};

const twFontSizes = {
  xs: clamp(-2),
  sm: clamp(-1),
  base: clamp(0),
  lg: clamp(1),
  xl: clamp(2),
  '2xl': clamp(3),
  '3xl': clamp(4),
  '4xl': clamp(5),
  '5xl': clamp(6),
  '6xl': clamp(7),
  '7xl': clamp(8),
  '8xl': clamp(9),
  '9xl': clamp(10),
};

export default twFontSizes;
