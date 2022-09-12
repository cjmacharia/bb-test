

import Page from './page';


class ArticleDetailsPage extends Page {
   
    get articleTitle () {
        return $('div[class="container"] > h1');
    }

    get articleBody () {
        return $('div > p');
    }

    get btnEditArticle () {
        return $('a.btn-outline-secondary');
    }

    get btnDeleteArticle () {
        return $('button.btn-outline-danger');
    }

    get inputComment () {
        return $('div.card-block > textarea');
    }

    get btnPostComment () {
        return $('button[type="button"]');
    }


    async clickBtnEditArticle() {
        await this.btnEditArticle.click()
    }

    async clickBtnDeleteArticle() {
        await this.btnDeleteArticle.click()
    }
}

export default new ArticleDetailsPage();
