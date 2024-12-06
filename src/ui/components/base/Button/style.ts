import { css } from '@emotion/css';
import { style, borders, colors, fonts, roundness, shadows, spacing, applyFont } from '$ui/styles';
import type { ButtonTypes } from './types';

const ButtonContent = ({
	withIcon,
	loading,
	width,
	color,
	variant
}: {
	withIcon?: boolean;
	loading: boolean;
	width: ButtonTypes.Width;
	color?: ButtonTypes.Color;
	variant: ButtonTypes.ButtonVariant;
}) => css`
	width: 100%;
	height: 100%;
	visibility: ${loading ? 'hidden' : 'initial'};

	${variant === 'primary' &&
	css`
		color: ${colors.white};
	`}

	${color === 'danger' &&
	css`
		color: ${colors.danger};
	`}

	${withIcon &&
	css`
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: ${spacing.default};
	`};

	${width === 'center-fill' &&
	css`
		justify-content: center;
		align-items: center;
	`}
`;

const SecondaryStyle = css`
	background-color: ${colors.white};
	color: ${colors.deepDark};
	border: ${borders.gray500};
`;

const Base = ({
	variant,
	width = 'auto',
	shadow = true,
	border = true
}: {
	variant: ButtonTypes.ButtonVariant;
	width?: ButtonTypes.Width;
	shadow?: boolean;
	border: boolean;
}) => css`
	color: ${colors.gray100};
	white-space: 'nowrap';
	text-align: 'center';
	justify-content: 'center';
	border-radius: ${roundness.default};
	border: ${borders.dark};
	background-color: ${colors.deepDark};
	padding: ${spacing.default} ${spacing.large};
	border-radius: 8px;
	box-shadow: ${shadows.float};
	position: relative;
	cursor: pointer;
	word-break: keep-all;
	&:active {
		box-shadow: none;
		opacity: 0.8;
		transform: translateY(1%);
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.5;
		box-shadow: none;
	}

	${applyFont(fonts.body_M_Bold)}

	${variant === 'secondary' && SecondaryStyle};

	${variant === 'tertiary' &&
	css`
		background-color: ${colors.white};
		color: ${colors.deepDark};
		border: ${borders.gray500};
		border-radius: ${roundness._100};
		box-shadow: none;
		padding: ${spacing.XLarge} ${spacing.X10};
	`}

	${variant === 'quaternary' &&
	css`
		${SecondaryStyle};
		border: none;
	`}

	width: ${width === 'fill' || width === 'center-fill' ? '100%' : width};

	${width === 'wider' &&
	css`
		width: auto;
		padding-left: ${spacing.X16};
		padding-right: ${spacing.X16};
	`}

	${!shadow &&
	css`
		box-shadow: none;
		&:active {
			transform: translateY(0);
		}
	`}

	${!border &&
	css`
		border: none;
	`}
`;

export default style('Button', {
	Base,
	ButtonContent
});
