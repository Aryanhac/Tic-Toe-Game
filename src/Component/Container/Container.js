import React,{useState,useRef} from 'react'
import excited from '../../Assets/so-excited-freaking.gif'
import turnAudio from '../../Assets/ting.mp3'

let isTurn=true;
const Container = () => {
  const [curTurn,changeTurn]=useState("X");
  let box = new Array(9);
   box[0]=useRef();
   box[1]=useRef();
   box[2]=useRef();
   box[3]=useRef();
   box[4]=useRef();
   box[5]=useRef();
   box[6]=useRef();
   box[7]=useRef();
   box[8]=useRef();
 

  
//  console.log("Hello");
  const turnMusic=new Audio(turnAudio);
  
  const checkWin=()=>{
    const wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    wins.forEach(e=>{
      if((box[e[0]].current.innerHTML===box[e[1]].current.innerHTML)&&(box[e[1]].current.innerHTML===box[e[2]].current.innerHTML)&&(box[e[0]].current.innerHTML!=="")){
          isTurn=false;
          console.log("hello");
          changeTurn(`${box[e[0]].current.innerHTML} has won`);
      };
    });
    if(!isTurn){
      return true;
    }
    return false;
  }
  const changeValue=()=>{
    if(curTurn==="X"){
      changeTurn("O");
    }else{
      changeTurn("X");
    }
    
  }


  const refreshPage=()=>{
    window.location.reload(false);
  }
  

  return (
    <div className='w-full grid md:grid-cols-2 gap-2 h-[92vh]'>
        <div className='flex justify-center items-center m-10'>
        <div className='grid grid-cols-3 grid-rows-3'>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-r-2 border-b-2 border-black boxes' ref={box[0]} onClick={()=>{if(isTurn){if(box[0].current.innerHTML===""){box[0].current.innerHTML=curTurn;if( !checkWin()){ turnMusic.play();changeValue()}}}}}></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-b-2 border-r-2 border-black boxes' ref={box[1]}  onClick={()=>{if(isTurn){if(box[1].current.innerHTML===""){box[1].current.innerHTML=curTurn; if( !checkWin()){turnMusic.play();changeValue()}}}}}></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-b-2 border-black boxes' ref={box[2]}  onClick={()=>{if(isTurn){if(box[2].current.innerHTML===""){box[2].current.innerHTML=curTurn;if( !checkWin()){turnMusic.play();changeValue()}}}}}></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-r-2 border-b-2 border-black boxes' ref={box[3]}  onClick={()=>{if(isTurn){if(box[3].current.innerHTML===""){box[3].current.innerHTML=curTurn;if( !checkWin()){turnMusic.play();changeValue()}}}}}></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-r-2 border-b-2 border-black boxes' ref={box[4]}  onClick={()=>{if(isTurn){if(box[4].current.innerHTML===""){box[4].current.innerHTML=curTurn;if( !checkWin()){turnMusic.play();changeValue()}}}}}></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-b-2 border-black boxes' ref={box[5]}  onClick={()=>{if(isTurn){if(box[5].current.innerHTML===""){box[5].current.innerHTML=curTurn; if( !checkWin()){turnMusic.play();changeValue()}}}}}></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-r-2  border-black boxes' ref={box[6]}  onClick={()=>{if(isTurn){if(box[6].current.innerHTML===""){box[6].current.innerHTML=curTurn;if( !checkWin()){turnMusic.play();changeValue()}}}}}></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-r-2  border-black boxes' ref={box[7]}  onClick={()=>{if(isTurn){if(box[7].current.innerHTML===""){box[7].current.innerHTML=curTurn;if( !checkWin()){turnMusic.play();changeValue()}}}}}></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold boxes' ref={box[8]}  onClick={()=>{if(isTurn){if(box[8].current.innerHTML===""){box[8].current.innerHTML=curTurn; if( !checkWin()){turnMusic.play();changeValue()}}}}}></div>
            </div>
        </div>
        <div className='flex flex-col  md:mt-[11rem] md:ml-[4rem] m-auto '>
            <div className='text-4xl font-bold'>Welcome To Tic Tac Toe</div>
            <div className='flex'><div className='m-2'>{isTurn===true?`Turn of ${curTurn}`:curTurn}</div>
             <button  onClick={refreshPage}   className='w-[5rem] ml-[5rem] border-2 mt-2 border-black'>Reset</button></div>
            <div>
            <img className={isTurn===true?'hidden':'w-[150px] h-[200px] animate-pulse duration-500'} src={excited} alt="" />
           </div>
        </div>
        
    </div>
  )
}

export default Container