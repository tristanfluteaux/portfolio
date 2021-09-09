import React, { Component } from "react";
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from "react-mdl";

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab : 0};
    }

    toggleCategories(){
        if (this.state.activeTab === 0) {
        return (
            <div className='project-grid'>
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover'}}>WeCode</CardTitle>
                <CardText>
                    1st Project : using Html / Css
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>View</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover'}}>Kokomo</CardTitle>
                <CardText>
                    2nd Project : Cocktail application using React
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>View</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            </div>
        )
        } else if (this.state.activeTab === 1) {
            return (
                <div className='project-grid'>
                    {/* Project Pokemon */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png) center / cover'}}>Pokedex</CardTitle>
                    <CardText>
                    Geek project : Pokemon application using React
                    </CardText>
                    <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>View</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                    </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() { 
        return (
        <div className='category-tabs'>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId => this.setState({ activeTab : tabId }))} ripple >
                <Tab>Wild Code School</Tab>
                <Tab>Side Project</Tab>
            </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className='content'>{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
        </div>
        )
    }

}

export default Project;