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
    HOST: "xdsz6q0lo803.us-east-1.psdb.cloud",
    USERNAME: "zrfgr7rj4tz3",
    PASSWORD: "pscale_pw_-A8KqGU1Y540RJ5JK6vHWouFsX1rHARQTGLk31Yq4Fc",
    DATABASE: "nextdb"
  }
})

export { pool };
