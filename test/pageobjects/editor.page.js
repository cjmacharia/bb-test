

import Page from './page';


class EditorPage extends Page {
   
    get inputTitle () {
        return $('input[formcontrolname="title"]');
    }

    get inputDescription () {
        return $('input[formcontrolname="description"]');
    }

    get inputBody () {
        return $('textarea[formcontrolname="body"]');
    }

    get inputTags () {
        return $('fieldset:nth-child(4) > input');
    }

    get btnPublish () {
        return $('button[type="button"]');
    }

    async enterArticleDetails (title, description, body, tag) {
        await this.inputTitle.setValue(title);
        await this.inputDescription.setValue(description);
        await this.inputBody.setValue(body);
        await this.inputTags.setValue(tag);
        await this.btnPublish.click();
    }

}

export default new EditorPage();
