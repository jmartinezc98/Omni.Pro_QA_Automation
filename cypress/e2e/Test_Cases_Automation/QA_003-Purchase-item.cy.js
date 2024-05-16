import 'cypress-file-upload'
import accesPage from '../../fixtures/Acces/pageAcess'

const accesDubai = new accesPage
let userName = 'probador1@yopmail.com'
let userPassword = 'Probador1@'
let articuloSeleccionado = ''


beforeEach(() => {
  cy.viewport(1500, 900);
});

describe('QA_003-Validar la selección de un producto y en carrito de compras ', () => {

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
    cy.get('#login').should('be.visible')
    cy.get('span[class="inner-sub"]').should('contain.text', 'Welcome back')
    cy.get('span[class="main-login-title"]').should('contain.text', 'Sign in to your account')
    cy.wait(2000)
  });

  //Diligenciamos los campos con un usuario ya creado
  it('Step 3', () => {
    cy.get('input[id="username"]').should('be.visible').type(userName)
    cy.get('input[id="password"]').should('be.visible').type(userPassword)
    cy.get('button').contains('Sign in').should('be.visible').click().wait(1000)
  });

  //Seleeccionamos algún articulo para añadirlo al carrito
  it('Step 4', () => {
    accesDubai.closePopUp()
    cy.get('div[class="js-image image card-image list-card-image"]').eq(3).click().wait(2000)
  });

  //Validamos el articulo que seleccionamos y lo agregamos al carrito
  it('Step 5', () => {
    accesDubai.closePopUp()
    cy.get('h1.product-name.hide-mobile').invoke('text').then((texto) => {
      articuloSeleccionado = texto.trim();
    });
    cy.get('button[data-add-to-cart-text="Add to Cart"]').click().wait(2000)
  });

  //Ingresamos al carrito de compras
  it('Step 6', () => {
    cy.get('a[class="btn btn-primary goto-full-cart btn-view-cart btn-instant-checkout"]').eq(0).click().wait(2000)
  });


  //Comparamos que el articulo seleccionado inicialmente es el mismo que hay en el carrito de compras
  it('Step 7', () => {
    cy.get('a.shari-product-name').invoke('text').then((texto) => {
      // Comparar los textos
      expect(texto.trim()).to.equal(articuloSeleccionado, 'Los textos no coinciden');
    });
  });

  // Finalizamos la sesión
  it('Step 8', () => {
    accesDubai.logOut()
  });

})
