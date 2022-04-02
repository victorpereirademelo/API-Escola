import Sequelize from "sequelize";
import dbConfig from "../config/database";

import Aluno from "../models/Aluno";
import User from "../models/User";
import Foto from "../models/Foto";

const models = [Aluno, User, Foto];

const connection = new Sequelize(dbConfig);

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models));

export default connection;