import React from "react";
import Input, { TextAreaProps as AntdTextAreaProps } from "antd/lib/input";
import styled from "styled-components";

const TextAreaContainer = styled(Input.TextArea)`
  &.ant-input {
    min-height: 50px;
    font-size: 16px;
    border-radius: 8px;

    &::placeholder {
      font-size: 16px;
    }
  }
`;

interface TextAreaProps extends AntdTextAreaProps {}

function TextArea({ ...rest }: TextAreaProps) {
  return <TextAreaContainer {...rest} />;
}

export default TextArea;
