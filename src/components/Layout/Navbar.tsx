import {
    HomeIcon,
    CameraIcon,
    InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Search } from "lucide-react";

export default function Navbar() {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="bg-white dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700/50 backdrop-blur-sm transition-colors">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex space-x-8">
                        <Link
                            to="/"
                            className={`inline-flex items-center px-1 pt-1 text-base font-medium transition-colors
                ${
                    isActive("/")
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}>
                            <HomeIcon className="h-6 w-6 mr-1" />
                            Inicio
                        </Link>
                        <Link
                            to="/identify"
                            className={`inline-flex items-center px-1 pt-1 text-base font-medium transition-colors
                ${
                    isActive("/identify")
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}>
                            <CameraIcon className="h-6 w-6 mr-1" />
                            Identificar
                        </Link>
                        <Link
                            to="/about"
                            className={`inline-flex items-center px-1 pt-1 text-base font-medium transition-colors
                ${
                    isActive("/about")
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}>
                            <InformationCircleIcon className="h-6 w-6 mr-1" />
                            Acerca de
                        </Link>

                        <Link
                            to="/search"
                            className={`inline-flex items-center px-1 pt-1 text-base font-medium transition-colors
                ${
                    isActive("/search")
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`}>
                            <Search className="h-6 w-6 mr-1" />
                            Buscar
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}
