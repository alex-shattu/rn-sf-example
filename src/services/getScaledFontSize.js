import { WINDOW_WIDTH, WINDOW_HEIGHT } from 'constants/sizes';

// Use iPhone6 as base size which is 375 x 667
const baseWidth = 375;
const baseHeight = 667;

const scaleWidth = WINDOW_WIDTH / baseWidth;
const scaleHeight = WINDOW_HEIGHT / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

export default (size, fontAddSize = 1) => Math.ceil(size * scale) + fontAddSize;
