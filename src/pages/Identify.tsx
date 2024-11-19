import { useState } from "react";
import DropZone from "../components/ImageUpload/DropZone";
import BreedCard from "../components/BreedResult/BreedCard";
import { useModel } from "../hooks/useModel";
import { DogBreed } from "../types";

interface PredictionResult {
    breed: DogBreed;
    confidence: number;
}

export default function Identify() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [predictions, setPredictions] = useState<PredictionResult[] | null>(
        null
    );
    const { isLoading, error, predictImage } = useModel();

    const handleImageUpload = async (file: File) => {
        try {
            // Crear URL para la imagen seleccionada
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setPredictions(null);

            // Crear elemento de imagen para el procesamiento
            const img = new Image();
            img.src = imageUrl;

            img.onload = async () => {
                const results = await predictImage(img);
                if (results) {
                    setPredictions(results);
                }
            };
        } catch (err) {
            console.error("Error processing image:", err);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Identificador de Razas
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Sube una foto de tu perro y descubre su raza y
                    características
                </p>
            </div>

            <div className="space-y-8">
                <DropZone
                    onImageUpload={handleImageUpload}
                    isLoading={isLoading}
                />

                {error && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg">
                        {error}
                    </div>
                )}

                {selectedImage && (
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Imagen Seleccionada
                        </h2>
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="w-full max-h-64 object-cover rounded-lg shadow-md dark:shadow-gray-900/30"
                        />
                    </div>
                )}

                {predictions && (
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Top Predicciones
                        </h2>
                        {predictions.map((prediction, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-gray-900 dark:text-white">
                                        {prediction.breed
                                            ? prediction.breed.name
                                            : "Raza desconocida"}
                                    </span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {(prediction.confidence * 100).toFixed(
                                            2
                                        )}
                                        %
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
                                    <div
                                        className="bg-blue-600 h-4 rounded-full"
                                        style={{
                                            width: `${(
                                                prediction.confidence * 100
                                            ).toFixed(2)}%`,
                                        }}></div>
                                </div>
                            </div>
                        ))}
                        <div className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Raza Identificada
                            </h2>
                            <BreedCard breed={predictions[0].breed} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
