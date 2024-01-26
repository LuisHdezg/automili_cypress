import{generarNIT, generarTelefono, generarIdentificacion, generarcamara, generarlibro, generarFechaAleatoria, generarFechaAleatoriaa }from '../funciones.cy';
import faker from "faker";

describe("Entrando a la Pagina MILI Local", () => {
  it("Validando Inicio", () => {
    cy.visit("https://miliqa.miliv2.com/");

    cy.get(".MuiAutocomplete-hasPopupIcon").type("Cédula de Ciudadanía");
    cy.wait(1000);
    cy.get(".MuiAutocomplete-popper").click();

    cy.get("#idi").type("234236");
    cy.get("#uPass").type("123654");
    cy.get(".MuiButton-contained").click();

    cy.wait(4000);

    //Registro de Pagaduria
    cy.contains("PAGADURÍAS").click();
    cy.wait(1000);
    cy.contains("Parámetros").click();
    cy.wait(1000);
    cy.contains("Registro de empresas").click();
    cy.wait(2000);

    //-------Información General----------------------------------------------------------------------------------------------


    const nitAleatorio = generarNIT(); //Nit
    cy.get('[name="cNit"]').type(nitAleatorio, { force: true });


    const nombreDeEmpresa = faker.company.companyName(); //Pagaduria
    cy.get('[name="cBusNam"]').type(nombreDeEmpresa, { force: true });


    const email = faker.internet.email(); //Email
    cy.get('[name="cEmail"]').type(email, { force: true });


    const telefonoAleatorio = generarTelefono(); //Telefono
    cy.get('[name="cPhone"]').type(telefonoAleatorio, { force: true });

    //----------Domicilio-----------------------------------------------------------------------------------------------

    cy.get('[name="cityId"]').type("RIOHACHA");
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="taId"]').type("CALLE");
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="cNumAdd"]').type("50", { force: true });
    cy.get('[name="cNum"]').type("40", { force: true });
    cy.get('[name="cNumHou"]').type("2", { force: true });
    cy.get('[name="cInformation"]').type("Apartamento", { force: true });

    //----------Datos del representante Legal-----------------------------------------------------------------------------------------------

    cy.get('[name="tiId"]').type("CÉDULA DE CIUDADANÍA");
    cy.get(".MuiAutocomplete-popper").click();


    const identificacionAleatorio = generarIdentificacion();//Identificacion
    cy.get('[name="cmNumIde"]').type(identificacionAleatorio, { force: true });


    const nombreCompleto = faker.name.findName();//Nombre y Apellido
    cy.get('[name="cmName"]').type(nombreCompleto, { force: true });


    cy.get('[name="cmPhone"]').type(telefonoAleatorio, { force: true });//Telefono


    cy.get('[name="cmEmail"]').type(email, { force: true });//Email

    //----------Naturaleza de la empresa-----------------------------------------------------------------------------------------------

    cy.get('[name="cNature"]').type("PRIVADO");
    cy.get(".MuiAutocomplete-popper").click();

    //----------Datos opcionales-----------------------------------------------------------------------------------------------

    cy.get('[name="cAdmin"]').type("NO");
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="sId"]').type("CANDY  OSORIO  MUÑOZ");
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="cModPay"]').type("NO");
    cy.get(".MuiAutocomplete-popper").click();

    //----------Contactos-----------------------------------------------------------------------------------------------

    cy.get('[name="companyContacts.0.ccPosition"]').type("Jefe", {force: true,});//Cargo
    cy.get('[name="companyContacts.0.ccName"]').type(nombreCompleto, {force: true,});//Nombre y Apellido
    cy.get('[name="companyContacts.0.ccPhone"]').type(telefonoAleatorio, {force: true,});//Telefono
    cy.get('[name="companyContacts.0.ccEmail"]').type(email, {force: true,});//Email

    //----------Camara de Comercio-----------------------------------------------------------------------------------------------

    const camaraAleatorio = generarcamara();//Camara de Comercio
    cy.get('[name="cccNumber"]').type(camaraAleatorio, { force: true });

    const libroAleatorio = generarlibro();//Libro
    cy.get('[name="cccBook"]').type(libroAleatorio, { force: true });

    cy.get('[name="cIdChamber"]').type("CARTAGENA DE INDIAS");
    cy.get(".MuiAutocomplete-popper").click();

    //----------Información Financiera-----------------------------------------------------------------------------------------------

    cy.get('[name="cConDat"]').click();

    const fechaAleatoria = generarFechaAleatoria();
    cy.get('[name="cConDat"]').type(fechaAleatoria);//Calendario 1
    cy.get('[name="cCapital"]').type("20000000", { force: true });



    cy.get('[name="lastSalesCompanies.0.lscDate"]').click();
    const fechaAleatoria1 = generarFechaAleatoriaa();//Calendario 2
    cy.get('[name="lastSalesCompanies.0.lscDate"]').type(fechaAleatoria1);



    const numeroAleatorio = faker.random.number({ min: 1, max: 1000 });
    cy.get('[name="lastSalesCompanies.0.lscSale"]').type(numeroAleatorio, {force: true,
    });

    //----------Lineas de créditos-----------------------------------------------------------------------------------------------

    cy.get('[type="checkbox"]').check({ force: true });

    //----------Cargar documentos-----------------------------------------------------------------------------------------------

    cy.get('[data-testid="NoteAddIcon"]').click();
    cy.get(".MuiGrid-root").should("be.visible");

    /* cy.get('#u3aafc164-528f-11ee-be56-0242ac1200020').click();
    cy.get('#u3aafc164-528f-11ee-be56-0242ac1200020').attachFile('Documento1.pdf');


    cy.get('#u3aafc164-528f-11ee-be56-0242ac1200021').click();
    cy.get('#u3aafc164-528f-11ee-be56-0242ac1200021').attachFile('Documento1.pdf');

    cy.get('#u3aafc164-528f-11ee-be56-0242ac1200022').click();
    cy.get('#u3aafc164-528f-11ee-be56-0242ac1200022').attachFile('Documento1.pdf'); */

    /*  cy.get('#cerrarmodal').click(); */
  });
});

