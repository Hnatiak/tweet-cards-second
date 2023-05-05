import styled from "styled-components";

export const FormWrapper = styled.form`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  z-index: 1;
`;

export const Select = styled.select`
  padding: 12px;
//   width: 196px;
//   height: 100%;
  border-radius: 10px;
  border: none;
  background-color: #471ca9;
  font-size: 14px;
  box-shadow: 0px 3.5px 3.5px rgba(0, 0, 0, 0.25);
  appearance: button;
  outline: none;
  cursor: pointer;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Option = styled.option`
  padding: 12px;
  background-color: #ebd8ff;
  color: #373737;

  :checked {
    font-weight: 600;
  }
`;