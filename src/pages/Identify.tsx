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
    const { isLoading, error, predictImage, setIsLoading } = useModel();

    const handleImageUpload = async (file: File) => {
        try {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
            setPredictions(null);
            setIsLoading(true);

            const img = new Image();
            img.src = imageUrl;

            img.onload = async () => {
                const results = await predictImage(img);
                setIsLoading(false);
                if (results) {
                    setPredictions(results);
                }
            };
        } catch (err) {
            console.error("Error processing image:", err);
            setIsLoading(false);
        }
    };

    const handleNewPrediction = () => {
        setSelectedImage(null);
        setPredictions(null);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Identificador de Razas
                    </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                        Sube una foto de tu perro y descubre su raza y
                        características
                    </p>
                </div>
                <button
                    onClick={handleNewPrediction}
                    className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                    Predecir otra raza
                </button>
            </div>

            <div className="space-y-8">
                {!selectedImage && (
                    <DropZone
                        onImageUpload={handleImageUpload}
                        isLoading={isLoading}
                    />
                )}

                {error && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg">
                        {error}
                    </div>
                )}

                {selectedImage && (
                    <div className="mt-12 flex flex-col md:flex-row justify-start items-start space-y-8 md:space-y-0 md:space-x-8 w-full">
                        {/* Contenedor principal de dos columnas */}
                        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col space-y-8">
                            {/* Imagen de vista previa */}
                            <div className="w-full">
                                <img
                                    src={selectedImage}
                                    alt="Selected"
                                    className="mt-8 w-80 h-80 object-cover rounded-lg shadow-md dark:shadow-gray-900/30"
                                />
                            </div>

                            {/* Predicciones */}
                            {predictions && (
                                <div className="w-full">
                                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        Top Predicciones
                                    </h2>
                                    <div className="grid grid-cols-1 gap-2">
                                        {predictions
                                            .filter(
                                                (prediction) =>
                                                    prediction.confidence > 0.01
                                            )
                                            .map((prediction, index) => {
                                                let progressColor =
                                                    "bg-blue-600";
                                                if (
                                                    prediction.confidence > 0.7
                                                ) {
                                                    progressColor =
                                                        "bg-green-500";
                                                } else if (
                                                    prediction.confidence > 0.3
                                                ) {
                                                    progressColor =
                                                        "bg-yellow-500";
                                                } else {
                                                    progressColor =
                                                        "bg-red-500";
                                                }

                                                return (
                                                    <div
                                                        key={index}
                                                        className="mb-4">
                                                        <div className="flex justify-between items-center mb-1">
                                                            <span className="text-gray-900 dark:text-white font-medium">
                                                                {prediction.breed
                                                                    ? prediction
                                                                          .breed
                                                                          .name
                                                                    : "Raza desconocida"}
                                                            </span>
                                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                                {(
                                                                    prediction.confidence *
                                                                    100
                                                                ).toFixed(2)}
                                                                %
                                                            </span>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                                                            <div
                                                                className={`${progressColor} h-3 rounded-full transition-width duration-500 ease-in-out`}
                                                                style={{
                                                                    width: `${Math.max(
                                                                        prediction.confidence *
                                                                            100,
                                                                        2
                                                                    )}%`,
                                                                }}>
                                                                <span className="sr-only">
                                                                    {(
                                                                        prediction.confidence *
                                                                        100
                                                                    ).toFixed(
                                                                        2
                                                                    )}
                                                                    % de
                                                                    confianza
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Contenedor para el BreedCard */}
                        <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col space-y-8">
                            {isLoading ? (
                                <div className="flex justify-center items-center">
                                    <div className="loader"></div>
                                </div>
                            ) : (
                                predictions && (
                                    <div className="w-full">
                                        <BreedCard breed={predictions[0].breed} />
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
