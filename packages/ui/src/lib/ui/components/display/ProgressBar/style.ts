import { colors, style } from '../../../styles';
import { css, keyframes } from '@emotion/css';

const postDiverAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const progressInAnimation = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const ProgressBar = (
	props: { complete: boolean; canceled: boolean } = { complete: true, canceled: false }
) => css`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	height: 3px;
	background: ${props.canceled
		? colors.danger
		: css`#3e3e3e linear-gradient(to right, #3e3e3e, #E4E4E4, #3e3e3e, #E4E4E4, #3e3e3e)`};
	width: ${props.complete || props.canceled ? css`100%` : css`80%`};
	background-size: 200% 200%;
	animation:
		${postDiverAnimation} 1s linear infinite,
		${progressInAnimation} 0.5s ease-in-out;

	transition: width 0.25s linear;
`;

export default style('ProgressBar', { ProgressBar });
