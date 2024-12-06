import { colors, shadows, spacing, style } from '$ui/styles';
import { css } from '@emotion/css';

const DropDown = css`
	position: relative;
	z-index: 100;
`;

const DropDownItems = css`
	position: absolute;
	z-index: 1;
	width: fit-content;
	top: calc(100% + ${spacing.default});
	right: 0;
	background-color: ${colors.white};
	box-shadow: ${shadows.drop};
	padding: ${spacing.XLarge};
	border-radius: ${spacing.default};
	z-index: 103;
	border: 1px solid ${colors.gray400};
`;

const DropDownItem = css``;

export default style('DropDown', { DropDown, DropDownItems, DropDownItem });
