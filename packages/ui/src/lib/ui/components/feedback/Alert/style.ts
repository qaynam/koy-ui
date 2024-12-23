import { applyFont, borders, colors, fonts, roundness, spacing, style } from '../../../styles';
import { css } from '@emotion/css';
import type { Colors } from '../../../styles/types';
import type { AlertComponentTypes } from './types';

const AlertBackground: Record<AlertComponentTypes.Type, Colors> = {
	success: 'greenExtraLight',
	error: 'dangerExtraLight',
	info: 'gray100',
	warning: 'yellowLight'
} as const;

const AlertTextColor: Record<AlertComponentTypes.Type, Colors> = {
	success: 'greenDark',
	error: 'danger',
	info: 'dark',
	warning: 'yellowDark'
} as const;

const Alert = ({ type }: { type: AlertComponentTypes.Type }) => css`
	border: ${borders.gray400};
	border-radius: ${roundness.default};
	padding: ${spacing.XLarge};
	background-color: ${colors[AlertBackground[type]]};
	color: ${colors[AlertTextColor[type]]};
	${applyFont(fonts.body)};
`;

export default style('Alert', { Alert });
