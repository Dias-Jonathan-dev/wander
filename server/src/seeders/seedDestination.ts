import sequelize from "../../config/database";
import Destination from "../models/Destination";

const destinationData = [
  {
    name: "Studio Harry Potter",
    address: "Studio Tour Drive, Londres, UK",
    background_image:
      "https://images.unsplash.com/photo-1667018357371-bfa8ec3ac27e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1667018355771-b3de7aebb07b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1667018355920-e0ab6c170255?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1667018356348-33b319e01de4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    short_description: "Plongez dans l'univers magique des films.",
    long_description:
      "Les Studios Harry Potter de Londres vous permettent de découvrir les décors originaux, costumes et effets spéciaux des films cultes.",
    season: "Printemps",
    duration: "Journée entière",
    location: "Europe",
    family_access: true,
    PMR_access: true,
    budget_id: 3,
  },
  {
    name: "Mont Saint-Michel",
    address: "50170 Le Mont-Saint-Michel, France",
    background_image:
      "https://images.unsplash.com/photo-1671010496251-22eab06e3292?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1603233809570-4979759c0a4e?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1628285477029-e98c852cfb63?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1532702950853-933460cd3601?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    short_description: "Un site médiéval spectaculaire en Normandie.",
    long_description:
      "Lieu de pèlerinage et joyau architectural, perché sur un îlot rocheux.",
    season: "Été",
    duration: "Journée entière",
    location: "France",
    family_access: true,
    PMR_access: false,
    budget_id: 2,
  },
  {
    name: "Forêt de Brocéliande",
    address: "35380 Paimpont, Bretagne",
    background_image:
      "https://plus.unsplash.com/premium_photo-1730078556315-9ca0a48965ec?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1597245290050-e668ae322781?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1603108375340-f94362fc8dc5?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1668367111812-d85b2b56ee95?q=80&w=678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    short_description: "Terre de légendes arthuriennes.",
    long_description:
      "La forêt mythique de Merlin et la fée Viviane, idéale pour une balade mystique.",
    season: "Printemps",
    duration: "Journée entière",
    location: "France",
    family_access: true,
    PMR_access: false,
    budget_id: 1,
  },
  {
    name: "Château de Chambord",
    address: "41250 Chambord, France",
    background_image:
      "https://images.unsplash.com/photo-1526817609938-a708708cf90f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1576874285528-09212ae614a6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1526816076666-e3ae0c7ac878?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1526816229784-65d5d54ac8bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    short_description: "Chef-d'œuvre Renaissance dans la Loire.",
    long_description:
      "Château emblématique avec architecture unique et vastes jardins.",
    season: "Automne",
    duration: "Demi-journée",
    location: "France",
    family_access: true,
    PMR_access: true,
    budget_id: 2,
  },
  {
    name: "Gorges du Verdon",
    address: "04120 Castellane, France",
    background_image:
      "https://plus.unsplash.com/premium_photo-1690199485423-2488b52e3c1c?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1580521698737-7f56d868b1a9?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540254954904-74177f17c57b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVyZG9ufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1562103079-4b50f34c9511?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    short_description: "Le plus grand canyon d'Europe.",
    long_description:
      "Paysages spectaculaires, randonnées, activités nautiques.",
    season: "Été",
    duration: "2 jours ou plus",
    location: "France",
    family_access: true,
    PMR_access: false,
    budget_id: 2,
  },
  {
    name: "Village de Rocamadour",
    address: "46500 Rocamadour, France",
    background_image:
      "https://images.unsplash.com/photo-1632061253472-9c715a570b6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1675369124788-821c14c533ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9jYW1hZG91cnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1698409105427-275adca15100?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1549364330-7f0002888ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    short_description: "Village médiéval suspendu à une falaise.",
    long_description: "Site sacré, ruelles escarpées et panorama unique.",
    season: "Automne",
    duration: "Journée entière",
    location: "France",
    family_access: false,
    PMR_access: false,
    budget_id: 1,
  },
  {
    name: "Parc Astérix",
    address: "60128 Plailly, France",
    background_image:
      "https://www.oisetourisme.com/assets/uploads/2025/03/sos-numerobis-scambon-scaled.jpg",
    gallery: [
      "https://www.oisetourisme.com/assets/uploads/2025/03/sos-numerobis-scambon-scaled.jpg",
      "https://www.splendia.com/wp-content/uploads/2025/04/1-ou-2-jours-pour-visiter-le-Parc-Asterix-Quel-avis-1-1-scaled.jpg",
      "https://cdn.prod.website-files.com/649dc1a0f995c8458ca4c9bf/64a82c4a452849f7b676146d_Parc%20Asterix.png",
      "https://www.apaceloisirs.com/wp-content/uploads/Billetterie-asterix-apace-loisirs-Trace-du-Hourra-Sylvain-Cambon.jpg",
    ],
    short_description: "Parc d'attractions gaulois pour toute la famille.",
    long_description:
      "Attractions, spectacles et immersion dans l'univers d'Astérix.",
    season: "Printemps",
    duration: "Journée entière",
    location: "France",
    family_access: true,
    PMR_access: true,
    budget_id: 3,
  },
  {
    name: "Plage de Palombaggia",
    address: "20137 Porto-Vecchio, Corse",
    background_image:
      "https://www.lehameaudepalombaggia.com/images/2021/12/30/49550-palombaggia.jpg",
    gallery: [
      "https://www.lehameaudepalombaggia.com/images/2021/12/30/49550-palombaggia.jpg",
      "https://www.hotelpalombaggia.fr/wp-content/uploads/2023/01/palombaggia-scaled.jpg",
      "https://home-rent.fr/wp-content/uploads/2023/02/palombaggia-plage-porto-vecchio-sud-corse.jpg",
      "https://i0.wp.com/paris-sur-la-corse.com/wp-content/uploads/2014/12/pallombaggia.jpg?fit=1500%2C998",
    ],
    short_description: "Eaux turquoise et sable fin en Corse.",
    long_description: "Une des plus belles plages de Méditerranée.",
    season: "Été",
    duration: "Demi-journée",
    location: "France",
    family_access: true,
    PMR_access: true,
    budget_id: 3,
  },
  {
    name: "Musée du Louvre",
    address: "75001 Paris, France",
    background_image:
      "https://images.unsplash.com/photo-1587648415693-4a5362b2ce41?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://images.unsplash.com/photo-1587648415693-4a5362b2ce41?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/544000/544980-louvre-museum.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9j8U020SbPhKMf4e-t5Tp9gb8rIFJvmSjg&s",
      "https://www.atile.fr/pics/data/projets/images/105-111-1200x0.jpg",
    ],
    short_description: "Le musée incontournable à Paris.",
    long_description:
      "Art ancien et moderne, dont la Joconde et les antiquités égyptiennes.",
    season: "Hiver",
    duration: "Demi-journée",
    location: "France",
    family_access: true,
    PMR_access: true,
    budget_id: 2,
  },
  {
    name: "Grand Canyon",
    address: "Arizona, États-Unis",
    background_image:
      "https://plus.unsplash.com/premium_photo-1669050701110-a5eb879f1b6a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    gallery: [
      "https://plus.unsplash.com/premium_photo-1669050701110-a5eb879f1b6a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1668703335393-a0749dbdd5ae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1566594249512-43d259d55d8d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1501258338179-b25f87809429?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEdyYW5kJTIwQ2FueW9ufGVufDB8fDB8fHww",
    ],
    short_description: "Gorge spectaculaire creusée par le Colorado.",
    long_description:
      "Panoramas impressionnants, randonnées et points de vue vertigineux.",
    season: "Été",
    duration: "2 jours ou plus",
    location: "Mondiale",
    family_access: true,
    PMR_access: false,
    budget_id: 4,
  },
];

async function seedDestination() {
  try {
    await sequelize.authenticate();
    console.log("Connexion réussie à la base de données.");

    await Destination.bulkCreate(destinationData, { ignoreDuplicates: true });
    console.log("Destinations insérées avec succès.");

    await sequelize.close();
    console.log("Connexion fermée.");
  } catch (error) {
    console.error("Erreur lors de l'insertion des destinations :", error);
  }
}

seedDestination();
