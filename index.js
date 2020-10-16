function  Mendchilgee() {//punkts componant props gui
    return <h1>123245</h1>;
    
}

function  Mendchilgee123(props) {//punkts componant props toi
return <h1>{props.ner}</h1>;

}
function  Mendchilgee456(props) {//punkts componant props toi
    return (
     <div> 
        <h1>{props.ner}</h1>
        <p>{props.nas}</p>

     </div>
    ) 
}
 function EtsegComp(props) {
     return (
         <div>
             <Mendchilgee/>
             <Mendchilgee123 ner={props.ner}/>
             <Mendchilgee456 ner={props.ner} nas={props.nas}/>
             <table>

                   <tr><td> {props.angi[0]} </td></tr> 
                   <tr><td> {props.angi[1]} </td></tr> 
                   <tr><td> {props.angi[2]} </td></tr> 


             </table>
             
             </div>

     )
     
 }

ReactDOM.render(
    //Mendchilgee/> ,
    // Mendchilgee123 ner="Hello dorj"/> ,
   //Mendchilgee456 ner="Hello dorj" nas=20'/>  ,
  < EtsegComp ner="james" nas="25" angi={['ПХ','МС', 'НББМС',]} />,

    
    document.getElementById('root')
);
