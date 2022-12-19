
function WhiteKey(props: {
     handleClick: any;
     keystring: string;
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
    }}> {props.keystring} </div>


  );
}

export default WhiteKey;