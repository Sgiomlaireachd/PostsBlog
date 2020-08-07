import styled from "styled-components";
import themes from "../../themes";

const { colors } = themes;

type ContainerProps = {
  paddingTop?: boolean;
  paddingBottom?: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  padding-top: ${(props) => (props.paddingTop ? "50px" : "0")};
  padding-bottom: ${(props) => (props.paddingBottom ? "50px" : "0")};
`;

type ButtonProps = {
  spaced?: boolean;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${colors.darkRed};
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-right: ${(props) => (props.spaced ? "15px" : "0")};
`;

type PostHeaderProps = {
  marginTop?: boolean;
};

export const PostHeader = styled.h3<PostHeaderProps>`
  margin-bottom: 15px;
  margin-top: ${(props) => (props.marginTop ? "15px" : "0")};
  font-size: 25px;
  color: ${colors.darkRed};
`;

export const PostBody = styled.p`
  margin: 15px 0;
  font-size: 16px;
  color: ${colors.lightGrey};
`;

type StyledFormProps = {
  newForm?: boolean;
};

export const StyledForm = styled.form<StyledFormProps>`
  margin-top: 20px;
  & input {
    padding: 8px 5px;
  }
`;

export const FormBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & + & {
    margin-top: 15px;
  }
`;

export const ErrorSpan = styled.span`
  color: ${colors.red};
  padding: 5px;
`;

export const FormLabel = styled.label`
  margin-right: 10px;
`;
