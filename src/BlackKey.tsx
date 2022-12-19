



function BlackKey(props: {
    handleClick: any;
    keystring: string;
}) {

 return (
   <div onClick={props.handleClick} style={{
       backgroundColor: "black",
       height: "30%",
       width: "35px",
       fontSize: "25px",
       maxLines: 1,
       margin: "-20px",
       paddingTop: "18%",
       float: 'left',
       color:"white"
       
   }}>{props.keystring}</div>


 );
}

export default BlackKey;