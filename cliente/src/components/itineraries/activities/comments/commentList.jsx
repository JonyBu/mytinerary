import React from "react";
import { connect } from "react-redux";
import commentActionDelete from "../../../../redux/actions/commentActionDelete";
import Modal from "./modal";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

function dateCoverter(dateComment) {
  var dateEnd = Date.now();
  var dateStar = dateComment;

  var date = (dateEnd - dateStar) / 1000;

  var myDate = new Date(dateComment);

  switch (true) {
    case date < 60:
      var seconds = Math.floor(date);
      return "Last updated " + seconds + " second ago";
    case date > 60 && date < 3600:
      var minutes = Math.floor(date / 60);
      return "Last updated " + minutes + " minutes ago";
    case date > 3600 && date < 86400:
      var hours = Math.floor(date / 3600);
      return "Last updated " + hours + " hours ago";
    case date > 86400 && date < 604800:
      var days = Math.floor(date / 604800);
      return "Last updated " + days + " days ago";
    case date > 604800 && date < 2629743:
      var weeks = Math.floor(date / 2629743);
      return "Last updated " + weeks + " weeks ago";
    case date > 2629743 && date < 31556926:
      var month = Math.floor(date / 31556926);
      return "Last updated " + month + " month ago";
    case date > 31556926:
      var years = Math.floor(date / 31556926);
      return "Last updated " + years + " years ago";
    default:
      return myDate.toGMTString();
    // return myDate.toGMTString()+"<br>"+myDate.toLocaleString();
  }
}

const CommentList = (props) => {
  return props.activitiesReducer.map((activities, i) => (
      <Card className="mt-2 border-info" key={i}>
        <CardBody>
          <CardTitle className="text-left text-info" tag="h5">
            <small className="text-muted">{activities.name}</small>
            <Modal _id={activities._id} />
            <FontAwesomeIcon
              icon={faTrashAlt}
              color="gray"
              size="lg"
              pull="right"
              id="iconDelete"
              onClick={function () {
                props.commentActionDelete(activities._id);
              }}
            />
          </CardTitle>
          <CardText>{activities.comments}</CardText>
          <CardText className="text-right">
            <small className="text-muted">
              {dateCoverter(activities.date)}
            </small>
          </CardText>
        </CardBody>
      </Card>
  ));
};

const mapDispatchToProps = (dispatch) => {
  return {
    commentActionDelete: (data) => dispatch(commentActionDelete(data)),
  };
};

export default connect(null, mapDispatchToProps)(CommentList);
