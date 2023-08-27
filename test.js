import { Selector } from 'testcafe';

fixture('Login Test')
    .page('https://beta.deepthought.education/login');

const usernameInput = Selector('#username');
const passwordInput = Selector('#password');
const loginButton = Selector('.btn.btn-block.btn-lg.btn-primary.font-poppins.primary-background.sdlms-text-white-16px');
const errorNotify = Selector('#login-error-notify');

test('Test successful login with valid credentials', async t => {
    await t
        .typeText(usernameInput, 'mahesh')
        .typeText(passwordInput, 'mahesh@123')
        .click(loginButton);

    await t.expect(Selector('h5').withExactText("Welcome to DeepThought").exists).ok();
});

test('Test unsuccessful login attempts with invalid credentials', async t => {
    await t
        .typeText(usernameInput, 'mahesh')
        .typeText(passwordInput, 'mahesh@22')
        .click(loginButton);

    await t.expect(errorNotify.innerText).contains('Login Unsuccessful');
});

test('Validate appropriate error messages for invalid login attempts', async t => {
    await t.click(loginButton);

    await t.expect(errorNotify.innerText).contains('Please specify both a username and password');
});

test('On successful login, validate user redirection to dashboard', async t => {
    await t
        .typeText(usernameInput, 'mahesh')
        .typeText(passwordInput, 'mahesh@123')
        .click(loginButton);

    await t.expect(Selector('h5').withExactText("Welcome to DeepThought").exists).ok();
});
