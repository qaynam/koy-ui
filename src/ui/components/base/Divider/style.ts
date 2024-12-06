import { applyFont, colors, fonts, spacing, style } from '$ui/styles';
import { css } from '@emotion/css';

const Divider = ({ text }: { text?: string }) => css`
	height: 1px;
	border: none;
	background-color: ${colors.gray400};
	width: 100%;

	${text &&
	css`
		position: relative;
		overflow: visible;
		&::before {
			content: '${text}';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: ${colors.white};
			color: ${colors.dark};
			padding: 0 ${spacing.default};
			${applyFont(fonts.small_M_bold)}
		}
	`}
`;

export default style('Divider', { Divider });
