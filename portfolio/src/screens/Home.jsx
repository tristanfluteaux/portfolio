import { Link } from "react-router-dom";
import Top from "../components/Header";
import Project from "../components/Project";

import '../App.css';
import Landing from "../components/Landing";


const Home = () => {
    return (
        <>
        <Top />
        <Landing />
        </>
    );
}
 
export default Home;