import { useState } from "react"
function Liked(){
    const [liked, setLiked] = useState(false)
    function handleClick(){
        setLiked(!liked)
        console.log(liked)
    }
    return(
        <div>
            <i class={liked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
            <button onClick={handleClick}>liked</button>
        </div>
    )
}
export default Liked