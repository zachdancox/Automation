// blackboardLogin.js
describe('Blackboard login page', function() {

    var EC = protractor.ExpectedConditions;
    var temp;

    var username = element.all((by.css('#loginFormList li.clearfix input'))).first();
    var password = element.all((by.css('#loginFormList #password'))).first();
    var loginButton = element.all((by.css('#entry-login'))).first();
    var personalFinance = element.all((by.css('#_4_1termCourses_noterm ul li a'))).first();
    var myGrades = element.all((by.css('ul.courseMenu li:nth-child(16) a span'))).last();
    var totalPoints = element.all((by.css('span.pointsPossible.clearfloats'))).last();


    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://learn.uark.edu');
        expect(browser.getTitle()).toEqual('Blackboard Learn');
        username.sendKeys('*******');
        password.sendKeys('*******');
        loginButton.click();
    });

    it('should check the first classes grade', function() {
        browser.wait(EC.presenceOf(personalFinance), 5000, 'Element taking too long to appear in the DOM');
        expect(personalFinance.getText()).toEqual('FINN 3003 - PERSONAL FINANCIAL MGMT (1179-THEUA-FINN-3003-SEC003-16741)');
        personalFinance.click();
        browser.wait(EC.presenceOf(myGrades), 15000, 'Element taking too long to appear in the DOM');
        expect(myGrades.getText()).toEqual('My Grades');
        myGrades.click();
        browser.wait(EC.presenceOf(totalPoints), 15000, 'Element taking too long to appear in the DOM');
        expect(totalPoints.getText()).toContain('500');
    });
});