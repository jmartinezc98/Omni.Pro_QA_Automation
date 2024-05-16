import 'cypress-file-upload'
import accesPage from '../../fixtures/Acces/pageAcess'

const accesDubai = new accesPage
let  userName = 'probador1@yopmail.com'
let userPassword = 'Probador1@'

beforeEach(() => {
  cy.viewport(1500, 900);
});

describe('QA_004 validar la Exploración en las diferentes tiendas', () => {

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

  //Seleccionar la opción "Explore Stores"
  it('Step 4', () => {
    accesDubai.closePopUp()
    cy.get('a[href="/merchantstores"]').eq(1).click({ force: true }).wait(2000)
  });

  //Seleccionar la opción "Explore Stores"
  it('Step 5', () => {
    accesDubai.closePopUp()
    cy.scrollTo('170');
    cy.get('div[class="card-up-title"]').eq(5).click()
  });

  // Finalizamos la sesión
  it('Step 6', () => {
    accesDubai.logOut()
  });

})
