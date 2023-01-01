import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import Typo from "../../components/atoms/Typo";

interface ErrorPageProps {
  status?: number;
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.common.colors.gray_1};
  text-align: center;
`;

function ErrorPage({ status }: ErrorPageProps) {
  const navigate = useNavigate();
  const params = useParams();

  const renderErrorStatus = (statusCode: number) => {
    switch (statusCode) {
      case 404:
        return (
          <Main>
            <Typo typoType="hm7">
              찾을 수 없는 페이지 입니다
              <br /> 요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨어요
            </Typo>
            <div>
              <Button onClick={() => navigate("/")}>홈으로 이동</Button>
            </div>
          </Main>
        );
      case 500:
        return (
          <Main>
            <Typo typoType="hm7">페이지가 작동하지 않습니다</Typo>
            <div>
              <Button onClick={() => navigate(-1)}>새로고침</Button>
            </div>
          </Main>
        );
      case 503:
        return (
          <Main>
            <Typo typoType="hm7">서버에 문제가 발생하였습니다</Typo>
            <div>
              <Button onClick={() => navigate(-1)}>다시시도</Button>
            </div>
          </Main>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ flex: 1 }}>
      {status
        ? renderErrorStatus(status)
        : renderErrorStatus(params?.status ? Number(params.status) : 500)}
    </div>
  );
}

export default ErrorPage;
ErrorPage.defaultProps = { status: undefined };
