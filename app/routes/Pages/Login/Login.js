import React from 'react';
import { Formik } from 'formik';
import { Route , withRouter} from 'react-router-dom';
import axios from 'axios';
import { setUserSession } from 'common';

import {
    Form,
    FormGroup,
    FormText,
    Input,
    CustomInput,
    Button,
    Label,
    EmptyLayout,
    ThemeConsumer
} from './../../../components';

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";

// const Login = () => (
function Login(props) {
    return (
    <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, {setSubmitting}) => {
            console.log("Logging in")
            axios.post('http://localhost:8080/login', { email: values.email, password: values.password }).then(response => {
            //   setUserSession(response.data.token, response.data.user);
            setUserSession("token1234", response.data.user);
            }).catch(error => {
                console.log(error);
                if (error.response.status === 401) setError(error.response.data.message);
                else setError("Something went wrong. Please try again later.");
            });
            props.history.push('/dashboards/rekap');
        }}
    >
        {props => {
            const {values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit} = props;
            return (
                <EmptyLayout>
                    <EmptyLayout.Section center>
                        { /* START Header */}
                        <HeaderAuth 
                            title=""
                        />
                        { /* END Header */}
                        { /* START Form */}
                        <form onSubmit={handleSubmit}> 
                        <Form className="mb-3">
                            <FormGroup>
                                <Label for="emailAdress">
                                    Email Adress
                                </Label>
                                <Input 
                                    type="email" 
                                    name="email" 
                                    id="emailAdress" 
                                    placeholder="Enter email..." 
                                    className="bg-white" 
                                    value={values.email} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">
                                    Password
                                </Label>
                                <Input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Password..." 
                                    className="bg-white" 
                                    value={values.password}
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                />
                            </FormGroup>
                            {/* <FormGroup>
                                <CustomInput type="checkbox" id="rememberPassword" label="Remember Password" inline />
                            </FormGroup> */}
                            <ThemeConsumer>
                            {
                                ({ color }) => (
                                    <Button color={ color } block type="submit">
                                        Sign In
                                    </Button>
                                )
                            }
                            </ThemeConsumer>
                        </Form>
                        </form>
                        { /* END Form */}
                        { /* START Bottom Links */}
                        <div className="d-flex mb-5">
                            {/* <Link to="/pages/forgotpassword" className="text-decoration-none">
                                Forgot Password
                            </Link> */}
                            {/* <Link to="/pages/register" className="ml-auto text-decoration-none">
                                Register
                            </Link> */}
                        </div>
                        { /* END Bottom Links */}
                        { /* START Footer */}
                        {/* <FooterAuth /> */}
                        { /* END Footer */}
                    </EmptyLayout.Section>
                </EmptyLayout>
            )
        }}
    </Formik>
    );
}

export default withRouter(Login);
