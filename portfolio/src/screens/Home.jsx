import Project from "../components/Project";

import '../App.css';
import Landing from "../components/Landing";
import Head from "../components/Head";
import AboutMe from "../components/AboutMe";


const Home = () => {
    return (
        <>
        <Head />
        <Landing />
        <Project />
        <AboutMe />
        </>
    );
}
 
export default Home;