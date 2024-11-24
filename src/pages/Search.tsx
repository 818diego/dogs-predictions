import React, { useState } from "react";
import { breeds } from "../data/breeds";
import BreedCard from "../components/BreedResult/BreedCard";
import { DogBreed } from "../types";

export default function Search() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<DogBreed[]>([]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        if (value.trim() === "") {
            setResults([]);
        } else {
            const filtered = breeds.filter((breed) =>
                breed.name.toLowerCase().includes(value.toLowerCase())
            );
            setResults(filtered);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-2 dark:text-white">
                Busca la raza de tu perro
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-2">
                Escribe el nombre de la raza y encuentra información al
                instante.
            </p>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                <span className="font-bold text-inherit">NOTA:</span> Debes
                escribir la raza en inglés.
            </p>
            <div className="mb-6">
                <input
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder="Ejemplo: Labrador Retriever"
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition duration-150"
                />
            </div>
            {results.length > 0 ? (
                <div className="space-y-4">
                    {results.map((breed) => (
                        <BreedCard key={breed.name} breed={breed} />
                    ))}
                </div>
            ) : (
                query && (
                    <p className="text-center text-gray-600 dark:text-gray-300">
                        No se encontraron resultados.
                    </p>
                )
            )}
        </div>
    );
}
