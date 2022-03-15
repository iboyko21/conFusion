import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
 
// --------- Functional Component -------------------------------------------------------
function RenderDish({dish}) {
        return (
          <div key={dish.id}>
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
        );
      } 

function RenderComments({comments}) {
        const dishComments = comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>{comment.comment}</p>
              <p>
                -- {comment.author},{" "} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
              </p>
            </div>
          );
        });
        return (
          <div>
            <h4>Comments</h4>
            {dishComments}
          </div>
        );
      }
  
const DishDetail = (props) => {
      if (props.dish !=null) {
          return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1"><RenderDish dish={props.dish} /></div>
                    <div className="col-12 col-md-5 m-1"><RenderComments comments={props.dish.comments} /></div>
              </div>
          </div>
        );
      } else {
        return <div></div>;
      }
    }

// ------- Class Component --------------------------------------
// class DishDetail extends Component {
//   constructor(props) {
//     super(props);
//   }

//   renderDish(dish) {
//     if (dish) {
//       return (
//         <div key={dish.id}>
//           <Card>
//             <CardImg width="100%" src={dish.image} alt={dish.name} />
//             <CardBody>
//               <CardTitle>{dish.name}</CardTitle>
//               <CardText>{dish.description}</CardText>
//             </CardBody>
//           </Card>
//         </div>
//       );
//     } else {
//       return <div></div>;
//     }
//   }

//   renderComments(dish) {
//     if (dish) {
//       const dishComments = dish.comments.map((comment) => {
//         return (
//           <div key={comment.id}>
//             <p>{comment.comment}</p>
//             <p>
//               -- {comment.author},{" "} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
//             </p>
//           </div>
//         );
//       });
//       return (
//         <div>
//           <h4>Comments</h4>
//           {dishComments}
//         </div>
//       );
//     } else {
//       return <div></div>;
//     }
//   }

//   render() {
//     const dish = this.props.dish;
//     if (dish) {
//       const dishItem = this.renderDish(dish);
//       const dishComments = this.renderComments(dish);
//       return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-12 col-md-5 m-1">{dishItem}</div>
//                 <div className="col-12 col-md-5 m-1">{dishComments}</div>
//             </div>
//         </div>
//       );
//     } else {
//       return <div></div>;
//     }
//   }
// }

export default DishDetail;