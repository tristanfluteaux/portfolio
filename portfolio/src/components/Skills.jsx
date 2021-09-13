import { Grid, Cell, ProgressBar } from "react-mdl";
import html from '../assets/html-logo.png';
import css from '../assets/css-logo.png'
import javascript from '../assets/javascript-logo.png'
import react from '../assets/react-logo.png'
import node from '../assets/node-logo.png'
import mysql from '../assets/mysql-logo.png'
import express from '../assets/express.png'

import './AboutMe.css';

const Skills = (props) => {
    return ( 
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
    
                    <div style={{margin : '20px' , textAlign: 'center'}}>
                        <h2>HTML</h2>
                        <img src={html} alt='html logo' style={{width: '100px',}} />
                        <ProgressBar  style={{width: '90%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '17px' , textAlign: 'center'}}>
                        <h2>CSS</h2>
                        <img src={css} alt='html logo' style={{width: '74px',}} />
                        <ProgressBar  style={{width: '90%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px' , textAlign: 'center'}}>
                        <h2>JavaScript</h2>
                        <img src={javascript} alt='html logo' style={{width: '82px',}} />
                        <ProgressBar  style={{width: '80%', marginTop: '10px', textAlign: 'center'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px' , textAlign: 'center'}}>
                        <h2>React</h2>
                        <img src={react} alt='html logo' style={{width: '120px',}} />
                        <ProgressBar  style={{width: '90%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px' , textAlign: 'center'}}>
                        <h2>NodeJs</h2>
                        <img src={node} alt='html logo' style={{width: '130px',}} />
                        <ProgressBar  style={{width: '90%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px' , textAlign: 'center'}}>
                        <h2>MySql</h2>
                        <img src={mysql} alt='html logo' style={{width: '140px',}} />
                        <ProgressBar  style={{width: '90%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                    <div style={{margin : '20px', textAlign: 'center'}}>
                        <h2>Express</h2>
                        <img src={express} alt='html logo' style={{width: '75px'}} />
                        <ProgressBar  style={{width: '90%', marginTop: '10px'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                
        </div>
    );
}
 
export default Skills;