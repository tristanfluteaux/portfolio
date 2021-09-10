import { Grid, Cell } from "react-mdl";
import profilPic from '../assets/goodp.png'

const Landing = () => {
    return ( 
        <>
            <div style={{width: '100%', height: '70em',  margin: 'auto'}}>
               <Grid className='landing-grid'>
                   <Cell col={12}>
                       <img src={profilPic}
                        alt='avatar'
                        className='avatar-img'
                       />
                       <div className='banner-text'>
                            <h1>Tristan Fluteaux</h1>
                            <h1>Full Stack Web Developper</h1>

                            <hr/>
                            <p>HTML / CSS | JavaScript | React | NodeJS | MySql | Express</p>

                            <div className='social-links'>

                                {/* LinkedIn */}
                                <a href='https://www.linkedin.com/in/tristan-fluteaux/' rel='noopener noreferrer' target='_blank'>
                                    <i className='bi bi-linkedin' aria-hidden='true' />
                                </a>
                                {/* Github */}
                                <a href='https://github.com/tristanfluteaux' rel='noopener noreferrer' target='_blank'>
                                    <i className='bi bi-github' aria-hidden='true' />
                                </a>
                            </div>

                       </div>
                   </Cell>
               </Grid>
            </div>
        </>
    );
}
 
export default Landing;