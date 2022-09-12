import AuthPage from  '../pageobjects/authentication.page';
import LandingPage from '../pageobjects/landing.page';
import HomePage from '../pageobjects/home.page';
import data from '../fixtures/data';
import EditorPage from '../pageobjects/editor.page';
import ArticleDetailsPage from '../pageobjects/articleDetails.page';

describe('Test crud operations on articles', () => {
    beforeEach(() => {
        LandingPage.open();
        LandingPage.clickSignIn();
        AuthPage.login(process.env.EMAIL, process.env.PASSWORD);
    });

    it('should successfully publish an article', async () => {
        await HomePage.clicknewArticleLink();
        await EditorPage.enterArticleDetails(data.articleTitle, data.articleDescription, data.articleBody, data.articleTags);

         //assert the article was created
         await expect(ArticleDetailsPage.articleBody).toHaveTextContaining(data.articleBody);
         await expect(ArticleDetailsPage.articleTitle).toHaveTextContaining(data.articleTitle);

         //clean up
         await ArticleDetailsPage.clickBtnDeleteArticle();
         
    });

    it('should successfully edit an article', async () => {
        await HomePage.clicknewArticleLink();
        await EditorPage.enterArticleDetails(data.articleTitle, data.articleDescription, data.articleBody, data.articleTags);
        await ArticleDetailsPage.clickBtnEditArticle();
        const title = await EditorPage.inputTitle.getValue()
        const body = await EditorPage.inputBody.getValue()
        const description = await EditorPage.inputDescription.getValue()

        // // Assert the form loaded with prefilled data
        expect(data.articleBody).toHaveTextContaining(body);
        expect(data.articleTitle).toHaveTextContaining(title);
        expect(data.articleDescription).toHaveTextContaining(description);

        await EditorPage.enterArticleDetails(data.editTitle, data.editDescription, data.editBody, data.editTags);

        //assert the article was updated
        await expect(ArticleDetailsPage.articleBody).toHaveTextContaining(data.editBody);
        await expect(ArticleDetailsPage.articleTitle).toHaveTextContaining(data.editTitle);
        //clean up
        await ArticleDetailsPage.clickBtnDeleteArticle();
         
    });

    it('should successfully delete an article', async () => {
        await HomePage.clicknewArticleLink();
        await EditorPage.enterArticleDetails(data.articleTitle, data.articleDescription, data.articleBody, data.articleTags);
        await ArticleDetailsPage.clickBtnDeleteArticle();
        await expect(HomePage.yourFeed).toExist();
        await expect(HomePage.globalFeed).toExist();
         
    });
});


