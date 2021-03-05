import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    render() {
        return (
            <div className="projects-grid" style={{margin: 'auto', flex:'flexbox'}}>
                <Grid>
                    <Cell col={6}>
                        <Card className="card-body-project" shadow={3} style={{width: '320px', height:'320px'}}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('img/cedstravel.png')"}}></CardTitle>
                            <CardText>Project 1 / CEDS Travel</CardText>
                            <CardActions border>
                                <Button colored href="">GitHub</Button>
                                <Button colored href="">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={3} style={{width: '320px', height:'320px'}}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('img/dayplanner.png')"}}></CardTitle>
                            <CardText>Day Planner</CardText>
                            <CardActions border>
                                <Button colored href="">GitHub</Button>
                                <Button colored href="">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={3} style={{width: '320px', height:'320px'}}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('img/employeesummary.png')"}}></CardTitle>
                            <CardText>Employee Summary</CardText>
                            <CardActions border>
                                <Button colored href="">GitHub</Button>
                                <Button colored href="">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </Cell>
                <Cell col={6}>
                    <Card className="card-body-project" shadow={4} style={{width: '320px', height:'320px'}}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('img/notetaker.png')"}}></CardTitle>
                            <CardText>Note Taker</CardText>
                            <CardActions border>
                                <Button colored href="">GitHub</Button>
                                <Button colored href="">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={4} style={{width: '320px', height:'320px'}}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('img/passwordgenerator.png')"}}></CardTitle>
                            <CardText>Password Generator</CardText>
                            <CardActions border>
                                <Button colored href="">GitHub</Button>
                                <Button colored href="">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={4} style={{width: '320px', height:'320px'}}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('img/thedailygrind.png')"}}></CardTitle>
                            <CardText>Project 2 / The Daily Grind</CardText>
                            <CardActions border>
                                <Button colored href="">GitHub</Button>
                                <Button colored href="">Live Site</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </Cell>   
                </Grid>
            </div>
        )
    }
}

export default Projects;