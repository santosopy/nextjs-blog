import mysql from "serverless-mysql";

// config: {
//   host: "localhost",
//   user: "root",
//   password: "root",
//   port: 3306,
//   database: "nextdb",
// },

const pool = mysql({
  config: {
    HOST: "y312s3i0b6z4.us-east-4.psdb.cloud",
    USERNAME: "paj0h2wstg9r",
    PASSWORD: "pscale_pw_N_37EFBk0HDKvVvaSArr_Amm5g34n_WWh3wQH0Hc3qg",
    DATABASE: "nextdb"
  }
})

export { pool };
