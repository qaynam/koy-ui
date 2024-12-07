import { css } from '@emotion/css';
import { MediaSize, colors, roundness, spacing, style } from '../../../styles';
import type { ModalTypes } from './type';

const ModalWrapper = css`
	display: grid;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 103;
	background: unset;
`;

const LargeModalStyle = css`
	width: 60%;
	min-width: 604px; /** 商品画像のモーダルが改行されない幅 */
	min-height: 200px;
	max-height: 80%;
`;

const MediumModalStyle = css`
	max-width: 520px;
	min-height: 200px;
	max-height: 80%;
`;

// const SmallModalStyle = css`
// 	width: 320px;
// 	min-height: 200px;
// 	max-height: 80%;
// `;

const DefaultModalStyle = css`
	width: 320px;
	min-height: 200px;
	max-height: 80%;
`;

const Modal = ({ size }: { size: ModalTypes.Size }) => css`
	align-self: center;
	position: relative;
	margin: auto;
	z-index: 105;
	background-color: ${colors.white};
	border-radius: ${roundness.default};
	display: flex;
	flex-direction: column;

	${size === 'large' &&
	css`
		${LargeModalStyle}
	`}
	${size === 'medium' &&
	css`
		${MediumModalStyle}
	`}
	${size === 'default' &&
	css`
		${DefaultModalStyle}
	`}


	${MediaSize.lessThen('tablet')`
		width: 95%;
		min-width: 95%;
		max-height: 95%;
	`}
`;

const BackDrop = css`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${colors.blackTransparent50};
	z-index: 104;
`;

const Header = css`
	padding: ${spacing.X8};
	background-color: ${colors.gray100};
	border-top-left-radius: ${roundness.default};
	border-top-right-radius: ${roundness.default};
`;

const Body = css`
	padding: ${spacing.X8};
	flex-grow: 1;
	height: 100%;
	overflow-y: auto;
	word-break: break-all;
`;

const Footer = css`
	padding: ${spacing.X8};
	background-color: ${colors.gray100};
	border-bottom-left-radius: ${roundness.default};
	border-bottom-right-radius: ${roundness.default};
`;

export default style('Modal', { Modal, BackDrop, Header, Body, Footer, ModalWrapper });
