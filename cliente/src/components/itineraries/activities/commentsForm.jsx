import React from 'react';
import { Button, Form, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { connect } from 'react-redux';
import commentAction from '../../../redux/actions/commentAction'

class CommentsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: "",
            idItinerary: this.props.idItinerary,
            isFetching: []
        }
    }

    onChange = (e) => {
        this.setState({ ...this.state, comments: e.target.value, isFetching: true })
    }

    handleClick = event => {
        event.preventDefault()
        this.props.commentAction(this.state)
        this.limpiaCampo()
    }

    limpiaCampo() {
        let comment = document.querySelector('input')
        comment.value = ""
    }

    render() {
        return (
            <div className="">
                <h5 className="izquierda">Coments</h5>
                <br />
                <Form >
                    <InputGroup>
                        <Input type="text" name="comments" id={this.props.idItinerary} placeholder="Enter a comment" onChange={this.onChange.bind(this)} />
                        <InputGroupAddon addonType="append">
                            <Button color="primary" onClick={this.handleClick}>></Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        commentAction: (data) => dispatch(commentAction(data))
    }
}

export default connect(null, mapDispatchToProps)(CommentsForm)