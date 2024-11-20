import { useState, useEffect } from "react";
import { ModelService } from "../services/modelService";

const modelService = new ModelService();

export function useModel() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadModel();
    }, []);

    const loadModel = async () => {
        try {
            const success = await modelService.loadModel();
            if (!success) {
                setError("Error al cargar el modelo");
            }
        } catch (err) {
            setError("Error inesperado al cargar el modelo");
        } finally {
            setIsLoading(false);
        }
    };

    const predictImage = async (imageElement: HTMLImageElement) => {
        if (isLoading) return null;
        return modelService.predictImage(imageElement);
    };

    return {
        isLoading,
        error,
        predictImage,
        setIsLoading,
    };
}
