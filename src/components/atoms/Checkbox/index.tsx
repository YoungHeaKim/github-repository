import React from 'react';
import styled, { css } from 'styled-components';
import {
	circleCheckNoneIcon,
	circleCheckIcon,
	squareCheckIcon,
	squareCheckNoneIcon,
	transparentCheckIcon,
	transparentCheckNoneIcon,
} from '../../../assets/icon';

export type CheckboxStyleType = 'circle' | 'square' | 'transparent';
export interface CheckboxProps {
	isChecked: boolean;
	name: string;
	checkboxStyle?: CheckboxStyleType;
	onClick: React.ChangeEventHandler<HTMLInputElement>;
}

const getCheckboxStyle = (style: CheckboxStyleType) => {
	let checkedIcon;
	let noneCheckIcon;
	switch (style) {
		case 'circle':
			checkedIcon = circleCheckIcon;
			noneCheckIcon = circleCheckNoneIcon;
			break;
		case 'square':
			checkedIcon = squareCheckIcon;
			noneCheckIcon = squareCheckNoneIcon;
			break;
		case 'transparent':
			checkedIcon = transparentCheckIcon;
			noneCheckIcon = transparentCheckNoneIcon;
			break;
		default:
			return null;
	}
	return css`
		background-image: url(${noneCheckIcon});

		&:checked {
			background-image: url(${checkedIcon});
		}
	`;
};

const StyledCheckbox = styled.input<{ checkboxStyle: CheckboxStyleType }>`
	appearance: none;
	width: 24px;
	height: 24px;
	margin-right: 8px;
	border: none;
	background-repeat: no-repeat;
	background-size: cover;
	cursor: pointer;
	${({ checkboxStyle }) => getCheckboxStyle(checkboxStyle)}
`;

function Checkbox({
	name,
	checkboxStyle = 'circle',
	onClick,
	isChecked,
}: CheckboxProps) {
	return (
		<StyledCheckbox
			name={name}
			id={name}
			type="checkbox"
			onChange={onClick}
			checked={isChecked}
			checkboxStyle={checkboxStyle}
		/>
	);
}

export default Checkbox;
Checkbox.defaultProps = { checkboxStyle: 'circle' };
