import  AuthPage from  '../pageobjects/authentication.page';
import LandingPage from '../pageobjects/landing.page';
import HomePage from '../pageobjects/home.page';
import data from '../fixtures/data';

describe('My application', () => {
    beforeEach(() => {
        LandingPage.open();
        LandingPage.clickSignUp();
    });

    it('should fail to regiter with an invalid email format', async () => {
        await AuthPage.register(data.randomUsername, data.randomUsername, process.env.PASSWORD);;
        await expect(AuthPage.errorMessage).toHaveText('email is invalid');
    });

    it('should fail to regiter with an exisiting email', async () => {
        await AuthPage.register(data.randomUsername, process.env.EMAIL, process.env.PASSWORD);;
        await expect(AuthPage.errorMessage).toHaveText('email is already taken.');
    });
    it('should fail to regiter with an exisiting username', async () => {
        await AuthPage.register(process.env.USERNAME, data.randomEmail, process.env.PASSWORD);;
        await expect(AuthPage.errorMessage).toHaveText('username is already taken.');
    });
    it('should fail to regiter with an empty username', async () => {
        await AuthPage.register(null, data.randomEmail, process.env.PASSWORD);;
        await expect(AuthPage.errorMessage).toHaveText('username can\'t be blank');
    });

    it('should successfully register a user', async () => {
        await AuthPage.register(data.randomUsername, data.randomEmail, process.env.PASSWORD);
        await expect(HomePage.homeLink).toExist()
        await expect(HomePage.newArticleLink).toExist()
        await expect(HomePage.homeLink).toExist()
    });

});


