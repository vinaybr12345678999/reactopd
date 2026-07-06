function handleClick(){
    console.log("button clicked")
}
function Button(){
    return(
        <div>
            <button onClick={handleClick}>click me</button>
        </div>
       
    )
}
export default Button