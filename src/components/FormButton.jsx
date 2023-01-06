import Button from "@mui/material/Button";

const FormButton = ({ title }) => {
  return (
    <Button type="submit" sx={{ mt: 2 }} variant="contained">
      {title}
    </Button>
  );
};

export default FormButton;
