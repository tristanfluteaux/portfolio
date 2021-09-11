import React, {  useState } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

import '../App.css';

const Head = () => {

    const [gradientColor, setGradientColor ] = useState(true);


    const HandleClickColor = () => {
        setGradientColor(!gradientColor)
    }


    return (
        
<div className='demo-big-content'>
    <Layout style={{height: '70vh'}}>
        <Header className='header-color' title='My Portfolio' scroll>
            <Navigation>
        <i id={HandleClickColor} className={gradientColor ? 'bi bi-cloud-moon' : 'bi bi-cloud-moon-fill'} onClick={HandleClickColor} aria-hidden='true' style={{fontSize: '30px'}}/>
                <a href="#/">Home</a>
                <a href="#section-project">Projet</a>
                <a href="#about-main">A propos de moi</a>
            </Navigation>
        </Header>
        <Drawer title={<i className='bi bi-controller' aria-hidden='true' style={{fontSize: '50px', }}/>}>
            <Navigation>
                <a href="#/">Home</a>
                <a href="#section-project">Projet</a>
                <a href="#">A propos de moi</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
        
    );
}
 
export default Head;