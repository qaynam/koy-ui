import { css } from '@emotion/css';
import { colors, shadows, spacing, style } from '$ui/styles';

const DropDown = css`
	position: relative;
	z-index: 100;
	display: inline-block;
`;

const DropDownItems = ({ align }: { align: 'left' | 'right' }) => css`
	position: absolute;
	z-index: 1;
	width: fit-content;
	${align === 'left'
		? css`
				left: 0;
			`
		: css`
				right: 0;
			`}
	top: calc(100% + ${spacing.default});
	background-color: ${colors.white};
	box-shadow: ${shadows.drop};
	padding: ${spacing.XLarge};
	border-radius: ${spacing.default};
	z-index: 103;
	border: 1px solid ${colors.gray400};
`;

const DropDownItem = css``;

export default style('DropDown', { DropDown, DropDownItems, DropDownItem });
