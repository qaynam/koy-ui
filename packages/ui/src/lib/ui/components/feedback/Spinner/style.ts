import { style } from '../../../styles';
import { css, keyframes } from '@emotion/css';

const IGCoreSpinnerSpin12 = keyframes`
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
	to {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
`;

const Spinner = css`
	animation-duration: 1.2s;
	animation-timing-function: steps(12);
	animation-delay: 0s;
	animation-iteration-count: infinite;
	animation-direction: normal;
	animation-fill-mode: none;
	animation-play-state: running;
	animation-name: ${IGCoreSpinnerSpin12};
`;

export default style('Spinner', { Spinner });
