import Head from "next/head"
import React, {useState} from "react"

export default function About(){
    return (
        <>
            <Head>
                <title>about page</title>
            </Head>
            <div className="container">
                <h1>About</h1>
                <section>
                    this is description
                </section>
            </div>
        </>
    )
}

