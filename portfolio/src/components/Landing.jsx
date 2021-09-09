import { Grid, Cell } from "react-mdl";
import profilPic from '../assets/goodp.JPG'

const Landing = () => {
    return ( 
        <>
            <div style={{width: '100%', margin: 'auto'}}>
               <Grid className='landing-grid'>
                   <Cell col={12}>
                       {/* <img src={profilPic}
                        alt='avatar'
                        className='avatar-img'
                       /> */}
                       <img src='https://cours-informatique-gratuit.fr/wp-content/uploads/2017/10/avatar.png'
                        alt='avatar' 
                        className='avatar-img'
                       />
                       <div className='banner-text'>
                            <h1>Full Stack Web Developper</h1>

                            <hr/>
                            <p>HTML / CSS | JavaScript | React | NodeJS | MySql | Express</p>

                            <div className='social-links'>

                                {/* LinkedIn */}
                                <a href='https://google.com' rel='noopener noreferrer' target='_blank'>
                                    <i className='bi bi-linkedin' aria-hidden='true' />
                                </a>
                                {/* Github */}
                                <a href='https://google.com' rel='noopener noreferrer' target='_blank'>
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