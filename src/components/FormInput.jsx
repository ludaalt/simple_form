import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

const FormInput = ({ type, placeholder, label, changeHandler, isError }) => {
  return (
    <>
      <InputLabel sx={{ mb: 1 }}>{label}</InputLabel>
      <Input
        type={type}
        placeholder={placeholder}
        required
        fullWidth
        sx={{ mb: 2 }}
        autoComplete="off"
        onChange={(e) => changeHandler(e)}
        error={isError}
      />
    </>
  );
};

export default FormInput;
