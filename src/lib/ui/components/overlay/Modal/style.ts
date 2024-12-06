import { MediaSize, colors, roundness, spacing, style } from '../../../styles';
import { css } from '@emotion/css';
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

const Modal = ({ size }: { size: ModalTypes.Size }) => css`
	align-self: center;
	position: relative;
	min-width: ${size === 'large' ? 480 : 320}px;
	max-width: ${size === 'large' ? 680 : 480}px;
	min-height: ${size === 'large' ? 600 : 200}px;
	margin: auto;
	z-index: 105;
	background-color: ${colors.white};
	border-radius: ${roundness.default};
	display: flex;
	flex-direction: column;

	${MediaSize.lessThen('tablet')`
		width: 90%;
		max-height: 80%;
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
	width: 100%;
	overflow-y: auto;
`;

const Footer = css`
	padding: ${spacing.X8};
	background-color: ${colors.gray100};
	border-bottom-left-radius: ${roundness.default};
	border-bottom-right-radius: ${roundness.default};
`;

export default style('Modal', { Modal, BackDrop, Header, Body, Footer, ModalWrapper });
