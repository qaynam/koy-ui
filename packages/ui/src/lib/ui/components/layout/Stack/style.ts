import { colors, spacing, style } from '../../../styles';
import { css } from '@emotion/css';
import type { StackType } from './types';
import type { Spacing } from '../../../styles/types';

const Stack = ({
	items,
	justify,
	width,
	direction,
	spacing: spacingType,
	wrap
}: {
	items?: StackType.Justify;
	justify?: StackType.Justify;
	width?: StackType.Width;
	direction?: StackType.Direction;
	spacing?: Spacing;
	wrap?: boolean;
}) => css`
	display: flex;
	flex-direction: ${direction || 'row'};
	${items &&
	css`
		align-items: ${items};
	`}
	${justify &&
	css`
		justify-content: ${justify};
	`}
	${width &&
	css`
		width: ${width === 'fill' ? '100%' : 'auto'};
	`}

	${spacingType &&
	css`
		gap: ${spacing[spacingType]};
	`}
	
	${wrap &&
	css`
		flex-wrap: wrap;
	`}
`;

const StripeLines = ({ direction }: { direction?: StackType.Direction }) => css`
	position: relative;
	&::before {
		content: '';
		position: absolute;
		background: ${colors.gray400};
		${direction === 'row' &&
		css`
			top: 0;
			bottom: 0;
			left: 50%;
			width: 1px;
			transform: translateX(-50%);
		`}

		${direction === 'column' &&
		css`
			left: 0;
			right: 0;
			top: 50%;
			height: 1px;
			transform: translateY(-50%);
		`}
	}
`;

export default style('Stack', {
	Stack,
	StripeLines
});
