import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { GetErrorMessage } from "../../utils/get-error-message";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps {
  name: string;
  options: Option[];
  placeholder?: string;
  label?: string;
  required?: boolean;
}

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  options,
  placeholder,
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
        render={({ field }) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {errorMessage && <small className="text-red-500">{errorMessage}</small>}
    </>
  );
};

export default FormSelect;
