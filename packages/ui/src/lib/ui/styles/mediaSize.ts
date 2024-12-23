import { css } from '@emotion/css';

export const breakpoints = Object.freeze({
	tablet: 768,
	mobile: 450
} as const);

export const MediaSize = {
	greaterThen:
		(bp: keyof typeof breakpoints) =>
		(...params: Parameters<typeof css>) => css`
			@media (min-width: ${breakpoints[bp]}px) {
				${css(...params)}
			}
		`,
	lessThen:
		(bp: keyof typeof breakpoints) =>
		(...params: Parameters<typeof css>) => {
			return css`
				@media (max-width: ${breakpoints[bp]}px) {
					${css(...params)}
				}
			`;
		},
	between:
		(bpFrom: keyof typeof breakpoints, bpTo: keyof typeof breakpoints) =>
		(...params: Parameters<typeof css>) => css`
			@media (min-width: ${breakpoints[bpFrom]}px) and (max-width: ${breakpoints[bpTo]}px) {
				${css(params)}
			}
		`
};

export const ViewContainerWidth = 414;
