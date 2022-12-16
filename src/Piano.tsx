import React, { useMemo, useState } from 'react';
import { setConstantValue } from 'typescript';
import BlackKey from './BlackKey';
import WhiteKey from './WhiteKey';

import C from './assets/C.mp3'
import Cs from './assets/Cs.mp3'
import D from './assets/D.mp3'
import Ds from './assets/Ds.mp3'
import E from './assets/E.mp3'
import F from './assets/F.mp3'
import Fs from './assets/Fs.mp3'
import G from './assets/G.mp3'
import Gs from './assets/Gs.mp3'
import A from './assets/A.mp3'
import As from './assets/As.mp3'
import B from './assets/B.mp3'


function Piano() {


    const hslMixer2c = (hsl10: number,hsl11: number,hsl12: number,hsl20: number,hsl21: number,hsl22: number,amount1: number,amount2: number) => { // read hsl10 as hsl1[0], 1st value from hsl string
        if(hsl10 == -1){
            return [hsl20, hsl21, hsl22];
        }

        let amountTot = amount1 + amount2;
        if (Math.abs(hsl10 - hsl20) > 0.5) { hsl10 += 1; } // > 179.5 is shorter part from wheel to 359
        let h = (amount1 / amountTot) * hsl10 + (amount2 / amountTot) * hsl20;  
        let s = (amount1 / amountTot) * hsl11 + (amount2 / amountTot) * hsl21; 
        let l = (amount1 / amountTot) * hsl12 + (amount2 / amountTot) * hsl22; 
        if (h > 1) { h -= 1; } 
    
        return [h, s, l];
    }

    const [color, setColor] = useState([0,0,50]);
    const [alpha, setAlpha] = useState(1);
    
    const [color1, setColor1] = useState([0,0,100]);
    const [color1active, setColor1active] = useState(false);  

    const [color2, setColor2] = useState([0,0,100]);
    const [color2active, setColor2active] = useState(false);  

    const [color3, setColor3] = useState([0,0,100]); 
    const [color3active, setColor3active] = useState(false);  

    const [color4, setColor4] = useState([0,0,100]); 
    const [color4active, setColor4active] = useState(false);  

    const [color5, setColor5] = useState([0,0,100]); 
    const [color5active, setColor5active] = useState(false);   

    const [color6, setColor6] = useState([0,0,100]); 
    const [color6active, setColor6active] = useState(false);  

    const [color7, setColor7] = useState([0,0,100]); 
    const [color7active, setColor7active] = useState(false); 

    const [color8, setColor8] = useState([0,0,100]); 
    const [color8active, setColor8active] = useState(false); 

    const [color9, setColor9] = useState([0,0,100]); 
    const [color9active, setColor9active] = useState(false); 

    const [color10, setColor10] = useState([0,0,100]); 
    const [color10active, setColor10active] = useState(false); 

    const [color11, setColor11] = useState([0,0,100]); 
    const [color11active, setColor11active] = useState(false); 

    const [color12, setColor12] = useState([0,0,100]); 
    const [color12active, setColor12active] = useState(false); 

    const handleKey = (e: { key: string; }) =>{

        if(e.key == 'y'){
            const audio = new Audio(C);
            audio.play();

            let lightness = 50;
            let a = 1;

            const interval = setInterval(() => {
                lightness += 10;

                if(a > 0){
                    a -= 0.2;
                    setAlpha(a);
                }
                

                setColor1([0, 100, lightness]);
                setColor1active(true);

                if(lightness == 100){
                    clearInterval(interval);
                    setColor1([0,0,50]);
                    setColor1active(false);
                    setAlpha(1);
                    
                }    
              }, 250);

        }
        if(e.key == 's'){
            const audio = new Audio(Cs);
            audio.play();
            
            let lightness = 50;
            let a = 1;

            const interval = setInterval(() => {
                lightness += 10;
                if(a > 0){
                    a -= 0.2;
                    setAlpha(a);
                }

                setColor2([300, 65, lightness]);
                setColor2active(true);

                if(lightness == 100){
                    clearInterval(interval);
                    setColor2([0,0,50]);

                    setColor2active(false);
                    setAlpha(1);
                }    
              }, 250);
        }
        if(e.key == 'x'){
            const audio = new Audio(D);
            audio.play();

            let lightness = 50;
            let a = 1;

            const interval = setInterval(() => {
                lightness += 10;
                if(a > 0){
                    a -= 0.2;
                    setAlpha(a);
                }

                setColor3([54, 100, lightness]);
                setColor3active(true);

                if(lightness == 100){
                    clearInterval(interval);
                    setColor3([0,0,50]);
                    setColor3active(false);
                    setAlpha(1);
                }    
              }, 250);

        }
        if(e.key == 'd'){
            const audio = new Audio(Ds);
            audio.play();

            let lightness = 50;
            let a = 1;

            const interval = setInterval(() => {
                lightness += 10;

                if(a > 0){
                    a -= 0.2;
                    setAlpha(a);
                }

                setColor4([259, 32, lightness]);
                setColor4active(true);

                if(lightness == 100){
                    clearInterval(interval);
                    setColor4([0,0,50]);
                    setColor4active(false);
                    setAlpha(1);
                }    
              }, 250);
        }
        if(e.key == 'c'){
            const audio = new Audio(E);
            audio.play();

            let lightness = 50;
            let a = 1;

            const interval = setInterval(() => {
                lightness += 10;

                if(a > 0){
                    a -= 0.2;
                    setAlpha(a);
                }

                setColor5([0, 0, lightness+30]);
                setColor5active(true);

                if(lightness == 100){
                    clearInterval(interval);
                    setColor5([0,0,50]);
                    setColor5active(false);
                    setAlpha(1);
                }    
              }, 250);
        }
        if(e.key == 'v'){
            const audio = new Audio(F);
            audio.play();

            let lightness = 50;
            let a = 1;

            const interval = setInterval(() => {
                lightness += 10;

                if(a > 0){
                    a -= 0.2;
                    setAlpha(a);
                }

                setColor6([4, 89, lightness]);
                setColor6active(true);

                if(lightness == 100){
                    clearInterval(interval);
                    setColor6([0,0,50]);
                    setColor6active(false);
                    setAlpha(1);
                }    
              }, 250);
        }
        if(e.key == 'g'){
            const audio = new Audio(Fs);
            audio.play();

            let lightness = 50;
            let a = 1;

            const interval = setInterval(() => {
                lightness += 10;

                if(a > 0){
                    a -= 0.2;
                    setAlpha(a);
                }

                setColor7([182, 100, lightness]);
                setColor7active(true);

                if(lightness == 100){
                    clearInterval(interval);
                    setColor7([0,0,50]);
                    setColor7active(false);
                    setAlpha(1);
                }    
              }, 250);
        }
        if(e.key == 'b'){
            const audio = new Audio(G);
            audio.play();

            let lightness = 50;
            let a = 1;

            const interval = setInterval(() => {
                lightness += 10;

                if(a > 0){
                    a -= 0.2;
                    setAlpha(a);
                }

                setColor8([33, 100, lightness]);
                setColor8active(true);

                if(lightness == 100){
                    clearInterval(interval);
                    setColor8([0,0,50]);
                    setColor8active(false);
                    setAlpha(1);
                }    
              }, 250);

        }
        if(e.key == 'h'){
            const audio = new Audio(Gs);
            audio.play();

            let lightness = 50;
            let a = 1;

            const interval = setInterval(() => {
                lightness += 10;

                if(a > 0){
                    a -= 0.2;
                    setAlpha(a);
                }

                setColor9([300, 100, lightness]);
                setColor9active(true);

                if(lightness == 100){
                    clearInterval(interval);
                    setColor9([0,0,50]);
                    setColor9active(false);
                    setAlpha(1);
                }    
              }, 250);
        }
        if(e.key == 'n'){
            const audio = new Audio(A);
            audio.play();

            let lightness = 50;
            let a = 1;

            const interval = setInterval(() => {
                lightness += 10;

                if(a > 0){
                    a -= 0.2;
                    setAlpha(a);
                }

                setColor10([150, 100, lightness]);
                setColor10active(true);

                if(lightness == 100){
                    clearInterval(interval);
                    setColor10([0,0,50]);
                    setColor10active(false);
                    setAlpha(1);
                }    
              }, 250);
        }
        if(e.key == 'j'){
            const audio = new Audio(As);
            audio.play();

            let lightness = 50;
            let a = 1;

            const interval = setInterval(() => {
                lightness += 10;

                if(a > 0){
                    a -= 0.2;
                    setAlpha(a);
                }

                setColor11([152, 11, lightness]);
                setColor11active(true);

                if(lightness == 100){
                    clearInterval(interval);
                    setColor11([0,0,50]);
                    setColor11active(false);
                    setAlpha(1);
                }    
              }, 250);
        }
        if(e.key == 'm'){
            const audio = new Audio(B);
            audio.play();

            let lightness = 50;
            let a = 1;

            const interval = setInterval(() => {
                lightness += 10;

                if(a > 0){
                    a -= 0.2;
                    setAlpha(a);
                }

                setColor12([240, 61, lightness]);
                setColor12active(true);

                if(lightness == 100){
                    clearInterval(interval);
                    setColor12([0,0,50]);
                    setColor12active(false);
                    setAlpha(1);
                }    
              }, 250);
        }
    }
    //only mix colors when they are "active", during their interval period
    //find a good color mixing strategy

    // output final color
    // mix current colors together, and each color with their timer
    useMemo(() =>{
        let outColor = [-1, 0, 100];
        
        if(color1active){
            outColor = hslMixer2c(outColor[0], outColor[1], outColor[2], color1[0], color1[1], color1[2], 0.5, 0.5);
        }
        if(color2active){
            outColor = hslMixer2c(outColor[0], outColor[1], outColor[2], color2[0], color2[1], color2[2], 0.5, 0.5);
        }
        if(color3active){
            outColor = hslMixer2c(outColor[0], outColor[1], outColor[2], color3[0], color3[1], color3[2], 0.5, 0.5);
        }
        if(color4active){
            outColor = hslMixer2c(outColor[0], outColor[1], outColor[2], color4[0], color4[1], color4[2], 0.5, 0.5);
        }
        if(color5active){
            outColor = hslMixer2c(outColor[0], outColor[1], outColor[2], color5[0], color5[1], color5[2], 0.5, 0.5);
        }
        if(color6active){
            outColor = hslMixer2c(outColor[0], outColor[1], outColor[2], color6[0], color6[1], color6[2], 0.5, 0.5);
        }
        if(color7active){
            outColor = hslMixer2c(outColor[0], outColor[1], outColor[2], color7[0], color7[1], color7[2], 0.5, 0.5);
        }
        if(color8active){
            outColor = hslMixer2c(outColor[0], outColor[1], outColor[2], color8[0], color8[1], color8[2], 0.5, 0.5);
        }
        if(color9active){
            outColor = hslMixer2c(outColor[0], outColor[1], outColor[2], color9[0], color9[1], color9[2], 0.5, 0.5);
        }
        if(color10active){
            outColor = hslMixer2c(outColor[0], outColor[1], outColor[2], color10[0], color10[1], color10[2], 0.5, 0.5);
        }
        if(color11active){
            outColor = hslMixer2c(outColor[0], outColor[1], outColor[2], color11[0], color11[1], color11[2], 0.5, 0.5);
        }
        if(color12active){
            outColor = hslMixer2c(outColor[0], outColor[1], outColor[2], color12[0], color12[1], color12[2], 0.5, 0.5);
        }
      
        setColor(outColor);

    }, [color1active, color2active, color3active, color4active, color5active, color6active, color7active, color8active, color9active, color10active, color11active, color12active])

    //hsla color space?
  return (
    <>

<div
    style={{height: 300, backgroundColor:'hsla(' + color[0] + ',' + color[1] + '%,' + color[2]+ '%,' + alpha + ')'}} tabIndex={0} onKeyDown={handleKey}></div>

    <div style={{
        margin: "auto",
        width: 'auto',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'hsla(' + color[0] + ',' + color[1] + '%,' + color[2]+ '%,' + alpha + ')',
    }}tabIndex={0} onKeyDown={handleKey}>
    <div style={{}}>
    <WhiteKey  handleClick={() => handleKey({key: "y"})}></WhiteKey>
    <BlackKey  handleClick={() => handleKey({key: "s"})}></BlackKey>
    <WhiteKey  handleClick={() => handleKey({key: "x"})}></WhiteKey>
    <BlackKey  handleClick={() => handleKey({key: "d"})}></BlackKey>
    <WhiteKey  handleClick={() => handleKey({key: "c"})}></WhiteKey>
    <WhiteKey  handleClick={() => handleKey({key: "v"})}></WhiteKey>
    <BlackKey  handleClick={() => handleKey({key: "g"})}></BlackKey>
    <WhiteKey  handleClick={() => handleKey({key: "b"})}></WhiteKey>
    <BlackKey  handleClick={() => handleKey({key: "h"})}></BlackKey>
    <WhiteKey  handleClick={() => handleKey({key: "n"})}></WhiteKey>
    <BlackKey  handleClick={() => handleKey({key: "j"})}></BlackKey>
    <WhiteKey  handleClick={() => handleKey({key: "m"})}></WhiteKey>
    </div>
    </div>
    </>
    
  );
}

export default Piano;
