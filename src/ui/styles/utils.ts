import { css } from '@emotion/css';
import type { Font } from './types';

export const applyFont = (font: Font) => {
	return css(font);
};
