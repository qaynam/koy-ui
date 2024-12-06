import { colors, roundness, spacing, style } from '../../../styles';
import { css } from '@emotion/css';

const ListGroup = css`
	border-radius: ${roundness.default};
	background-color: ${colors.gray100};
	padding: ${spacing.large};
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: ${spacing.X10};

	& > :not(:last-child) {
		position: relative;
		&:after {
			content: '';
			display: block;
			position: absolute;
			left: 0;
			right: 0;
			bottom: calc(-${spacing.large} - 0.5px);
			height: 1px;
			background-color: ${colors.gray400};
		}
	}
`;

const ListGroupItem = css`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export default style('ListGroup', {
	ListGroup,
	ListGroupItem
});
