import {Component} from "react";

class ErrorBoundary extends Component {
    state = {
        errorMessage: ''
    }

    // A fake logging service
    logErrorToServices = console.log

    static getDerivedStateFromError(error) {
        return {errorMessage: error.toString()}
    }

    componentDidCatch(error, info) {
        this.logErrorToServices(error.toString(), info.componentStack)
    }

    render() {
        const { errorMessage } = this.state;

        if (errorMessage) {
            return (
                <p>
                    {errorMessage}
                </p>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
