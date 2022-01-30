/// <reference types="cypress" />

var faker = require('faker');

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const streetName = faker.address.streetName();
const ageUser = '39';

Given('access the website', () => {
  cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home');
});

When('create a new user', () => {
  cy.get(':nth-child(1) > .collapsible-header')
    .should('be.visible')
    .should('exist')
    .should('contain.text', 'Formulário')
    .click();

  cy.get('.active > .collapsible-body > ul > :nth-child(1) > a')
    .should('be.visible')
    .should('exist')
    .should('contain.text', 'Criar Usuários')
    .click();

  cy.get('#user_name').should('be.visible').should('exist').type(firstName);

  cy.get('#user_lastname').should('be.visible').should('exist').type(lastName);

  cy.get('#user_email').should('be.visible').should('exist').type(email);

  cy.get('[name="commit"]').should('be.enabled').click();
});

Then('must create user successfully', () => {
  cy.get('.s9 > :nth-child(3) > .col > :nth-child(1)')
    .should('be.visible')
    .should('contain.text', firstName);

  cy.get('.s9 > :nth-child(3) > .col > :nth-child(2)')
    .should('be.visible')
    .should('contain.text', lastName);

  cy.screenshot();
});

When('click option for update user', () => {
  cy.get('.col > .blue').should('be.visible').click();
});

Then('the user is updated', () => {
  cy.get('#user_address').should('be.visible').should('exist').type(firstName);

  cy.get('#user_age').should('be.visible').should('exist').type(ageUser);

  cy.get('[name="commit"]').should('be.enabled').click();

  cy.screenshot();
});
