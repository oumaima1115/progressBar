import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import StepNavigation from './StepNavigation';

function App() {

  let [data, setData] = useState(null);

  useEffect(() => {
    invoke('getText').then((response)=> { 
      setData(response);
      console.log("response:", response);
    }); 
  }, []);

  let steps = data != null ? data.steps : null;
  let [currentStep, updateCurrentStep] = useState(1);
  currentStep = data != null ? data.currentstep : null;
  let labelArray=[];
  let j=0;
  let i=0;
  let ch="";
  steps+=",";
  while(i<steps.length && labelArray.length <7){
    if(steps.charAt(i) != ","){
      ch+=steps.charAt(i);
      i=i+1;
    }else{
      labelArray[j]=ch;
      ch="";
      j=j+1;
      if(steps.charAt(i+1) != " "){
        i=i+2;
      }else{
        i=i+1;
      }
    }
  }
  if(labelArray.length < currentStep){
    currentStep = labelArray.length;
  }
  
  if(data == null || data.steps == ''){
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
              font-size: 14px;
              font-family: Arial, Helvetica, sans-serif;
              text-align: left;
              position: absolute;
          }
          div.hty{
            float: left;
            border: 1px solid #ededed;
            margin-left: 16px;
            height: 42px;
            width: 42px;
            border-radius: 4px;
            margin-top: 18px;
          }
          #image1{
            width: 35px;
            height: 35px;
            margin-left: 3px;
          }
          .textPart{
            margin-left: 72px;
            margin-top: 24px;
          }
          h5{
            font-size: 13px;
          }
          span{
            color: rgb(139 139 139);
            font-size: 12px;
            margin-left: 0px;
          }
        `}</style>
        <div className="hty">
          <img id="image1" src="https://spectrumgroupe-sfm.eu-west-3.elasticbeanstalk.com/images/progress-bar.png"/>
        </div>
        <div className='textPart'>
          <h5>SP Progress bar </h5>
          <span>Edit to setup</span>
        </div>
      </>
    );
  }
  if(data != null || data.steps != ''){
    return (
      <div>
        <StepNavigation labelArray={labelArray} currentStep={currentStep} products={data.products}></StepNavigation>
      </div>
    );
  }
  
}


export default App;