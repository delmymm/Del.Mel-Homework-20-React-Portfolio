import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    render() {
        return (
            <div className="projects-grid" style={{margin: 'auto', flex:'flexbox'}}>
                <Grid>
                    <Cell col={6}>
                        <Card className="card-body-project" shadow={3} style={{width: '320px', height:'320px', borderRadius: '20%'}}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('img/cedstravel.png')"}}></CardTitle>
                            <CardText style={{textAlign: 'center'}}>Project 1 / CEDS Travel</CardText>
                            <CardActions style={{textAlign: 'center'}} border>
                                <Button colored href="https://github.com/Maebeck/Project-1">GitHub</Button>
                                <Button colored href="https://maebeck.github.io/Project-1/">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={3} style={{width: '320px', height:'320px', borderRadius: '20%'}}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('img/dayplanner.png')"}}></CardTitle>
                            <CardText style={{textAlign: 'center'}}>Day Planner</CardText>
                            <CardActions style={{textAlign: 'center'}} border>
                                <Button colored href="https://github.com/delmymm/Del.Mel-Homework-5">GitHub</Button>
                                <Button colored href="https://delmymm.github.io/Del.Mel-Homework-5/">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={3} style={{width: '320px', height:'320px', borderRadius: '20%'}}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('img/employeesummary.png')"}}></CardTitle>
                            <CardText style={{textAlign: 'center'}}>Employee Summary</CardText>
                            <CardActions style={{textAlign: 'center'}} border>
                                <Button colored href="https://github.com/delmymm/Del.Mel-Homework-10">GitHub</Button>
                                <Button colored href="https://delmymm.github.io/Del.Mel-Homework-10/">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </Cell>
                <Cell col={6}>
                    <Card className="card-body-project" shadow={4} style={{width: '320px', height:'320px', borderRadius: '20%'}}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('img/notetaker.png')"}}></CardTitle>
                            <CardText style={{textAlign: 'center'}}>Note Taker</CardText>
                            <CardActions style={{textAlign: 'center'}} border>
                                <Button colored href="https://github.com/delmymm/Del.Mel-Homework-11">GitHub</Button>
                                <Button colored href="https://delmymm-notetaker.herokuapp.com/notes.html">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={4} style={{width: '320px', height:'320px', borderRadius: '20%'}}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('img/passwordgenerator.png')"}}></CardTitle>
                            <CardText style={{textAlign: 'center'}}>Password Generator</CardText>
                            <CardActions style={{textAlign: 'center'}} border>
                                <Button colored href="https://github.com/delmymm/Del.Mel-Homework-3">GitHub</Button>
                                <Button colored href="https://delmymm.github.io/Del.Mel-Homework-3/">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={4} style={{width: '320px', height:'320px', borderRadius: '20%'}}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('img/thedailygrind.png')"}}></CardTitle>
                            <CardText style={{textAlign: 'center'}}>Project 2 / The Daily Grind</CardText>
                            <CardActions style={{textAlign: 'center'}} border>
                                <Button colored href="https://github.com/delmymm/The-Daily-Grind">GitHub</Button>
                                <Button colored href="https://delmymm-thedailygrind.herokuapp.com/">Live Site</Button>
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