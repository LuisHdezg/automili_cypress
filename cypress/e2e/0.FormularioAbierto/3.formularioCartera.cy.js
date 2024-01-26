import {generarFechanacimmiento, generarTelefono, generarFechaAleatoriaa, generarIdentificacion} from '../funciones.cy'
import faker from 'faker'



describe("Validando Login de MILI Local", () => {
  it("Validando Inicio", () => {
    cy.visit("http://localhost:3000/credits");



//Datos de entrada
   /*  cy.get('[name="ctId"]').type("LIBRE INVERSIÓN");
    cy.wait(2000);
    cy.get(".MuiAutocomplete-popper").click();
    cy.wait(4000);

    cy.get('[name="monto"]').click()
    cy.get('[name="vcDefVal"]').type('2000000') */

    cy.wait(10000)


   /*  cy.get('input[name="slider2"]')
    cy.get('input[name="slider2"]').invoke('val', 10).trigger('input', {force:true})

    cy.wait(1000)
    cy.get('p#meses').should('have.text', '10 Meses') */



    /* cy.wait(7000) */
    cy.get('[name="idCode"]').type('SI');//Vendedor
    cy.wait(1000)
    cy.get(".MuiAutocomplete-popper").click();//CODIGO DEL VENDEDOR
    cy.get('[name="sSellerCode"]').type('1234567896', {force:true})

    cy.get('[name="vcDefVal"]').click();
    cy.wait(4000);
    /* cy.get('[name="solicitar"]').click();
    cy.wait(2000) */


//Modal de Cartera/Empresas-------------------------------------------------------------------------------------------------------

/* cy.get('[name="botoncartera1"]').click();
cy.wait(2000); */


const empresaAleatoria = faker.company.companyName();
cy.get('[name="creditCards.0.ccName"]').type(empresaAleatoria);
cy.get('[name="creditCards.0.ccFee"]').type('10000');
cy.get('[name="creditCards.0.ccBalance"]').type('50000');

cy.get('[data-testid="AddCircleIcon"]').click();
cy.wait(1000)

const empresaAleatoria1 = faker.company.companyName();
cy.get('[name="creditCards.1.ccName"]').type(empresaAleatoria1);
cy.get('[name="creditCards.1.ccFee"]').type('10000');
cy.get('[name="creditCards.1.ccBalance"]').type('50000');

cy.get('[data-testid="AddCircleIcon"]').click();
cy.wait(1000)

const empresaAleatoria2 = faker.company.companyName();
cy.get('[name="creditCards.2.ccName"]').type(empresaAleatoria2);
cy.get('[name="creditCards.2.ccFee"]').type('10000');
cy.get('[name="creditCards.2.ccBalance"]').type('50000');


/* cy.get('[id="registrarcartera"]').click();
cy.wait(2000) */




//Registro de Cliente---------------------------------------------------------------------------------------------------------------

cy.get('[name="payrollStaff.typeIdentity"]').type('CÉDULA DE CIUDADANÍA');//TIPO DE CODUMENTO
cy.get(".MuiAutocomplete-popper").click();

cy.get('[name="payrollStaff.identification"]').type('1143462755');//IDENTIFICACION



const fechaAleatoria = generarFechanacimmiento();//FECHA DE NACIMIENTO
cy.get('[name="payrollStaff.birthDate"]').type(fechaAleatoria);
cy.wait(2000);



cy.get('[name="payrollStaff.city"]').type('LOS PALMITOS');//LUGAR DE NACIMIENTO
cy.get(".MuiAutocomplete-popper").click();

cy.get('[name="payrollStaff.gender"]').type('MASCULINO');//GENERO
cy.get(".MuiAutocomplete-popper").click();


const telefonoAleatorio = generarTelefono();//TELEFONO
cy.get('[name="payrollStaff.cellPhone"]').type(telefonoAleatorio);


const correoAleatorio = faker.internet.email();//CORREO
cy.get('[name="payrollStaff.email"]').type(correoAleatorio);


cy.get('[name="payrollStaff.password"]').type('123456');//CONTRASEÑA
cy.get('[name="payrollStaff.confirmPassword"]').type('123456');//REPETIR CONTRASEÑA


const fechaAleatoria1 = generarFechaAleatoriaa();//FECHA DE EXPEDICION
cy.get('[name="payrollStaff.expeditionDate"]').type(fechaAleatoria1);


const lugarAleatorio = faker.address.city();//LUGAR DE EXPEDICON
cy.get('[name="payrollStaff.expeditionPlace"]').type(lugarAleatorio);


const  nombreAleatorio = faker.name.firstName();//PRIMER NOMBRE
cy.get('[name="payrollStaff.firstName"]').type(nombreAleatorio);


const segundonombreAleatorio = faker.name.firstName();//SEGUNDO NOMBRE
cy.get('[name="payrollStaff.secondName"]').type(segundonombreAleatorio);


const apellidoAleatorio = faker.name.lastName();//PRIMER APELLIDO
cy.get('[name="payrollStaff.firstLastName"]').type(apellidoAleatorio);


const segundoapellidoAleatorio = faker.name.lastName();//SEGUNDO APELLIDO
cy.get('[name="payrollStaff.secondLastName"]').type(segundoapellidoAleatorio);


const profesionAleatoria = faker.name.jobTitle();//CARGO
cy.get('[name="payrollWork.position"]').type(profesionAleatoria);


cy.get('[name="payrollWork.typeContract"]').type('INDEFINIDO');//TIPO DE CONTRATO
cy.get('.MuiAutocomplete-popper').click();


const fechacontratoAleatoria = generarFechaAleatoriaa();//FECHA DE INICIO DE CONTRATO
cy.get('[name="payrollWork.contractStart"]').type(fechacontratoAleatoria);


cy.get('[name="payrollWork.salary"]').type('10000000');//SALARIO
cy.get('[name="payrollWork.net"]').type('10000000');//NETO


cy.get('[name="payrollBank.typeAccount"]').type('AHORRO')//TIPO DE CUENTA
cy.get('.MuiAutocomplete-popper').click();


const cuentaAleatoria = generarIdentificacion();//CUENTA BANCARIA
cy.get('[name="payrollBank.accountNumber"]').type(cuentaAleatoria)



cy.get('[name="payrollBank.typeBank"]').type('BANCO DAVIVIENDA');//ENTIDAD BANCARIA
cy.get('.MuiAutocomplete-popper').click();


cy.get('[name="payrollStaff.terCon"]').check();

cy.wait(3000)

/* cy.get('[name="siguiente"]').click(); */

//--------------------------------------------------------------------------------------------------------------------------------

    //Informacion general y de residencia------------------------------------------------------------------------------------------

    cy.wait(3000)

    cy.get('[name="payrollResidence.typeHousing"]').type('FAMILIAR');//TIPO DE VIVIENDA
    cy.wait(1000)
    cy.get('.MuiAutocomplete-popper').click();


    cy.get('[name="payrollResidence.city"]').type('SAN CAYETANO');//CIUDAD
    cy.wait(1000)
    cy.get('.MuiAutocomplete-popper').click();


    cy.get('[name="payrollResidence.typeAddress"]').type('AVENIDA');//TIPO DE VIA
    cy.get('.MuiAutocomplete-popper').click();


    cy.get('[name="payrollResidence.streetNumber"]').type('12');//NUMERO DE VIA

    cy.get('[name="payrollResidence.prefix"]').type('42');//PREFIJO

    cy.get('[name="payrollResidence.houseNumber"]').type('1');//CASA

    cy.get('[name="payrollResidence.infoResidence"]').type('De esquina');//INFORMACION DE RESIDENCIA

    cy.get('[name="payrollResidence.dependents"]').type('1 - 3');//PERSONAS A CARGO
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollResidence.academicLevels"]').type('ESPECIALIZACIÓN');//NIVEL ACADEMICO
    cy.get('.MuiAutocomplete-popper').click();


    cy.get('[name="payrollResidence.maritalStatus"]').type('SOLTERO');//ESTADO CIVIL
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollWork.otherIncome"]').type('0');
    cy.get('[name="payrollWork.financialExpense"]').type('0');
    cy.get('[name="payrollWork.personalExpense"]').type('0');


    cy.wait(2000)
    /* cy.get('[name="siguiente"]').click(); */



    //Referencia familiar-------------------------------------------------------------------------------------------------------------------------


    const  nombrefamiliarAleatorio = faker.name.firstName();//NOMBRE
    cy.get('[name="payrollReference.nameFamilyReference"]').type(nombrefamiliarAleatorio);


    const apellidofamiliarAleatorio = faker.name.lastName();//APELLIDO
    cy.get('[name="payrollReference.lastNameFamilyReference"]').type(apellidofamiliarAleatorio);


    cy.get('[name="payrollReference.relationShipsFamily"]').type('SOBRINO(A)')//RELACION FAMILIAR
    cy.get('.MuiAutocomplete-popper').click();


    const numerofamiliarAleatorio = generarTelefono();//TELEFONO
    cy.get('[name="payrollReference.familyReferencePhone"]').type(numerofamiliarAleatorio);


    cy.get('[name="payrollReference.typeAddressFamily"]').type('CORREGIMIENTO')//TIPO DE VIA
    cy.get('.MuiAutocomplete-popper').click();


    cy.get('[name="payrollReference.streetNumberFamily"]').type('45');//NUMERO DE VIA

    cy.get('[name="payrollReference.prefixFamily"]').type('23');//PREFIJO

    cy.get('[name="payrollReference.houseNumberFamily"]').type('1');//N° DE CASA

    cy.get('[name="payrollReference.cityFamily"]').type('SABANAGRANDE');//CIUDAD
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollReference.infoResidenceFamily"]').type('Casa de 2 pisos');//INFORMACION DE RESIDENCIA




  //Referencia Particular--------------------------------------------------------------------------------------------------------------------

    const  nombreparticularAleatorio = faker.name.firstName();//NOMBRE
    cy.get('[name="payrollReference.nameParticularReference"]').type(nombreparticularAleatorio);


    const apellidoparticularAleatorio = faker.name.lastName();//APELLIDO
    cy.get('[name="payrollReference.lastNameParticularReference"]').type(apellidoparticularAleatorio);


    const numeroparticularAleatorio = generarTelefono();//NUMERO DE TELEFONO
    cy.get('[name="payrollReference.particularReferencePhone"]').type(numeroparticularAleatorio);


    cy.get('[name="payrollReference.typeAddressParticular"]').type('CARRERA');//TIPO DE VIA
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollReference.streetNumberParticular"]').type('45');//NUMERO DE VIA

    cy.get('[name="payrollReference.prefixParticular"]').type('23');//PREFIJO

    cy.get('[ name="payrollReference.houseNumberParticular"]').type('1');//CASA


    cy.get('[name="payrollReference.cityParticular"]').type('EL CARMEN DE BOLIVAR');//CIUDAD
    cy.get('.MuiAutocomplete-popper').click();


    cy.get('[name="payrollReference.infoResidenceParticular"]').type('De esquina');//INFORMACION DE RESIDENCIA



    //Referencia Estudiantil

    cy.get('[name="payrollReference.check"]').check();

    /* cy.get('[name="payrollReference.typeIdentityStudent"]').type('CÉDULA DE CIUDADANÍA');
    cy.get('.MuiAutocomplete-popper').click();

    const idestudiantilAleatorio = generarIdentificacion();
    cy.get('[ñname="payrollReference.identificationStudent"]').type(idestudiantilAleatorio);

    const nombreestudiantilAleatorio = faker.name.firstName();
    cy.get('[name="payrollReference.nameStudentReference"]').type(nombreestudiantilAleatorio);

    const apellidoestudiantilAleatorio = faker.name.lastName();
    cy.get('[name="payrollReference.lastNameStudentReference"]').type(apellidoestudiantilAleatorio);


    cy.get('[name="payrollReference.genderStudent"]').type('MASCULINO');

    const telefonoestudianteAleatorio = generarTelefono();
    cy.get('[name="payrollReference.studentReferencePhone"]').type(telefonoestudianteAleatorio);


    const emailestudianteAleatorio = faker.internet.email();
    cy.get('[name="payrollReference.studentReferenceEmail"]').type(emailestudianteAleatorio); */


    cy.get('[name="payrollReference.studentReferenceFaculty"]').type('INGENIERIA');




    /* cy.get('[name="payrollReference.typeAddressStudent"]').type('CARRERA')
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="payrollReference.streetNumberStudent"]').type('45');

    cy.get('[name="payrollReference.prefixStudent"]').type('23');

    cy.get('[name="payrollReference.houseNumberStudent"]').type('1');


    cy.get('[name="payrollReference.cityStudent"]').type('SAN ZENON');
    cy.get('.MuiAutocomplete-popper').click();


    cy.get('[name="payrollReference.infoResidenceParticular"]').type('De esquina'); */

//---------------------------------------------------------------------------------------------------------------



   /*  cy.get('[name="siguiente"]').click(); */



    //Documentos---------------------------------------------------------------------------------------------------
    cy.wait(45000);
    cy.get('[name="siguiente"]').click();


//FUERA DEL MODAL PARA SOLICITAR EL CREDITO
    cy.get('[name="siguiente"]').click();



  });
});
