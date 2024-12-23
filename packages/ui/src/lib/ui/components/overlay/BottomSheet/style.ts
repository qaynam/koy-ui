import { css } from '@emotion/css';
import { colors, roundness, shadows, spacing, style } from '$ui/styles';

const BottomSheet = ({ height = 30 }: { height: number | undefined }) => css`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: ${colors.white};
	border-top-left-radius: ${roundness.default};
	border-top-right-radius: ${roundness.default};
	box-shadow: ${shadows.float};
	padding: ${spacing.X10};
	z-index: 101;
	height: ${height}vh;
	overflow-y: auto;
`;

const BottomSheetBackDrop = css`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${colors.black};
	opacity: 0.5;
	z-index: 100;
`;

export default style('BottomSheet', { BottomSheet, BottomSheetBackDrop });
