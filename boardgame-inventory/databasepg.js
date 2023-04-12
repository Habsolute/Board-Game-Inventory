// import { Client } from 'pg';
const {Client} = require('pg')

const client = new Client ({
    host: "localhost",
    // host: `${process.env.PGSQL_HOST}`,
    user: "postgres",
    // user: `${process.env.PGSQL_USER}`,
    port: 5432,
    password: "Laer12349876",
    // password: `${process.env.PGSQL_PASSWORD}`,
    // password: "RootUser",
    database: "BoardGameInventory"
    // database: `${process.env.PGSQL_DATABASE}`
})

client.connect();

// client.query('SELECT * FROM boardgames', (err, res) => {
//     if (!err) {
//         console.log(res.rows);
//     } else {
//         console.log("error");
//     }

//     client.end
// })
export const allBoardgame = client.query('SELECT name, description, time, genre, nbplayer, age FROM boardgames INNER JOIN times ON times.id = boardgames.time_id INNER JOIN genres ON genres.id = boardgames.genre_id INNER JOIN nbplayers ON nbplayers.id = boardgames.nbplayer_id INNER JOIN ages ON ages.id = boardgames.age_id', (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log("error");
    }

    client.end
})

// SELECT name, description, time, genre, nbplayer, age
// FROM boardgames
// INNER JOIN times
// 	ON times.id = boardgames.time_id
// INNER JOIN genres
// 	ON genres.id = boardgames.genre_id
// INNER JOIN nbplayers
// 	ON nbplayers.id = boardgames.nbplayer_id
// INNER JOIN ages
// 	ON ages.id = boardgames.age_id