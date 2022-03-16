import React from "react";
import { Card, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';


// ------------ Functional Component --------------------------------
  function RenderMenuItem({dish,onClick}) {
      return(
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <h5>{dish.name}</h5>
                </CardImgOverlay>
            </Link>
      </Card>
      );
  }
    
  const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} />
                </div>
        );
      });
  
      return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
          <div className="row">{menu}</div>
        </div>
      );
  }
  

  export default Menu;

// --------- Class Component ---------------------------
// class Menu extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const menu = this.props.dishes.map((dish) => {
//       return (
//         <div key={dish.id} className="col-12 col-md-5 m-1">
//           <Card onClick={() => this.props.onClick(dish.id)}>
//             <CardImg width="100%" src={dish.image} alt={dish.name} />
//             <CardImgOverlay body className="col-9 ml-5">
//               <CardTitle>{dish.name}</CardTitle>
//             </CardImgOverlay>
//           </Card>
//         </div>
//       );
//     });

//     return (
//       <div className="container">
//         <div className="row">{menu}</div>
//       </div>
//     );
//   }
// }

