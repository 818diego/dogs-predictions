import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

interface DropZoneProps {
    onImageUpload: (file: File) => void;
    isLoading: boolean;
}

export default function DropZone({ onImageUpload, isLoading }: DropZoneProps) {
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            if (acceptedFiles.length > 0) {
                onImageUpload(acceptedFiles[0]);
            }
        },
        [onImageUpload]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            "image/*": [".jpeg", ".jpg", ".png"],
        },
        multiple: false,
        disabled: isLoading,
    });

    return (
        <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-all
        ${isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${
            isDragActive
                ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 dark:border-indigo-400"
                : "border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-400 dark:hover:bg-gray-800/50"
        }`}>
            <input {...getInputProps()} />
            <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {isDragActive
                    ? "Suelta la imagen aquí..."
                    : isLoading
                    ? "Procesando imagen..."
                    : "Arrastra y suelta una imagen aquí, o haz clic para seleccionar"}
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                PNG, JPG, JPEG hasta 10MB
            </p>
        </div>
    );
}
