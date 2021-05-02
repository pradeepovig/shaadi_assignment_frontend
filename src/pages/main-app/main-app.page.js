import GlobalContext from "../../contexts/GlobalContext";
import {useContext, useEffect} from "react";
import React, {useState} from 'react';
import './main-app.page.scss';
import {getRandomUsers} from "../../services/users-api.service";
import {showToastMessage} from "../../services/ui.service";
import {TOAST_MESSAGE_TYPE_ERROR} from "../../constants/strings";
import Contact from "../../components/contact/contact";
import ListLoader from "../../components/list-loader/list-loader";
import Navbar from "../../components/navbar/navbar";

const MainApp = props => {
    const globalStore = useContext(GlobalContext);
    const [ contacts, setContacts ] = useState([]);
    const [ isListLoaderVisible, setIsListLoaderVisible ] = useState(true);

    const getUsers = () => {
        getRandomUsers().then().catch();
    }

    const onGetUsersSuccess = res => {
        setContacts([...contacts, res.data.data]);
    }

    const onGetUsersError = err => {
        showToastMessage(TOAST_MESSAGE_TYPE_ERROR, 'Could not fetch users');
    }

    const getContactsTemplate = () => {
        if (contacts.length) {
            return contacts.map((contact, index) => {
                return <Contact name={contact.name.first} number="+919968597715" />
            })
        } else {
            return null;
        }
    }

    const checkIfReachedBottom = (el) => {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    const scrollTrack = () => {
        const wrappedElement = document.getElementById('contactsList');

        if (checkIfReachedBottom(wrappedElement)) {
            getUsers();
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', scrollTrack);

        return () => { document.removeEventListener('scroll', scrollTrack) }
    }, []);

    return (
        <div className="main-app">
            <Navbar />
            <div id="contactsList" className="main-app__contacts-list-container">
                <div className="main-app__contacts-list">
                    {
                        getContactsTemplate()
                    }

                    <ListLoader isVisible={isListLoaderVisible}/>
                </div>
            </div>
        </div>
    );
}

export default MainApp;
