import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

function RenderCard({item}) {
    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <h4>{item.name}</h4>
                {item.designation ? <h6><b>{item.designation}</b></h6>: null} 
{/* if item.designation does not equal to null(exists) return <CardSubtitle> otherwise return null (nothing) */}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return(
        <div className='container'>
            <div className='row align-items-start'>
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
    );
}

export default Home;