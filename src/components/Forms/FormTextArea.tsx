import { Textarea } from "@/components/ui/textarea";
import { Controller, useFormContext } from "react-hook-form";

interface TextAreaProps {
  name: string;
  size?: "large" | "small";
  rows?: number;
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

const FormTextArea = ({
  name,
  size,
  value,
  placeholder,
  label,
  rows,
  required,
}: TextAreaProps) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col w-full gap-2">
      {required ? <span className="text-red-500 font-semibold">*</span> : null}
      {label ? <span className="text-black">{label}</span> : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Textarea
            id={name}
            rows={rows}
            placeholder={placeholder}
            className={size === "large" ? "h-32" : "h-20"}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
