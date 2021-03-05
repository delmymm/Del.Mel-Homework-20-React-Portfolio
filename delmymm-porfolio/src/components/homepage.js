import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class Homepage extends Component {
    render() {
        return (
            <div style={{ width: '500px', height:'500px', margin: 'auto'}}>
                <Grid className='landingGrid'>
                    <Cell col={12}>
                        {/* <img
                            src="/img/me.png"
                            alt="delmy"
                            className="selfie"
                            style={{ width: '650px', height:'350px', borderRadius:'20px'}}
                        /> */}
                        <div className="banner-text" style={{ width: '500px', height:'500px', margin:'auto', textAlign: 'center'}}> 
                            <h1 style={{paddingTop:'5rem'}}>Hello, I'm Delmy!</h1>
                            {/* <h2>New to the world of development.</h2> */}
                            <p>
                                <h4>🖥️</h4> 
                                HTML 〰 CSS 〰 JAVASCRIPT 〰 MYSQL 〰 NODE JS 〰 REACT 〰 MONGODB 〰 EXPRESS
                            </p>
                            <div className="content-links">
                                <i className="fa fa-phone-square" aria-hidden="true"/>435-513-1099
                                <br/>
                                <i className="fa fa-envelope" aria-hidden="true"/> delmymm93@gmail.com
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}


export default Homepage;