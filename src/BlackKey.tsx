
function BlackKey(props: {
    name: string;
}) {

   const playkey = () =>{
       const audio = new Audio(props.name);
       audio.play();
   }

 return (
   <div onClick={playkey} style={{
       backgroundColor: "black",
       height: "30%",
       width: "75px",
       fontSize: "25px",
       maxLines: 1,
       margin: "-40px",
       paddingTop: "18%",
       float: 'left',
       
   }}></div>


 );
}

export default BlackKey;