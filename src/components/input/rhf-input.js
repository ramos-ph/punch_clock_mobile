import { Controller } from "react-hook-form";
import Input from "./input";

const RHFInput = ({ control, name, placeholder, height, editable = true }) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { value, onChange, onBlur } }) => (
      <Input
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor="grey"
        height={height}
        editable={editable}
      />
    )}
  />
);

export default RHFInput;
