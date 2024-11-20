import { Link } from "react-router-dom";
import { CameraIcon } from "@heroicons/react/24/outline";

export default function Home() {
    return (
        <div className="min-h-[85vh] flex items-center overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Descubre la raza de tu
                            <span className="text-indigo-600 dark:text-indigo-400">
                                {" "}
                                mejor amigo
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                            Identifica la raza de tu perro y obtén información
                            detallada sobre sus cuidados, alimentación y
                            necesidades específicas.
                        </p>

                        <Link
                            to="/identify"
                            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg transition-colors hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                            <CameraIcon className="h-5 w-5 mr-2" />
                            Identificar Raza
                        </Link>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl transform -rotate-6"></div>
                        <img
                            src="https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&q=80&w=1000"
                            alt="Perro feliz"
                            className="relative rounded-2xl shadow-lg object-cover w-full aspect-[4/3]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
