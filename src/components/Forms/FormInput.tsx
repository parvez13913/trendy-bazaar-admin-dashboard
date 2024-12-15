import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { GetErrorMessage } from "../../utils/get-error-message";
import { Input } from "../ui/input";

interface FormInputProps {
  name: string;
  type?: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  type,
  value,
  id,
  placeholder,
  validation,
  label,
  required,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = GetErrorMessage(errors, name);
  return (
    <>
      {required ? <span className="text-red-500 font-semibold">*</span> : null}
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input
              type="password"
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              className="text-center font-semibold"
            />
          ) : (
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />
      <small className="text-red-500">{errorMessage}</small>
    </>
  );
};

export default FormInput;
