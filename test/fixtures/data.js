import { faker } from '@faker-js/faker';
export default {
    articleTitle: faker.random.words(3),
    articleDescription: faker.random.words(7),
    articleBody: faker.random.words(12),
    articleTags: faker.random.words(2),
    editTitle: faker.random.words(3),
    editDescription: faker.random.words(7),
    editBody: faker.random.words(12),
    editTags: faker.random.words(2),
    randomUsername: faker.name.firstName(),
    randomEmail: faker.internet.email(),
    invalidEmail: "mash@gmail.com",
    invalidPassword: "testuser"

};