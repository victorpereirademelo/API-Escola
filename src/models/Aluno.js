import Sequelize, { Model } from "sequelize";

class Aluno extends Model {
    static init(connection) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Nome precisa ter entre 3 e 255 caracteres',
                    },
                },
            },
            sobrenome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Sobrenome precisa ter entre 3 e 255 caracteres',
                    },
                },
            },
            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'Email já existe',
                },
                validate: {
                    isEmail: {
                        msg: 'Email Inválido',
                    },
                },
            },
            idade: {
                type: Sequelize.INTEGER,
                defaultValue: '',
                validate: {
                    isInt: {
                        msg: 'Idade precisa ser um número inteiro',
                    },
                },
            },
            peso: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'Peso precisa ser um número inteiro ou de ponto flutuante',
                    },
                },
            },
            altura: {
                type: Sequelize.FLOAT,
                defaultValue: '',
                validate: {
                    isFloat: {
                        msg: 'Altura precisa ser um número inteiro ou de ponto flutuante',
                    },
                },
            },
        },
            {
                sequelize: connection,
            });

        return this;
    };

    static associate(models) {
        this.hasMany(models.Foto, { foreignKey: 'aluno_id', as: 'aluno_foto' });
    };
};

export default Aluno;