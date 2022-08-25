import mysql from "serverless-mysql";

// const pool = mysql({
//   config: {
//     host: "localhost",
//     user: "root",
//     password: "root",
//     port: 3306,
//     database: "nextdb",
//   },
// })

const pool = mysql({
  config: {
    HOST: "y312s3i0b6z4.us-east-4.psdb.cloud",
    USERNAME: "3owsugrgw2w5",
    PASSWORD: "pscale_pw_KoHFbXfILDePXxZjH8YfQ0CIegJ8QODieeYCWfGmPZ0",
    DATABASE: "nextdb"
  }
})
