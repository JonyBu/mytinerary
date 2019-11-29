import React from 'react';
import { Button, Form, InputGroup, InputGroupAddon, Input } from 'reactstrap';

const CommentsForm = () => {
    return (
        <div className="">
            <h5 className="izquierda">Coments</h5>
            <br />
            <Form >
                <InputGroup>
                    <Input type="text" name="comment" id="comments" placeholder="enter a comment"/>
                    <InputGroupAddon addonType="append">
                        <Button color="primary">></Button>
                    </InputGroupAddon>
                </InputGroup>
            </Form>
        </div>
    );
}

export default CommentsForm;