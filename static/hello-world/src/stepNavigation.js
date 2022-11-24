import React, {useState} from 'react';
import Step from './step';

export default function StepNavigation(props){
    return (
        <>
        <style jsx>{`
            .stepWrapper{
                display:flex;
                margin-bottom: 20px;
                margin-left: 25px;
                margin-top: 11px;
            }
        `}</style>
        <div className="stepWrapper">
            {props.labelArray.map((item, index) => <Step key={index} index={index} label={item} currentStep={props.currentStep} selected={props.currentStep === index + 1} products={props.products}></Step>)}
        </div>
        </>
    )
}