import { applyFont, borders, colors, fonts, roundness, spacing, style } from '../../../styles';
import { css } from '@emotion/css';
import type { TextAreaComponentType } from './type';

const TextArea = ({ error, width }: { error: boolean; width?: TextAreaComponentType.Width }) => css`
	border: ${borders.gray400};
	${error && `border-color: ${colors.danger};`}
	border-radius: ${roundness.default};
	background-color: ${colors.white};
	padding: ${spacing.default} ${spacing.large};
	outline: none;
	color: ${colors.dark};

	${width === 'full' && 'width: 100%;'}

	&::placeholder {
		color: ${colors.gray500};
	}

	&:disabled {
		background-color: ${colors.gray400};
		cursor: not-allowed;
	}

	&:focus {
		border-color: ${colors.black};
	}

	${applyFont(fonts.body)}

	&[type='checkbox'] {
		accent-color: ${colors.dark};
	}
`;

export default style('TextArea', { TextArea });
