



function BlackKey(props: {
    handleClick: any;
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
       
   }}></div>


 );
}

export default BlackKey;