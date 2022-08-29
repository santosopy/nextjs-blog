import { useEffect, useState } from "react";

export default function BackToTop() {
    const [showButton, setShowButton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.pageYOffset > 100 ? setShowButton(true) : setShowButton(false)
        })
    }, [])

    function HandleClick() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <div className="container">
                <div className="box box--1"></div>
                <div className="box box--2"></div>
                <div className="box box--3"></div>
                <div className="box box--4"></div>
                <div className="box box--5"></div>
            </div>
            {
                showButton &&
                <button onClick={HandleClick} className="back-to-top">
                    &#8679;
                </button>
            }
        </>
    )
}