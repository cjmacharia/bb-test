import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnSignIn () {
        return $('a[href="/login"]');
    }

    get btnSignUp () {
        return $('a[href="/register"]');
    }

    

    async clickSignUp () {
        await this.btnSignUp.click();
    }

    async clickSignIn () {
        await this.btnSignIn.click();
    }

    open () {
        return super.open('/');
    }

}

export default new LandingPage();