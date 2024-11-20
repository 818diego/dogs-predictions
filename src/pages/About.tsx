import {
    HeartIcon,
    ShieldCheckIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { PawPrint } from "lucide-react";

export default function About() {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="max-w-3xl mx-auto text-center mb-20">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 mb-8">
                    <PawPrint className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Tecnología al servicio de tu
                    <span className="block text-indigo-600 dark:text-indigo-400">
                        mejor amigo
                    </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                    Utilizamos inteligencia artificial avanzada para ayudarte a
                    entender y cuidar mejor a tu mascota
                </p>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <Feature
                        icon={<HeartIcon className="h-6 w-6" />}
                        title="Cuidado Personalizado"
                        description="Recomendaciones específicas basadas en la raza de tu mascota, adaptadas a sus necesidades únicas"
                    />
                    <Feature
                        icon={<ShieldCheckIcon className="h-6 w-6" />}
                        title="Información Confiable"
                        description="Datos verificados por veterinarios y expertos en comportamiento animal"
                    />
                    <Feature
                        icon={<AcademicCapIcon className="h-6 w-6" />}
                        title="Educación Continua"
                        description="Recursos y guías actualizadas para mejorar tus habilidades como dueño responsable"
                    />
                </div>
            </div>

            {/* Mission Statement */}
            <div className="max-w-3xl mx-auto mt-24 text-center">
                <blockquote className="text-xl italic text-gray-700 dark:text-gray-300">
                    "Nuestra misión es hacer que la tecnología sea accesible y
                    útil para todos los amantes de los perros, ayudándoles a
                    proporcionar el mejor cuidado posible a sus mascotas."
                </blockquote>
            </div>
        </div>
    );
}

function Feature({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="group relative p-6 bg-white dark:bg-gray-800/50 rounded-2xl transition-all hover:shadow-lg dark:hover:shadow-gray-900/30">
            <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-4 transition-colors group-hover:bg-indigo-500 group-hover:text-white dark:group-hover:bg-indigo-500">
                    {icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                    {description}
                </p>
            </div>
        </div>
    );
}
