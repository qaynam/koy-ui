import type { colors, fonts, spacing, ZIndexs } from '.';

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
/**
 *
 * MODAL: 104
 *
 * TOAST: 110
 *
 * GLOBAL_ERROR_MODAL: 120
 *
 * ERROR_BOUNDARY: 130
 */
export type ZIndex = keyof typeof ZIndexs;
