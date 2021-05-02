import GlobalContext from "../../contexts/GlobalContext";
import {useCallback, useContext} from "react";
import React, {useState} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
    Col,
    Form,
    FormGroup,
    Input,
    Label, Spinner
} from "reactstrap";
import {showToastMessage} from "../../services/ui.service";
import {ROUTE_NAME_HOME, TOAST_MESSAGE_TYPE_ERROR, TOAST_MESSAGE_TYPE_SUCCESS} from "../../constants/strings";
import './login.page.scss';

const Login = props => {
    const globalStore = useContext(GlobalContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailInputChange = useCallback(
        ({target}) => {
            setEmail(target.value);
        },
        [] // state not being updated on first onChange
    );

    const onPasswordInputChange = useCallback(
        ({target}) => {
            setPassword(target.value);
        },
        [] // state not being updated on first onChange
    );

    // onEmailInputChange = ({target}) => {
    //     setEmail(target.value);
    // }

    // onPasswordInputChange = ({target}) => {
    //     setEmail(target.value);
    // }

    const submitForm = () => {
        if (email.length && password.length) {
            if (email === 'admin' && password === 'password') {
                showToastMessage(TOAST_MESSAGE_TYPE_SUCCESS, 'Logged in successfully.');
                globalStore.setUser({email, password});
                props.history.push(`/`);
            } else {
                showToastMessage(TOAST_MESSAGE_TYPE_ERROR, 'Incorrect credentials.');
            }
        } else {
            showToastMessage(TOAST_MESSAGE_TYPE_ERROR, 'Form could not be left empty.');
        }
    }

    return (
        <div className="login-page">
            <Card className="login-page__card">
                <CardBody>
                    <CardTitle tag="h5">Shaadi.com Assignment React App</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Built by Pradeep Vig</CardSubtitle>
                    <Form>
                        <FormGroup row>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter username" onChange={onEmailInputChange}/>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="password placeholder"  onChange={onPasswordInputChange}/>
                        </FormGroup>

                        <Button onClick={submitForm}>
                            Button
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
}

export default Login;
