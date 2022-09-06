export default class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} is logout!`);
    }
}
export function userHelper() {
    console.log("HELPER ");
}
