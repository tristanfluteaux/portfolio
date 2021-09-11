import { Cell, Grid } from "react-mdl";

const Education = (props) => {
    return ( 
        <div>
            <Grid>
                <Cell col={4}>
                    <p>{props.startYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{props.school}</h4>
                    <p>{props.description}</p>
                </Cell>
            </Grid>
        </div>
    );
}
 
export default Education;