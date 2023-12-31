export const hotelData = async() =>{
    try {
        const respuesta = await fetch(
            "https://6256097e8646add390e01d99.mockapi.io/hotels/reservation/hotels"
            );
            const jsonData = await respuesta.json();
            return jsonData;

    } catch (error) {
        console.log('error en la api');
    }

    
};








// export const hotelData =
//     [
//         {
//             "slug": "la-bamba-de-areco",
//             "name": "La Bamba de Areco",
//             "photo": "https://i.ibb.co/FVqhgL4/la-bamba-de-areco.jpg",
//             "description": "La Bamba de Areco est\u00E1 ubicada en San Antonio de Areco, en el coraz\u00F3n de la pampa. Es una de las estancias m\u00E1s antiguas de la Argentina, recientemente restaurada para ofrecer a sus hu\u00E9spedes todo el confort y esplendor colonial.",
//             "availabilityFrom": 0,
//             "availabilityTo": 864000000,
//             "rooms": 11,
//             "city": "Buenos Aires",
//             "country": "Argentina",
//             "price": 4
//         },
//         {
//             "slug": "sainte-jeanne",
//             "name": "Sainte Jeanne Boutique & Spa",
//             "photo": "https://i.ibb.co/b57KX1g/sainte-jeanne.jpg",
//             "description": "Sainte Jeanne Hotel Boutique & Spa est\u00E1 ubicado en el coraz\u00F3n de Los Troncos, un barrio residencial y elegante de Mar del Plata. El lujo, el confort y la pasi\u00F3n por los detalles dan personalidad a esta c\u00E1lida propuesta.",
//             "availabilityFrom": 864000000,
//             "availabilityTo": 1296000000,
//             "rooms": 23,
//             "city": "Mar del Plata",
//             "country": "Argentina",
//             "price": 2
//         },
//         {
//             "slug": "entre-cielos",
//             "name": "Entre Cielos",
//             "photo": "https://i.ibb.co/XZmZx0C/entre-cielos.jpg",
//             "description": "Ubicado en una de las regiones vitivin\u00EDcolas m\u00E1s grandes de Am\u00E9rica Latina, Entre Cielos fue pensado y construido en un campo de 8 hect\u00E1reas rodeado de vi\u00F1edos malbec y una imponente vista de la Cordillera de Los Andes.",
//             "availabilityFrom": 432000000,
//             "availabilityTo": 1296000000,
//             "rooms": 16,
//             "city": "Mendoza",
//             "country": "Argentina",
//             "price": 4
//         },
//         {
//             "slug": "huacalera",
//             "name": "Hotel Huacalera",
//             "photo": "https://i.ibb.co/L9J6cX2/huacalera.jpg",
//             "description": "Esta casona neocolonial, construida en la d\u00E9cada de 1940, est\u00E1 ubicada en el coraz\u00F3n de la Quebrada de Humahuaca, un extenso valle rodeado de imponentes cadenas monta\u00F1osas, recorrido por el R\u00EDo Grande y declarado Patrimonio de la Humanidad en 2003.",
//             "availabilityFrom": 1728000000,
//             "availabilityTo": 2592000000,
//             "rooms": 32,
//             "city": "Jujuy",
//             "country": "Argentina",
//             "price": 1
//         },
//         {
//             "slug": "merced-del-alto",
//             "name": "La Merced del Alto",
//             "photo": "https://i.ibb.co/T2K6hWG/merced-del-alto.jpg",
//             "description": "Al pie del Nevado de Cachi, La Merced del Alto se destaca sobre el pintoresco valle rodeado de cerros, r\u00EDos y arroyos. Dominando sobre lo alto, el hotel y sus imponentes vistas invitan a explorar los Valle Calchaqu\u00EDes o simplemente a disfrutar de la paz del lugar.",
//             "availabilityFrom": 0,
//             "availabilityTo": 432000000,
//             "rooms": 14,
//             "city": "Salta",
//             "country": "Argentina",
//             "price": 2
//         },
//         {
//             "slug": "azur-real",
//             "name": "Azur Real Hotel",
//             "photo": "https://i.ibb.co/fNPvCxw/azur-real.jpg",
//             "description": "La exclusividad rodeada de historia. Azur Real Hotel Boutique est\u00E1 ubicado en el coraz\u00F3n de la zona comercial y el centro hist\u00F3rico de C\u00F3rdoba, dentro de uno de los principales circuitos culturales y tur\u00EDsticos de la ciudad.",
//             "availabilityFrom": 1296000000,
//             "availabilityTo": 2592000000,
//             "rooms": 16,
//             "city": "C\u00F3rdoba",
//             "country": "Argentina",
//             "price": 1
//         },
//         {
//             "slug": "rincon-del-socorro",
//             "name": "Rinc\u00F3n del Socorro",
//             "photo": "https://i.ibb.co/Tb1bQLd/rincon-del-socorro.jpg",
//             "description": "Rinc\u00F3n del Socorro es una estancia ubicada en la reserva natural de los Esteros del Iber\u00E1, un santuario de vida silvestre, donde la Fundaci\u00F3n Conservation Land Trust decidi\u00F3 desarrollar un ambicioso proyecto de recuperaci\u00F3n y conservaci\u00F3n.",
//             "availabilityFrom": 432000000,
//             "availabilityTo": 1296000000,
//             "rooms": 11,
//             "city": "Corrientes",
//             "country": "Argentina",
//             "price": 2
//         },
//         {
//             "slug": "luma-casa-de-montana",
//             "name": "Luma Casa de Monta\u00F1a",
//             "photo": "https://i.ibb.co/TrPRC6t/luma-casa-de-montana.jpg",
//             "description": "Emplazada en un entorno natural a orillas del lago Nahuel Huapi y con la imponente imagen de la Cordillera de Los Andes, Luma Casa de Monta\u00F1a se presenta majestuosa pero a la vez simple y hogare\u00F1a: un lugar diferente, atemporal y m\u00E1gico.",
//             "availabilityFrom": 0,
//             "availabilityTo": 1296000000,
//             "rooms": 8,
//             "city": "Villa La Angostura",
//             "country": "Argentina",
//             "price": 2
//         },
//         {
//             "slug": "casa-turquesa",
//             "name": "Casa Turquesa",
//             "photo": "https://i.ibb.co/BfqssDj/casa-turquesa.jpg",
//             "description": "Casa Turquesa es una hist\u00F3rica mansi\u00F3n del siglo XVIII que recrea el encanto t\u00EDpico de Paraty, una de las herencias coloniales m\u00E1s bellas de Brasil, declarada Patrimonio Mundial de la Humanidad por la UNESCO.",
//             "availabilityFrom": 0,
//             "availabilityTo": 432000000,
//             "rooms": 9,
//             "city": "R\u00EDo de Janeiro",
//             "country": "Brasil",
//             "price": 3
//         },
//         {
//             "slug": "vila-da-santa",
//             "name": "Vila Da Santa",
//             "photo": "https://i.ibb.co/0jL6SpB/vila-da-santa.jpg",
//             "description": "Esta casa de pescadores fue renovada con elegancia, pero sin descuidar su esp\u00EDritu original. Se abre a un gran patio central con dos piscinas de dise\u00F1o, una de ellas climatizada.",
//             "availabilityFrom": 864000000,
//             "availabilityTo": 1296000000,
//             "rooms": 19,
//             "city": "Buzios",
//             "country": "Brasil",
//             "price": 3
//         },
//         {
//             "slug": "uxua-casa",
//             "name": "UXUA Casa Hotel & Spa",
//             "photo": "https://i.ibb.co/ByZ8mMJ/uxua-casa.jpg",
//             "description": "UXUA Casa Hotel & Spa es un hotel boutique cinco estrellas reconocido mundialmente por su incomparable belleza tropical, el maravilloso bar con vista al mar, el galardonado restaurante, un gimnasio totalmente equipado y el inigualable spa Almescar que ofrece innovadores tratamientos con ingredientes extra\u00EDdos de la selva.",
//             "availabilityFrom": 0,
//             "availabilityTo": 864000000,
//             "rooms": 11,
//             "city": "Bah\u00EDa",
//             "country": "Brasil",
//             "price": 4
//         },
//         {
//             "slug": "ponta-dos-ganchos",
//             "name": "Ponta dos Ganchos",
//             "photo": "https://i.ibb.co/jh3sJhs/ponta-dos-ganchos.jpg",
//             "description": "Ubicado a pasos de San Pablo, R\u00EDo de Janeiro, e incluso Buenos Aires, en una pen\u00EDnsula privada y rodeado por un pintoresco pueblo de pescadores, se encuentra Ponta dos Ganchos, uno de los resorts de playa m\u00E1s exclusivos del sur de Brasil.",
//             "availabilityFrom": 432000000,
//             "availabilityTo": 864000000,
//             "rooms": 25,
//             "city": "Santa Catarina",
//             "country": "Brasil",
//             "price": 4
//         },
//         {
//             "slug": "alto-atacama",
//             "name": "Alto Atacama",
//             "photo": "https://i.ibb.co/1n8QkbG/alto-atacama.jpg",
//             "description": "Alto Atacama Desert Lodge & Spa es un distinguido refugio ubicado a los pies del Pukar\u00E1 de Quitor en el imponente desierto de Atacama al norte de Chile.",
//             "availabilityFrom": 0,
//             "availabilityTo": 864000000,
//             "rooms": 42,
//             "city": "San Pedro de Atacama",
//             "country": "Chile",
//             "price": 4
//         },
//         {
//             "slug": "tierra-patagonia",
//             "name": "Tierra Patagonia",
//             "photo": "https://i.ibb.co/4VwS7Lq/tierra-patagonia.jpg",
//             "description": "Tierra Patagonia Hotel & Spa es un lujoso hotel boutique ubicado en la Patagonia chilena a orillas del lago Sarmiento, envuelto en el extraordinario escenario natural de Torres del Paine, un parque nacional rodeado de monta\u00F1as, cascadas, glaciares, lagos y pe\u00F1ascos, declarado Reserva de la Biosfera por la UNESCO en 1978.",
//             "availabilityFrom": 2592000000,
//             "availabilityTo": 3456000000,
//             "rooms": 40,
//             "city": "Torres del Paine",
//             "country": "Chile",
//             "price": 4
//         },
//         {
//             "slug": "vira-vira",
//             "name": "Vira Vira",
//             "photo": "https://i.ibb.co/1MstmGr/vira-vira.jpg",
//             "description": "Hotel Hacienda Vira Vira Relais & Chateaux se encuentra en una ubicaci\u00F3n privilegiada, muy cerca de Puc\u00F3n, Chile. Su impresionante parque nativo de 23 hect\u00E1reas a orillas del r\u00EDo Liucura ofrece un oasis \u00FAnico de paz y tranquilidad.",
//             "availabilityFrom": 864000000,
//             "availabilityTo": 1728000000,
//             "rooms": 21,
//             "city": "Puc\u00F3n",
//             "country": "Chile",
//             "price": 4
//         },
//         {
//             "slug": "vik-chile",
//             "name": "Vik Chile",
//             "photo": "https://i.ibb.co/gF2tpr7/vik-chile.jpg",
//             "description": "Vik Chile es una hacienda moderna y sofisticada en donde confluyen el arte y el dise\u00F1o de vanguardia, una ubicaci\u00F3n sin igual, fabulosos escenarios naturales, servicio personalizado y una cuidada atenci\u00F3n por el medioambiente.",
//             "availabilityFrom": 432000000,
//             "availabilityTo": 1728000000,
//             "rooms": 22,
//             "city": "Millahue",
//             "country": "Chile",
//             "price": 4
//         },
//         {
//             "slug": "casa-higueras",
//             "name": "Casa Higueras",
//             "photo": "https://i.ibb.co/G0kHfMt/casa-higueras.jpg",
//             "description": "Ubicada en el coraz\u00F3n del Cerro Alegre, frente a la imponente bah\u00EDa de Valpara\u00EDso, se encuentra Casa Higueras, el primer hotel boutique y de dise\u00F1o del puerto.",
//             "availabilityFrom": 432000000,
//             "availabilityTo": 1296000000,
//             "rooms": 20,
//             "city": "Valpara\u00EDso",
//             "country": "Chile",
//             "price": 4
//         },
//         {
//             "slug": "campo-tinto",
//             "name": "Campo Tinto",
//             "photo": "https://i.ibb.co/WvCZg4g/campo-tinto.jpg",
//             "description": "Campo Tinto es una chacra de 25 hect\u00E1reas ubicada en el coraz\u00F3n de San Roque, en medio del ondulante Carmelo, una zona de chacras, vi\u00F1edos, bodegas y frutales, con mucha historia y un ritmo de vida tranquilo y natural.",
//             "availabilityFrom": 2160000000,
//             "availabilityTo": 2592000000,
//             "rooms": 4,
//             "city": "Colonia",
//             "country": "Uruguay",
//             "price": 1
//         }]

