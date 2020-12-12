import React from "react";
import { connect } from "react-redux";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

import commentActionDelete from "../../../../redux/actions/commentActionDelete";
import Modal from "./modal";

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
  return props.activitiesReducer.map((activities, i) => {
    var imagen = require(`../../../../imagenes/usuarios/${activities.userPic}`)
      .default;
    return (
      <>
        <hr />
        <Row key={i} className="mb-3">
          <Col sm="3" xs="3" className="comment-content">
            <section>
              <img src={imagen} alt={"imagen de usuario"} />

              <small className="text-muted">
                {" "}
                Posted by<strong>{activities.userName}</strong>
              </small>
            </section>
          </Col>
          <Col sm="7" xs="9">
            <p>{activities.comments}</p>
          </Col>
          <Col sm="2" xs="12" className="centrarIconoComentario">
            <Modal _id={activities._id} name={activities.userName} />
            <FontAwesomeIcon
              icon={faTrashAlt}
              color="lightgray"
              size="lg"
              pull="right"
              id="iconDelete"
              onClick={function () {
                props.commentActionDelete(activities._id);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <small className="text-muted fecha float-right">
              {dateCoverter(activities.date)}
            </small>
          </Col>
        </Row>
      </>
    );
  });
};

const mapDispatchToProps = (dispatch) => {
  return {
    commentActionDelete: (data) => dispatch(commentActionDelete(data)),
  };
};

export default connect(null, mapDispatchToProps)(CommentList);
