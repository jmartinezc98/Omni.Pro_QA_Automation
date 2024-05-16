import 'cypress-file-upload'
import accesPage from '../../fixtures/Acces/pageAcess'

const accesDubai = new accesPage

beforeEach(() => {
  cy.viewport(490, 932);
});

describe('QA_005 Pruebas en mobile ', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  it('Validar las opciones de menú e ingresar en alguna de ellas', () => {

    accesDubai.accesDubai()
    //Ingresar a la opción Login
    cy.get('.navbar-toggle').click().focus()
    cy.wait(3000)
  });


  it('Consultar producto', () => {
    //Ingresar a la opción Login

    cy.get('.btn-search-fk > .material-icons').should('be.visible').click()
    cy.get('input[class="js-search form-control customize-box"]').should('be.visible').click().type('iPhone').wait(3000)

  });

})
