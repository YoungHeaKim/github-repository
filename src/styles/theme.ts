import { colors } from '../constants';

type HeadingTypoType =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'h7'
	| 'h8'
	| 'h9'
	| 'h10'
	| 'h11';
type HeadingMediumTypoType =
	| 'hm1'
	| 'hm2'
	| 'hm3'
	| 'hm4'
	| 'hm5'
	| 'hm6'
	| 'hm7'
	| 'hm8'
	| 'hm9'
	| 'hm10'
	| 'hm11';
type BodyTypoType =
	| 'b1'
	| 'b2'
	| 'b3'
	| 'b4'
	| 'b5'
	| 'b6'
	| 'b7'
	| 'b8'
	| 'b9';
type ButtonTypoType = 'btn1' | 'btn2' | 'btn3' | 'btn4' | 'btn5' | 'btn6';
type InputTypoType = 'input1' | 'input2' | 'input3';
type LabelTypoType = 'label1' | 'label2' | 'label3';

export type TypoType =
	| HeadingTypoType
	| HeadingMediumTypoType
	| BodyTypoType
	| ButtonTypoType
	| InputTypoType
	| LabelTypoType;

const getTypo = (typo: TypoType) => {
	let fontWeight = '400';
	let fontSize = '16px';
	let lineHeight = '24px';

	switch (typo) {
		case 'h1':
			fontWeight = '700';
			fontSize = '28px';
			lineHeight = '40px';
			break;
		case 'h2':
			fontWeight = '700';
			fontSize = '24px';
			lineHeight = '34px';
			break;
		case 'h3':
			fontWeight = '700';
			fontSize = '22px';
			lineHeight = '30px';
			break;
		case 'h4':
			fontWeight = '700';
			fontSize = '20px';
			lineHeight = '28px';
			break;
		case 'h5':
			fontWeight = '700';
			fontSize = '18px';
			lineHeight = '26px';
			break;
		case 'h6':
			fontWeight = '700';
			fontSize = '17px';
			lineHeight = '24px';
			break;
		case 'h7':
			fontWeight = '700';
			fontSize = '16px';
			lineHeight = '22px';
			break;
		case 'h8':
			fontWeight = '700';
			fontSize = '15px';
			lineHeight = '20px';
			break;
		case 'h9':
			fontWeight = '700';
			fontSize = '14px';
			lineHeight = '20px';
			break;
		case 'h10':
			fontWeight = '700';
			fontSize = '13px';
			lineHeight = '18px';
			break;
		case 'h11':
			fontWeight = '700';
			fontSize = '10px';
			lineHeight = '14px';
			break;
		case 'hm1':
			fontWeight = '500';
			fontSize = '28px';
			lineHeight = '40px';
			break;
		case 'hm2':
			fontWeight = '500';
			fontSize = '24px';
			lineHeight = '34px';
			break;
		case 'hm3':
			fontWeight = '500';
			fontSize = '22px';
			lineHeight = '30px';
			break;
		case 'hm4':
			fontWeight = '500';
			fontSize = '20px';
			lineHeight = '28px';
			break;
		case 'hm5':
			fontWeight = '500';
			fontSize = '18px';
			lineHeight = '26px';
			break;
		case 'hm6':
			fontWeight = '500';
			fontSize = '17px';
			lineHeight = '24px';
			break;
		case 'hm7':
			fontWeight = '500';
			fontSize = '16px';
			lineHeight = '22px';
			break;
		case 'hm8':
			fontWeight = '500';
			fontSize = '15px';
			lineHeight = '20px';
			break;
		case 'hm9':
			fontWeight = '500';
			fontSize = '14px';
			lineHeight = '20px';
			break;
		case 'hm10':
			fontWeight = '500';
			fontSize = '13px';
			lineHeight = '18px';
			break;
		case 'hm11':
			fontWeight = '500';
			fontSize = '12px';
			lineHeight = '16px';
			break;
		case 'b1':
			fontWeight = '400';
			fontSize = '24px';
			lineHeight = '36px';
			break;
		case 'b2':
			fontWeight = '400';
			fontSize = '22px';
			lineHeight = '34px';
			break;
		case 'b3':
			fontWeight = '400';
			fontSize = '20px';
			lineHeight = '30px';
			break;
		case 'b4':
			fontWeight = '400';
			fontSize = '18px';
			lineHeight = '28px';
			break;
		case 'b5':
			fontWeight = '400';
			fontSize = '16px';
			lineHeight = '24px';
			break;
		case 'b6':
			fontWeight = '400';
			fontSize = '15px';
			lineHeight = '20px';
			break;
		case 'b7':
			fontWeight = '400';
			fontSize = '14px';
			lineHeight = '20px';
			break;
		case 'b8':
			fontWeight = '400';
			fontSize = '13px';
			lineHeight = '18px';
			break;
		case 'b9':
			fontWeight = '400';
			fontSize = '12px';
			lineHeight = '16px';
			break;
		case 'btn1':
			fontWeight = '500';
			fontSize = '18px';
			lineHeight = '26px';
			break;
		case 'btn2':
			fontWeight = '500';
			fontSize = '16px';
			lineHeight = '24px';
			break;
		case 'btn3':
			fontWeight = '500';
			fontSize = '15px';
			lineHeight = '22px';
			break;
		case 'btn4':
			fontWeight = '500';
			fontSize = '14px';
			lineHeight = '20px';
			break;
		case 'btn5':
			fontWeight = '500';
			fontSize = '12px';
			lineHeight = '18px';
			break;
		case 'btn6':
			fontWeight = '500';
			fontSize = '10px';
			lineHeight = '14px';
			break;
		case 'input1':
			fontWeight = '400';
			fontSize = '18px';
			lineHeight = '26px';
			break;
		case 'input2':
			fontWeight = '400';
			fontSize = '16px';
			lineHeight = '22px';
			break;
		case 'input3':
			fontWeight = '400';
			fontSize = '14px';
			lineHeight = '20px';
			break;
		case 'label1':
			fontWeight = '400';
			fontSize = '16px';
			lineHeight = '16px';
			break;
		case 'label2':
			fontWeight = '400';
			fontSize = '14px';
			lineHeight = '14px';
			break;
		case 'label3':
			fontWeight = '400';
			fontSize = '12px';
			lineHeight = '12px';
			break;
		default:
			break;
	}

	return `font-weight : ${fontWeight}; font-size : ${fontSize}; line-height: ${lineHeight};`;
};

export type ButtonSizeType = 'large' | 'default' | 'small' | 'x-small';

const getButtonSizeStyle = (type: ButtonSizeType) => {
	let typoType: TypoType = 'btn2';
	let padding = '12px 16px';
	let borderRadius = '10px';

	switch (type) {
		case 'large':
			typoType = 'btn2';
			padding = '16px 18px';
			borderRadius = '12px';
			break;
		case 'default':
			typoType = 'btn2';
			padding = '12px 16px';
			borderRadius = '10px';
			break;
		case 'small':
			typoType = 'btn5';
			padding = '7px 12px';
			borderRadius = '8px';
			break;
		case 'x-small':
			typoType = 'btn6';
			padding = '6px 10px';
			borderRadius = '7px';
			break;
		default:
			break;
	}

	return `${getTypo(
		typoType,
	)} padding: ${padding}; border-radius: ${borderRadius};`;
};

export enum ButtonTypeType {
	PRIMARY = 'primary',
	DELETE = 'delete',
	UNDER_LINE = 'under_line',
	TEXT = 'text',
}

interface ButtonDefaultType {
	color: string;
	backgroundColor: string;
	borderColor: string;
	borderBottom: string | number;
}

const getButtonTypeStyle = (type: ButtonTypeType) => {
	const defaultStateStyle: ButtonDefaultType = {
		color: colors.GRAY7,
		backgroundColor: colors.GRAY3,
		borderColor: colors.NONE,
		borderBottom: 0,
	};
	const hoverStateStyle: ButtonDefaultType = {
		color: colors.GRAY7,
		backgroundColor: colors.GRAY3,
		borderColor: colors.NONE,
		borderBottom: 0,
	};
	const pressedStateStyle: ButtonDefaultType = {
		color: colors.GRAY7,
		backgroundColor: colors.GRAY1,
		borderColor: colors.NONE,
		borderBottom: 0,
	};
	const disabledStateStyle: ButtonDefaultType = {
		color: colors.GRAY2,
		backgroundColor: colors.GRAY6,
		borderColor: colors.NONE,
		borderBottom: 0,
	};

	const underLine = false;

	switch (type) {
		case 'primary':
			break;
		case 'delete':
			defaultStateStyle.color = colors.GRAY7;
			defaultStateStyle.backgroundColor = colors.PRIMARY;
			hoverStateStyle.color = colors.GRAY7;
			hoverStateStyle.backgroundColor = colors.PRIMARY;
			pressedStateStyle.color = colors.GRAY7;
			pressedStateStyle.backgroundColor = colors.PRIMARY;
			disabledStateStyle.color = colors.GRAY7;
			disabledStateStyle.backgroundColor = colors.PRIMARY;
			break;
		case 'under_line':
			defaultStateStyle.color = colors.GRAY2;
			defaultStateStyle.backgroundColor = colors.NONE;
			defaultStateStyle.borderBottom = `2px solid ${colors.GRAY1}`;
			hoverStateStyle.color = colors.GRAY5;
			hoverStateStyle.backgroundColor = colors.NONE;
			hoverStateStyle.borderBottom = `1px solid ${colors.GRAY1}`;
			pressedStateStyle.color = colors.GRAY2;
			pressedStateStyle.backgroundColor = colors.NONE;
			pressedStateStyle.borderBottom = `1px solid ${colors.GRAY1}`;
			disabledStateStyle.color = colors.GRAY5;
			disabledStateStyle.backgroundColor = colors.NONE;
			disabledStateStyle.borderBottom = `3px solid ${colors.BLUE}`;
			break;
		case 'text':
			defaultStateStyle.color = colors.GRAY2;
			defaultStateStyle.backgroundColor = colors.NONE;
			hoverStateStyle.color = colors.GRAY5;
			hoverStateStyle.backgroundColor = colors.NONE;
			pressedStateStyle.color = colors.GRAY2;
			pressedStateStyle.backgroundColor = colors.NONE;
			disabledStateStyle.color = colors.GRAY5;
			disabledStateStyle.backgroundColor = colors.NONE;
			break;
		default:
			break;
	}

	return {
		defaultStateStyle,
		hoverStateStyle,
		pressedStateStyle,
		disabledStateStyle,
		underLine,
	};
};

const theme = {
	common: {
		colors,
	},
	typo: {
		h1: getTypo('h1'),
		h2: getTypo('h2'),
		h3: getTypo('h3'),
		h4: getTypo('h4'),
		h5: getTypo('h5'),
		h6: getTypo('h6'),
		h7: getTypo('h7'),
		h8: getTypo('h8'),
		h9: getTypo('h9'),
		h10: getTypo('h10'),
		h11: getTypo('h11'),
		hm1: getTypo('hm1'),
		hm2: getTypo('hm2'),
		hm3: getTypo('hm3'),
		hm4: getTypo('hm4'),
		hm5: getTypo('hm5'),
		hm6: getTypo('hm6'),
		hm7: getTypo('hm7'),
		hm8: getTypo('hm8'),
		hm9: getTypo('hm9'),
		hm10: getTypo('hm10'),
		hm11: getTypo('hm11'),
		b1: getTypo('b1'),
		b2: getTypo('b2'),
		b3: getTypo('b3'),
		b4: getTypo('b4'),
		b5: getTypo('b5'),
		b6: getTypo('b6'),
		b7: getTypo('b7'),
		b8: getTypo('b8'),
		b9: getTypo('b9'),
		btn1: getTypo('btn1'),
		btn2: getTypo('btn2'),
		btn3: getTypo('btn3'),
		btn4: getTypo('btn4'),
		btn5: getTypo('btn5'),
		btn6: getTypo('btn6'),
		input1: getTypo('input1'),
		input2: getTypo('input2'),
		input3: getTypo('input3'),
		label1: getTypo('label1'),
		label2: getTypo('label2'),
		label3: getTypo('label3'),
	},
	button: {
		size: {
			large: getButtonSizeStyle('large'),
			default: getButtonSizeStyle('default'),
			small: getButtonSizeStyle('small'),
			'x-small': getButtonSizeStyle('x-small'),
		},
		buttonType: {
			primary: getButtonTypeStyle(ButtonTypeType.PRIMARY),
			delete: getButtonTypeStyle(ButtonTypeType.DELETE),
			under_line: getButtonTypeStyle(ButtonTypeType.UNDER_LINE),
			text: getButtonTypeStyle(ButtonTypeType.TEXT),
		},
	},
};

export type ThemeType = typeof theme;
export default theme;
