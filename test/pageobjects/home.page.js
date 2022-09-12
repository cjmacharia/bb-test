import Page from './page';

class HomePage extends Page {
    
    get homeLink () {
        return $('a[href="/"]');
    }

    get newArticleLink () {
        return $('a[href="/editor"]');
    }

    get profileLink () {
        return $('li:nth-child(4) > a');
    }

    get yourFeed () {
        return $('ul.nav-pills > li:nth-child(1) > a');
    }

    get globalFeed () {
        return $('ul.nav-pills > li:nth-child(2) > a');
    }

    async clickProfileLink() {
        await this.profileLink.click()
    }

    async clicknewArticleLink() {
        await this.newArticleLink.click()
    }


}

export default new HomePage();