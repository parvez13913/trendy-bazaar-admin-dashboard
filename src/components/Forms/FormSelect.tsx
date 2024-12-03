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
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={name}
          className="text-sm  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {required && (
            <span className="text-red-500 font-semibold mr-1">*</span>
          )}
          {label}
        </label>
      )}
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
    </div>
  );
};

export default FormSelect;
