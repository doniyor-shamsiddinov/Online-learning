import styled from "styled-components"

export const ButtonWrapper = styled.button`
  background: ${(props) => props.propsBackGround};
  border: ${(props) => props.borderWeight} solid ${(props) => props.borderColor};
  color: ${(props) => props.propsColor};
  box-shadow: ${(props) => props.boxShadow};
  transition: all ease 0.3s;
  
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  cursor: pointer;
  padding: 10px 40px;
  outline: none;
  border: none;
  border-radius: 80px;
  
  &:hover {
    opacity: ${(props) => props.opacity};
    color: ${(props) => props.hoverColor};
    background: ${(props) =>  props.hoverBackground};
    border: ${(props) => props.borderWeight} solid ${(props) =>  props.hoverBorder};
  }
`
