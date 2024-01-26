import {generarIdentificacion, generarFechanacimmiento, generarTelefono, generarlibro} from "../funciones.cy";
import faker from "faker";

describe("Entrando a la Pagina MILI Local", () => {
    it("Validando Inicio", () => {
      cy.visit("http://localhost:3000/");

    cy.get(".MuiAutocomplete-hasPopupIcon").type("Cédula de Ciudadanía");
    cy.wait(1000);
    cy.get(".MuiAutocomplete-popper").click();

    cy.get("#idi").type("234236");
    cy.get("#uPass").type("123123");
    cy.get(".MuiButton-contained").click();

    cy.wait(4000);

//-------Modulo de Comerciales-----------------------------------------------------------------------------------------------------------

   /*  cy.contains("COMERCIALES").click();
    cy.wait(2000);
    cy.contains("Parámetros comerciales").click();
    cy.wait(1000);
    cy.contains("Registro de comerciales").click(); */
    cy.wait(10000);

//Información Personal---------------------------------------------------------------------------------------------------------------------

    cy.get('[name="tiId"]').type("CÉDULA DE CIUDADANÍA");//Tipo de Identificación
    cy.wait(1000);
    cy.get(".MuiAutocomplete-popper").click();

    const idbeneficiario = generarIdentificacion();//Número de identificación
    cy.get('[name="sIdeNum"]').type(idbeneficiario, { force: true });

    const nombreAleatorio = faker.name.firstName();//Primer nombre
    cy.get('[name="sFirNam"]').type(nombreAleatorio, { force: true });

    const segundonombreAleatorio = faker.name.firstName();//Segundo Nombre
    cy.get('[name="sSecNam"]').type(segundonombreAleatorio, { force: true });

    const apellidoAleatorio = faker.name.lastName();//Primer Apellido
    cy.get('[name="sFirLas"]').type(apellidoAleatorio, { force: true });

    const segundoapellidoAleatorio = faker.name.lastName();//Segundo Apellido
    cy.get('[name="sSecLas"]').type(segundoapellidoAleatorio, { force: true });

    const fechanabeneficiario = generarFechanacimmiento();//Fecha de Nacimiento
    cy.get('[name="sDatBir"]').type(fechanabeneficiario, { force: true });

    const telefonobeneficiario = generarTelefono();//Número de telefono
    cy.get('[name="sPhone"]').type(telefonobeneficiario, { force: true });

    const correobeneficiario = faker.internet.email();//Correo electrónico
    cy.get('[name="sEmail"]').type(correobeneficiario, { force: true });

    const codigovendedor = generarIdentificacion();//Código de vendedor
    cy.get('[name="sSellerCode"]').type(codigovendedor, { force: true });

//Domicilio-----------------------------------------------------------------------------------------------------------------------------------

    cy.get('[name="cId"]').type("BARRANCABERMEJA");//Ciudad
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="taId"]').type("MANZANA");//Tipo de via
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="sNumDir"]').type("40", { force: true });//Primer número de via
    cy.get('[name="sNum"]').type("55", { force: true });//Segundo número de via
    cy.get('[name="sNumHou"]').type("110", { force: true });//Tercer número de via
    cy.get('[name="sInformation"]').type("De esquina");//Descripción

//Informacion bancaria---------------------------------------------------------------------------------------------------------------------

    cy.get('[name="tbId"]').type("BANCO DE BOGOTÁ");//Entidad bancaria
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="atId"]').type("AHORRO");//Tipo de cuenta
    cy.get(".MuiAutocomplete-popper").click();

    const cuentaAleatoria = generarlibro();//Número de cuenta
    cy.get('[name="sbAccNum"]').type(cuentaAleatoria, { force: true });



//Fórmula--------------------------------------------------------------------------------------------------------------------------------------

    cy.get('[name="sfFormula"]').type('VALOR');//Fórmula
    cy.get(".MuiAutocomplete-popper").click();
    cy.get('[name="sfValue"]').type('1000000');//Valor

    /* cy.get('[name="sfFormula"]').type('PORCENTAJE');//Porcentaje
    cy.get(".MuiAutocomplete-popper").click();
    cy.get('[name="sfPor"]').type('50');//N° de porcentaje
     */


    cy.get('[data-testid="NoteAddIcon"]').click();

    cy.wait(20000);


    cy.get('[data-testid="SaveIcon"]').click();

  });
});
