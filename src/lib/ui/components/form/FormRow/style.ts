import { spacing, style } from '../../../styles';
import { css } from '@emotion/css';

const Base = css`
	display: grid;
	gap: ${spacing.default};
	grid-template-columns: 1fr;
`;

export default style('FormRow', {
	Base
});
