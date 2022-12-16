
function WhiteKey(props: {
     handleClick: any;
}) {


  return (
    <div onClick={props.handleClick} style={{
        backgroundColor: "white",
        height: "40%",
        width: "60px",
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