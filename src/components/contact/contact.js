import GlobalContext from "../../contexts/GlobalContext";
import {useCallback, useContext} from "react";
import React from 'react';
import './contact.scss';
import {Button, Card, CardBody} from "reactstrap";

const Contact = ({name, number}) => {
    const globalStore = useContext(GlobalContext);

    const logoutUser = useCallback(() => {
        globalStore.setUser(null);
    }, []);

    return (
        <div className="contact">
            <Card className="contact__card">
                <CardBody className="contact__card-body d-flex flex-column">
                    <div className="contact__subwrapper d-flex justify-content-space-between align-items-center">
                        <h6 className="contact__name">{name}</h6>
                        <img className="contact__photo" src="https://i.picsum.photos/id/50/200/300.jpg" alt="Contact Image"/>
                    </div>
                    <div className="contact__number">{number}</div>
                </CardBody>
            </Card>
        </div>
    );
}

export default Contact;
