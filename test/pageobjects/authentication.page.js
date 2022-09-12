

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AuthPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('input[formcontrolname="email"]');
    }

    get inputusername () {
        return $('input[formcontrolname="username"]');
    }

    get inputPassword () {
        return $('input[formcontrolname="password"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get errorMessage () {
        return $('ul[class="error-messages"] > li');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async register (username, email, password) {
        await this.inputusername.setValue(username);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new AuthPage();
