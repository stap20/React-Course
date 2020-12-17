import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function convert_date_formate(strdate) {
  const monthNames = [
    "January",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(strdate);
  const year = date.getFullYear();
  const month = monthNames[date.getMonth()];
  var day = date.getDate() + 1;
  if (day < 10) {
    day = "0" + day;
  }

  return month + " " + day + ", " + year;
}

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
  renderComments(dish) {
    if (dish != null) {
      const comments_html = dish.comments.map((comment) => {
        return (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author} , {convert_date_formate(comment.date)}
            </p>
          </li>
        );
      });
      return (
        <div className="container col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">{comments_html}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const current_dish = this.props.selectedDish;
    return (
      <div className="row">
        {this.renderDish(current_dish)}
        {this.renderComments(current_dish)}
      </div>
    );
  }
}

export default DishDetail;
