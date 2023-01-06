import { useState, useEffect } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

import FormInput from "./FormInput";
import FormButton from "./FormButton";
import FormTextArea from "./FormTextArea";
import { isUserNameValid } from "../helpers/isUserNameValid";
import { isUserTelephoneValid } from "../helpers/isUserTelephoneValid";
import { formatUserTelephone } from "../helpers/formatUserTelephone";

import { MAX_PASSWORD_LENGTH } from "../const/passwordConst";

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
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({ name: "", telephone: "" });

  useEffect(() => {
    if (userData.telephone.length === MAX_PASSWORD_LENGTH) {
      setUserData((state) => ({
        ...state,
        telephone: formatUserTelephone(userData.telephone),
      }));
    }
  }, [userData.telephone]);

  const submitForm = (e) => {
    e.preventDefault();

    if (!isUserNameValid(userData.name)) {
      setError("Введите корректное имя");
      return;
    }

    if (!isUserTelephoneValid(userData.telephone)) {
      setError("Введите корректный номер телефона");
      return;
    }

    try {
      alert(`Данные успешно отправлены`);
    } catch (e) {
      setError(e);
    } finally {
      e.target.reset();
      setError("");
    }
  };

  return (
    <StyledForm onSubmit={submitForm}>
      {error && (
        <Typography variant="caption" color="error">
          {error}
        </Typography>
      )}

      <FormInput
        error={!!error}
        helperText={error}
        type="text"
        placeholder="Иван Иванов"
        label="Введите своё имя"
        value={userData.name}
        changeHandler={(e) =>
          setUserData((state) => ({ ...state, name: e.target.value }))
        }
      />

      <FormInput
        type="tel"
        placeholder="+79999999999"
        label="Введите телефон"
        value={userData.telephone}
        changeHandler={(e) => {
          setUserData((state) => ({ ...state, telephone: e.target.value }));
        }}
        isError={
          userData.telephone.length > 0 &&
          !isUserTelephoneValid(userData.telephone)
        }
      />

      <FormTextArea placeholder="Введите сообщение..." />

      <FormButton title="Отправить" />
    </StyledForm>
  );
};

export default Form;
