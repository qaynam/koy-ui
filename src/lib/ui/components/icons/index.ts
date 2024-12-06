import Eye from './Eye.svelte';
import EyeOff from './EyeOff.svelte';
import ArrowLeft from './ArrowLeft.svelte';
import ArrowRight from './ArrowRight.svelte';
import HamburgerMenu from './HamburgerMenu.svelte';
import Home from './Home.svelte';
import Settings from './Settings.svelte';
import Edit from './Edit.svelte';
import Pentangle from './Pentangle.svelte';
import SignOut from './SignOut.svelte';
import DeviceMobile from './DeviceMobile.svelte';
import MenuList from './MenuList.svelte';
import QRCode from './QRCode.svelte';
import Plus from './Plus.svelte';
import Check from './Check.svelte';
import Trash from './Trash.svelte';
import Selector from './Selector.svelte';
import XMark from './XMark.svelte';
import DotVertical from './DotVertical.svelte';
import Yen from './Yen.svelte';

const Icon = {
	Eye,
	EyeOff,
	ArrowRight,
	ArrowLeft,
	HamburgerMenu,
	Home,
	Settings,
	Edit,
	Pentangle,
	SignOut,
	DeviceMobile,
	MenuList,
	Plus,
	QRCode,
	Check,
	Trash,
	Selector,
	XMark,
	DotVertical,
	Yen
};

export type IconType = keyof typeof Icon;

export default Icon;
