import AuthPage from  '../pageobjects/authentication.page';
import LandingPage from '../pageobjects/landing.page';
import HomePage from '../pageobjects/home.page';
import data from '../fixtures/data';

describe('Login journey tests', () => {
    beforeEach(() => {
        LandingPage.open();
        LandingPage.clickSignIn();
    });

    it('should fail to login with the incorrect login details', async () => {
        await AuthPage.login(data.invalidEmail, data.invalidPassword);
        await expect(AuthPage.errorMessage).toHaveText('email or password is invalid');
    });

    it('should login with valid credentials', async () => {
        await AuthPage.login(process.env.EMAIL, process.env.PASSWORD);
        await expect(HomePage.homeLink).toExist()
        await expect(HomePage.newArticleLink).toExist()
        await expect(HomePage.homeLink).toExist()
    });
});


