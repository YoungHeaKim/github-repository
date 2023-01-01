import React from 'react';
import styled, { css } from 'styled-components';
import { ThemeType } from '../../../styles/theme';
import Typo from '../Typo';

export type InputType = 'text' | 'password' | 'number';
export type InputSize = 'large' | 'small';
export type InputRadius = 'large' | 'small';
export type InputStatus = 'success' | 'error' | 'normal';

export interface InputProps {
	name: string;

	isDisabled?: boolean;
	type: InputType;
	inputRadius?: InputRadius;
	inputSize?: InputSize;
	inputStatus?: InputStatus;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	value: string | number;
	maxLength?: number;
	unitText?: string;
	defaultValue?: string | number;
	placeholder?: string;
}

interface InputStyleProps {
	inputSize: InputSize;
	inputStatus: InputStatus;
	inputRadius: InputRadius;
	isDisabled: boolean;
}

const getInputRadius = (radius: InputRadius) => {
	let inputRaidus;
	switch (radius) {
		case 'large':
			inputRaidus = '12px';
			break;
		case 'small':
			inputRaidus = '8px';
			break;
		default:
			return null;
	}
	return css`
		border-radius: ${inputRaidus};
	`;
};

const getInputSize = (size: InputSize) => {
	let inputHeight;
	switch (size) {
		case 'large':
			inputHeight = '48px';
			break;
		case 'small':
			inputHeight = '32px';
			break;
		default:
			return null;
	}
	return css`
		height: ${inputHeight};
	`;
};

const getInputStatus = (inputStatus: InputStatus, theme: ThemeType) => {
	let status;
	let color;
	let outline;
	switch (inputStatus) {
		case 'error':
			status = theme.common.colors.danger_1;
			color = theme.common.colors.gray_1;
			outline = theme.common.colors.danger_1;
			break;
		case 'success':
			status = theme.common.colors.success_1;
			color = theme.common.colors.gray_1;
			outline = theme.common.colors.success_1;
			break;
		case 'normal':
			status = theme.common.colors.gray_1;
			color = theme.common.colors.gray_1;
			outline = 'none';
			break;
		default:
			return null;
	}
	return css`
		border: 1px solid ${status};
		outline: 2px solid ${outline};
		color: ${color};
	`;
};

const StyledInput = styled.input<{ inputRadius: InputRadius }>`
	width: 100%;
	height: 100%;
	background: transparent;
	outline: none;
	border: none;
	padding: 0 0 0 10px;

	&:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 1000px white inset;
		box-shadow: 0 0 0 1000px white inset;
	}

	${({ inputRadius }) => getInputRadius(inputRadius)};

	&::placeholder {
		color: ${({ theme }) => theme.common.colors.gray_1};
		${({ theme }) => theme.typo.input2};
	}

	&:disabled {
		cursor: not-allowed;
	}

	&::placeholder {
		color: ${({ theme }) => theme.common.colors.gray_1};
		${({ theme }) => theme.typo.input2};
	}
`;

const InputContainer = styled.div<InputStyleProps>`
	width: 100%;
	display: flex;
	transition: 0.3s;

	input[type='password'] {
		font-family: Verdana;
	}

	input[type='number'] {
		-moz-appearance: textfield;
	}

	${({ theme }) => theme.typo.input2};
	${({ inputRadius }) => getInputRadius(inputRadius)};
	${({ inputStatus, theme }) => getInputStatus(inputStatus, theme)};
	${({ inputSize }) => getInputSize(inputSize)};
	${({ isDisabled }) =>
		isDisabled &&
		css`
			background: ${({ theme }) => theme.common.colors.gray_1};
			border: 1px solid ${({ theme }) => theme.common.colors.gray_1};
			cursor: not-allowed;
		`}

	&:hover {
		border: 1px solid ${({ theme }) => theme.common.colors.primary_6_main};
		box-shadow: 0 0 0 2px ${({ theme }) => theme.common.colors.primary_1};
	}

	&:focus-within {
		border: 1px solid ${({ theme }) => theme.common.colors.primary_6_main};
		box-shadow: none;
	}

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	.input-icon-unit-container {
		background: transparent;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		border-bottom-right-radius: ${({ inputSize }) =>
			inputSize === 'large' ? '12px' : '7px'};
		border-top-right-radius: ${({ inputSize }) =>
			inputSize === 'large' ? '12px' : '7px'};
	}

	.icon-container {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-right: 13px;
		height: 100%;
	}

	.input-unit {
		width: max-content;
		display: flex;
		align-items: center;
		height: 100%;
		color: ${({ theme }) => theme.common.colors.gray_1};
		background-color: ${({ theme }) => theme.common.colors.gray_1};
		border-bottom-right-radius: ${({ inputSize }) =>
			inputSize === 'large' ? '12px' : '7px'};
		border-top-right-radius: ${({ inputSize }) =>
			inputSize === 'large' ? '12px' : '7px'};
		padding: 0 10px;
		user-select: none;
		z-index: 1;
	}
`;

function Input({
	placeholder,
	type,
	name,
	isDisabled = false,
	inputSize = 'small',
	inputRadius = 'small',
	inputStatus = 'normal',
	value,
	onChange,
	onKeyDown,
	maxLength = 10000,
	unitText = '',
	defaultValue,
	...rest
}: InputProps) {
	return (
		<InputContainer
			inputSize={inputSize}
			inputStatus={inputStatus}
			inputRadius={inputRadius}
			isDisabled={isDisabled}
			{...rest}
		>
			<StyledInput
				placeholder={placeholder}
				type={type}
				name={name}
				value={value}
				disabled={isDisabled}
				onChange={onChange}
				maxLength={maxLength}
				defaultValue={defaultValue}
				inputRadius={inputRadius}
				onKeyDown={onKeyDown}
			/>

			<div className="input-icon-unit-container">
				{!!unitText && (
					<span className="input-unit">
						<Typo typoType="input2" color="gray_1">
							{unitText}
						</Typo>
					</span>
				)}
			</div>
		</InputContainer>
	);
}

export default Input;
Input.defaultProps = {
	isDisabled: false,
	inputSize: 'small',
	inputRadius: 'small',
	inputStatus: 'normal',
	maxLength: 1000,
	unitText: undefined,
	defaultValue: undefined,
	placeholder: undefined,
	onKeyDown: undefined,
};
