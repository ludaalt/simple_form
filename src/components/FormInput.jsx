import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

const FormInput = ({ type, placeholder, label }) => {
  return (
    <>
      <InputLabel sx={{ mb: 1 }}>{label}</InputLabel>
      <Input
        type={type}
        placeholder={placeholder}
        required
        fullWidth
        sx={{ mb: 2 }}
      />
    </>
  );
};

export default FormInput;
