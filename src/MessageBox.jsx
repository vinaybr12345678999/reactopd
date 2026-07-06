function MessageBox({userName,textColour}){
    let style = {"color": textColour}
    return(
        <div>
            <p style={style}>userName: {userName}</p>
        </div>
    )
}
export default MessageBox