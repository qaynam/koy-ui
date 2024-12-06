import { borders, colors, roundness, spacing, style } from '../../../styles';
import { css } from '@emotion/css';

type Props = {
	active: boolean;
};

const Input = css`
	appearance: none;
`;

const Item = ({ active }: Props) => css`
	border-radius: ${roundness.default};
	border: ${active ? borders.dark : borders.gray400};
	padding: ${spacing.large};
	cursor: pointer;

	transition: background-color 0.2s ease-in-out;
	${!active &&
	css`
		&:hover {
			background-color: ${colors.gray100};
		}
	`}
`;

const Radio = ({ active }: Props) => css`
	width: ${spacing.large};
	height: ${spacing.large};
	border: ${active ? borders.dark : borders.gray400};
	${active &&
	css`
		position: relative;
		&::after {
			content: '';
			position: absolute;
			margin: auto;
			inset: 0;
			border: 1px solid ${colors.white};
			background-color: ${colors.dark};
			border-radius: 100%;
		}
	`}
	border-radius: 100%;
`;

export default style('SingleChoicer', {
	Input,
	Item,
	Radio
});
