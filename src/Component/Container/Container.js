import React,{useState,useEffect} from 'react'
import excited from '../../Assets/so-excited-freaking.gif'
import turnAudio from '../../Assets/ting.mp3'

let isTurn=true;
const Container = () => {
  const [curTurn,changeTurn]=useState("X");
 

  const changeValue=()=>{
    curTurn==="X"?changeTurn("O"):changeTurn("X");
  }

  const turnMusic=new Audio(turnAudio);
  
  const checkWin=()=>{
    const boxText=Array.from(document.getElementsByClassName("boxes"));
    const wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    wins.forEach(e=>{
      if((boxText[e[0]].innerHTML===boxText[e[1]].innerHTML)&&(boxText[e[1]].innerHTML===boxText[e[2]].innerHTML)&&(boxText[e[0]].innerHTML!=="")){
          isTurn=false;
          changeTurn(`${boxText[e[0]].innerHTML} has won`);
      }
    })
  }
 
 
  useEffect(()=>{
    const boxes=document.getElementsByClassName("boxes");
    Array.from(boxes).forEach( (element) =>{
          element.addEventListener('click',()=>{
            element.innerHTML=curTurn;
            checkWin();
            if(isTurn){
            changeValue();
            turnMusic.play();
            }
          })
    })
  },[curTurn]);

  const refreshPage=()=>{
    window.location.reload(false);
  }
  

  return (
    <div className='w-full grid md:grid-cols-2 gap-2 h-[92vh]'>
        <div className='flex justify-center items-center m-10'>
        <div className='grid grid-cols-3 grid-rows-3'>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-r-2 border-b-2 border-black boxes'></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-b-2 border-r-2 border-black boxes'></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-b-2 border-black boxes'></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-r-2 border-b-2 border-black boxes'></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-r-2 border-b-2 border-black boxes'></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-b-2 border-black boxes'></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-r-2  border-black boxes'></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold border-r-2  border-black boxes'></div>
            <div className='w-[7rem] h-[7rem] flex justify-center items-center text-4xl font-bold boxes'></div>
            </div>
        </div>
        <div className='flex flex-col  md:mt-[11rem] md:ml-[4rem] m-auto '>
            <div className='text-4xl font-bold'>Welcome To Tic Tac Toe</div>
            <div className='flex'><div className='m-2'>{isTurn===true?`Turn for ${curTurn}`:curTurn}</div>
             <button  onClick={refreshPage}   className='w-[5rem] ml-[5rem] border-2 mt-2 border-black'>Reset</button></div>
            <div>
            <img className={isTurn===true?'hidden':'w-[150px] h-[200px] animate-pulse duration-500'} src={excited} alt="" />
           </div>
        </div>
        
    </div>
  )
}

export default Container