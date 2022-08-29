import {useState} from "react"

function Color() {
    const [color, setColor] = useState(initialState);
    return (
        <>
            Pick a color:
            <select onChange={e=>setColor(e.target.value)}>
                <option value="lightcoral">lightcoral</option>
                <option value="midnightblue">midnightblue</option>
                <option value="rebeccapurple">rebeccapurple</option>
            </select>
        </>
    )
}

export default function myTime({
    return (
        <>
            <Color></Color>
            <Time></Time>
        </>
    )
})