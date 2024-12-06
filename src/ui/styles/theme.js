"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadows = exports.fonts = exports.spacing = exports.roundness = exports.borders = exports.colors = void 0;
exports.colors = Object.freeze({
    deepDark: '#0A0A0A',
    dark: '#3E3E3E',
    black: '#000000',
    blackTransparent50: 'rgba(0, 0, 0, 0.5)',
    white: '#FFFFFF',
    whiteTransparent50: 'rgba(255, 255, 255, 0.5)',
    gray: '#6D6D6D',
    gray100: '#F5F5F5',
    gray400: '#E4E4E4',
    gray500: '#BCBCBC',
    gray600: '#9B9B9B',
    dangerExtraLight: '#fee2e2',
    dangerLight: '#fca5a5',
    danger: '#F47373',
    dangerDark: '#991b1b',
    greenExtraLight: '#dcfce7',
    greenLight: '#bbf7d0',
    green: '#4ade80',
    greenDark: '#047857',
    yellowLight: '#F2F7BB',
    yellow: '#FFF855',
    yellowDark: '#9A8B04'
});
exports.borders = Object.freeze({
    /** 1px solid #FFFFFF */
    white: "1px solid ".concat(exports.colors.white),
    /** 1px solid #3E3E3E */
    dark: "1px solid ".concat(exports.colors.dark),
    /** 1px solid #F5F5F5 */
    gray100: "1px solid ".concat(exports.colors.gray100),
    /** 1px solid #E4E4E4 */
    gray400: "1px solid ".concat(exports.colors.gray400),
    /** 1px solid #BCBCBC */
    gray500: "1px solid ".concat(exports.colors.gray500)
});
exports.roundness = Object.freeze({
    /** 8px */
    default: '8px',
    /** 10 */
    large: '10px',
    /** 100% */
    full: '100%',
    /** 100px */
    _100: '100px'
});
exports.spacing = Object.freeze({
    /** 2px */
    XSmall: '2px',
    /** 4px */
    small: '4px',
    /** 6px */
    medium: '6px',
    /** 8px */
    default: '8px',
    /** 10px */
    large: '10px',
    /** 12px */
    XLarge: '12px',
    /** 16px */
    X8: '16px',
    /** 20px */
    X10: '20px',
    /** 24px */
    X12: '24px',
    /** 32px */
    X16: '32px',
    /** 40px */
    X20: '40px',
    /** 80px */
    X40: '80px'
});
exports.fonts = Object.freeze({
    /**
     * fontSize: "24px",
     * fontWeight: "700",
     * lineHeight: "normal",
     */
    title: {
        fontFamily: "'Noto Sans JP'",
        fontSize: '24px',
        fontWeight: 700,
        lineHeight: 'normal'
    },
    /**
     * fontSize: "14px",
     * fontWeight: "400",
     * lineHeight: "24px",
     */
    body: {
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px'
    },
    /**
     * fontWeight: "500",
     * fontSize: '14px',
     * lineHeight: '24px',
     */
    body_M_Bold: {
        fontFamily: "'Noto Sans JP', sans-serif",
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '24px'
    },
    /**
     * fontFamily: Noto Sans JP;
     * fontSize: 16px;
     * fontWeight: 400;
     * lineHeight: 26px;
     */
    medium: {
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '26px'
    },
    /**
     * fontFamily: Noto Sans JP;
     * fontSize: 16px;
     * fontWeight: 500;
     * lineHeight: 26px;
     */
    medium_M_bold: {
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '26px'
    },
    /**
     * fontFamily: Noto Sans JP;
     * fontSize: 12px;
     * fontWeight: 400;
     * lineHeight: 26px;
     */
    small: {
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '20px'
    },
    /**
     * fontFamily: Noto Sans JP;
     * fontSize: 12px;
     * fontWeight: 500;
     * lineHeight: 26px;
     */
    small_M_bold: {
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '20px'
    }
});
exports.shadows = Object.freeze({
    float: "0px 0px 4px 1px rgba(109, 109, 109, 0.25)",
    drop: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
});
