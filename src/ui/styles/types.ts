import type { colors, fonts, spacing } from '.';

export type FontKey = keyof typeof fonts;
export type Font = (typeof fonts)[FontKey];

/**
 * XSmall: '2px',
 *
 * small: '4px',
 *
 * medium: '6px',
 *
 * default: '8px',
 *
 * large: '10px',
 *
 * XLarge: '12px',
 *
 * X8: '16px',
 *
 * X10: '20px',
 *
 * X12: '24px',
 *
 * X16: '32px',
 *
 * X20: '40px',
 *
 * X40: '80px'
 */
export type Spacing = keyof typeof spacing;
export type Colors = keyof typeof colors;
