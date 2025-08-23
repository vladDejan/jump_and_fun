import { DataTypes, Model, Optional } from "sequelize";
import db from "./index";

/////////// Definisanje INTERFACE-a za Model ///////////
//TypeScript koristi ovaj interfejs da osigura da objekti koji
// predstavljaju rezervaciju imaju ispravan oblik.
interface ReservationAttributes {
  id?: number;
  variant: string;
  decorations?: boolean;
  name: string;
  city: string;
  email: string;
  phone: string;
  date: Date;
  specialRequests?: string | undefined;
  createdAt?: Date;
  updateAt?: Date;
}

// Sequelize koristi `Optional` da bi omogućio polja koja nisu 
// obavezna prilikom kreiranja.
interface ReservationCreationAttributes extends Optional<ReservationAttributes, "id" | "specialRequests" | "decorations"> {}

// Kreiranje modela sa tipovima, kako bi Sequelize znao kako da ih koristi.
class Reservation extends Model<ReservationAttributes, ReservationCreationAttributes> implements ReservationAttributes {
  public id!: number;
  public variant!: string;
  public decorations!: boolean;
  public name!: string;
  public city!: string;
  public email!: string;
  public phone!: string;
  public date!: Date;
  public specialRequests!: string | undefined;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Definiše kolone (njihove tipove, dozvoljene vrednosti, podrazumevane vrednosti, itd.).
// Postavi dodatne opcije (npr. ime tabele, timestamps, indeksiranje itd.).
Reservation.init( 
  {
    id: {
        type: DataTypes.INTEGER, // Tip podatka u bazi
        autoIncrement: true, // Automatski povećava ID
        primaryKey: true, // Postavlja ga kao primarni ključ
    },
  variant: {
    type: DataTypes.ENUM("bouncecastle", "bubblehouse", "minibouncecastle", "paket1", "paket2", "paket3", "paket4"),
    allowNull: false,
  },
  decorations: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: { 
    type: DataTypes.STRING,
     allowNull: false 
    },
  email: { 
    type: DataTypes.STRING, 
    allowNull: false 
},
  phone: { 
    type: DataTypes.STRING, 
    allowNull: false 
},
  date: { 
    type: DataTypes.DATE, 
    allowNull: false 
},
  specialRequests: { 
    type: DataTypes.TEXT,
    allowNull: true,
},
},
{
  sequelize: db, // Konekcija sa bazom
    modelName: "Reservation",
    tableName: "reservations", // Preciziranje naziva tabele ako je potrebno
    timestamps: true, // Automatsko dodavanje createdAt i updatedAt
}
);

export default Reservation;
