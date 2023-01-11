import React, { useMemo, useRef } from 'react';
import ReactQuill, { ReactQuillProps, Value } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled, { css } from 'styled-components';

interface EditorProps {
	value: Value;
	onChange: ReactQuillProps['onChange'];
	disabled?: boolean;
}

const QuillContainer = styled.div<{ isDisabled: boolean }>`
	h1,
	h2,
	h3,
	p,
	strong,
	em,
	i {
		font: revert;
	}
	.ql-editor {
		font: revert;
	}
	.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
	.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
		content: '제목1';
	}
	.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
	.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
		content: '제목2';
	}
	.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
	.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
		content: '제목3';
	}
	.ql-snow .ql-picker.ql-header .ql-picker-label::before,
	.ql-snow .ql-picker.ql-header .ql-picker-item::before {
		content: '본문';
	}
	.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
	.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
		font-size: 12px;
		content: '12px';
	}
	.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
	.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
		font-size: 18px;
		content: '18px';
	}
	.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
	.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
		content: '24px';
		font-size: 24px;
	}
	.ql-snow .ql-picker.ql-size .ql-picker-label::before,
	.ql-snow .ql-picker.ql-size .ql-picker-item::before {
		content: '14px';
		font-size: 14px;
	}

	.ql-toolbar.ql-snow + .ql-container.ql-snow {
		height: 320px;
	}
	.ql-toolbar.ql-snow {
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}
	.ql-container {
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;

		${({ isDisabled }) =>
			isDisabled &&
			css`
				cursor: not-allowed;
			`};

		&::placeholder {
			color: red;
		}
	}
	.ql-size-small {
		font-size: 12px;
	}
	.ql-size-large {
		font-size: 18px;
	}
	.ql-size-huge {
		font-size: 24px;
	}
	.ql-editor {
		font-size: 14px;
		line-height: 150%;
		color: ${({ theme }) => theme.common.colors.gray_11};
	}
`;

const format = [
	'font',
	'header',
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'indent',
	'link',
	'image',
	'video',
	'align',
];

function Editor({ value, onChange, disabled = false, ...rest }: EditorProps) {
	const quillRef = useRef<ReactQuill>(null);

	const modules = useMemo(
		() => ({
			toolbar: {
				container: [
					[{ header: ['1', '2', '3', false] }],
					[{ font: [] }],
					[{ size: ['small', false, 'large', 'huge'] }],
					['bold', 'italic', 'underline', 'strike'],
					[{ align: ['', 'center', 'right', 'justify'] }],
					[
						{ list: 'ordered' },
						{ list: 'bullet' },
						{ indent: '-1' },
						{ indent: '+1' },
					],
					['link', 'video'],
				],
				history: {
					delay: 2000,
					maxStack: 500,
					userOnly: true,
				},
				clipboard: {
					matchVisual: false,
				},
			},
		}),
		[],
	);

	return (
		<QuillContainer isDisabled={disabled}>
			<ReactQuill
				ref={quillRef}
				value={value}
				onChange={onChange}
				modules={modules}
				formats={format}
				placeholder="내용을 입력해주세요."
				theme="snow"
				readOnly={disabled}
				{...rest}
			/>
		</QuillContainer>
	);
}
export default Editor;
Editor.defaultProps = {
	disabled: false,
};
