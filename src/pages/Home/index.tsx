import React, { useState } from 'react';
import { Radio, Row } from 'antd';
import { Editor } from '@toast-ui/react-editor';
import TextArea from '../../components/atoms/TextArea';
import Input from '../../components/atoms/Input';
import Typo from '../../components/atoms/Typo';
import Button from '../../components/atoms/Button';

// const Main = styled.main`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 16px;
//   width: 100%;
//   height: 100%;
//   background: ${({ theme }) => theme.common.colors.gray_1};
//   text-align: center;
// `;

function HomePage() {
	const [name, setName] = useState<string>('');
	const [isQuestion, setIsQuestion] = useState<boolean>(true);

	return (
		<div style={{ flex: 1, border: '1px solid' }}>
			<div>
				<Typo typoType="h1" color="gray_1">
					1. 제목 및 내용
				</Typo>
				<Input
					placeholder="제목을 입력하세요."
					type="text"
					name=""
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<div>
					<Editor
						placeholder="내용을 입력해주세요."
						previewStyle="vertical"
						height="300px"
						initialEditType="wysiwyg"
						useCommandShortcut={false}
					/>
				</div>
			</div>
			<div>
				<Typo typoType="h1" color="gray_1">
					2. 처리하는 항목 입력
				</Typo>
			</div>
			<div style={{ marginTop: 12 }}>
				<Typo typoType="b3" color="gray_1">
					* 필수로 처리하는 개인정보를 입력하세요.
				</Typo>
				<TextArea style={{ marginTop: 8 }} />
			</div>
			<div style={{ marginTop: 12 }}>
				<Typo typoType="b3" color="gray_1">
					선택으로 처리하는 개인정보를 입력하세요. (선택 항목이 없을 경우 빈칸)
				</Typo>
				<TextArea style={{ marginTop: 8 }} />
			</div>
			<div style={{ marginTop: 12 }}>
				<Typo typoType="b3" color="gray_1">
					* 그 밖에 개인정보가 아닌 질문을 등록하시겠어요?
				</Typo>
				<Row>
					<Button onClick={() => setIsQuestion(true)}>
						<Radio checked={isQuestion} /> 예
					</Button>
					<Button onClick={() => setIsQuestion(false)}>
						<Radio checked={!isQuestion} /> 아니오
					</Button>
				</Row>
			</div>
		</div>
	);
}

export default HomePage;
HomePage.defaultProps = { status: undefined };
