import { colors, style } from '$ui/styles';
import { css } from '@emotion/css';

const Overlay = css`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: ${colors.whiteTransparent50};
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	& > div {
		z-index: 2;
	}
`;

export default style('Overlay', { Overlay });
