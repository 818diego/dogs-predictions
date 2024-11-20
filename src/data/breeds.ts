import { DogBreed } from "../types";

export const breeds: DogBreed[] = [
    {
        id: "0",
        name: "Chihuahua",
        characteristics: [
            "Tamaño pequeño",
            "Pelaje corto o largo",
            "Variedad de colores",
            "Personalidad vivaz",
            "Leal y valiente",
        ],
        care: {
            grooming: "Cepillado regular según el tipo de pelaje",
            exercise: "Ejercicio moderado, ideal para apartamentos",
            training: "Socialización y entrenamiento temprano",
        },
        diet: {
            recommendations: [
                "Comida de alta calidad",
                "Rica en proteínas",
                "Control de porciones para prevenir el sobrepeso",
            ],
            frequency: "2-3 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Control de temperatura",
            "Socialización temprana",
            "Entrenamiento consistente",
            "Revisiones veterinarias regulares",
        ],
        imageUrl: "https://example.com/chihuahua.jpg",
    },
    {
        id: "1",
        name: "Japanese Spaniel",
        characteristics: [
            "Tamaño pequeño",
            "Cara plana",
            "Ojos grandes",
            "Pelaje sedoso",
            "Amigable y afectuoso",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje sedoso",
            exercise: "Ejercicio moderado, adaptable a interiores",
            training: "Entrenamiento consistente con refuerzo positivo",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para perros pequeños",
                "Rico en proteínas de alta calidad",
                "Porciones controladas",
            ],
            frequency: "2 comidas al día",
            portions: "Basado en edad, peso y actividad",
        },
        responsibilities: [
            "Socialización regular",
            "Entrenamiento de obediencia",
            "Revisiones veterinarias periódicas",
            "Cuidado del pelaje",
        ],
        imageUrl: "https://example.com/japanese_spaniel.jpg",
    },
    {
        id: "2",
        name: "Maltese Dog",
        characteristics: [
            "Tamaño pequeño",
            "Pelaje largo y sedoso",
            "Color blanco",
            "Alegre y juguetón",
            "Valiente y enérgico",
        ],
        care: {
            grooming: "Cepillado diario para evitar enredos",
            exercise: "Ejercicio moderado, juegos interactivos",
            training: "Entrenamiento de socialización y obediencia",
        },
        diet: {
            recommendations: [
                "Alimento de alta calidad para perros pequeños",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones controladas para mantener el peso",
            ],
            frequency: "2-3 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Cuidado regular del pelaje",
            "Ejercicio diario",
            "Entrenamiento consistente",
            "Chequeos veterinarios regulares",
        ],
        imageUrl: "https://example.com/maltese_dog.jpg",
    },
    {
        id: "3",
        name: "Pekinese",
        characteristics: [
            "Raza antigua",
            "Cara plana",
            "Ojos grandes",
            "Pelaje largo y denso",
            "Actitud independiente",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje",
            exercise: "Ejercicio moderado, preferiblemente en interiores",
            training: "Entrenamiento de obediencia y socialización",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para perros pequeños",
                "Rico en proteínas de alta calidad",
                "Porciones controladas para evitar el sobrepeso",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Cuidado regular del pelaje",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/pekinese.jpg",
    },
    {
        id: "4",
        name: "Shih Tzu",
        characteristics: [
            "Raza de compañía",
            "Pelaje largo y denso",
            "Expresión amigable",
            "Adaptable a diversos entornos",
            "Cariñoso y amigable",
        ],
        care: {
            grooming: "Cepillado diario para mantener el pelaje",
            exercise: "Ejercicio moderado, adaptable a interiores",
            training: "Entrenamiento de obediencia y socialización",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para perros pequeños",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones controladas para mantener el peso",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Cuidado regular del pelaje",
            "Ejercicio diario",
            "Entrenamiento consistente",
            "Chequeos veterinarios regulares",
        ],
        imageUrl: "https://example.com/shih_tzu.jpg",
    },
    {
        id: "5",
        name: "Blenheim Spaniel",
        characteristics: [
            "Variación del Cavalier King Charles Spaniel",
            "Pelaje sedoso y suave",
            "Color castaño y blanco",
            "Afectuoso y amigable",
            "Buen con los niños",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje",
            exercise: "Ejercicio regular para mantener la salud",
            training: "Entrenamiento de obediencia y socialización",
        },
        diet: {
            recommendations: [
                "Alimento de alta calidad",
                "Rico en proteínas y nutrientes",
                "Porciones controladas para evitar el sobrepeso",
            ],
            frequency: "2-3 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Cuidado regular del pelaje",
            "Ejercicio diario",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/blenheim_spaniel.jpg",
    },
    {
        id: "6",
        name: "Papillon",
        characteristics: [
            "Pequeña y elegante",
            "Orejas grandes y erguidas",
            "Pelaje largo y sedoso",
            "Inteligente y enérgico",
            "Afectuoso",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje",
            exercise: "Ejercicio activo y juegos interactivos",
            training: "Entrenamiento de obediencia y socialización",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para perros pequeños",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones controladas para mantener el peso",
            ],
            frequency: "2-3 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Cuidado regular del pelaje",
            "Ejercicio diario",
            "Entrenamiento consistente",
            "Chequeos veterinarios regulares",
        ],
        imageUrl: "https://example.com/papillon.jpg",
    },
    {
        id: "7",
        name: "Toy Terrier",
        characteristics: [
            "Pequeño tamaño",
            "Agilidad y vivacidad",
            "Leal y valiente",
            "Personalidad extrovertida",
            "Enérgico",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje",
            exercise: "Ejercicio diario para quemar energía",
            training: "Entrenamiento de obediencia y socialización",
        },
        diet: {
            recommendations: [
                "Alimento de alta calidad para perros pequeños",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones controladas para evitar el sobrepeso",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio regular",
            "Entrenamiento consistente",
            "Control de peso",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/toy_terrier.jpg",
    },
    {
        id: "8",
        name: "Rhodesian Ridgeback",
        characteristics: [
            "Grande y atlético",
            "Ridge distintivo en la espalda",
            "Pelaje corto y denso",
            "Valiente y leal",
            "Buen con las familias",
        ],
        care: {
            grooming: "Cepillado semanal para mantener el pelaje",
            exercise: "Ejercicio regular para mantener la salud",
            training: "Entrenamiento de obediencia y socialización",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para perros grandes",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones controladas para mantener el peso",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio diario",
            "Entrenamiento consistente",
            "Socialización temprana",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/rhodesian_ridgeback.jpg",
    },
    {
        id: "9",
        name: "Afghan Hound",
        characteristics: [
            "Elegante y de aspecto noble",
            "Pelaje largo y sedoso",
            "Gracia y velocidad",
            "Personalidad independiente",
            "Apariencia distinguida",
        ],
        care: {
            grooming: "Cepillado diario para mantener el pelaje",
            exercise: "Ejercicio regular para mantener la salud",
            training: "Entrenamiento de obediencia y socialización",
        },
        diet: {
            recommendations: [
                "Alimento de alta calidad",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones controladas para evitar el sobrepeso",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Cuidado regular del pelaje",
            "Ejercicio diario",
            "Entrenamiento consistente",
            "Chequeos veterinarios regulares",
        ],
        imageUrl: "https://example.com/afghan_hound.jpg",
    },
    {
        id: "10",
        name: "Basset",
        characteristics: [
            "Tamaño mediano",
            "Orejas largas",
            "Excelente olfato",
            "Pelaje corto y denso",
            "Naturaleza amigable y gentil",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje",
            exercise: "Ejercicio moderado para mantener el peso",
            training: "Entrenamiento de obediencia y socialización",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para perros medianos",
                "Rico en proteínas y fibra",
                "Porciones controladas para prevenir la obesidad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio regular",
            "Control de peso",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/basset.jpg",
    },
    {
        id: "11",
        name: "Beagle",
        characteristics: [
            "Raza mediana originaria de Inglaterra",
            "Pelaje corto y fácil de cuidar",
            "Esperanza de vida de 12 a 15 años",
            "Amistosos, curiosos y enérgicos",
            "Excelentes como perros de compañía y de caza",
        ],
        care: {
            grooming: "Cepillado ocasional para remover el pelo suelto.",
            exercise:
                "Ejercicio diario vigoroso, ideal para paseos largos o juegos al aire libre.",
            training:
                "Requieren entrenamiento constante y paciencia debido a su naturaleza independiente.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Controlar las porciones para evitar sobrepeso",
                "Rico en proteínas y carbohidratos para mantener su energía",
            ],
            frequency: "2 comidas al día",
            portions: "Ajustadas según el peso y actividad física",
        },
        responsibilities: [
            "Proporcionar ejercicio regular y variado",
            "Cuidado básico del pelaje y limpieza de orejas",
            "Chequeos veterinarios frecuentes para prevenir problemas comunes de salud",
        ],
        imageUrl: "https://example.com/beagle.jpg",
    },
    {
        id: "12",
        name: "Bloodhound",
        characteristics: [
            "Raza grande y poderosa",
            "Olfato extraordinario",
            "Pelaje corto y arrugado",
            "Amigable y gentil",
            "Naturaleza relajada",
        ],
        care: {
            grooming: "Cuidados regulares, especialmente en las orejas",
            exercise: "Ejercicio regular para mantener la salud",
            training: "Entrenamiento de obediencia y socialización",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para perros grandes",
                "Rico en proteínas para mantener la masa muscular",
                "Porciones controladas para evitar la obesidad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio regular",
            "Control de peso",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/bloodhound.jpg",
    },
    {
        id: "13",
        name: "Bluetick Coonhound",
        characteristics: [
            "Raza de caza originaria de EE. UU.",
            "Pelaje corto y moteado azul",
            "Valiente y leal",
            "Habilidades de rastreo excepcionales",
            "Ideal para familias activas",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje limpio",
            exercise: "Ejercicio diario para mantener su energía",
            training: "Entrenamiento positivo y socialización temprana",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para perros de caza",
                "Rico en nutrientes esenciales",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio regular",
            "Entrenamiento constante",
            "Socialización con otros perros y personas",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/bluetick.jpg",
    },
    {
        id: "14",
        name: "Black-and-tan Coonhound",
        characteristics: [
            "Pelaje corto y brillante negro y bronceado",
            "Raza de caza originaria de EE. UU.",
            "Valiente y resistente",
            "Habilidades excepcionales de rastreo",
            "Compañero leal",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje limpio",
            exercise: "Ejercicio diario para mantener su energía",
            training: "Entrenamiento positivo y socialización temprana",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para perros de caza",
                "Rico en nutrientes esenciales",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio regular",
            "Entrenamiento constante",
            "Socialización con otros perros y personas",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/black-and-tan-coonhound.jpg",
    },
    {
        id: "15",
        name: "Walker Hound",
        characteristics: [
            "Variante del Coonhound conocida por su velocidad y agilidad en la caza",
            "Pelaje corto y brillante",
            "Raza originaria de EE. UU.",
            "Enérgico y leal",
            "Bueno con las familias",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje limpio",
            exercise: "Ejercicio diario para liberar energía",
            training: "Entrenamiento positivo y socialización temprana",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para perros activos",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones controladas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio regular",
            "Entrenamiento constante",
            "Socialización con otros perros y personas",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/walker-hound.jpg",
    },
    {
        id: "16",
        name: "English Foxhound",
        characteristics: [
            "Raza de perro de caza originaria de Inglaterra",
            "Pelaje corto y denso",
            "Resistente y valiente",
            "Habilidades excepcionales de rastreo",
            "Ideal para entornos activos",
        ],
        care: {
            grooming: "Cuidado regular del pelaje",
            exercise: "Ejercicio diario necesario",
            training: "Técnicas de entrenamiento positivo",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para perros activos",
                "Rico en proteínas",
                "Porciones controladas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio regular",
            "Control del peso",
            "Entrenamiento constante",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/english-foxhound.jpg",
    },
    {
        id: "17",
        name: "Redbone",
        characteristics: [
            "Raza de perro de caza con pelaje rojo brillante",
            "Destreza en la caza",
            "Originario de EE. UU.",
            "Amigable y enérgico",
            "Bueno con las familias",
        ],
        care: {
            grooming: "Cepillado regular",
            exercise: "Ejercicio diario",
            training: "Entrenamiento positivo",
        },
        diet: {
            recommendations: [
                "Alimento balanceado",
                "Rico en proteínas",
                "Porciones controladas",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Entrenamiento constante",
            "Socialización",
            "Revisiones veterinarias",
        ],
        imageUrl: "https://example.com/redbone.jpg",
    },
    {
        id: "18",
        name: "Borzoi",
        characteristics: [
            "Raza elegante originaria de Rusia",
            "Pelaje largo y sedoso",
            "Conocido por su gracia",
            "Velocidad impresionante",
            "Naturaleza independiente",
        ],
        care: {
            grooming: "Cuidados regulares del pelaje",
            exercise: "Espacios abiertos para correr",
            training: "Entrenamiento básico recomendado",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en proteínas",
                "Porciones controladas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejericio regular,",
            "Cuidado del peso,",
            "Cuidado básico,",
            "Cuidado veterinario periódico.",
        ],
        imageUrl: "https://example.com/borzoi.jpg.",
    },
    {
        id: "19",
        name: "Irish Wolfhound",
        characteristics: [
            "Raza gigante y poderosa",
            "Pelaje áspero y resistente",
            "Esperanza de vida de 6 a 8 años",
            "Gentiles, leales y buenos con las familias",
            "Requieren cuidados regulares y espacio",
        ],
        care: {
            grooming: "Mínimos cuidados, cepillado semanal",
            exercise: "Necesitan al menos 2 horas de ejercicio diario",
            training: "Entrenamiento positivo y socialización temprana",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Porciones controladas para evitar problemas digestivos",
                "Alimentación en varias comidas pequeñas",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/irish-wolfhound.jpg",
    },
    {
        id: "20",
        name: "Italian Greyhound",
        characteristics: [
            "Raza pequeña y elegante",
            "Conocido por su velocidad y gracia",
            "Esperanza de vida de 12 a 15 años",
            "Cariñosos, juguetones y buenos compañeros",
            "Ideales para hogares tranquilos",
        ],
        care: {
            grooming: "Cepillado ocasional para mantener el pelaje",
            exercise: "Ejercicio regular para mantener la salud",
            training: "Entrenamiento positivo y socialización temprana",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en nutrientes esenciales",
                "Porciones controladas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/italian-greyhound.jpg",
    },
    {
        id: "21",
        name: "Whippet",
        characteristics: [
            "Raza pequeña y ágil",
            "Conocida por su velocidad en carreras",
            "Esperanza de vida de 12 a 15 años",
            "Amigables, tranquilos y buenos con las familias",
            "Requieren ejercicio regular",
        ],
        care: {
            grooming: "Cepillado ocasional para mantener el pelaje limpio",
            exercise: "Ejercicio regular para liberar energía",
            training: "Entrenamiento positivo y socialización temprana",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas activas",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio regular",
            "Entrenamiento constante",
            "Socialización con otros perros y personas",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/whippet.jpg",
    },
    {
        id: "22",
        name: "Ibizan Hound",
        characteristics: [
            "Raza elegante y atlética originaria de España",
            "Pelaje corto y fino",
            "Esperanza de vida de 10 a 14 años",
            "Agilidad, velocidad y naturaleza independiente",
            "Requieren ejercicio regular",
        ],
        care: {
            grooming: "Cepillado ocasional para mantener el pelaje limpio",
            exercise: "Ejercicio diario en espacios abiertos",
            training: "Entrenamiento positivo y socialización temprana",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas activas",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio regular en espacios abiertos",
            "Socialización constante desde cachorro",
            "Entrenamiento consistente con refuerzo positivo",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/ibizan-hound.jpg",
    },
    {
        id: "23",
        name: "Norwegian Elkhound",
        characteristics: [
            "Raza de caza originaria de Noruega",
            "Pelaje denso y gris",
            "Esperanza de vida de 12 a 15 años",
            "Valientes, leales y buenos rastreadores",
            "Requieren ejercicio regular",
        ],
        care: {
            grooming: "Cepillado semanal para mantener el pelaje",
            exercise: "Necesitan ejercicio diario moderado",
            training: "Entrenamiento positivo desde cachorro",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para perros activos",
                "Rico en proteínas",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/norwegian-elkhound.jpg",
    },
    {
        id: "24",
        name: "Otterhound",
        characteristics: [
            "Raza de caza con pelaje áspero",
            "Esperanza de vida de 10 a 12 años",
            "Valientes, resistentes y buenos nadadores",
            "Requieren cuidados regulares",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje",
            exercise: "Ejercicio diario en actividades al aire libre",
            training: "Entrenamiento positivo desde cachorro",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en nutrientes esenciales",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/otterhound.jpg",
    },
    {
        id: "25",
        name: "Saluki",
        characteristics: [
            "Antigua raza de perro de caza",
            "Conocido por su gracia y velocidad",
            "Esperanza de vida de 12 a 14 años",
            "Cariñosos, independientes y buenos con las familias",
            "Requieren cuidados regulares",
        ],
        care: {
            grooming: "Cepillado ocasional",
            exercise: "Ejercicio diario moderado",
            training: "Entrenamiento positivo desde cachorro",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para perros activos",
                "Rico en proteínas",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/saluki.jpg",
    },
    {
        id: "26",
        name: "Scottish Deerhound",
        characteristics: [
            "Raza gigante originaria de Escocia",
            "Pelaje áspero y resistente",
            "Esperanza de vida de 8 a 11 años",
            "Gentiles, leales y buenos cazadores",
            "Requieren cuidados regulares",
        ],
        care: {
            grooming: "Cepillado semanal para mantener el pelaje",
            exercise: "Necesitan ejercicio diario moderado",
            training: "Entrenamiento positivo desde cachorro",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en nutrientes esenciales",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/scottish-deerhound.jpg",
    },
    {
        id: "27",
        name: "Weimaraner",
        characteristics: [
            "Raza de caza originaria de Alemania",
            "Pelaje corto y gris plateado",
            "Esperanza de vida de 10 a 13 años",
            "Elegantes, veloces y leales",
            "Requieren ejercicio regular",
        ],
        care: {
            grooming: "Cepillado ocasional",
            exercise: "Ejercicio diario moderado",
            training: "Entrenamiento positivo desde cachorro",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para perros activos",
                "Rico en proteínas",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/weimaraner.jpg",
    },
    {
        id: "28",
        name: "Staffordshire Bullterrier",
        characteristics: [
            "Raza fuerte y musculosa originaria de Inglaterra",
            "Pelaje corto con variados colores",
            "Esperanza de vida de 12 a 14 años",
            "Valientes, leales y amigables",
            "Requieren ejercicio regular",
        ],
        care: {
            grooming: "Cepillado ocasional",
            exercise: "Ejercicio diario moderado",
            training: "Entrenamiento positivo desde cachorro",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/staffordshire-bullterrier.jpg",
    },
    {
        id: "29",
        name: "American Staffordshire Terrier",
        characteristics: [
            "Raza fuerte y atlética originaria de EE. UU.",
            "Pelaje corto con variados colores",
            "Esperanza de vida de 12 a 16 años",
            "Leales, valientes y afectuosos",
            "Requieren ejercicio regular",
        ],
        care: {
            grooming: "Cepillado ocasional",
            exercise: "Ejercicio diario moderado",
            training: "Entrenamiento positivo desde cachorro",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas a grandes",
                "Rico en proteínas",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/american-staffordshire-terrier.jpg",
    },
    {
        id: "30",
        name: "Bedlington Terrier",
        characteristics: [
            "Raza elegante con forma de linterna",
            "Pelaje lanoso y rizado de color blanco",
            "Esperanza de vida de 12 a 16 años",
            "Personalidad afectuosa, valentía y agilidad",
            "Requieren cuidados regulares del pelaje y ejercicio",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje",
            exercise: "Ejercicio diario moderado",
            training: "Entrenamiento positivo desde cachorro",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones controladas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/bedlington-terrier.jpg",
    },
    {
        id: "31",
        name: "Border Terrier",
        characteristics: [
            "Raza de trabajo originaria del Reino Unido",
            "Pelaje áspero y denso",
            "Esperanza de vida de 12 a 15 años",
            "Amigables, alertas y enérgicos",
            "Requieren ejercicio regular y estimulación mental",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje limpio",
            exercise: "Ejercicio diario para liberar energía",
            training: "Entrenamiento positivo y socialización temprana",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas a medianas",
                "Rico en nutrientes esenciales",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante desde cachorro",
            "Entrenamiento consistente con refuerzo positivo",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/border-terrier.jpg",
    },
    {
        id: "32",
        name: "Kerry Blue Terrier",
        characteristics: [
            "Raza de tamaño mediano originaria de Irlanda",
            "Pelaje denso y rizado de color azul",
            "Esperanza de vida de 12 a 15 años",
            "Leales, valientes y activos",
            "Requieren cuidados regulares del pelaje y ejercicio",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje rizado",
            exercise: "Ejercicio diario moderado a activo",
            training: "Entrenamiento positivo desde cachorro",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante desde cachorro",
            "Entrenamiento consistente con refuerzo positivo",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/kerry-blue-terrier.jpg",
    },
    {
        id: "33",
        name: "Irish Terrier",
        characteristics: [
            "Raza terrier originaria de Irlanda",
            "Pelaje áspero de color rojo",
            "Esperanza de vida de 12 a 16 años",
            "Valientes, leales y amigables",
            "Requieren cuidados regulares del pelaje y ejercicio",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje limpio",
            exercise: "Ejercicio diario moderado a activo",
            training: "Entrenamiento positivo desde cachorro",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas a grandes",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso y nivel de actividad",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/irish-terrier.jpg",
    },
    {
        id: "34",
        name: "Norfolk Terrier",
        characteristics: [
            "Raza pequeña y activa originaria del Reino Unido",
            "Pelaje denso y recto",
            "Esperanza de vida de 12 a 15 años",
            "Amigables, alertas y enérgicos",
            "Requieren ejercicio regular e interacción social",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje limpio",
            exercise: "Ejercicio diario moderado",
            training: "Entrenamiento positivo desde cachorro",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en nutrientes esenciales",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/norfolk-terrier.jpg",
    },
    {
        id: "35",
        name: "Norwich Terrier",
        characteristics: [
            "Raza pequeña y robusta originaria del Reino Unido",
            "Pelaje denso y recto",
            "Esperanza de vida de 12 a 16 años",
            "Valientes, alertas y afectuosos",
            "Requieren ejercicio regular y socialización temprana",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje limpio",
            exercise: "Ejercicio diario moderado a activo",
            training: "Entrenamiento positivo desde cachorro",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas a medianas",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante desde cachorro",
            "Entrenamiento consistente con refuerzo positivo",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/norwich-terrier.jpg",
    },
    {
        id: "36",
        name: "Yorkshire Terrier",
        characteristics: [
            "Raza pequeña y elegante originaria del Reino Unido",
            "Pelaje largo y sedoso azul y fuego",
            "Esperanza de vida de 12 a 16 años",
            "Personalidad animada, valiente y leal",
            "Requieren cuidados regulares del pelaje e interacción social.",
        ],
        care: {
            grooming: "Cepillado frecuente para evitar enredos.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/yorkshire-terrier.jpg",
    },
    {
        id: "37",
        name: "Wire-haired Fox Terrier",
        characteristics: [
            "Raza terrier con pelaje áspero",
            "Esperanza de vida de 12 a 15 años",
            "Valientes, energéticos y alertas",
            "Requieren cuidados regulares del pelaje",
        ],
        care: {
            grooming: "Cepillado frecuente para evitar enredos.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/wire-haired-fox-terrier.jpg",
    },
    {
        id: "38",
        name: "Lakeland Terrier",
        characteristics: [
            "Raza terrier originaria del Reino Unido",
            "Pelaje denso y recto",
            "Esperanza de vida de 12 a 15 años",
            "Valientes, amigables y activos",
            "Requieren cuidados regulares del pelaje",
        ],
        care: {
            grooming: "Cepillado frecuente para evitar enredos.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/lakeland-terrier.jpg",
    },
    {
        id: "39",
        name: "Sealyham Terrier",
        characteristics: [
            "Raza terrier originaria de Gales",
            "Pelaje denso y recto",
            "Esperanza de vida de 12 a 15 años",
            "Valientes, leales y afectuosos",
            "Requieren cuidados regulares del pelaje",
        ],
        care: {
            grooming: "Cepillado frecuente para evitar enredos.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/sealyham-terrier.jpg",
    },
    {
        id: "40",
        name: "Airedale Terrier",
        characteristics: [
            "Raza terrier de gran tamaño, originaria del Reino Unido",
            "Pelaje áspero y denso",
            "Esperanza de vida de 10 a 13 años",
            "Valientes, leales y amigables",
            "Requieren cuidados regulares del pelaje",
        ],
        care: {
            grooming:
                "Cepillado frecuente para mantener el pelaje en buen estado.",
            exercise: "Ejercicio diario para mantenerse en forma.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en proteínas",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/airedale-terrier.jpg",
    },
    {
        id: "41",
        name: "Cairn Terrier",
        characteristics: [
            "Raza terrier originaria del Reino Unido",
            "Pelaje áspero y denso",
            "Esperanza de vida de 12 a 15 años",
            "Valientes, enérgicos y amigables",
            "Requieren cuidados regulares del pelaje",
        ],
        care: {
            grooming: "Cepillado frecuente para evitar enredos.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/cairn-terrier.jpg",
    },
    {
        id: "42",
        name: "Australian Terrier",
        characteristics: [
            "Raza terrier originaria de Australia",
            "Pelaje áspero y denso",
            "Esperanza de vida de 12 a 15 años",
            "Valientes, leales y afectuosos",
            "Requieren cuidados regulares del pelaje",
        ],
        care: {
            grooming:
                "Cepillado frecuente para mantener el pelaje en buen estado.",
            exercise: "Ejercicio diario para mantenerse saludable.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/australian-terrier.jpg",
    },
    {
        id: "43",
        name: "Dandie Dinmont Terrier",
        characteristics: [
            "Raza terrier originaria del Reino Unido",
            "Pelaje largo y sedoso",
            "Esperanza de vida de 12 a 15 años",
            "Valientes, amigables y afectuosos",
            "Requieren cuidados regulares del pelaje",
        ],
        care: {
            grooming: "Cepillado frecuente para evitar enredos.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/dandie-dinmont-terrier.jpg",
    },
    {
        id: "44",
        name: "Boston Terrier",
        characteristics: [
            "Raza compacta y musculosa, originaria de Estados Unidos",
            "Pelaje corto y variados colores",
            "Esperanza de vida de 11 a 13 años",
            "Amigables, alertas y afectuosos",
            "Requieren ejercicio regular",
        ],
        care: {
            grooming: "Mantenimiento básico del pelaje corto.",
            exercise: "Ejercicio regular adecuado a espacios limitados.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/boston-terrier.jpg",
    },
    {
        id: "45",
        name: "Miniature Schnauzer",
        characteristics: [
            "Raza schnauzer en miniatura, originaria de Alemania",
            "Pelaje áspero y denso",
            "Esperanza de vida de 12 a 15 años",
            "Valientes, leales y amigables",
            "Requieren cuidados regulares del pelaje",
        ],
        care: {
            grooming: "Cepillado frecuente para evitar enredos.",
            exercise: "Ejercicio diario para mantenerse en forma.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/miniature-schnauzer.jpg",
    },
    {
        id: "46",
        name: "Giant Schnauzer",
        characteristics: [
            "Raza schnauzer de gran tamaño, originaria de Alemania",
            "Pelaje áspero y denso",
            "Esperanza de vida de 10 a 12 años",
            "Valientes, leales y protectores",
            "Requieren cuidados regulares del pelaje",
        ],
        care: {
            grooming: "Cepillado frecuente para evitar enredos.",
            exercise: "Ejercicio diario intensivo para mantenerse en forma.",
            training: "Entrenamiento positivo y consistente desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en proteínas",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/giant-schnauzer.jpg",
    },
    {
        id: "47",
        name: "Standard Schnauzer",
        characteristics: [
            "Raza schnauzer de tamaño mediano, originaria de Alemania",
            "Pelaje áspero y denso",
            "Esperanza de vida de 13 a 16 años",
            "Valientes, leales y alertas",
            "Requieren cuidados regulares del pelaje",
        ],
        care: {
            grooming: "Cepillado frecuente para evitar enredos.",
            exercise: "Ejercicio diario moderado para mantenerse saludable.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/standard-schnauzer.jpg",
    },
    {
        id: "48",
        name: "Scotch Terrier",
        characteristics: [
            "Raza terrier originaria de Escocia",
            "Pelaje áspero y denso",
            "Esperanza de vida de 11 a 13 años",
            "Valientes, leales y dignos",
            "Requieren cuidados regulares del pelaje",
        ],
        care: {
            grooming: "Cepillado frecuente para evitar enredos.",
            exercise: "Ejercicio diario moderado para mantenerse saludable.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/scotch-terrier.jpg",
    },
    {
        id: "49",
        name: "Tibetan Terrier",
        characteristics: [
            "Raza terrier originaria del Tíbet",
            "Pelaje largo y denso",
            "Esperanza de vida de 12 a 15 años",
            "Valientes, leales y afectuosos",
            "Requieren cuidados regulares del pelaje",
        ],
        care: {
            grooming: "Cepillado frecuente para evitar enredos.",
            exercise: "Ejercicio diario moderado para mantenerse saludable.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/tibetan-terrier.jpg",
    },
    {
        id: "50",
        name: "Silky Terrier",
        characteristics: [
            "Raza pequeña originaria de Australia",
            "Pelaje sedoso y brillante",
            "Esperanza de vida de 12 a 15 años",
            "Activos, leales y juguetones",
            "Buen perro de compañía y para espacios pequeños",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje sedoso.",
            exercise: "Paseos diarios y juegos moderados.",
            training:
                "Socialización temprana y métodos positivos de entrenamiento.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Porciones ajustadas a su nivel de actividad",
                "Rico en proteínas para mantener su energía",
            ],
            frequency: "2 comidas al día",
            portions: "Pequeñas, ajustadas según peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Cuidado del pelaje",
            "Control veterinario para mantener su salud",
        ],
        imageUrl: "https://example.com/silky-terrier.jpg",
    },
    {
        id: "51",
        name: "Soft-Coated Wheaten Terrier",
        characteristics: [
            "Raza mediana con pelaje suave y ondulado",
            "Originaria de Irlanda",
            "Esperanza de vida de 12 a 14 años",
            "Amigables, juguetones y activos",
            "Adaptables a la vida familiar",
        ],
        care: {
            grooming: "Cepillado semanal para evitar nudos en el pelaje.",
            exercise: "Ejercicio diario para liberar energía.",
            training:
                "Requieren consistencia en el entrenamiento debido a su independencia.",
        },
        diet: {
            recommendations: [
                "Alimento de calidad para razas medianas",
                "Rico en proteínas y grasas saludables",
                "Evitar el sobrepeso",
            ],
            frequency: "2 comidas al día",
            portions: "Ajustadas según actividad física",
        },
        responsibilities: [
            "Cuidado del pelaje",
            "Ejercicio constante",
            "Chequeos veterinarios frecuentes",
        ],
        imageUrl: "https://example.com/soft-coated-wheaten-terrier.jpg",
    },
    {
        id: "52",
        name: "West Highland White Terrier",
        characteristics: [
            "Raza pequeña originaria de Escocia",
            "Pelaje blanco y denso",
            "Esperanza de vida de 12 a 16 años",
            "Valientes, amigables y alertas",
            "Buen perro de compañía y cazador de pequeños roedores",
        ],
        care: {
            grooming: "Cepillado frecuente y cortes regulares del pelaje.",
            exercise: "Paseos diarios y actividades al aire libre.",
            training: "Entrenamiento positivo para mantener su atención.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas para mantener la energía",
                "Controlar las porciones para evitar sobrepeso",
            ],
            frequency: "2 comidas al día",
            portions: "Ajustadas según tamaño y nivel de actividad",
        },
        responsibilities: [
            "Cuidado del pelaje",
            "Ejercicio regular y supervisado",
            "Socialización para evitar comportamiento territorial",
        ],
        imageUrl: "https://example.com/west-highland-white-terrier.jpg",
    },
    {
        id: "53",
        name: "Lhasa",
        characteristics: [
            "Raza pequeña originaria del Tíbet",
            "Pelaje largo y abundante",
            "Esperanza de vida de 12 a 15 años",
            "Alertas, independientes y leales",
            "Buenos guardianes debido a su naturaleza protectora",
        ],
        care: {
            grooming: "Cepillado diario y cortes regulares del pelaje.",
            exercise: "Paseos moderados y juegos en interiores.",
            training: "Socialización y paciencia durante el entrenamiento.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en nutrientes esenciales para el pelaje",
                "Porciones ajustadas para evitar sobrepeso",
            ],
            frequency: "2 comidas al día",
            portions: "Pequeñas, según el tamaño y actividad",
        },
        responsibilities: [
            "Cuidado regular del pelaje",
            "Ejercicio ligero pero constante",
            "Chequeos veterinarios regulares",
        ],
        imageUrl: "https://example.com/lhasa.jpg",
    },
    {
        id: "54",
        name: "Flat-Coated Retriever",
        characteristics: [
            "Raza mediana-grande originaria del Reino Unido",
            "Pelaje negro o hígado, liso y brillante",
            "Esperanza de vida de 8 a 10 años",
            "Amistosos, juguetones y activos",
            "Excelentes para familias y actividades al aire libre",
        ],
        care: {
            grooming: "Cepillado semanal para mantener el pelaje limpio.",
            exercise: "Ejercicio diario, idealmente en espacios abiertos.",
            training: "Entrenamiento positivo con refuerzo constante.",
        },
        diet: {
            recommendations: [
                "Alimento de calidad para razas medianas-grandes",
                "Rico en proteínas y grasas saludables",
                "Porciones ajustadas según su nivel de actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Moderadas, según peso y actividad",
        },
        responsibilities: [
            "Ejercicio regular",
            "Entrenamiento consistente",
            "Control veterinario frecuente",
        ],
        imageUrl: "https://example.com/flat-coated-retriever.jpg",
    },
    {
        id: "55",
        name: "Curly-Coated Retriever",
        characteristics: [
            "Raza mediana-grande originaria del Reino Unido",
            "Pelaje rizado y resistente al agua",
            "Esperanza de vida de 10 a 12 años",
            "Independientes, inteligentes y enérgicos",
            "Excelentes para actividades de caza y natación",
        ],
        care: {
            grooming: "Cepillado ocasional para mantener los rizos definidos.",
            exercise: "Ejercicio vigoroso diario, como correr o nadar.",
            training: "Entrenamiento temprano para aprovechar su inteligencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas activas",
                "Rico en proteínas para mantener su energía",
                "Porciones ajustadas según nivel de actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Ajustadas según peso y ejercicio",
        },
        responsibilities: [
            "Ejercicio constante y desafiante",
            "Socialización desde cachorro",
            "Chequeos veterinarios regulares",
        ],
        imageUrl: "https://example.com/curly-coated-retriever.jpg",
    },
    {
        id: "56",
        name: "Golden Retriever",
        characteristics: [
            "Raza mediana-grande originaria del Reino Unido",
            "Pelaje dorado, denso y repelente al agua",
            "Esperanza de vida de 10 a 12 años",
            "Amistosos, inteligentes y leales",
            "Excelentes para familias y como perros de asistencia",
        ],
        care: {
            grooming: "Cepillado frecuente para reducir la muda de pelo.",
            exercise:
                "Ejercicio diario como paseos largos o actividades al aire libre.",
            training:
                "Fáciles de entrenar, responden bien al refuerzo positivo.",
        },
        diet: {
            recommendations: [
                "Alimento de calidad para razas medianas-grandes",
                "Rico en nutrientes para mantener su energía",
                "Controlar las porciones para evitar el sobrepeso",
            ],
            frequency: "2 comidas al día",
            portions: "Ajustadas según actividad y peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Entrenamiento constante y socialización",
            "Revisiones veterinarias frecuentes",
        ],
        imageUrl: "https://example.com/golden-retriever.jpg",
    },
    {
        id: "57",
        name: "Labrador Retriever",
        characteristics: [
            "Raza originaria de Terranova, Canadá",
            "Pelaje corto y denso en colores como negro, chocolate o amarillo",
            "Esperanza de vida de 10 a 14 años",
            "Amables, leales y buenos compañeros familiares",
            "Versátiles, destacan en actividades como la caza y como perros guía",
        ],
        care: {
            grooming: "Mantenimiento básico del pelaje corto.",
            exercise: "Ejercicio regular para mantener su energía equilibrada.",
            training:
                "Entrenamiento positivo debido a su inteligencia y disposición.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas a grandes",
                "Rico en proteínas para su energía",
                "Porciones adecuadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Entrenamiento consistente",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/labrador-retriever.jpg",
    },
    {
        id: "58",
        name: "Chesapeake Bay Retriever",
        characteristics: [
            "Raza de trabajo originaria de Estados Unidos",
            "Pelaje denso y resistente al agua",
            "Esperanza de vida de 10 a 13 años",
            "Leales, inteligentes y excelentes nadadores",
            "Destacan en actividades acuáticas y como perros de trabajo",
        ],
        care: {
            grooming: "Cepillado ocasional para mantener su pelaje limpio.",
            exercise: "Ejercicio diario intensivo para mantenerse saludable.",
            training: "Entrenamiento temprano debido a su naturaleza activa.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas activas",
                "Rico en proteínas y grasas saludables",
                "Porciones ajustadas según nivel de actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/chesapeake-bay-retriever.jpg",
    },
    {
        id: "59",
        name: "German Short-haired Pointer",
        characteristics: [
            "Originario de Alemania",
            "Pelaje corto y denso en colores como blanco y negro o marrón",
            "Esperanza de vida de 10 a 14 años",
            "Energéticos, inteligentes y obedientes",
            "Excelentes compañeros para personas activas y familias",
        ],
        care: {
            grooming: "Cepillado ocasional para eliminar el pelo suelto.",
            exercise:
                "Ejercicio diario intensivo debido a su alto nivel de energía.",
            training:
                "Entrenamiento consistente para aprovechar su inteligencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas a grandes",
                "Rico en proteínas para mantener su energía",
                "Porciones ajustadas según nivel de actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio intensivo",
            "Socialización constante",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/german-short-haired-pointer.jpg",
    },
    {
        id: "60",
        name: "Vizsla",
        characteristics: [
            "Raza originaria de Hungría",
            "Pelaje corto y denso de color dorado-arena",
            "Esperanza de vida de 10 a 14 años",
            "Cariñosos, leales y altamente enérgicos",
            "Excelentes compañeros para familias activas",
        ],
        care: {
            grooming: "Cepillado ocasional para mantener el brillo del pelaje.",
            exercise: "Ejercicio intensivo diario y estimulación mental.",
            training:
                "Entrenamiento temprano para fomentar un buen comportamiento.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas para su alta energía",
                "Porciones ajustadas según nivel de actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/vizsla.jpg",
    },
    {
        id: "61",
        name: "English Setter",
        characteristics: [
            "Originaria de Inglaterra",
            "Pelaje sedoso y liso con plumaje en orejas, pecho y patas",
            "Esperanza de vida de 10 a 12 años",
            "Amigables, afectuosos y extrovertidos",
            "Ideales para actividades al aire libre",
        ],
        care: {
            grooming:
                "Cepillado regular para evitar enredos y mantener el pelaje limpio.",
            exercise: "Ejercicio moderado diario.",
            training: "Entrenamiento positivo para fomentar su obediencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en nutrientes para su nivel de actividad",
                "Porciones ajustadas según edad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Cuidado del pelaje",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/english-setter.jpg",
    },
    {
        id: "62",
        name: "Irish Setter",
        characteristics: [
            "Originaria de Irlanda",
            "Pelaje largo, suave y sedoso de color rojo brillante",
            "Esperanza de vida de 10 a 14 años",
            "Activos, amigables y juguetones",
            "Excelentes compañeros familiares",
        ],
        care: {
            grooming:
                "Cepillado frecuente para mantener el pelaje libre de enredos.",
            exercise: "Ejercicio diario para mantener su energía equilibrada.",
            training: "Entrenamiento temprano para reforzar su obediencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas a grandes",
                "Rico en proteínas para mantener su energía",
                "Porciones ajustadas según nivel de actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/irish-setter.jpg",
    },
    {
        id: "63",
        name: "Gordon Setter",
        characteristics: [
            "Originaria de Escocia",
            "Pelaje largo y sedoso de color negro y fuego",
            "Esperanza de vida de 10 a 12 años",
            "Leales, inteligentes y afectuosos",
            "Destacan como compañeros de caza",
        ],
        care: {
            grooming:
                "Cepillado regular para mantener su pelaje en buen estado.",
            exercise: "Ejercicio moderado diario.",
            training: "Entrenamiento positivo para aprovechar su inteligencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas a grandes",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/gordon-setter.jpg",
    },
    {
        id: "64",
        name: "Brittany Spaniel",
        characteristics: [
            "Originaria de Francia",
            "Pelaje corto y denso en colores blanco y naranja o tricolor",
            "Esperanza de vida de 12 a 14 años",
            "Enérgicos, inteligentes y amigables",
            "Ideales para personas activas",
        ],
        care: {
            grooming: "Cepillado ocasional para mantener su pelaje limpio.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento temprano para fomentar su obediencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas activas",
                "Rico en proteínas para su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/brittany-spaniel.jpg",
    },
    {
        id: "65",
        name: "Clumber",
        characteristics: [
            "Originario de Inglaterra",
            "Pelaje blanco con marcas de limón o naranja",
            "Esperanza de vida de 10 a 12 años",
            "Tranquilos, leales y afectuosos",
            "Excelentes compañeros para familias",
        ],
        care: {
            grooming: "Cepillado regular para evitar enredos.",
            exercise: "Ejercicio moderado para mantener un peso saludable.",
            training: "Entrenamiento positivo y consistente.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según edad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/clumber.jpg",
    },
    {
        id: "66",
        name: "English Springer Spaniel",
        characteristics: [
            "Originario de Inglaterra",
            "Pelaje moderadamente largo y denso",
            "Esperanza de vida de 12 a 14 años",
            "Amigables, inteligentes y juguetones",
            "Excelentes compañeros familiares",
        ],
        care: {
            grooming:
                "Cepillado regular para mantener el pelaje en buen estado.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas para mantener su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/english-springer-spaniel.jpg",
    },
    {
        id: "67",
        name: "Welsh Springer Spaniel",
        characteristics: [
            "Originaria de Gales",
            "Pelaje suave y sedoso de color rojo y blanco",
            "Esperanza de vida de 12 a 15 años",
            "Enérgicos, leales y afectuosos",
            "Ideales para familias activas",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje limpio.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento temprano para fomentar su obediencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas para mantener su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/welsh-springer-spaniel.jpg",
    },
    {
        id: "68",
        name: "Cocker Spaniel",
        characteristics: [
            "Raza mediana con orejas largas y expresión dulce",
            "Pelaje largo y sedoso en varios colores",
            "Esperanza de vida de 12 a 15 años",
            "Amigables, juguetones y afectuosos",
            "Ideales para la convivencia familiar",
        ],
        care: {
            grooming: "Cepillado frecuente para evitar enredos.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento temprano para reforzar su obediencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado constante del pelaje",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/cocker-spaniel.jpg",
    },
    {
        id: "69",
        name: "Sussex Spaniel",
        characteristics: [
            "Originaria de Inglaterra",
            "Pelaje ondulado de color dorado rojizo",
            "Esperanza de vida de 10 a 12 años",
            "Afectuosos, tranquilos y leales",
            "Requieren ejercicio regular para mantenerse saludables",
        ],
        care: {
            grooming: "Cepillado frecuente para mantener su pelaje limpio.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento temprano para reforzar su obediencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado constante del pelaje",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/sussex-spaniel.jpg",
    },
    {
        id: "70",
        name: "Irish Water Spaniel",
        characteristics: [
            "Originaria de Irlanda",
            "Pelaje rizado y resistente al agua",
            "Esperanza de vida de 10 a 13 años",
            "Inteligentes, enérgicos y amantes del agua",
            "Ideales para actividades acuáticas y familias activas",
        ],
        care: {
            grooming:
                "Cepillado frecuente para mantener los rizos libres de enredos.",
            exercise: "Ejercicio diario intensivo.",
            training: "Entrenamiento temprano para aprovechar su inteligencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas para mantener su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado constante del pelaje",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/irish-water-spaniel.jpg",
    },
    {
        id: "71",
        name: "Kuvasz",
        characteristics: [
            "Originaria de Hungría",
            "Pelaje blanco y tupido",
            "Esperanza de vida de 10 a 12 años",
            "Leales, protectores y afectuosos",
            "Excelentes perros guardianes",
        ],
        care: {
            grooming: "Cepillado frecuente para mantener el pelaje limpio.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento consistente.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Socialización desde cachorro",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/kuvasz.jpg",
    },
    {
        id: "72",
        name: "Schipperke",
        characteristics: [
            "Originaria de Bélgica",
            "Pelaje negro, orejas puntiagudas y cola corta",
            "Esperanza de vida de 13 a 15 años",
            "Enérgicos, curiosos y leales",
            "Buenos guardianes y compañeros familiares",
        ],
        care: {
            grooming:
                "Cepillado regular para mantener el pelaje en buen estado.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento temprano para canalizar su energía.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas para mantener su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/schipperke.jpg",
    },
    {
        id: "73",
        name: "Groenendael",
        characteristics: [
            "Variedad de perro pastor belga",
            "Pelaje largo y negro",
            "Esperanza de vida de 10 a 14 años",
            "Inteligentes, leales y activos",
            "Excelentes en actividades de pastoreo y adiestramiento",
        ],
        care: {
            grooming: "Cepillado regular para evitar enredos.",
            exercise: "Ejercicio diario intensivo.",
            training: "Entrenamiento temprano y consistente.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas para mantener su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/groenendael.jpg",
    },
    {
        id: "74",
        name: "Malinois",
        characteristics: [
            "Variedad de perro pastor belga",
            "Pelaje corto y denso de color marrón a canela",
            "Esperanza de vida de 12 a 14 años",
            "Inteligentes, enérgicos y versátiles",
            "Destacan en pastoreo y trabajo policial",
        ],
        care: {
            grooming: "Cepillado ocasional para mantener el pelaje limpio.",
            exercise: "Ejercicio diario intensivo.",
            training:
                "Entrenamiento temprano y consistente para su inteligencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas y grasas saludables",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/malinois.jpg",
    },
    {
        id: "75",
        name: "Briard",
        characteristics: [
            "Originaria de Francia",
            "Pelaje largo y ondulado",
            "Esperanza de vida de 10 a 12 años",
            "Leales, afectuosos y valientes",
            "Destacan como pastores y compañeros familiares",
        ],
        care: {
            grooming:
                "Cepillado frecuente para mantener el pelaje limpio y libre de enredos.",
            exercise: "Ejercicio moderado diario.",
            training: "Entrenamiento temprano para aprovechar su inteligencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización desde cachorro",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/briard.jpg",
    },
    {
        id: "76",
        name: "Kelpie",
        characteristics: [
            "Originaria de Australia",
            "Pelaje corto y resistente",
            "Esperanza de vida de 10 a 14 años",
            "Inteligentes, leales y trabajadores",
            "Excelentes pastores y compañeros para actividades al aire libre",
        ],
        care: {
            grooming: "Mantenimiento básico del pelaje corto.",
            exercise: "Ejercicio diario intensivo.",
            training: "Entrenamiento temprano para canalizar su energía.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas activas",
                "Rico en proteínas para su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/kelpie.jpg",
    },
    {
        id: "77",
        name: "Komondor",
        characteristics: [
            "Originaria de Hungría",
            "Pelaje largo y cordado que forma rastas naturales",
            "Esperanza de vida de 10 a 12 años",
            "Leales, protectores y tranquilos",
            "Excelentes perros guardianes de ganado",
        ],
        care: {
            grooming:
                "Cepillado especializado para mantener las rastas en buen estado.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento consistente.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado especializado del pelaje",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/komondor.jpg",
    },
    {
        id: "78",
        name: "Old English Sheepdog",
        characteristics: [
            "Originaria de Inglaterra",
            "Pelaje largo y lanudo que cubre todo su cuerpo",
            "Esperanza de vida de 10 a 12 años",
            "Cariñosos, juguetones e inteligentes",
            "Excelentes compañeros familiares",
        ],
        care: {
            grooming:
                "Cepillado frecuente para evitar enredos y mantener su pelaje limpio.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento temprano para reforzar su obediencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en proteínas y grasas saludables",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado constante del pelaje",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/old-english-sheepdog.jpg",
    },
    {
        id: "79",
        name: "Shetland Sheepdog",
        characteristics: [
            "Originaria de las Islas Shetland, Escocia",
            "Pelaje espeso y mirada alerta",
            "Esperanza de vida de 12 a 14 años",
            "Inteligentes, leales y enérgicos",
            "Excelentes compañeros familiares y para actividades de agilidad",
        ],
        care: {
            grooming:
                "Cepillado regular para mantener su pelaje libre de enredos.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento temprano para aprovechar su inteligencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Cuidado del pelaje",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/shetland-sheepdog.jpg",
    },
    {
        id: "80",
        name: "Collie",
        characteristics: [
            "Originaria de Escocia",
            "Pelaje largo y sedoso",
            "Esperanza de vida de 10 a 14 años",
            "Leales, amigables e inteligentes",
            "Destacan en actividades de pastoreo y agilidad",
        ],
        care: {
            grooming: "Cepillado regular para evitar enredos.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento temprano para reforzar su obediencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en proteínas y grasas saludables",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado constante del pelaje",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/collie.jpg",
    },
    {
        id: "81",
        name: "Border Collie",
        characteristics: [
            "Originaria de la frontera entre Escocia e Inglaterra",
            "Pelaje mediano y variado en colores",
            "Esperanza de vida de 12 a 15 años",
            "Energéticos, inteligentes y ágiles",
            "Excelentes para actividades de pastoreo y deportes",
        ],
        care: {
            grooming: "Cepillado ocasional para mantener su pelaje limpio.",
            exercise: "Ejercicio diario intensivo.",
            training: "Entrenamiento avanzado para canalizar su energía.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas para su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/border-collie.jpg",
    },
    {
        id: "82",
        name: "Bouvier des Flandres",
        characteristics: [
            "Originaria de Bélgica y Francia",
            "Pelaje áspero y denso",
            "Esperanza de vida de 10 a 12 años",
            "Leales, valientes y trabajadores",
            "Destacan en tareas de pastoreo y protección",
        ],
        care: {
            grooming:
                "Cepillado regular para mantener su pelaje limpio y ordenado.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento temprano para reforzar su obediencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en proteínas y grasas saludables",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado constante del pelaje",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/bouvier-des-flandres.jpg",
    },
    {
        id: "83",
        name: "Rottweiler",
        characteristics: [
            "Originaria de Alemania",
            "Pelaje corto y denso",
            "Esperanza de vida de 9 a 12 años",
            "Leales, valientes y protectores",
            "Excelentes perros guardianes y familiares",
        ],
        care: {
            grooming: "Mantenimiento básico del pelaje corto.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento constante.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Socialización desde cachorro",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/rottweiler.jpg",
    },
    {
        id: "84",
        name: "German Shepherd",
        characteristics: [
            "Originaria de Alemania",
            "Pelaje doble de longitud media",
            "Esperanza de vida de 9 a 13 años",
            "Inteligentes, leales y versátiles",
            "Excelentes en tareas de búsqueda, rescate y como compañeros",
        ],
        care: {
            grooming: "Cepillado regular para eliminar el pelo suelto.",
            exercise: "Ejercicio diario intensivo.",
            training: "Entrenamiento avanzado debido a su inteligencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en proteínas para su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/german-shepherd.jpg",
    },
    {
        id: "85",
        name: "Doberman",
        characteristics: [
            "Originaria de Alemania",
            "Pelaje corto y brillante",
            "Esperanza de vida de 10 a 12 años",
            "Leales, valientes y protectores",
            "Excelentes perros guardianes y compañeros familiares",
        ],
        care: {
            grooming: "Mantenimiento básico del pelaje corto.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento temprano y consistente.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Socialización desde cachorro",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/doberman.jpg",
    },
    {
        id: "86",
        name: "Miniature Pinscher",
        characteristics: [
            "Originaria de Alemania",
            "Pelaje corto y suave",
            "Esperanza de vida de 12 a 14 años",
            "Valientes, vivaces y juguetones",
            "Excelentes compañeros para familias activas",
        ],
        care: {
            grooming: "Mantenimiento básico del pelaje corto.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento temprano para canalizar su energía.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas para mantener su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Socialización constante",
            "Ejercicio regular",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/miniature-pinscher.jpg",
    },
    {
        id: "87",
        name: "Greater Swiss Mountain Dog",
        characteristics: [
            "Originaria de Suiza",
            "Pelaje corto y denso con manto tricolor",
            "Esperanza de vida de 8 a 11 años",
            "Amigables, leales y equilibrados",
            "Excelentes compañeros familiares y perros guardianes",
        ],
        care: {
            grooming: "Cepillado ocasional para mantener el pelaje limpio.",
            exercise: "Ejercicio moderado diario.",
            training: "Entrenamiento temprano para reforzar su obediencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en proteínas y grasas saludables",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización desde cachorro",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/greater-swiss-mountain-dog.jpg",
    },
    {
        id: "88",
        name: "Bernese Mountain Dog",
        characteristics: [
            "Originaria de Suiza",
            "Pelaje largo y sedoso con manto tricolor",
            "Esperanza de vida de 7 a 10 años",
            "Cariñosos, leales y equilibrados",
            "Excelentes compañeros familiares y perros de trabajo",
        ],
        care: {
            grooming:
                "Cepillado regular para evitar enredos y mantener el pelaje limpio.",
            exercise: "Ejercicio moderado diario.",
            training: "Entrenamiento temprano para reforzar su obediencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en proteínas y grasas saludables",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/bernese-mountain-dog.jpg",
    },
    {
        id: "89",
        name: "Appenzeller",
        characteristics: [
            "Originaria de los Alpes suizos",
            "Pelaje corto y tricolor con marcas distintivas",
            "Esperanza de vida de 12 a 14 años",
            "Enérgicos, inteligentes y leales",
            "Excelentes perros de pastoreo y guardianes",
        ],
        care: {
            grooming: "Cepillado ocasional para mantener su pelaje limpio.",
            exercise: "Ejercicio intensivo diario.",
            training: "Entrenamiento temprano y consistente.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas para mantener su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/appenzeller.jpg",
    },
    {
        id: "90",
        name: "Entlebucher",
        characteristics: [
            "Originaria de los Alpes suizos",
            "Pelaje corto y tricolor",
            "Esperanza de vida de 10 a 15 años",
            "Enérgicos, inteligentes y leales",
            "Excelentes perros de trabajo y compañía",
        ],
        care: {
            grooming: "Cepillado ocasional para mantener el pelaje limpio.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento temprano para reforzar su obediencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas para su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/entlebucher.jpg",
    },
    {
        id: "91",
        name: "Boxer",
        characteristics: [
            "Originaria de Alemania",
            "Pelaje corto y brillante",
            "Esperanza de vida de 10 a 12 años",
            "Enérgicos, juguetones y leales",
            "Excelentes compañeros familiares",
        ],
        care: {
            grooming: "Mantenimiento básico del pelaje corto.",
            exercise: "Ejercicio diario intensivo.",
            training: "Entrenamiento temprano para aprovechar su energía.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas a grandes",
                "Rico en proteínas para mantener su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Socialización constante",
            "Ejercicio regular",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/boxer.jpg",
    },
    {
        id: "92",
        name: "Bullmastiff",
        characteristics: [
            "Originaria de Inglaterra",
            "Pelaje corto y denso",
            "Esperanza de vida de 8 a 10 años",
            "Leales, valientes y tranquilos",
            "Excelentes perros guardianes y familiares",
        ],
        care: {
            grooming: "Mantenimiento básico del pelaje corto.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento temprano y consistente.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en proteínas y grasas saludables",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización desde cachorro",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/bullmastiff.jpg",
    },
    {
        id: "93",
        name: "Tibetan Mastiff",
        characteristics: [
            "Originaria del Tíbet",
            "Pelaje largo y denso, especialmente en el cuello",
            "Esperanza de vida de 10 a 14 años",
            "Leales, independientes y protectores",
            "Excelentes perros guardianes y compañeros familiares",
        ],
        care: {
            grooming:
                "Cepillado frecuente para mantener el pelaje en buen estado.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento consistente.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado constante del pelaje",
            "Ejercicio regular",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/tibetan-mastiff.jpg",
    },
    {
        id: "94",
        name: "French Bulldog",
        characteristics: [
            "Originaria de Francia",
            "Pelaje corto y suave",
            "Esperanza de vida de 10 a 12 años",
            "Amigables, juguetones y cariñosos",
            "Ideales para espacios pequeños",
        ],
        care: {
            grooming: "Mantenimiento básico del pelaje corto.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento positivo.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización constante",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/french-bulldog.jpg",
    },
    {
        id: "95",
        name: "Great Dane",
        characteristics: [
            "Originaria de Alemania",
            "Pelaje corto y brillante",
            "Esperanza de vida de 7 a 10 años",
            "Amigables, gentiles y tranquilos",
            "Imponentes pero afectuosos compañeros familiares",
        ],
        care: {
            grooming: "Mantenimiento básico del pelaje corto.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento consistente.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas gigantes",
                "Rico en proteínas y grasas saludables",
                "Porciones ajustadas según tamaño y actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio regular",
            "Socialización desde cachorro",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/great-dane.jpg",
    },
    {
        id: "96",
        name: "Saint Bernard",
        characteristics: [
            "Originaria de los Alpes suizos",
            "Pelaje denso y suave",
            "Esperanza de vida de 8 a 10 años",
            "Cariñosos, tranquilos y gentiles",
            "Excelentes perros de rescate y compañeros familiares",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje limpio.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento temprano para reforzar su obediencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas gigantes",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según tamaño y actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/saint-bernard.jpg",
    },
    {
        id: "97",
        name: "Eskimo Dog",
        characteristics: [
            "Originaria de Estados Unidos",
            "Pelaje denso y esponjoso",
            "Esperanza de vida de 12 a 16 años",
            "Inteligentes, ágiles y alertas",
            "Afectuosos y buenos compañeros familiares",
        ],
        care: {
            grooming: "Cepillado frecuente para mantener el pelaje limpio.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento positivo.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Cuidado del pelaje",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/eskimo-dog.jpg",
    },
    {
        id: "98",
        name: "Malamute",
        characteristics: [
            "Originaria de Alaska",
            "Pelaje denso y resistente",
            "Esperanza de vida de 10 a 14 años",
            "Afectuosos, leales y amigables",
            "Excelentes para actividades al aire libre",
        ],
        care: {
            grooming: "Cepillado frecuente para eliminar el pelo suelto.",
            exercise: "Ejercicio diario intensivo.",
            training: "Entrenamiento temprano para reforzar su obediencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en proteínas para mantener su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/malamute.jpg",
    },
    {
        id: "99",
        name: "Siberian Husky",
        characteristics: [
            "Originaria de Siberia, Rusia",
            "Pelaje espeso y resistente",
            "Esperanza de vida de 12 a 15 años",
            "Enérgicos, sociables y amigables",
            "Excelentes para climas fríos y actividades al aire libre",
        ],
        care: {
            grooming: "Cepillado regular para eliminar el pelo suelto.",
            exercise: "Ejercicio diario intensivo.",
            training: "Entrenamiento temprano para canalizar su energía.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas y grasas saludables",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/siberian-husky.jpg",
    },
    {
        id: "100",
        name: "Affenpinscher",
        characteristics: [
            "Originaria de Alemania",
            "Pelaje áspero y expresión distintiva",
            "Esperanza de vida de 12 a 14 años",
            "Animados, juguetones y valientes",
            "Excelentes compañeros para familias",
        ],
        care: {
            grooming:
                "Cepillado regular para mantener su pelaje en buen estado.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento positivo.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Socialización constante",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/affenpinscher.jpg",
    },
    {
        id: "101",
        name: "Basenji",
        characteristics: [
            "Originaria de África Central",
            "Pelaje corto y brillante",
            "Esperanza de vida de 12 a 16 años",
            "Independientes, leales y afectuosos",
            "Famosos por no ladrar, pero emiten un sonido único",
        ],
        care: {
            grooming: "Mantenimiento básico del pelaje corto.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento positivo.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas para mantener su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/basenji.jpg",
    },
    {
        id: "102",
        name: "Pug",
        characteristics: [
            "Originaria de China",
            "Cuerpo compacto con arrugas distintivas",
            "Esperanza de vida de 12 a 15 años",
            "Amigables, juguetones y cariñosos",
            "Excelentes compañeros para familias",
        ],
        care: {
            grooming:
                "Limpieza regular de las arrugas y cuidado básico del pelaje.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento positivo.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Control de calorías para evitar obesidad",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidados especiales del rostro",
            "Ejercicio regular",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/pug.jpg",
    },
    {
        id: "103",
        name: "Leonberg",
        characteristics: [
            "Originaria de Alemania",
            "Pelaje largo y denso",
            "Esperanza de vida de 8 a 10 años",
            "Leales, afectuosos y equilibrados",
            "Excelentes compañeros familiares y perros de trabajo",
        ],
        care: {
            grooming:
                "Cepillado frecuente para mantener su pelaje libre de enredos.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento temprano para reforzar su obediencia.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas gigantes",
                "Rico en proteínas y grasas saludables",
                "Porciones ajustadas según tamaño y actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado constante del pelaje",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/leonberg.jpg",
    },
    {
        id: "104",
        name: "Newfoundland",
        characteristics: [
            "Originaria de Canadá",
            "Pelaje denso y resistente al agua",
            "Esperanza de vida de 9 a 10 años",
            "Amigables, tranquilos y trabajadores",
            "Excelentes nadadores y perros de rescate",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje limpio.",
            exercise: "Ejercicio moderado diario.",
            training: "Entrenamiento temprano y consistente.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas gigantes",
                "Rico en proteínas y grasas saludables",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Socialización desde cachorro",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/newfoundland.jpg",
    },
    {
        id: "105",
        name: "Great Pyrenees",
        characteristics: [
            "Originaria de los Pirineos, Europa",
            "Pelaje largo y denso",
            "Esperanza de vida de 10 a 12 años",
            "Leales, protectores y tranquilos",
            "Excelentes guardianes y compañeros familiares",
        ],
        care: {
            grooming:
                "Cepillado regular para mantener el pelaje en buen estado.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento consistente.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas gigantes",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado constante del pelaje",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/great-pyrenees.jpg",
    },
    {
        id: "106",
        name: "Samoyed",
        characteristics: [
            "Originaria de Siberia",
            "Pelaje blanco y esponjoso",
            "Esperanza de vida de 12 a 14 años",
            "Cariñosos, leales y enérgicos",
            "Excelentes compañeros para climas fríos",
        ],
        care: {
            grooming:
                "Cepillado frecuente para mantener su pelaje en buen estado.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento positivo.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas y grasas saludables",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado constante del pelaje",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/samoyed.jpg",
    },
    {
        id: "107",
        name: "Pomeranian",
        characteristics: [
            "Originaria de Europa (región de Pomerania)",
            "Pelaje esponjoso y cola enroscada",
            "Esperanza de vida de 12 a 16 años",
            "Juguetones, curiosos y valientes",
            "Ideales para espacios pequeños",
        ],
        care: {
            grooming:
                "Cepillado frecuente para mantener su pelaje libre de enredos.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento positivo.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado del pelaje",
            "Ejercicio constante",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/pomeranian.jpg",
    },
    {
        id: "108",
        name: "Chow",
        characteristics: [
            "Originaria de China",
            "Pelaje denso y melena de león",
            "Esperanza de vida de 9 a 15 años",
            "Independientes, leales y afectuosos",
            "Reservados con extraños pero cariñosos con la familia",
        ],
        care: {
            grooming: "Cepillado regular para mantener su pelaje limpio.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento consistente.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas para mantener su energía",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado constante del pelaje",
            "Ejercicio regular",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/chow.jpg",
    },
    {
        id: "109",
        name: "Keeshond",
        characteristics: [
            "Originaria de los Países Bajos",
            "Pelaje denso y esponjoso con cola enrollada",
            "Esperanza de vida de 12 a 15 años",
            "Amistosos, enérgicos y alertas",
            "Excelentes compañeros familiares",
        ],
        care: {
            grooming:
                "Cepillado regular para mantener su pelaje libre de enredos.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento positivo.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado del pelaje",
            "Ejercicio constante",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/keeshond.jpg",
    },
    {
        id: "110",
        name: "Brabancon Griffon",
        characteristics: [
            "Originaria de Bélgica",
            "Pelaje áspero y expresión facial distintiva",
            "Esperanza de vida de 12 a 15 años",
            "Afectuosos, vivaces y juguetones",
            "Excelentes para familias con niños",
        ],
        care: {
            grooming:
                "Cepillado regular para mantener su pelaje en buen estado.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento positivo.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado del pelaje",
            "Ejercicio constante",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/brabancon-griffon.jpg",
    },
    {
        id: "111",
        name: "Pembroke",
        characteristics: [
            "Originaria de Gales",
            "Cuerpo largo, orejas puntiagudas y cola corta",
            "Esperanza de vida de 12 a 15 años",
            "Cariñosos, enérgicos y valientes",
            "Excelentes compañeros familiares",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje limpio.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento positivo.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Socialización constante",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/pembroke.jpg",
    },
    {
        id: "112",
        name: "Cardigan",
        characteristics: [
            "Originaria de Gales",
            "Cuerpo largo, orejas redondeadas y cola larga",
            "Esperanza de vida de 12 a 15 años",
            "Cariñosos, enérgicos y valientes",
            "Excelentes perros de compañía",
        ],
        care: {
            grooming: "Cepillado regular para mantener el pelaje limpio.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento positivo.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Cuidado del pelaje",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/cardigan.jpg",
    },
    {
        id: "113",
        name: "Toy Poodle",
        characteristics: [
            "Variante pequeña del Poodle",
            "Pelaje rizado y elegante",
            "Esperanza de vida de 12 a 15 años",
            "Cariñosos, inteligentes y juguetones",
            "Adaptables a diversos entornos",
        ],
        care: {
            grooming:
                "Cepillado frecuente y recortes regulares para mantener el pelaje limpio.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas pequeñas",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado constante del pelaje",
            "Ejercicio regular",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/toy-poodle.jpg",
    },
    {
        id: "114",
        name: "Miniature Poodle",
        characteristics: [
            "Variante mediana del Poodle",
            "Pelaje rizado y elegante",
            "Esperanza de vida de 12 a 15 años",
            "Inteligentes, enérgicos y cariñosos",
            "Ideales para familias y actividades de agilidad",
        ],
        care: {
            grooming:
                "Cepillado frecuente y recortes regulares para mantener el pelaje limpio.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento positivo desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en proteínas y nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Socialización constante",
            "Ejercicio regular",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/miniature-poodle.jpg",
    },
    {
        id: "115",
        name: "Standard Poodle",
        characteristics: [
            "Versión grande del Poodle",
            "Pelaje rizado y elegante",
            "Esperanza de vida de 10 a 15 años",
            "Inteligentes, leales y versátiles",
            "Excelentes compañeros y perros de trabajo",
        ],
        care: {
            grooming:
                "Cepillado frecuente y recortes regulares para mantener el pelaje limpio.",
            exercise: "Ejercicio diario moderado.",
            training: "Entrenamiento positivo y avanzado desde cachorro.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas grandes",
                "Rico en proteínas y grasas saludables",
                "Porciones ajustadas según tamaño y actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Ejercicio constante",
            "Cuidado del pelaje",
            "Cuidados veterinarios regulares",
        ],
        imageUrl: "https://example.com/standard-poodle.jpg",
    },
    {
        id: "116",
        name: "Mexican Hairless",
        characteristics: [
            "Originaria de México",
            "Ausencia de pelaje y piel suave",
            "Esperanza de vida de 12 a 15 años",
            "Leales, tranquilos y afectuosos",
            "Requieren protección contra el sol debido a su piel",
        ],
        care: {
            grooming: "Cuidado especial de la piel y protección solar.",
            exercise: "Ejercicio diario moderado.",
            training: "Socialización temprana y entrenamiento positivo.",
        },
        diet: {
            recommendations: [
                "Alimento balanceado para razas medianas",
                "Rico en nutrientes esenciales",
                "Porciones ajustadas según actividad",
            ],
            frequency: "2 comidas al día",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Cuidado especial de la piel",
            "Ejercicio constante",
            "Revisiones veterinarias periódicas",
        ],
        imageUrl: "https://example.com/mexican-hairless.jpg",
    },
    {
        id: "117",
        name: "Dingo",
        characteristics: [
            "Originaria de Australia",
            "Pelaje corto y de tonos amarillos o rojizos",
            "Naturaleza salvaje e independiente",
            "Socializan en grupos y son excelentes cazadores",
            "Adaptados a diversos hábitats",
        ],
        care: {
            grooming: "Mantenimiento básico del pelaje corto.",
            exercise: "Espacios amplios para actividad física constante.",
            training: "No se adapta al entrenamiento convencional.",
        },
        diet: {
            recommendations: [
                "Dieta carnívora, rica en proteínas",
                "Basada en su entorno natural",
            ],
            frequency: "Alimentación según sus necesidades y actividad",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Conservación de su hábitat",
            "Supervisión especializada",
        ],
        imageUrl: "https://example.com/dingo.jpg",
    },
    {
        id: "118",
        name: "Dhole",
        characteristics: [
            "Originaria de Asia",
            "Pelaje corto y rojizo",
            "Animales sociales que cazan en grupos",
            "Estructura social cooperativa",
            "Eficientes depredadores",
        ],
        care: {
            grooming: "Mantenimiento básico del pelaje corto.",
            exercise: "Ambientes amplios para su actividad.",
            training: "No se adapta al entrenamiento convencional.",
        },
        diet: {
            recommendations: ["Dieta carnívora, basada en presas naturales"],
            frequency: "Según la caza y necesidades",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Conservación de su ecosistema",
            "Protección contra amenazas humanas",
        ],
        imageUrl: "https://example.com/dhole.jpg",
    },
    {
        id: "119",
        name: "African Hunting Dog",
        characteristics: [
            "Originaria de África",
            "Pelaje moteado y orejas grandes",
            "Esperanza de vida de 10 a 12 años",
            "Cazan en manadas organizadas",
            "Estructura social compleja",
        ],
        care: {
            grooming: "Mantenimiento básico del pelaje corto.",
            exercise:
                "Espacios amplios para satisfacer sus necesidades naturales.",
            training: "No se adapta al entrenamiento convencional.",
        },
        diet: {
            recommendations: ["Dieta carnívora basada en presas naturales"],
            frequency: "Basada en la caza y necesidades energéticas",
            portions: "Según edad, peso",
        },
        responsibilities: [
            "Conservación y protección de la especie",
            "Protección contra la caza furtiva",
        ],
        imageUrl: "https://example.com/african-hunting-dog.jpg",
    },
];
