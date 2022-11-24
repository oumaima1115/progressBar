import React, {useState} from 'react';

export default function Step(props){
    let couleur;
    if(props.products == '' ){
        couleur= <style jsx>{`body{background-color: white;}`}</style> ;
    }else  couleur= <style jsx>{`body{background-color: rgb(245,245,245);}`}</style>;
    
    return (
        <>
        <style jsx>{`
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body{
                    display: flex;
                    justify-content: left;
                    align-items: center;
                    height: 10vh;
                    width: 100vw;
                    font-size: 14px;
                    font-family: Arial, Helvetica, sans-serif;
                    text-align: left;
                    position: absolute;
                }
                .stepBlock .circle{
                    width: 12px;
                    height: 12px;
                    line-height: 25px;
                    background-color: rgb(59, 115,175);
                    border-color: rgb(245, 245,245);
                    color: white;
                    border-radius: 50%;
                    border: 2px solid transparent;
                }
                .stepBlock .circleWrapper{
                    padding: 0px 45px;
                    position: relative;
                }
                .selected .circle{
                    color:black;
                    background-color: rgb(204,204,204);
                    border-color: rgb(245, 245,245);
                }
                .progress{
                    position: absolute;
                    justify-content: left;
                    top: 50%;
                    left: 50;
                    transform: translateY(-50%);
                    height: 4px;
                    width: 100%;
                    z-index: -1;
                    transition: 0.4s ease;
                }
                .labo{
                    color: rgb(107,108,110);
                }
                .progress, greey{
                    background-color: rgb(59, 115,175);
                }
                .positionText{
                    width: 50px;
                }
            `}</style>
        {couleur}
        <div className={"stepBlock" + ((props.currentStep < props.index+1) ? " selected" : '') }>
            
            <div className={"circleWrapper"} onClick={() => props.updateStep(props.index + 1)}>
                <div className={'progress'+ ((props.currentStep > props.index+1) ? " greey" : 'graw')}></div>
                <div className="circle"></div>
            </div>
            <div className='positionText'><span className={"label"+ ((props.currentStep < props.index+1) ? " labo" : '')}>{props.label}</span></div>
        </div>
        </>
    )
}