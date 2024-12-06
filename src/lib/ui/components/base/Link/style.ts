import { applyFont, colors, fonts, style } from '../../../styles';
import { css } from '@emotion/css';

const Base = ({ underline, inline }: { underline?: boolean; inline: boolean | undefined }) => css`
	${applyFont(fonts.body)};
	color: ${colors.gray};
	text-decoration: ${underline ? 'underline' : 'none'};
	display: ${inline ? 'inline' : 'block'};
`;

export default style('Link', {
	Base
});
