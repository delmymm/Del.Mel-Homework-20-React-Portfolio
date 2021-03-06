import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Homepage extends Component {
    render() {
        return (
            <div>
                <Grid className='landingGrid'>
                    <Cell col={12}>
                        {/* <img
                            src="/img/me.png"
                            alt="delmy"
                            className="selfie"
                            style={{ width: '650px', height:'350px', borderRadius:'20px'}}
                        /> */}
                        <div className="banner-text" style={{ width: '75%', margin: 'auto', marginTop: '2em', textAlign: 'center' }}>
                            <h1 style={{ paddingTop: '4rem' }}>Hello, I'm Delmy!</h1>
                            {/* <h2>New to the world of development.</h2> */}
                            <p>
                                <h3>🖥️</h3>
                                HTML/CSS 〰 JAVASCRIPT 〰 MYSQL 〰 NODE JS 〰 REACT 〰 MONGODB 〰 EXPRESS
                            </p>
                            <div className="content-links">
                                <p>
                                    <i className="fa fa-phone-square" aria-hidden="true" />435-513-1099
                                    <br/>
                                    <i className="fa fa-envelope" aria-hidden="true" /> delmymm93@gmail.com
                                </p>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}



export default Homepage;