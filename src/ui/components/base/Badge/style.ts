import { colors, spacing, style } from '$ui/styles';
import type { Colors } from '$ui/styles/types';
import { css } from '@emotion/css';

const Badge = ({ bg }: { bg: Colors }) => css`
	background-color: ${colors[bg]};
	border-radius: calc(28px / 2);
	padding: ${spacing.XSmall} ${spacing.default};
	vertical-align: middle;
	display: flex;
	align-items: center;
	justify-content: center;
	width: fit-content;
`;

export default style('Badge', { Badge });
