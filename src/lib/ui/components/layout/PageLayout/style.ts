import { spacing, style } from '../../../styles';
import { css } from '@emotion/css';

const Wrapper = css`
	padding: 0 ${spacing.default};
	padding-top: ${spacing.X40};
	max-width: 350px;
	margin: 0 auto;
`;

export default style('AuthLayout', {
	Wrapper
});
