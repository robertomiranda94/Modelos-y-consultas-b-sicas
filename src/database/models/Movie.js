module.exports = (sequelize, dataTypes) => {

    let alias = 'Movie';

    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false,
        },
        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: '0'
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        length: {
            type: dataTypes.INTEGER.UNSIGNED,
            defaultValue: null
        },
        genre_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            defaultValue: null
        },
        created_at: {
            type: dataTypes.DATE,
            defaultValue: null
        }

    }

    let config = {
        tableName: "movies", //si el nombre de la tabla es el plural del modelo esto no va
        timestamps: true, // si tien las marcas de tiempo esto no va
        createdAt: 'created_at', //cuando la columna no se llama como sequelize lo espera
        updatedAt: 'updated_at',
        deleteAt: false
    }


    const Movie = sequelize.define(alias, cols, config)

    return Movie;
}