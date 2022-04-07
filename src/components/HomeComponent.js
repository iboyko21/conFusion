import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

function RenderCard({item}) {
    return(
        <Card className="main-card mt-5">
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <h4>{item.name}</h4>
                {item.designation ? <h6>{item.designation}</h6>: null} 
{/* if item.designation does not equal to null(exists) return <h6>{item.designation}</h6> otherwise return null (nothing) */}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return(

        <div>

            <div className="jumbotron">
                    <div className="container container-jumbotron">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p className="lead">We take inspiration from the World's best cuisines, 
                                    and create a unique fusion experience. Our lipsmacking creations 
                                    will tickle your culinary senses!</p>
                            </div>

                            <div className="col-12 col-sm-3 ml-auto">
                                <img src="assets/images/logo.png" size="100%" />
                            </div>

                        </div>
                    </div>
                </div>

            {/* <div className="row header">
                <div className="col">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-8">
                                <h2>Welcome to Ristorante Con Fusion</h2>
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                            
                        </div>
                        </div>
                </div>
            </div> */}
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.dish} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.promotion} />
                    </div>
                    <div className="col-12 col-md m-1">
                        <RenderCard item={props.leader} />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;