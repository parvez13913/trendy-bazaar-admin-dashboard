import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";
import { IoCalendarNumber } from "react-icons/io5";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type DatePickerProps = {
  onChange?: (valueOne: Dayjs | null, valueTwo: string) => void;
  name: string;
  size?: "large" | "small";
  value?: Dayjs;
  label?: string;
};

const FormDatePicker = ({
  name,
  size,
  value,
  label,
  onChange,
}: DatePickerProps) => {
  const { control, setValue } = useFormContext();
  const handleOnChange = (date: Date | undefined) => {
    const dayjsDate = date ? dayjs(date) : null;
    const dateString = dayjsDate ? dayjsDate.format("YYYY-MM-DD") : "";
    if (onChange) {
      onChange(dayjsDate, dateString);
    }
    setValue(name, dayjsDate);
  };

  return (
    <div className="flex flex-col w-full">
      {label && <label className="text-red-500 font-semibold">{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left",
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value
                  ? dayjs(field.value).format("MMMM DD, YYYY")
                  : "Pick a date"}
                <IoCalendarNumber className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={field.value ? new Date(field.value) : undefined}
                onSelect={(date) => {
                  field.onChange(date);
                  handleOnChange(date);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      />
    </div>
  );
};

export default FormDatePicker;
