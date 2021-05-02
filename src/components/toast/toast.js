import './toast.scss';

function getToastTemplate(props) {
    const {type, body } = props;

    let className = `app-toast type-${type}`;

    return (
        <div className={className}>
            <p className='app-toast__body'>{body}</p>
        </div>
    );
}

const ToastMessage = (props) => {
    return getToastTemplate(props);
}

export default ToastMessage;
