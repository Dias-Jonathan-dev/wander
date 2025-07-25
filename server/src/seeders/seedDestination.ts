import sequelize from "../../config/database";
import Destination from "../models/Destination";

export const destinationData = [
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
    short_description: `✨ Plongez dans l’univers magique de Harry Potter

Entrez dans les coulisses de la saga culte en visitant les Warner Bros. Studio Tour London – The Making of Harry Potter. Parcourez les véritables décors des films, de la majestueuse Grande Salle de Poudlard aux mystérieuses allées de Pré-au-Lard et du Chemin de Traverse.`,
    long_description: `✨ Plongez dans l’univers magique de Harry Potter

Entrez dans les coulisses de la saga culte en visitant les Warner Bros. Studio Tour London – The Making of Harry Potter. Situé à Leavesden, à quelques kilomètres de Londres, ce lieu emblématique vous ouvre les portes de l’univers qui a marqué toute une génération.

Dès les premiers pas, la magie opère. Vous traversez la majestueuse Grande Salle de Poudlard, avant de déambuler dans les couloirs du château, les sombres ruelles de Pré-au-Lard ou encore le mythique Chemin de Traverse, fidèlement reconstitués à partir des décors originaux. Chaque détail, chaque recoin est un clin d’œil à l’œuvre de J.K. Rowling.

Découvrez les secrets de tournage, les effets spéciaux utilisés pour donner vie aux créatures fantastiques, les costumes portés par les acteurs, et les maquettes impressionnantes des lieux iconiques. Vous pourrez même monter à bord du Poudlard Express, faire un tour dans la Forêt Interdite, ou vous aventurer dans Gringotts, la banque des sorciers.

🍺 À ne pas manquer : une pause gourmande pour goûter la célèbre Bièraubeurre, et un passage par la boutique souvenir pour repartir avec un peu de magie dans les valises.

Que vous soyez un(e) sorcier(e) chevronné(e) ou un simple Moldu passionné, cette visite est une expérience immersive unique, à vivre en famille ou entre amis. Préparez votre baguette, l’aventure vous attend.`,
    season: "Printemps",
    duration: "Journée entière",
    location: "Europe",
    family_access: true,
    PMR_access: true,
    budget_id: 3,
    types: ["Lieu de film"],
    atmospheres: ["Culturel", "Insolite"],
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
    short_description: `🏰 Un joyau médiéval entre ciel et mer

Découvrez le Mont Saint-Michel, site classé au patrimoine mondial de l’UNESCO, perché sur son îlot rocheux en Normandie. Laissez-vous émerveiller par son abbaye majestueuse et ses ruelles pittoresques, entourées par les plus grandes marées d’Europe.`,
    long_description: `🏰 Un joyau médiéval entre ciel et mer

Le Mont Saint-Michel est l’un des sites les plus emblématiques de France, attirant chaque année des millions de visiteurs venus admirer son architecture unique et ses paysages à couper le souffle. Situé au cœur d’une baie spectaculaire, il se dresse fièrement entre ciel et mer, offrant un panorama exceptionnel.

La visite commence par la traversée de la passerelle, où l’on peut observer le phénomène des marées qui transforment l’îlot en presqu’île. Une fois sur place, déambulez dans les ruelles pavées, découvrez les maisons médiévales, les boutiques artisanales et les restaurants typiques.

L’abbaye, véritable chef-d’œuvre gothique, domine le village et offre une vue imprenable sur la baie. Explorez ses salles historiques, ses jardins suspendus et ses cloîtres silencieux. Le Mont Saint-Michel est aussi un lieu de pèlerinage, chargé d’histoire et de spiritualité.

🌊 À ne pas manquer : la montée des marches jusqu’à l’abbaye, la dégustation d’une omelette de la Mère Poulard, et le spectacle des marées qui entourent le mont.

Un lieu magique, à visiter en toute saison, pour une expérience hors du temps.`,
    season: "Été",
    duration: "Journée entière",
    location: "France",
    family_access: true,
    PMR_access: false,
    budget_id: 2,
    types: ["Monument"],
    atmospheres: ["Historique", "Culturel"],
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
    short_description: `🌳 Terre de légendes et de mystères

Plongez au cœur de la mythique forêt de Brocéliande, berceau des légendes arthuriennes. Baladez-vous entre arbres centenaires, étangs mystérieux et sites magiques, sur les traces de Merlin et de la fée Viviane.`,
    long_description: `🌳 Terre de légendes et de mystères

La forêt de Brocéliande, située en Bretagne, est un lieu chargé de magie et de récits fantastiques. Selon la légende, c’est ici que Merlin l’Enchanteur aurait vécu, que la fée Viviane aurait élevé Lancelot, et que le roi Arthur aurait trouvé Excalibur.

Parcourez les sentiers balisés à la découverte de sites emblématiques : le Val sans Retour, le Miroir aux Fées, la Fontaine de Barenton ou encore le Tombeau de Merlin. Chaque étape est une invitation à rêver et à s’immerger dans l’univers des chevaliers de la Table Ronde.

La forêt offre aussi une biodiversité remarquable, avec ses chênes majestueux, ses landes fleuries et ses étangs paisibles. Des guides passionnés proposent des balades contées pour petits et grands, mêlant nature et imaginaire.

🧙‍♂️ À ne pas manquer : une randonnée au lever du soleil, une pause au bord de l’étang de Comper, et une visite du Centre Arthurien pour tout savoir sur les légendes locales.

Un lieu enchanteur, idéal pour les amoureux de la nature et des histoires fantastiques.`,
    season: "Printemps",
    duration: "Journée entière",
    location: "France",
    family_access: true,
    PMR_access: false,
    budget_id: 1,
    types: ["Forêt"],
    atmospheres: ["Mystique", "Nature"],
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
    short_description: `🏰 Chef-d’œuvre de la Renaissance au cœur de la Loire

Visitez le Château de Chambord, monument emblématique du Val de Loire. Admirez son architecture spectaculaire, ses jardins à la française et ses escaliers à double révolution, imaginés par Léonard de Vinci.`,
    long_description: `🏰 Chef-d’œuvre de la Renaissance au cœur de la Loire

Le Château de Chambord est le plus vaste et le plus majestueux des châteaux de la Loire. Construit au XVIe siècle pour François Ier, il impressionne par ses 440 pièces, ses 365 cheminées et son célèbre escalier à double révolution, attribué à Léonard de Vinci.

La visite vous plonge dans l’histoire de la Renaissance française, entre salles richement décorées, terrasses panoramiques et vastes jardins. Le domaine de Chambord s’étend sur plus de 5 000 hectares de forêt, abritant une faune sauvage exceptionnelle.

Des expositions, des spectacles et des animations rythment la vie du château tout au long de l’année. Les amateurs d’architecture, d’histoire et de nature y trouveront leur bonheur.

🌿 À ne pas manquer : une balade en calèche dans le parc, l’observation des cerfs et sangliers, et la vue imprenable depuis les toits du château.

Un site incontournable pour les passionnés de patrimoine et de grands espaces.`,
    season: "Automne",
    duration: "Demi-journée",
    location: "France",
    family_access: true,
    PMR_access: true,
    budget_id: 2,
    types: ["Monument"],
    atmospheres: ["Historique", "Romantique"],
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
    short_description: `⛰️ Le plus grand canyon d’Europe

Explorez les Gorges du Verdon, joyau naturel du sud de la France. Admirez ses falaises vertigineuses, ses eaux turquoise et ses paysages spectaculaires, parfaits pour la randonnée et les sports nautiques.`,
    long_description: `⛰️ Le plus grand canyon d’Europe

Les Gorges du Verdon offrent des panoramas à couper le souffle, avec leurs falaises abruptes plongeant dans une rivière aux eaux émeraude. Ce site naturel exceptionnel est le paradis des amateurs de randonnée, d’escalade, de kayak et de baignade.

Parcourez la route des crêtes pour admirer les points de vue spectaculaires, descendez au fond du canyon pour une balade au fil de l’eau, ou partez à l’aventure sur les sentiers balisés. La faune et la flore y sont riches et préservées.

De nombreux villages pittoresques bordent les gorges, offrant des pauses gourmandes et des hébergements de charme. Les activités sont variées : sports extrêmes, balades en bateau, observation des vautours et des chamois.

🚣‍♂️ À ne pas manquer : une descente en canoë, une baignade dans le lac de Sainte-Croix, et un coucher de soleil sur les falaises.

Un site naturel grandiose, à découvrir en famille ou entre amis.`,
    season: "Été",
    duration: "2 jours ou plus",
    location: "France",
    family_access: true,
    PMR_access: false,
    budget_id: 2,
    types: ["Montagne"],
    atmospheres: ["Nature", "Insolite"],
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
    short_description: `🏞️ Village suspendu à la falaise

Découvrez Rocamadour, cité médiévale accrochée à la falaise du Lot. Flânez dans ses ruelles escarpées, visitez ses sanctuaires et profitez d’un panorama unique sur la vallée.`,
    long_description: `🏞️ Village suspendu à la falaise

Rocamadour est un village spectaculaire, perché à flanc de falaise et surplombant la vallée de l’Alzou. Ce site sacré, étape majeure sur le chemin de Saint-Jacques-de-Compostelle, attire pèlerins et visiteurs depuis le Moyen Âge.

La visite commence par la montée des escaliers qui relient le village aux sanctuaires, dont la célèbre chapelle Notre-Dame et la basilique Saint-Sauveur. Les maisons médiévales, les portes fortifiées et les petites places invitent à la découverte.

Le panorama depuis le sommet est époustouflant, offrant une vue sur les toits du village et la campagne environnante. Les alentours regorgent de sites naturels et de grottes à explorer.

🙏 À ne pas manquer : la dégustation de fromage de Rocamadour, la visite du sanctuaire et une balade au coucher du soleil pour admirer la falaise illuminée.

Un lieu chargé d’histoire et de spiritualité, à vivre intensément.`,
    season: "Automne",
    duration: "Journée entière",
    location: "France",
    family_access: false,
    PMR_access: false,
    budget_id: 1,
    types: ["Village"],
    atmospheres: ["Historique", "Romantique"],
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
    short_description: `🎢 Sensations et aventures gauloises

Vivez l’expérience Parc Astérix, parc d’attractions inspiré de la célèbre bande dessinée. Profitez des montagnes russes, des spectacles et des décors immersifs pour toute la famille.`,
    long_description: `🎢 Sensations et aventures gauloises

Le Parc Astérix, situé près de Paris, plonge petits et grands dans l’univers des irréductibles Gaulois. Attractions à sensations, manèges pour enfants, spectacles humoristiques et décors inspirés des albums d’Uderzo et Goscinny rythment la visite.

Parcourez les six univers thématiques : la Gaule, l’Empire Romain, la Grèce Antique, l’Égypte, les Vikings et À travers le Temps. Chaque zone propose des attractions adaptées à tous les âges, des montagnes russes vertigineuses aux balades tranquilles.

Des restaurants et boutiques permettent de prolonger l’expérience, avec des spécialités gauloises et des souvenirs originaux. Des animations saisonnières viennent enrichir la programmation.

🦸‍♂️ À ne pas manquer : le spectacle des dauphins, la grande parade gauloise et la rencontre avec Astérix et Obélix.

Un parc convivial et festif, idéal pour une journée en famille ou entre amis.`,
    season: "Printemps",
    duration: "Journée entière",
    location: "France",
    family_access: true,
    PMR_access: true,
    budget_id: 3,
    types: ["Parc d'attraction"],
    atmospheres: ["Culturel", "Branché"],
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
    short_description: `🏖️ Sable fin et eaux turquoise en Corse

Détendez-vous sur la plage de Palombaggia, l’une des plus belles de Méditerranée. Profitez de ses eaux cristallines, de ses pins parasols et de son ambiance paradisiaque.`,
    long_description: `🏖️ Sable fin et eaux turquoise en Corse

La plage de Palombaggia, située près de Porto-Vecchio, est réputée pour son sable blanc, ses eaux limpides et ses paysages de carte postale. Bordée de pins parasols et de rochers rouges, elle offre un cadre idyllique pour la baignade et le farniente.

Les activités sont nombreuses : snorkeling, paddle, balade en bateau ou simple détente sur la plage. Les restaurants de plage proposent des spécialités corses à déguster les pieds dans le sable.

Le site est préservé et accessible à tous, avec des zones ombragées et des services adaptés. Les couchers de soleil y sont spectaculaires, teintant la mer de reflets dorés.

🌅 À ne pas manquer : une promenade au lever du jour, une dégustation de produits locaux et une baignade dans les eaux turquoise.

Un petit coin de paradis, à découvrir en solo, en couple ou en famille.`,
    season: "Été",
    duration: "Demi-journée",
    location: "France",
    family_access: true,
    PMR_access: true,
    budget_id: 3,
    types: ["Plage"],
    atmospheres: ["Nature", "Romantique"],
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
    short_description: `🖼️ Le temple de l’art à Paris

Explorez le Musée du Louvre, plus grand musée du monde. Admirez la Joconde, les antiquités égyptiennes et les chefs-d’œuvre de toutes les époques dans un cadre majestueux.`,
    long_description: `🖼️ Le temple de l’art à Paris

Le Musée du Louvre est une institution incontournable, abritant plus de 35 000 œuvres d’art, de l’Antiquité à nos jours. Situé au cœur de Paris, il séduit par son architecture grandiose et sa célèbre pyramide de verre.

La visite vous emmène à la découverte de chefs-d’œuvre universels : la Joconde, la Vénus de Milo, le Radeau de la Méduse, les antiquités grecques, romaines et égyptiennes. Les galeries sont organisées par départements, permettant une exploration thématique.

Des expositions temporaires, des ateliers et des visites guidées enrichissent l’expérience. Le musée propose aussi des espaces de détente, des cafés et des boutiques pour prolonger la visite.

🎨 À ne pas manquer : une balade nocturne dans le musée, la vue sur la cour Napoléon et une pause dans le jardin des Tuileries.

Un lieu fascinant pour les passionnés d’art, d’histoire et de culture.`,
    season: "Hiver",
    duration: "Demi-journée",
    location: "France",
    family_access: true,
    PMR_access: true,
    budget_id: 2,
    types: ["Monument"],
    atmospheres: ["Culturel", "Historique"],
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
    short_description: `🌄 Panorama vertigineux sur l’Arizona

Admirez le Grand Canyon, gorge spectaculaire creusée par le Colorado. Profitez de ses points de vue impressionnants, de ses sentiers de randonnée et de ses paysages grandioses.`,
    long_description: `🌄 Panorama vertigineux sur l’Arizona

Le Grand Canyon, situé dans l’État de l’Arizona, est l’un des plus grands canyons du monde, sculpté par le fleuve Colorado sur des millions d’années. Ses falaises colorées, ses plateaux et ses gorges profondes offrent des panoramas à couper le souffle.

La visite du parc national permet d’explorer différents points de vue, de randonner sur les sentiers du Rim ou de descendre au fond du canyon pour une expérience inoubliable. Les activités sont variées : rafting, observation de la faune, survol en hélicoptère ou simple contemplation.

Des centres d’accueil, des musées et des guides proposent des informations sur la géologie, l’histoire et la culture amérindienne du site. Les couchers de soleil y sont spectaculaires, illuminant les parois de mille couleurs.

🚁 À ne pas manquer : une randonnée sur le Bright Angel Trail, un survol en hélicoptère et une nuit à la belle étoile sous le ciel d’Arizona.

Un site naturel exceptionnel, à découvrir au moins une fois dans sa vie.`,
    season: "Été",
    duration: "2 jours ou plus",
    location: "Mondiale",
    family_access: true,
    PMR_access: false,
    budget_id: 4,
    types: ["Montagne"],
    atmospheres: ["Nature", "Insolite"],
  },
];

const seedDestination = async () => {
  try {
    await sequelize.sync();

    for (const data of destinationData) {
      const existingDestination = await Destination.findOne({
        where: { name: data.name },
      });

      if (existingDestination) {
        await existingDestination.update({
          short_description: data.short_description,
          long_description: data.long_description,
        });
        console.log(`✅ Description mise à jour pour : ${data.name}`);
      } else {
        await Destination.create(data);
        console.log(`✅ Nouvelle destination créée : ${data.name}`);
      }
    }

    console.log("🎉 Seed terminé avec succès !");
  } catch (error) {
    console.error("❌ Erreur lors du seed :", error);
  }
};

seedDestination();
