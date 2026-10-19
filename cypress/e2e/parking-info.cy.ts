// E2E-PAR-01 - Información del parqueadero (IntelliPark Mobile)
const PAUSA = 1000; // pausa corta para que el video se pueda seguir

describe('E2E-PAR-01 - Información del parqueadero', () => {
  it('Un usuario autenticado llega desde el Home y ve nombre, horario, tarifas y contacto', () => {
    // Punto de inicio: pantalla de inicio de sesión
    cy.visit('/login');
    cy.get('ion-input[type="email"] input').should('be.visible');

    // Paso 1: iniciar sesión con el usuario de prueba
    cy.get('ion-input[type="email"] input').type(Cypress.env('E2E_USER'));
    cy.get('ion-input[type="password"] input').type(Cypress.env('E2E_PASSWORD'), { log: false });
    cy.wait(PAUSA);
    cy.contains('ion-button', 'Ingresar').click();
    cy.url().should('include', '/home');
    cy.wait(PAUSA);

    // Paso 2: abrir "Información del parqueadero" desde el Home
    cy.contains('ion-button', 'Información del parqueadero').click();

    // Paso 3: verificar la URL y los datos de la pantalla
    cy.url().should('include', '/parking-info');
    cy.contains('ion-card-title', 'IntelliPark - Sede Principal').should('be.visible');
    cy.contains('Lunes a sábado: 6:00 a. m. - 10:00 p. m.').should('be.visible');
    cy.wait(PAUSA);

    // Tarifas con formato colombiano
    cy.contains('ion-item', 'Carro').should('contain', '$3.000 / hora');
    cy.contains('ion-item', 'Moto').should('contain', '$1.500 / hora');
    cy.wait(PAUSA);

    // Datos de contacto
    cy.contains('300 000 0000').should('be.visible');
    cy.contains('contacto@intellipark.com').should('be.visible');
    cy.wait(PAUSA);
  });
});
