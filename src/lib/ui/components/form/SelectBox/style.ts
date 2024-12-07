import { css } from '@emotion/css';
import { borders, colors, roundness, spacing, style } from '$ui/styles';

const SelectBox = ({ error }: { error: boolean }) => css`
	select {
		appearance: none;
		background: none;
		padding-right: ${spacing.X16};
		outline: none;
		border: none;
		color: ${colors.dark};
		width: 100%;
	}

	border: ${borders.gray400};
	${error && `border-color: ${colors.danger};`}
	border-radius: ${roundness.default};
	color: ${colors.dark};
	position: relative;
	padding: ${spacing.default};

	svg {
		position: absolute;
		right: ${spacing.default};
		top: 50%;
		transform: translateY(-50%);
		z-index: -1;
	}
`;

export default style('SelectBox', { SelectBox });
