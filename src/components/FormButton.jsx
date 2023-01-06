import Button from "@mui/material/Button";

const FormButton = ({ title }) => {
  return (
    <Button sx={{ mt: 2 }} variant="contained">
      {title}
    </Button>
  );
};

export default FormButton;
