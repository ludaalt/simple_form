import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

import Form from "./components/Form";

const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <FormContainer>
      <Typography variant="h4" mb={2}>
        Задать вопрос
      </Typography>

      <Form />
    </FormContainer>
  );
};

export default App;
