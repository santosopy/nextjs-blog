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
    USERNAME: "d9ohwwhbytbc",
    PASSWORD: "pscale_pw_xBIZI6C12Tkq36mKhTsIKwqsrlNYeZYoDR83tsu7fio",
    DATABASE: "nextdb"
  }
})
