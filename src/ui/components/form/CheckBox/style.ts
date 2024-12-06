import { colors, style } from '../../../styles';
import { css } from '@emotion/css';

const CheckBox = css`
	&[type='checkbox'] {
		accent-color: ${colors.dark};
	}
	cursor: pointer;
`;

export default style('CheckBox', { CheckBox });
