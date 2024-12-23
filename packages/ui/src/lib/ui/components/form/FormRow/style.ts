import { spacing, style } from '../../../styles';
import { css } from '@emotion/css';

const Base = css`
	display: flex;
	gap: ${spacing.default};
	flex-direction: column;
`;

export default style('FormRow', {
	Base
});
