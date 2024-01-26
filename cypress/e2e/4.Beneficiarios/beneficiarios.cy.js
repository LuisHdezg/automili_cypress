import { generarIdentificacion, generarFechanacimmiento, generarTelefono, generarlibro, generarcamara, generarResolucion } from "../funciones.cy";
import faker from "faker";

describe("Entrando a la Pagina MILI Local", () => {
  it("Validando Inicio", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".MuiAutocomplete-hasPopupIcon").type("Cédula de Ciudadanía");
    cy.wait(1000);
    cy.get(".MuiAutocomplete-popper").click();

    cy.get("#idi").type("234236");
    cy.get("#uPass").type("123654");
    cy.get(".MuiButton-contained").click();

    cy.wait(4000);

    //-------Modulo de Beneficiarios-----------------------------------------------------------------------------------------------------------

    cy.contains("BENEFICIARIOS").click();
    cy.wait(2000);
    cy.contains("Parámetros de beneficiarios").click();
    cy.wait(1000);
    cy.contains("Registro de beneficiarios").click();
    cy.wait(4000);

    //Información Personal---------------------------------------------------------------------------------------------------------------------

    cy.get('[name="documentType"]').type('CÉDULA DE CIUDADANÍA');//Tipo de documento
    cy.wait(1000);
    cy.get(".MuiAutocomplete-popper").click();

    const idbeneficiario = generarIdentificacion();//N° de identificación
    cy.get('[name="numberId"]').type(idbeneficiario, {force:true});


    const nombreAleatorio = faker.name.firstName();//Primer nombre
    cy.get('[name="firstName"]').type(nombreAleatorio, {force:true});

    const segundonombreAleatorio = faker.name.firstName();//Segundo Nombre
    cy.get('[name="secondName"]').type(segundonombreAleatorio, {force:true});


    const apellidoAleatorio = faker.name.lastName();//Primer apellido
    cy.get('[name="firstLastName"]').type(apellidoAleatorio, {force:true});

    const segundoapellidoAleatorio = faker.name.lastName();//Segundo Apellido
    cy.get('[name="secondLastName"]').type(segundoapellidoAleatorio, {force:true});


    const fechanabeneficiario = generarFechanacimmiento();//Fecha de nacimiento
    cy.get('[name="date"]').type(fechanabeneficiario, {force:true});


    const telefonobeneficiario = generarTelefono();//Teléfono
    cy.get('[name="phone"]').type(telefonobeneficiario, {force:true});


    const correobeneficiario = faker.internet.email();//Correo
    cy.get('[name="email"]').type(correobeneficiario, {force:true});


//Domicilio------------------------------------------------------------------------------------------------------------------------------------

    cy.get('[name="cityId"]').type('GIRARDOT');//Ciudad
    cy.get(".MuiAutocomplete-popper").click();

    cy.get('[name="address"]').type('AVENIDA');//Dirección
    cy.get(".MuiAutocomplete-popper").click();


    cy.get('[name="firstAddress"]').type('40', {force:true});//Primer número de vía
    cy.get('[name="secondAddress"]').type('55', {force:true});//Segundo número de vía
    cy.get('[name="thirdAddress"]').type('110', {force:true});//Tercer número de vía
    cy.get('[name="fourthAddress"]').type('2', {force:true});//Cuarto número de vía



    //Informacion bancaria---------------------------------------------------------------------------------------------------------------------

    cy.get('[name="bankEntity"]').type('BANCO MUNDO MUJER');//Entidad bancaria
    cy.get(".MuiAutocomplete-popper").click();


    cy.get('[name="accountType"]').type('AHORRO');//Tipo de cuenta
    cy.get(".MuiAutocomplete-popper").click();


    const cuentaAleatoria =  generarlibro();//Número de cuenta
    cy.get('[name="accountNumber"]').type(cuentaAleatoria, {force:true});


    //Representante Legal-----------------------------------------------------------------------------------------------------------------------

    cy.get('[name="lrDocumentType"]').type('CÉDULA DE CIUDADANÍA');//Tipo de documento
    cy.get(".MuiAutocomplete-popper").click();


    const idrepresentante = generarIdentificacion();//Número de identificación
    cy.get('[name="lrIdentificationNumber"]').type(idrepresentante, {force:true});


    const nombrerepresentante = faker.name.firstName();//Primer nombre
    cy.get('[name="lrFirstName"]').type(nombrerepresentante, {force:true});


    const segundonombrerepresentante = faker.name.firstName();//Segundo nombre
    cy.get('[name="lrSecondName"]').type(segundonombrerepresentante, {force:true});


    const apellidorepresentante = faker.name.lastName();//Primer apellido
    cy.get('[name="lrFirstLastName"]').type(apellidorepresentante, {force:true});


    const segundoapellidorepresentante = faker.name.lastName();//Segundo apellido
    cy.get('[name="lrSecondLastName"]').type(segundoapellidorepresentante, {force:true});


    cy.get('[name="lrGender"]').type('MASCULINO');//Género
    cy.get(".MuiAutocomplete-popper").click();

    const  telefonorepresentante = generarTelefono();//Número de telefono
    cy.get('[name="lrPhone"]').type(telefonorepresentante);


    const emailrepresentante = faker.internet.email();//Correo electrónico
    cy.get('[name="lrEmail"]').type(emailrepresentante);

    cy.get('[name="lrCity"]').type('VILLAVICENCIO');//Ciudad
    cy.get(".MuiAutocomplete-popper").click();


    //Camara de Comercio-----------------------------------------------------------------------------------------------------------------------

    const numerocamara = generarcamara();//N° de camara de comercio
    cy.get('[name="cNumber"]').type(numerocamara);

    const librocamara = generarlibro();//Libro
    cy.get('[name="cBook"]').type(librocamara);


    cy.get('[name="cCity"]').type('CERRO DE SAN ANTONIO');//Ciudad
    cy.get(".MuiAutocomplete-popper").click();


    const reescamara = generarResolucion();//REES
    cy.get('[name="rees"]').type(reescamara);

    const runeolcamara = generarResolucion();//RUNEOL
    cy.get('[name="runeol"]').type(runeolcamara);

    cy.wait(10000);

    cy.get('[data-testid="SaveIcon"]').click()


});
});
