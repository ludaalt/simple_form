import TextField from "@mui/material/TextField";

const FormTextArea = ({ placeholder }) => {
  return (
    <TextField
      placeholder={placeholder}
      required
      fullWidth
      sx={{ mb: 2 }}
      multiline
      rows={5}
      variant="outlined"
    />
  );
};

export default FormTextArea;
