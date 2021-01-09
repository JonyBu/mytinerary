import React, { useState } from "react";
import { connect } from "react-redux";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-regular-svg-icons";

import commentActionUpdate from "../../../../redux/actions/commentActionUpdate";
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

  const [vote, setLike] = useState(false);
  const [come, setCome] = useState();

  return props.comments.map((comment, i) => {

    const likeUp = (com) => {
      if (vote === false) {
        setLike(true);
        setCome(com._id);
        let newComment = com;
        newComment.like++;
        newComment = {
          id: com._id,
          like: com.like,
          dislike: com.dislike,
          comments: com.comments,
          date: com.date,
        };
        props.commentActionUpdate(newComment);
      }
    };
  
    const likeDown = (com) => {
      if (vote === false) {
        setLike(true);
        let newComment = com;
        newComment.dislike++;
        newComment = {
          id: com._id,
          like: com.like,
          dislike: com.dislike,
          comments: com.comments,
          date: com.date,
        };
        props.commentActionUpdate(newComment);
      }
    };

    var imagen = require(`../../../../imagenes/usuarios/${comment.userPic}`)
      .default;

    return (
      <div key={i}>
        <hr />
        <Row className="mb-3">
          <Col sm="3" xs="3" className="comment-content">
            <section style={{ textAlign: "center" }}>
              <img src={imagen} alt={"imagen de usuario"} />
              <p className="colRelative">
                <small
                  className="text-muted ml-0 mt-1"
                  style={{ textAlign: "center" }}
                >
                  Posted by<strong>{comment.userName}</strong>
                </small>
              </p>
            </section>
          </Col>
          <Col sm="7" xs="9">
            <p>{comment.comments}</p>
          </Col>
          <Col sm="2" xs="12" className="centrarIconoComentario">
            {props.user.userName === comment.userName ? (
              <>
                <Modal _id={comment._id} comment={comment} from="edit" />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  color="lightgray"
                  size="lg"
                  pull="right"
                  id="iconDelete"
                  onClick={function () {
                    props.commentActionDelete(comment._id);
                  }}
                />
              </>
            ) : (
              <></>
            )}
          </Col>
        </Row>
        <Row className="position-relative pt-4">
          <Col>
          
            <FontAwesomeIcon
              icon={faThumbsUp}
              color= { (vote && come === comment._id) ? "gray" : "lightgreen"  } 
              onClick={() => likeUp(comment)}
            />
            {comment.like}
            <FontAwesomeIcon
              icon={faThumbsDown}
              color={ (vote && come === comment._id) ? "gray" : "red"  } 
              className="ml-3"
              onClick={() => likeDown(comment)}
            />
            {comment.dislike}
          </Col>
          <Col>
            <small className="text-muted float-right">
              {dateCoverter(comment.date)}
            </small>
          </Col>
        </Row>
      </div>
    );
  });
};

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    commentActionDelete: (data) => dispatch(commentActionDelete(data)),
    commentActionUpdate: (data) => dispatch(commentActionUpdate(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
