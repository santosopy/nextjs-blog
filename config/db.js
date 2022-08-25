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
    USERNAME: "pj8wde4cwgra",
    PASSWORD: "pscale_pw_iMxGeereQ2bWXBFKqyyeojvznPwPrySccpqt7ad6_HA",
    DATABASE: "nextdb"
  }
})

export { pool };
