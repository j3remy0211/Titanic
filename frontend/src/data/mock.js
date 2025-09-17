export const mockData = {
  history: {
    construction: "El RMS Titanic fue construido entre 1909 y 1912 en los astilleros Harland and Wolff de Belfast, Irlanda del Norte. Con 269 metros de eslora y 53,000 toneladas, fue el barco más grande y lujoso de su época, diseñado para ser 'prácticamente inhundible'.",
    voyage: "El 10 de abril de 1912, el Titanic zarpó de Southampton en su viaje inaugural hacia Nueva York. A bordo viajaban 2,224 personas, incluyendo algunos de los nombres más prominentes de la sociedad de la época, así como inmigrantes en busca de una nueva vida en América."
  },

  facts: [
    "Tenía 9 cubiertas y podía albergar hasta 3,547 pasajeros y tripulación",
    "Sus motores generaban 30,000 caballos de fuerza",
    "Contaba con una piscina cubierta, gimnasio y canchas de squash",
    "Su orquesta continuó tocando mientras el barco se hundía",
    "Solo había botes salvavidas para 1,178 personas"
  ],

  timeline: [
    {
      time: "23:40",
      event: "Colisión con el iceberg",
      description: "El Titanic golpea un iceberg en el lado de estribor, causando una serie de perforaciones fatales en el casco."
    },
    {
      time: "00:05",
      event: "Inspección de daños",
      description: "Thomas Andrews y la tripulación inspeccionan los daños. Se determina que el barco se hundirá en aproximadamente una hora."
    },
    {
      time: "00:15",
      event: "Orden de evacuar",
      description: "El Capitán Smith ordena preparar los botes salvavidas y enviar señales de socorro por radio."
    },
    {
      time: "00:45",
      event: "Primer bote salvavidas",
      description: "Se lanza el primer bote salvavidas con solo 28 personas a bordo, cuando podría llevar 65."
    },
    {
      time: "01:40",
      event: "Último bote salvavidas",
      description: "Se lanza el último bote salvavidas regular. Más de 1,500 personas permanecen a bordo."
    },
    {
      time: "02:05",
      event: "Último mensaje de radio",
      description: "Se envía el último mensaje de socorro desde el Titanic."
    },
    {
      time: "02:20",
      event: "El Titanic se hunde",
      description: "El RMS Titanic se parte en dos y se hunde completamente en las aguas del Atlántico Norte."
    }
  ],

  gallery: {
    exterior: [
      {
        title: "El Titanic en Southampton",
        description: "El majestuoso RMS Titanic atracado en Southampton antes de su viaje inaugural"
      },
      {
        title: "Vista lateral completa",
        description: "Imagen icónica mostrando la impresionante longitud del barco"
      },
      {
        title: "Las cuatro chimeneas",
        description: "Las famosas chimeneas del Titanic, símbolos de poder y elegancia"
      }
    ],
    interior: [
      {
        title: "Gran Escalinata",
        description: "La espectacular escalinata de primera clase con su cúpula de cristal"
      },
      {
        title: "Salón de Primera Clase",
        description: "Elegante salón donde se reunía la alta sociedad durante el viaje"
      },
      {
        title: "Comedor Principal",
        description: "El lujoso comedor principal con capacidad para cientos de pasajeros"
      }
    ],
    construccion: [
      {
        title: "Astilleros Harland and Wolff",
        description: "El Titanic en construcción en Belfast, mostrando su impresionante estructura"
      },
      {
        title: "Botadura del casco",
        description: "El momento histórico cuando el casco del Titanic tocó el agua por primera vez"
      },
      {
        title: "Trabajadores en el astillero",
        description: "Miles de trabajadores dedicados a la construcción del barco más grande del mundo"
      }
    ],
    rescate: [
      {
        title: "Carpathia llega al rescate",
        description: "El RMS Carpathia rescatando a los supervivientes en botes salvavidas"
      },
      {
        title: "Supervivientes a bordo",
        description: "Pasajeros rescatados recuperándose a bordo del Carpathia"
      },
      {
        title: "Llegada a Nueva York",
        description: "El Carpathia llegando a Nueva York con los supervivientes del Titanic"
      }
    ]
  },

  passengers: {
    firstClass: [
      {
        name: "John Jacob Astor IV",
        age: 47,
        fate: "No sobrevivió",
        story: "Uno de los hombres más ricos del mundo, ayudó a su esposa embarazada a subir a un bote salvavidas."
      },
      {
        name: "Margaret 'Molly' Brown",
        age: 44,
        fate: "Sobrevivió",
        story: "Conocida como 'La Insumergible Molly Brown', ayudó a otros pasajeros y tomó control de su bote salvavidas."
      },
      {
        name: "Isidor y Ida Straus",
        age: "67 y 63",
        fate: "No sobrevivieron",
        story: "Propietarios de Macy's, se negaron a separarse y permanecieron juntos hasta el final."
      }
    ],
    crew: [
      {
        name: "Capitán Edward Smith",
        age: 62,
        fate: "No sobrevivió",
        story: "En su último viaje antes de la jubilación, permaneció con su barco hasta el final."
      },
      {
        name: "Thomas Andrews",
        age: 39,
        fate: "No sobrevivió",
        story: "Arquitecto naval del Titanic, ayudó en la evacuación hasta sus últimos momentos."
      }
    ]
  },

  specifications: {
    dimensions: {
      length: "269.1 metros",
      width: "28.2 metros",
      height: "53.3 metros",
      displacement: "52,310 toneladas"
    },
    capacity: {
      passengers: "2,435 pasajeros",
      crew: "892 tripulantes",
      lifeboats: "20 botes salvavidas",
      lifeboat_capacity: "1,178 personas"
    },
    performance: {
      max_speed: "23 nudos",
      cruising_speed: "21 nudos",
      engines: "Dos motores de vapor recíprocos + una turbina de vapor",
      power: "30,000 caballos de fuerza"
    }
  }
};