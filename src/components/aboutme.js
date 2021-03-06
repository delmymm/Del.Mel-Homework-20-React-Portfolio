import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class AboutMe extends Component {
    render() {
        return (
            <div className="content-body">
                <Grid className="content-grid">
                    <Cell col={12}>
                        <div className='add-content'>
                            <h2> About Me</h2>
                            <img
                                src="/img/me.png"
                                alt=""
                                style={{ height: '250px', borderRadius: '20%' }}
                            />
                            <p style={{ width: '75%', margin: 'auto', paddingTop: '2rem'}}>
                                Hi! My name is Delmy Melendez. I am 27 years old and
                                orginally from
                                Miami, FL. I moved to Utah when I was five and was raised in Park City until
                                6th
                                        grade when I moved to Heber City.</p>
                            <p>Some of my favortie hobbies are creating makeup looks, coding, cooking, and
                                        watching movies!
                                        </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default AboutMe;

