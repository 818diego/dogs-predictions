import React from "react";
import { DogBreed } from "../../types";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface BreedCardProps {
    breed: DogBreed | null;
}

const BreedCard: React.FC<BreedCardProps> = ({ breed }) => {
    if (!breed) {
        return (
            <div className="text-red-500">
                Información de raza no disponible
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/30 overflow-hidden transition-colors">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src={breed.imageUrl}
                        alt={breed.name}
                    />
                </div>
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {breed.name}
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                Características
                            </h3>
                            <ul className="mt-2 space-y-1">
                                {breed.characteristics.map((char, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center text-gray-600 dark:text-gray-300">
                                        <CheckCircleIcon className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                                        {char}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                Cuidados
                            </h3>
                            <div className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                                <p>
                                    <span className="font-medium dark:text-gray-200">
                                        Aseo:
                                    </span>{" "}
                                    {breed.care.grooming}
                                </p>
                                <p>
                                    <span className="font-medium dark:text-gray-200">
                                        Ejercicio:
                                    </span>{" "}
                                    {breed.care.exercise}
                                </p>
                                <p>
                                    <span className="font-medium dark:text-gray-200">
                                        Entrenamiento:
                                    </span>{" "}
                                    {breed.care.training}
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                Alimentación
                            </h3>
                            <div className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                                <ul className="list-disc list-inside">
                                    {breed.diet.recommendations.map(
                                        (rec, index) => (
                                            <li key={index}>{rec}</li>
                                        )
                                    )}
                                </ul>
                                <p>
                                    <span className="font-medium dark:text-gray-200">
                                        Frecuencia:
                                    </span>{" "}
                                    {breed.diet.frequency}
                                </p>
                                <p>
                                    <span className="font-medium dark:text-gray-200">
                                        Porciones:
                                    </span>{" "}
                                    {breed.diet.portions}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreedCard;
