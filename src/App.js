import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './App.css';
import { Button } from 'reactstrap';
import image1 from "./book1.png";
import image2 from "./book2.png";
import image3 from "./book3.png";
import image4 from "./book4.png";
import blank from "./blank.png";
{/*Angela Tong 2018 Vimeo React Code Challenge*/}
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className= "whitecontainer">
                    <Grid>
                        <div className="container1">
                            <Row>
                                <Col lg span={3}>
                                    <div className= "monsoonimage embed-responsive-item">
                                    </div>
                                </Col>
                                <Col lg span={3}>
                                    <div className="mtext">
                                        <h2><strong> Monsoon III </strong></h2>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                            officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna. </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Grid>
                </div>

                <div className="gradientcontainer">
                    <Grid>
                        <Row>
                            <Col lg span={3} >
                                <div className="column1">
                                    <h2><strong>BEAMS</strong></h2>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo. </p>
                                </div>
                            </Col>
                            <Col lg span={3}>
                                <div className="column2">

                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg span={4} >
                                <div className="column3">

                                </div>
                            </Col>
                            <Col lg span={4}>
                                <div className="column4">
                                    <h2><strong>Moves 2</strong></h2>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
                                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo. </p>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                    <br/> <br/>
                    <br/> <br/>
                    <div className="main">
                        <Carousel style={{backgroundColor:"white"}}>
                            <div>
                                <div className="carousel-container1">
                                    <img src={image1}/> </div>
                                <div className="rightC">
                                    <h2><strong>Holding the Rope</strong></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
                                        non proident.</p>
                                    <Button color="primary" style={{marginRight:'20px'}}>Buy Now</Button>
                                    <Button outline color="primary">Watch Trailer</Button>
                                </div>
                            </div>
                            <div>
                                <div className="carousel-container1">
                                    <img src={image2}/> </div>
                                <div className="rightC">
                                    <h2><strong>Vertical</strong></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
                                        non proident.</p>
                                    <Button color="primary" style={{marginRight:'20px'}}>Buy Now</Button>
                                    <Button outline color="primary">Watch Trailer</Button>
                                </div>
                            </div>
                            <div>
                                <div className="carousel-container1">
                                    <img src={image3}/> </div>
                                <div className="rightC">
                                    <h2><strong>The Dark</strong></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
                                        non proident.</p>
                                    <Button color="primary" style={{marginRight:'20px'}}>Buy Now</Button>
                                    <Button outline color="primary">Watch Trailer</Button>
                                </div>
                            </div>
                            <div>
                                <div className="carousel-container1">
                                    <img src={image4}/> </div>
                                <div className="rightC">
                                    <h2><strong>Vertical Aid</strong></h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
                                        non proident.</p>
                                    <Button color="primary" style={{marginRight:'20px'}}>Buy Now</Button>
                                    <Button outline color="primary">Watch Trailer</Button>
                                </div>
                            </div>
                            <div className="carousel-container1">
                                <img src={blank}/> </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
