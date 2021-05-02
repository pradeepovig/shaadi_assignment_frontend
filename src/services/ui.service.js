import * as ReactDOM from "react-dom";
import ToastMessage from "../components/toast/toast";
import {TOAST_MESSAGE_POSITION_BOTTOM_CENTER} from "../constants/strings";

export const showToastMessage = (type, message, position = TOAST_MESSAGE_POSITION_BOTTOM_CENTER, timeOut = 4000) => {
    const rootEl = document.createElement('div');
    rootEl.className = `app-toast-wrapper pos-${position}`;
    document.body.appendChild(rootEl);

    ReactDOM.render(
        <ToastMessage type={type} body={message} />,
        rootEl
    );

    setTimeout(() => {
        const elem = document.querySelector('.app-toast-wrapper');
        elem.remove();
    }, timeOut);
};
