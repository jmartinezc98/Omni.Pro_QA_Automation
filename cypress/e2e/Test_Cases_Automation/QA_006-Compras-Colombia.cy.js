import 'cypress-file-upload'

beforeEach(() => {
  cy.viewport(490, 932);
});

describe('QA_006 Validación funcionalidades Compras Colombia', () => {
  before(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
  })


  it('Validar las opciones de menú e ingresar en alguna de ellas', () => {

    cy.visit('https://www.compraenlinea.co/')
    cy.wait(2000)

    //Cerrar el Pop-Up de inicio
    cy.get('div[class="andes-modal__content"]').then($modal => {

      if ($modal.length > 0) {
        cy.get('button[class="ui-ms-newsletter-modal__content-close"]').click();
      } else {
        cy.log('El Pop-up no está presente');
      }

    });

    //Aceptar Cookies
    cy.get('[data-testid="action:understood-button"]').click()

    //Ingresar al menú principal
    cy.get('#hamburguer-menu').should('be.visible').click()
    cy.wait(3000)

    //Seleccionar opción dentro del menú
    cy.get('a[class="header--custom-text"]').eq(2).click({ force: true })
    cy.wait(2000)

    //Validación del mensaje de alerta
    cy.get('.ui-search-rescue').should('be.visible')
    cy.get('.ui-search-rescue__title').should('contain.text', 'Escribe en el buscador lo que quieres encontrar.')
  });



  it('Consultar producto en la barra de busqueda', () => {

    //Ingresar al menú principal
    cy.get('#hamburguer-menu').should('be.visible').click()
    cy.wait(3000)

    //Ingresar producto a consultar
    cy.get('input[placeholder="Buscar..."]').eq(0).type('Juguetes{enter}')
    cy.wait(2000)

    //Validar que no se genera el mensaje de alerta al consultar el producto
    cy.get('.ui-search-rescue__title').should('not.be.visible')
    cy.wait(2000)

  });

  it('Seleccionar un producto para la compra', () => {
    //Validar las opciones de compra
    cy.get('a[id="logo-wrapper"]').eq(1).click()
    cy.wait(2000)
    cy.get('div[class="payment-data-subtitle"]').contains('Ver más').click()
    cy.wait(6000)

    cy.window().then(win => {

    });

  });

})