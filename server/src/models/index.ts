import Atmosphere from "./Atmosphere";
import Budget from "./Budget";
import Destination from "./Destination";
import Type from "./Type";
import User from "./User";

// Relations 1-N (Destination → Budget)
Budget.hasMany(Destination, { foreignKey: "budget_id" });
Destination.belongsTo(Budget, { foreignKey: "budget_id" });

// Relations N-N entre User et Destination (Favoris)
User.belongsToMany(Destination, {
  through: "User_has_favorites",
  foreignKey: "user_id",
  otherKey: "destination_id",
  as: "Favorites",
});
Destination.belongsToMany(User, {
  through: "User_has_favorites",
  foreignKey: "destination_id",
  otherKey: "user_id",
  as: "UsersWhoFavorited",
});

// Relations N-N entre Destination et Type
Destination.belongsToMany(Type, {
  through: "Destination_has_Type",
  foreignKey: "destination_id",
  otherKey: "type_id",
  as: "Types",
});
Type.belongsToMany(Destination, {
  through: "Destination_has_Type",
  foreignKey: "type_id",
  otherKey: "destination_id",
  as: "Destinations",
});

// Relations N-N entre Destination et Atmosphere
Destination.belongsToMany(Atmosphere, {
  through: "Destination_has_Atmosphere",
  foreignKey: "destination_id",
  otherKey: "atmosphere_id",
  as: "Atmospheres",
});
Atmosphere.belongsToMany(Destination, {
  through: "Destination_has_Atmosphere",
  foreignKey: "atmosphere_id",
  otherKey: "destination_id",
  as: "Destinations",
});

export { User, Destination, Budget, Atmosphere, Type };
