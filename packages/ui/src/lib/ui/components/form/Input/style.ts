import { borders, colors, fonts, roundness, spacing } from '../../../styles/theme';
import { css } from '@emotion/css';
import type { InputComponentType } from './type';
import { applyFont, style } from '$ui/styles';

const ICON_WIDTH = '20px';

const Base = ({
	withIcon,
	iconPosition,
	fill,
	error
}: {
	withIcon?: boolean;
	iconPosition?: InputComponentType.IconPosition;
	fill: boolean;
	error: boolean;
}) => css`
	border: ${borders.gray400};
	${error && `border-color: ${colors.danger};`}
	border-radius: ${roundness.default};
	background-color: ${colors.white};
	padding: ${spacing.default} ${spacing.large};
	outline: none;
	color: ${colors.dark};

	&::placeholder {
		color: ${colors.gray500};
		user-select: none;
	}

	&:disabled,
	&[disabled='true'] {
		background-color: ${colors.gray400};
		cursor: not-allowed;
		-webkit-text-fill-color: ${colors.gray};
		color: ${colors.gray};
	}

	&:focus {
		border-color: ${colors.black};
	}

	${withIcon &&
	iconPosition === 'right' &&
	css`
		padding-right: calc(${ICON_WIDTH} + ${spacing.large});
	`}

	${withIcon &&
	iconPosition === 'left' &&
	css`
		padding-left: calc(${ICON_WIDTH} + ${spacing.large});
	`}

	${applyFont(fonts.body)}

	&[type='checkbox'] {
		accent-color: ${colors.dark};
	}

	${fill &&
	css`
		width: 100%;
	`}
`;

const Wrapper = css`
	display: flex;
	flex-direction: column;
	position: relative;
`;

const Icon = ({
	iconClickable,
	iconPosition
}: {
	iconClickable: boolean;
	iconPosition: InputComponentType.IconPosition;
}) => css`
	position: absolute;
	${iconPosition === 'right' &&
	css`
		right: ${spacing.default};
	`}
	${iconPosition === 'left' &&
	css`
		left: ${spacing.default};
	`}
	top: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;

	${iconClickable &&
	css`
		cursor: pointer;
	`}
`;

export default style('Input', {
	Base,
	Wrapper,
	Icon
});
