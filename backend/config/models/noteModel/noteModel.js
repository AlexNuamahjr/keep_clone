import {DataTypes} from "sequelize";
import sequelize from "../../dbConnect.js";

const Note = sequelize.define("Notes", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT
    }
})
Note.sync();
export default Note;
