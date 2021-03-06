import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
        return (
            <div className="content-body">
                <Grid className="content-grid">
                    <Cell col={12}>
                        <div className='add-content'>
                            <h3 style={{ padding: '0%', margin: '0px', fontFamily: 'Merriweather'}}>Delmy Melendez</h3>
                            <h5>Address</h5>
                        508 N 250 W, Heber City, Utah 84032
                        <h5>Phone Number</h5>
                        (435)-513-1099
                        <h5>Email</h5>
                        delmymm93@gmail.com
                        <h5>Github</h5>
                        https://github.com/delmymm
                        <h5>LinkedIn</h5>
                        https://www.linkedin.com/in/delmy-melendez-8961721b4/
                        <h5>Resume <a href="/img/Delmy Melendez RESUME.pdf" rel="noopener noreferrer" target="_blank" alt="resume">
                                <i class="fa fa-file-pdf-o fa-lg" aria-hidden="true"></i>
                            </a></h5>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;