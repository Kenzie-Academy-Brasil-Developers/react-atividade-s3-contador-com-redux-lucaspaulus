import styled from "styled-components";


export const Container = styled.div`
    border-left: 200px solid black;
    border-right: 200px solid black;
    border-top: 100px solid #100f0f;
    width: 120px;
    background-color: powderblue;
    animation: efects 3s cubic-bezier(0, 0, 0.44, 0.43) infinite;

    @keyframes efects {
        0%{
      
            border-bottom: 100px solid #505050;
            
        }

        25%{
    
            border-bottom: 100px solid #141414;
             
        }

        75%{
   
            border-bottom: 100px solid #ffffff;
            
        }

        50%{
 
            border-bottom: 100px solid #050505
            
        }


        100%{
        
            border-bottom: 100px solid #505050
             
        }
    }
    


`

export const Ball = styled.div`
    margin: 0;
    padding: 0;
    height: 100px;
    width: 100px;
    box-shadow: 2px 2px 2px 2px black;
    border-radius: 100%;
    color: black;
    background-color: chartreuse;
    transform: translate(0px, 50px);
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: bold;
    animation: ${(props)=> props.animate === "on" ? "moveBall 1s cubic-bezier(0, 0, 0.44, 0.43)" : ""};  
    @keyframes moveBall {
        0%{
            transform: translate(-100px,-50px) rotate(0deg);
            
        }

        25%{
            transform: translate(0px, -50px) rotate(90deg);
             
        }

        75%{
            transform: translate(0px, 50px) rotate(180deg);
            
        }

        50%{
            transform: translate(100px,50px) rotate(270deg);
            
        }


        100%{
            transform: translate(-100px,-50px) rotate(360deg);
             
        }
    }

   



`