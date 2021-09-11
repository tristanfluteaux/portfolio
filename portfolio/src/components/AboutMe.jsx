import { Cell, Grid } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const AboutMe = () => {
    return (  
        <div className='about-main' id='about-main'>
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
                </Cell>
                <Cell className='about-right' col={8}>
                    <h2>Formations</h2>
                    <Education
                    startYear={2021}
                    school={'Wild Code School'}
                    description={'HTML / CSS, JavaScript, React, NodeJs, mySql, Express, Agile methods (scrum), '}
                    />

                    <Education
                    startYear={2013}
                    school={'CFI de Paris Gambetta'}
                    description={'BTS Fluide energie Environnement'}
                    />
                
                    <hr style={{borderTop: '3px solid #fff'}}/>
                    <h2>Experience</h2>
                    <Experience
                    startYear={2021}
                    job={'Wild Code School'}
                    jobDescription={'WeCode : création dun site vitrine responsive (wecode) en rapport au monde du numérique en html et css'}
                    />
                    <Experience
                    startYear={2016}
                    job={'Sodexo Energie et Maintenance'}
                    jobDescription={''}
                    />
                    <hr style={{borderTop: '3px solid #fff'}}/>
                    <h2>Compétences</h2>
    
                    <Skills
                    skill={'HTML / CSS'}
                    progress={100}
                    buffer={90}
                    />
                    <Skills
                    skill={'JavaScript'}
                    progress={90}
                    buffer={90}
                    />
                    <Skills
                    skill={'React'}
                    progress={90}
                    buffer={90}
                    />
                    <Skills
                    skill={'NodeJS'}
                    progress={80}
                    buffer={80}
                    />
                    <Skills
                    skill={'MySql'}
                    progress={70}
                    buffer={70}
                    />
                    <Skills
                    skill={'Express'}
                    progress={70}
                    buffer={70}
                    />
                   

                </Cell>
            </Grid>
            
        </div>
    );
}
 
export default AboutMe;