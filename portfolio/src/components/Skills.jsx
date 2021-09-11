import { Grid, Cell, ProgressBar } from "react-mdl";

const Skills = (props) => {
    return ( 
        <div>
            <Grid>
                <Cell col={12}>
                    <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                        {props.skill}
                        <ProgressBar  style={{width: '75%', margin: 'auto'}} progress={props.progress} buffer={props.buffer} />
                    </div>
                </Cell>
            </Grid>
        </div>
    );
}
 
export default Skills;