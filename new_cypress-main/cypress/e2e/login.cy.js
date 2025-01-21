describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); //Зашла на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки 
         cy.get('#mail').type('german@dolnikov.ru') //Ввела верный логин
         cy.get('#pass').type('iLoveqastudio1') //Ввела верный пароль
         cy.get('#loginButton').click(); //Нажала войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что вижу текст Авторизация прошла успешно
         cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю
     })
 
     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки 
        cy.get('#forgotEmailButton').click(); //Нажимаю кнопку забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru') //Ввела почту для восстановления 
        cy.get('#restoreEmailButton').click(); //Нажала отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки 
        cy.get('#mail').type('german@dolnikov.ru'); //Ввела верный логин
        cy.get('#pass').type('iLoveqastudio0'); //Ввела неверный пароль
        cy.get('#loginButton').click(); //Нажала кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что вижу текст Такого логина или пароля нет
        cy.get('#messageHeader').should('be.visible');//Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю
    })
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки 
        cy.get('#mail').type('german@dolnikov.com'); //Ввела неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввела верный пароль
        cy.get('#loginButton').click(); //Нажала кнопку войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что вижу текст Такого логина или пароля нет
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю
    })
    it('Логин без @', function () {
        cy.visit('https://login.qa.studio/'); //Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки 
        cy.get('#mail').type('germandolnikov.ru'); //Ввела логин без @
        cy.get('#pass').type('iLoveqastudio1'); //Ввела верный пароль
        cy.get('#loginButton').click(); //Нажала кнопку войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю, что вижу текст Нужно исправить проблему валидации
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю
    }) 
    it('Логин написан в верхнем и нижнем регистре', function () {
        cy.visit('https://login.qa.studio/'); //Зашла на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Проверяю цвет кнопки 
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввела логин записанный заглавн. и строчными буквами
        cy.get('#pass').type('iLoveqastudio1'); //Ввела верный пароль
        cy.get('#loginButton').click(); //Нажала кнопку войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что вижу текст Авторизация прошла успешно
        cy.get('#messageHeader').should('be.visible'); //Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю
    }) 
}) 
