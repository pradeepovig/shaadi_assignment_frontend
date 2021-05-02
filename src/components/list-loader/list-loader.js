import React from 'react';
import './list-loader.scss';
import {Spinner} from "reactstrap";

const ListLoader = ({isVisible}) => {
    return (
        <div className={`list-loader ${isVisible ? 'active' : ''}`}>
            <Spinner style={{ width: '3rem', height: '3rem' }} />
            <span className="list-loader__message">Loading more contacts...</span>
        </div>
    );
}

export default ListLoader;
