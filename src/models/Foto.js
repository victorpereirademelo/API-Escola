import Sequelize, { Model } from "sequelize";
import appConfig from "../config/appConfig";

class Foto extends Model {
    static init(connection) {
        super.init({
            originalname: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não pode ficar vazio.',
                    },
                },
            },
            filename: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não pode ficar vazio.',
                    },
                },
            },
            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `${appConfig.url}/images/${this.getDataValue('filename')}`;
                }
            }
        },
            {
                sequelize: connection,
            });

        return this;
    };

    static associate(models) {
        this.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'foto_aluno' });
    };
};

export default Foto;