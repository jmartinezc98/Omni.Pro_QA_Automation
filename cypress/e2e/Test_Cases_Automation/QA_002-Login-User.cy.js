Cypress.on('uncaught:exception', (err, runnable) => { return false; });
/// <reference types="cypress" />

import 'cypress-file-upload'
import accesPage from '../../fixtures/Acces/pageAcess'

const accesDubai = new accesPage
let  userName = 'probador1@yopmail.com'
let userPassword = 'Probador1@'
let name = 'Anthony'
let name2 = ''

beforeEach(() => {
  cy.viewport(1500, 900);
});

describe('QA_002 validar el login de un usuario ya creado', () => {

  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  // Acceder a la URL de Dubai Store
  it('Step 1', () => {
    accesDubai.accesDubai()
  })

  //Ingresar a la opción Login 
  it('Step 2', () => {
    cy.get('a[href="/login"]').should('be.visible').click()
    cy.wait(3000)
    cy.get('#login').should('be.visible')
    cy.get('span[class="inner-sub"]').should('contain.text', 'Welcome back')
    cy.get('span[class="main-login-title"]').should('contain.text', 'Sign in to your account')
    cy.wait(2000)

  });

  //Diligenciar los campos con un usuario ya creado
  it('Step 3', () => {
    cy.get('input[id="username"]').should('be.visible').type(userName)
    cy.get('input[id="password"]').should('be.visible').type(userPassword)
      .wait(1000)
    cy.get('button').contains('Sign in').should('be.visible').click()
      .wait(3000)
  });

  //Verificar la activación de listas desplegables de las diferentes opciones
  it('Step 4', () => {
    accesDubai.closePopUp()
    cy.get('a[href="/all"]').eq(1).trigger('mouseover').wait(3000)

    cy.get('a.dropdown-toggle').eq(4).invoke('text').then((texto) => {
      name2 = texto.trim()
    });

    if (name === name2) {
      console.log('El texto de bienvenida es correcto.');
    } else {
      console.log('El texto de bienvenida es incorrecto.');
    }
    console.log(name)
    console.log(name2)


  });

  // Finalizamos la sesión
  it('Step 5', () => {
    accesDubai.logOut()
  });

})
