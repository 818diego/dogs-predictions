import * as tf from "@tensorflow/tfjs";
import { DogBreed } from "../types";
import { breeds } from "../data/breeds";

export class ModelService {
    private model: tf.LayersModel | null = null;
    private modelPath = "/models";
    private meanImageNetRGB = tf.tensor1d([123.68, 116.779, 103.939]);

    async loadModel() {
        try {
            this.model = await tf.loadLayersModel(
                `${this.modelPath}/model.json`
            );
            return true;
        } catch (error) {
            console.error("Error loading model:", error);
            return false;
        }
    }

    private async preprocessImage(
        imageElement: HTMLImageElement
    ): Promise<tf.Tensor4D> {
        const tfImage = tf.browser
            .fromPixels(imageElement)
            .resizeNearestNeighbor([224, 224])
            .toFloat();

        return tfImage
            .sub(this.meanImageNetRGB)
            .div(tf.scalar(255))
            .expandDims() as tf.Tensor4D;
    }

    private getBreedInfo(predictedClass: number): DogBreed | null {
        return (
            breeds.find((breed) => breed.id === predictedClass.toString()) ||
            null
        );
    }

    async predictImage(
        imageElement: HTMLImageElement
    ): Promise<{ breed: DogBreed; confidence: number }[] | null> {
        if (!this.model) {
            console.error("Model not loaded");
            return null;
        }

        try {
            const processedImage = await this.preprocessImage(imageElement);

            // Realizar predicción
            const predictions = this.model.predict(processedImage) as tf.Tensor;
            const scores = await predictions.data();
            const topK = 10;
            const topKIndices = Array.from(scores)
                .map((score, index) => ({ score, index }))
                .sort((a, b) => b.score - a.score)
                .slice(0, topK)
                .map((item) => item.index);

            const topKResults = topKIndices
                .map((index) => ({
                    breed: this.getBreedInfo(index),
                    confidence: scores[index],
                }));

            // Limpieza de memoria
            processedImage.dispose();
            predictions.dispose();

            return topKResults;
        } catch (error) {
            console.error("Error during prediction:", error);
            return null;
        }
    }
}
