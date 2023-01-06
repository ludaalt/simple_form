import styled from "styled-components";

import FormInput from "./FormInput";
import FormButton from "./FormButton";
import FormTextArea from "./FormTextArea";

const StyledForm = styled.form`
  min-width: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 35px;
  border-radius: 0px 50px 50px 50px;
  box-shadow: 10px 10px 60px #e2e7ff;
  position: relative;

  &::after {
    opacity: 0.3;
    z-index: -1;
    position: absolute;
    content: "";
    width: 70px;
    height: 70px;

    top: -20px;
    right: -20px;

    background: radial-gradient(
      ellipse at center,
      #a6accc 0%,
      #a6accc 30%,
      transparent 30%
    );
    background-size: 15px 15px;
    background-repeat: repeat;
  }
`;

const Form = () => {
  return (
    <StyledForm>
      <FormInput
        type="text"
        placeholder="Иван Иванов"
        label="Введите своё имя"
      />
      <FormInput
        type="tel"
        placeholder="+79999999999"
        label="Введите телефон"
      />

      <FormTextArea placeholder="Введите сообщение..." />

      <FormButton title="Отправить" />
    </StyledForm>
  );
};

export default Form;
