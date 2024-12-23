import { colors, fonts, applyFont, style } from '../../../styles';
import { css } from '@emotion/css';

const Base = ({ required }: { required: boolean }) => css`
	color: ${colors.dark};
	text-align: justify;

	${applyFont(fonts.body_M_Bold)}

	${required &&
	css`
		&::before {
			content: '* ';
			color: ${colors.danger};
		}
	`}
`;

export default style('FormLabel', {
	Base
});
