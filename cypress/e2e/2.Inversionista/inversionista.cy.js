import { generarIdentificacion, generarTelefono, generarFechanacimmiento } from "../funciones.cy";
import faker from "faker";

describe("Entrando a la Pagina MILI Local", () => {
  it("Validando Inicio", () => {
    cy.visit("http://localhost:3001/");

    cy.get(".MuiAutocomplete-hasPopupIcon").type("Cédula de Ciudadanía");
    cy.wait(1000);
    cy.get(".MuiAutocomplete-popper").click();

    cy.get("#idi").type("234236");
    cy.get("#uPass").type("123654");
    cy.get(".MuiButton-contained").click();

    cy.wait(4000);

    //-------Modulo de Inversionista------------------------------------------------------------------------

    cy.wait(6000)
  /*   cy.contains("INVERSIONISTAS").click();
    cy.wait(2000); */
    /* cy.contains("Parámetros Inversionista").click();
    cy.wait(1000); */
    /* cy.contains("Registro de inversionistas").click();
    cy.wait(4000); */

    //------Registro Inversionista----------------------------------------------------------------------------
    //------Información Personal------------------------------------------------------------------------------

    cy.get('[name="tiId"]').type("CÉDULA DE CIUDADANÍA");
    cy.wait(1000);
    cy.get(".MuiAutocomplete-popper").click();

    const identificacionAleatorio =  generarIdentificacion();
    const primernombreAletorio = faker.name.firstName();
    const segundonombreAleatorio = faker.name.firstName();
    const primerapellidoAleatorio = faker.name.lastName();
    const segundoapellidoAleatorio = faker.name.lastName();
    const fechaSeleccionada = generarFechanacimmiento();
    const telefonoAletorio =  generarTelefono();
    const emailAleatorio = faker.internet.email();

    cy.get('[name="iIdeNum"]').type(identificacionAleatorio, { force: true });
    cy.get('[name="iFirNam"]').type(primernombreAletorio, { force: true });
    cy.get('[name="iSecNam"]').type(segundonombreAleatorio, { force: true });
    cy.get('[name="iFirLas"]').type(primerapellidoAleatorio, { force: true });
    cy.get('[name="iSecLas"]').type(segundoapellidoAleatorio, { force: true });
    cy.get('[name="iDatBir"]').type(fechaSeleccionada);
    cy.get('[name="iPhone"]').type(telefonoAletorio, { force: true });
    cy.get('[name="iEmail"]').type(emailAleatorio, { force: true });



    //-------------Domicilio--------------------------------------------------------------------------------------


    cy.get('[name="cId"]').type("CARTAGENA DE INDIAS");
    cy.wait(1000);
    cy.get(".MuiAutocomplete-popper").click();
    cy.get('[name="taId"]').type("CARRERA");
    cy.wait(1000);
    cy.get(".MuiAutocomplete-popper").click();
    cy.get('[name="iNumDir"]').type("24", { force: true });
    cy.get('[name="iNum"]').type("54", { force: true });
    cy.get('[name="iNumHou"]').type("12", { force: true });
    cy.get('[name="iInformation"]').type("De esquina", { force: true });


    //----------Informacion Bancaria----------------------------------------------------------------------------------

    const numerocuentaAleatorio = generarIdentificacion();

    cy.get('[name="investorBanks.[0].tbId"]').type("BANCO DAVIVIENDA");
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="investorBanks.[0].atId"]').type("AHORRO");
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="investorBanks.[0].ibAccNum"]').type(numerocuentaAleatorio, {force: true,});



    //----------Planes de inversión--------------------------------------------------------------------------------------

    const planAleatorio = faker.random.number({ min: 10000000, max: 2000000000 })



    cy.get('[name="investorPlans.[0].pId"]').type('PLAN ORO 2.00%');
    cy.get(".MuiAutocomplete-popper").click();
    cy.get('[name="investorPlans.[0].ipValue"]').type(planAleatorio, {force:true});



    cy.get('[name="investorPlans.[1].pId"]').type('PLAN PLATA 1.75%');
    cy.get(".MuiAutocomplete-popper").click();
    cy.get('[name="investorPlans.[1].ipValue"]').type(planAleatorio,{force:true});



    cy.get('[name="investorPlans.[2].pId"]').type('PLAN BRONCE 1.50%');
    cy.get(".MuiAutocomplete-popper").click();
    cy.get('[name="investorPlans.[2].ipValue"]').type(planAleatorio, {force:true})



    //-----------Lista de Pagadurias----------------------------------------------------------------------------------------

    cy.get('[type="checkbox"]').check({force:true})


    //Crear

    cy.wait(15000)

    cy.get('[data-testid="SaveIcon"]').click();
  });
});
