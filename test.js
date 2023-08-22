import { Selector } from 'testcafe';

fixture('Login Test')
    .page('https://beta.deepthought.education/login');
    


        test('Test successful login with vaild creedetials', async t => {
            await t
                .typeText('#username', 'mahesh')
                .typeText('#password', 'mahesh@123')
                .click('.btn.btn-block.btn-lg.btn-primary.font-poppins.primary-background.sdlms-text-white-16px');
        
            await t.expect(Selector('H5').withExactText("Welcome to DeepThought").exists).ok();
        });
        
        test('Test unsuccessful login attempts with invalid credentials.', async t => {
            await t
                .typeText('#username', 'mahesh')
                .typeText('#password', 'mahesh@22')
                .click('.btn.btn-block.btn-lg.btn-primary.font-poppins.primary-background.sdlms-text-white-16px');
        
            await t.expect(Selector('#login-error-notify').innerText).contains('Login Unsuccessful');
        });
        
        test('Validate that appropriate error messages are displayed for invalid login attempts.', async t => {
            await t.click('.btn.btn-block.btn-lg.btn-primary.font-poppins.primary-background.sdlms-text-white-16px');
        
            await t.expect(Selector('#login-error-notify').innerText).contains('Please specify both a username and password');
        });

        test('On successful login, validate that the user is redirected to the dashboard screen.', async t => {
            await t
                .typeText('#username', 'mahesh')
                .typeText('#password', 'mahesh@123')
                .click('.btn.btn-block.btn-lg.btn-primary.font-poppins.primary-background.sdlms-text-white-16px');
        
            await t.expect(Selector('H5').withExactText("Welcome to DeepThought").exists).ok();
        });








