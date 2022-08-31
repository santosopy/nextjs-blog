import mysql from "serverless-mysql";

// const pool = mysql({
//   config: {
//     host: "localhost",
//     user: "root",
//     password: "root",
//     port: 3306,
//     database: "productsdb",
//   },
// })


const pool = mysql({
  config: {
    HOST: "us-east.connect.psdb.cloud",
    USERNAME: "k5il3h67ndcijdo3ijrx",
    PASSWORD: "pscale_pw_iCsDVNDOHIyARYdB1KKtR2O6ZSCCJYFpPDwAIPexwlG",
    DATABASE: "productsdb",
  },
})

export{ pool }
