import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { NavLink } from "react-router-dom";

import '../App.css';

const Head = () => {
    return (
        
<div className='demo-big-content'>
    <Layout>
        <Header className='header-color' title='My Portfolio' scroll>
            <Navigation>
                <a href="/">Resume</a>
                <a href="#">About Me</a>
                <NavLink to='/project'><a href="#">Project</a></NavLink>
                <a href="#">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Where all begins">
            <Navigation>
                <a href="#">Resume</a>
                <a href="#">About Me</a>
                <a href="#">Project</a>
                <a href="#">Contact</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
        
    );
}
 
export default Head;