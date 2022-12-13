
function WhiteKey(props: {
     name: string;
}) {

    const playkey = () =>{
        const audio = new Audio(props.name);
        audio.play();
    }

    const handleKey = (e: any) =>{
        
    }

  return (
    <div onClick={playkey} onKeyDown={handleKey} tabIndex={0} style={{
        backgroundColor: "white",
        height: "40%",
        width: "110px",
        fontSize: "25px",
        maxLines: 1,
        margin: "-5px",
        paddingTop: "30%",
        float: 'left',
        marginLeft: '10px',
        border: '2px solid black'

       
    }}></div>


  );
}

export default WhiteKey;