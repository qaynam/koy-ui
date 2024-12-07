import { style } from '$ui/styles';
import { css, keyframes } from '@emotion/css';

const SkeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const Skeleton = ({ width, height }: { width: string; height: string }) => css`
	display: inline-block;
	width: ${width};
	height: ${height};
	background-color: #eee;
	background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
	background-size: 200px 100%;
	background-repeat: no-repeat;
	border-radius: 4px;
	line-height: 1;
	/* width: 100%;
  height: 50px; */
	margin: 14px 0px 14px;
	animation: ${SkeletonAnimation} 1.5s infinite ease-in-out;
`;

export default style('Skeleton', { Skeleton });
