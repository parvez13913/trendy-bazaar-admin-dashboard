import { Button } from "@/components/ui/button";
import { Loader2, Upload, X } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";

type ImageUploadProps = {
  name: string;
  label?: string;
};

const ImageUpload = ({ name, label }: ImageUploadProps) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const { setValue } = useFormContext();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setLoading(true);
      const file = acceptedFiles[0];
      if (file) {
        if (file.size / 1024 / 1024 > 2) {
          alert("Image must be smaller than 2MB!");
          setLoading(false);
          return;
        }
        if (!["image/jpeg", "image/png"].includes(file.type)) {
          alert("You can only upload JPG/PNG file!");
          setLoading(false);
          return;
        }
        setValue(name, file);
        const reader = new FileReader();
        reader.onload = (e) => {
          setImageUrl(e.target?.result as string);
          setLoading(false);
        };
        reader.readAsDataURL(file);
      }
    },
    [name, setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
    maxFiles: 1,
  });

  const removeImage = () => {
    setImageUrl(undefined);
    setValue(name, null);
  };

  return (
    <div
      {...getRootProps()}
      className="relative flex items-center justify-center w-full h-60 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50"
    >
      <input {...getInputProps()} />
      {loading ? (
        <Loader2 className="w-8 h-8 animate-spin" />
      ) : imageUrl ? (
        <>
          <img
            src={imageUrl || "/placeholder.svg"}
            alt="Uploaded image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
            <Button
              variant="destructive"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                removeImage();
              }}
              className="rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </>
      ) : (
        <div className="text-center p-4">
          <Upload className="w-12 h-12 mx-auto text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            {isDragActive
              ? "Drop the image here"
              : "Drag 'n' drop an image here, or click to select one"}
          </p>
          <p className="mt-1 text-xs text-gray-500">JPG or PNG, up to 2MB</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
