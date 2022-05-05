import React from 'react';
import { useDispatch } from 'react-redux';
import { changeNumber } from '../../store/modules/counter/actions';
import * as S from "./style.js"
 
function Button({valor, decrease, setAnimate}) {

    const dispatch = useDispatch()

    const increaseNumber = () => {
        //timeout pra sincronizar o tempo entre o click do botao e tempo da animação
        setTimeout(()=>{
            dispatch(changeNumber(valor + 1))
            setAnimate("on")
    
            setTimeout(()=> setAnimate(""), 1000)
        }, 1000)
       

        
    }

    const decreaseNumber = () => {
        //timeout pra sincronizar o tempo entre o click do botao e tempo da animação
        setTimeout(()=> {
            if(valor > 0){
                dispatch(changeNumber(valor - 1))
                setAnimate("on")
                setTimeout(()=> setAnimate(""), 1000)
                
            }
        }, 1000)
      
   
    }

    return (
        <>
            {decrease 
            ?
            <S.Button onClick={decreaseNumber}> Diminuir</S.Button>
            :
            <S.Button onClick={increaseNumber}> Aumentar</S.Button>      
            }
        </>
        

    )
}

export default Button;
