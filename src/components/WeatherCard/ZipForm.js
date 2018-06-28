import React from 'react'
import { Form } from 'semantic-ui-react'

const ZipForm = (props) => (
    <Form>
        <Form.Field>
            <label>Zip Code</label>
            <input value={props.value} onChange={props.handler} />
        </Form.Field>
    </Form>
);

export default ZipForm;
