import {action, makeObservable, observable} from "mobx";

class GlobalStore {
    constructor() {
        this.user = null;

        makeObservable(this, {
            user: observable,
            setUser: action
        });
    }

    setUser(user) {
        this.user = JSON.parse(JSON.stringify(user));
    }
}

export default new GlobalStore();
