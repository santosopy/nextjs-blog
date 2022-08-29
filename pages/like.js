import {useState} from "react"

function Header(props) {
    return <h1>{props.title ? props.title : 'Default title'}</h1>;
}
function Page(){
    const [likes, setLikes] = useState(0)
    function handleClick(){
        setLikes(likes + 1)
    }
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']
    return(
        <div>
            <Header title="" />
            <Header title="A new title" />
            {
                names.map( (name)=>(
                    <p>{name}</p>
                ))
            }
            <button onClick={handleClick}>Like {likes}</button>
        </div>
    )
}
export default Page