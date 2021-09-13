import { Cell, Grid } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

import './AboutMe.css';

const AboutMe = ({gradientColor}) => {
    return (  
        <div className={gradientColor ? 'about-main' : 'about-main-dm'} id='about-main'>
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                        {/* <img src='' style={{height: '200px'}}/> */}
                    </div>
                    <h2 style={{paddingTop: '2em'}}>Tristan Fluteaux</h2>
                    <h4 style={{color: 'grey'}}>Web Developper</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    <p></p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    <h5>Location</h5>
                    <p>Meaux, proche Paris</p>
                    <h5>Email</h5>
                    <p>tristan.fluteaux@gmail.com</p>
                    <h5>Phone</h5>
                    <p>06.89.79.78.45</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    <h5>Langage</h5>
                    <p>Français / Anglais</p>
                </Cell>
                <Cell className='about-right' col={8}>
                    <h2>Formations</h2>
                    <Education
                    startYear={2021}
                    school={'Wild Code School (remote)'}
                    description={'HTML / CSS, JavaScript, React, NodeJs, mySql, Express, Méthodes agiles (scrum)'}
                    />

                    <Education
                    startYear={'2013 - 2015'}
                    school={'CFI de Paris Gambetta'}
                    description={'BTS Fluide energie Environnement'}
                    />
                
                    <hr style={{borderTop: '3px solid #fff'}}/>
                    <h2>Experience</h2>
                    <Experience
                    startYear={2021}
                    job={'Wild Code School (remote)'}
                    jobDescription={'WeCode : création dun site vitrine responsive (wecode) en rapport au monde du numérique en html et css, Kokomo : création d application responsive de cocktail avec React et NodeJs en utilisant une consommation api REST et organisation du projet avec les méthodes agiles (scrum), Hackathon : création d un site de rencontre intergalactique en 35h en suivant lesméthodes agiles (scrum) sur React avec une consommation api REST'}
                    />
                    <Experience
                    startYear={'2016 - 2021'}
                    job={'Sodexo Energie et Maintenance (technicien principal)'}
                    jobDescription={'Relation cient, Suivi de projet et de travaux, Force de conseil et de proposition'}
                    />
                    <hr style={{borderTop: '3px solid #fff'}}/>
                    <h2>Compétences</h2>
    
                    <Skills
                    progress={0}
                    buffer={0}
                    />
                    
                   

                </Cell>
            </Grid>
            
        </div>
    );
}
 
export default AboutMe;