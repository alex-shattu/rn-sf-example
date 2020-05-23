import { WINDOW_WIDTH, WINDOW_HEIGHT } from 'constants/sizes';

// Use iPhone6 as base size which is 375 x 667
const baseWidth = 375;
const baseHeight = 667;

const scaleWidth = WINDOW_WIDTH / baseWidth;
const scaleHeight = WINDOW_HEIGHT / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

export default (init, fontAddSize = 0) => ({
  fontSize: init.scaleFonts
    ? Math.ceil((init.fontSize + fontAddSize) * scale)
    : init.fontSize + fontAddSize,
  lineHeight: init.scaleFonts
    ? Math.ceil((init.lineHeight + fontAddSize) * scale)
    : init.lineHeight + fontAddSize,
});
