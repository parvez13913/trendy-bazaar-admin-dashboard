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
  className?: string;
  readOnly?: boolean;
  defaultValue?: string;
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
  className,
  readOnly,
  defaultValue,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = GetErrorMessage(errors, name);
  return (
    <>
      {required ? <span className="text-red-500 font-semibold">*</span> : null}
      {label ? <span>{label}</span> : null}
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
              className={className}
            />
          ) : (
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              className={className}
              readOnly={readOnly}
              defaultValue={defaultValue}
            />
          )
        }
      />
      <small className="text-red-500">{errorMessage}</small>
    </>
  );
};

export default FormInput;
