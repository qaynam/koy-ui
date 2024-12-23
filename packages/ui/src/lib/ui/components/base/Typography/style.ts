import { css } from '@emotion/css';
import type { Align } from './types';
import type { Colors, FontKey } from '$ui/styles/types';
import { applyFont, colors, fonts, style } from '$ui/styles';
import type { Properties } from 'csstype';

const Base = ({
	fontKey,
	color,
	align,
	whiteSpace,
	wordBreak,
	truncate
}: {
	fontKey?: FontKey;
	color: Colors;
	align: Align;
	whiteSpace: Properties['whiteSpace'];
	wordBreak?: Properties['wordBreak'];
	truncate?: boolean;
}) => css`
	${applyFont(fontKey ? fonts[fontKey] : fonts.body)}
	color: ${colors[color]};
	text-align: ${align};
	${whiteSpace &&
	css`
		white-space: ${whiteSpace};
	`};
	${wordBreak &&
	css`
		word-break: ${wordBreak};
	`};

	${truncate &&
	css`
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	`};
`;

export default style('Typography', {
	Base
});
