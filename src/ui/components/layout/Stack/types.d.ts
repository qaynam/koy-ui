import type { Spacing } from '../../../styles/types';

export namespace StackType {
	export type Item =
		| 'auto'
		| 'start'
		| 'center'
		| 'end'
		| 'flex-start'
		| 'flex-end'
		| 'right'
		| 'left';
	export type Justify =
		| 'auto'
		| 'start'
		| 'center'
		| 'end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
		| 'flex-start'
		| 'flex-end'
		| 'left'
		| 'right';
	export type Direction = 'row' | 'column';
	export type Width = 'fill' | 'auto';
	export type Props = {
		/**
		 * XSmall: '2px',
		 *
		 * small: '4px',
		 *
		 * medium: '6px',
		 *
		 * default: '8px',
		 *
		 * large: '10px',
		 *
		 * XLarge: '12px',
		 *
		 * X8: '16px',
		 *
		 * X10: '20px',
		 *
		 * X12: '24px',
		 *
		 * X16: '32px',
		 *
		 * X20: '40px',
		 *
		 * X40: '80px'
		 */
		spacing?: Spacing;
		items?: StackType.Justify;
		justify?: StackType.Justify;
		class?: string | undefined;
		width?: StackType.Width;
		direction?: StackType.Direction;
		stripeLines?: boolean;
		wrap?: boolean;
	};
}
