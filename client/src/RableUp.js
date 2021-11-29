import "../node_modules/bootstrap/dist/css/bootstrap.css";
function RableUp (props){
const{postUp,id,index,rablerable,setData,moanzlist}= props


  const handleall=()=>{
      
      postUp(id,index,rablerable)
      setData([...moanzlist,{rablerable:rablerable+1}]);
      
      
   }
   
   

  
return(
    <div>
     
    <button type="button" className="btn btn-danger" onClick={(e)=>handleall()}>RableUp</button>
    </div>
   )
  
      

 


}
export default RableUp;