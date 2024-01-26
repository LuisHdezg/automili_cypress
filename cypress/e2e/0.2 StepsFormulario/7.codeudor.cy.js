import {generarFechanacimmiento, generarTelefono, generarFechaAleatoriaa, generarIdentificacion} from '../funciones.cy'
import faker from 'faker'


export const llenarInformacionCodeudor = () => {

     for (let i = 0; i < 2; i++) {
    cy.get('[name="addCoDebtor"]').click();

    cy.wait(2000);

    cy.get('[name="typeIdentity"]').type('CÉDULA DE CIUDADANÍA');//TIPO DE DOCUMENTO
    cy.wait(1000);
    cy.get('.MuiAutocomplete-popper').click();

    const idAleatorio = generarIdentificacion();//IDENTIFICACION
    cy.get('[name="identification"]').type(idAleatorio)

    const  fechaexpedicionAleatorio = generarFechaAleatoriaa();//FECHA DE EXPEDICION
    cy.get('[name="expeditionDate"]').type(fechaexpedicionAleatorio);

    const lugarexpedicionAleatorio = faker.address.city();//LUGAR DE EXPEDICION
    cy.get('[name="expeditionPlace"]').type(lugarexpedicionAleatorio);

    const  nombrecodeudorAleatorio = faker.name.firstName();//PRIMER NOMBRE
    cy.get('[name="firstName"]').type(nombrecodeudorAleatorio);

    const segundonombrecodeudorAleatorio = faker.name.firstName();//SEGUNDO NOMBRE
    cy.get('[name="secondName"]').type(segundonombrecodeudorAleatorio);

    const apellidocodeudorAleatorio = faker.name.lastName();//PRIMER APELLIDO
    cy.get('[name="firstLastName"]').type(apellidocodeudorAleatorio);

    const segundoapellidocodeudorAleatorio = faker.name.lastName();//SEGUNDO APELLIDO
    cy.get('[name="secondLastName"]').type(segundoapellidocodeudorAleatorio);

    const fechacodeudorAleatorio = generarFechanacimmiento();//FECHA DE NACIMIENTO
    cy.get('[name="birthDate"]').type(fechacodeudorAleatorio);

    const telefonocodeudorAleatorio = generarTelefono();//TELEFONO
    cy.get('[name="landline"]').type(telefonocodeudorAleatorio);

    const emailcodeudorAleatorio = faker.internet.email();//CORREO
    cy.get('[name="email"]').type(emailcodeudorAleatorio);

    cy.get('[name="gender"]').type('MASCULINO');//GENERO
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="city"]').type('SAHAGUN');//CIUDAD
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="typeAddress"]').type('VEREDA');//TIPO DE VIA
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="streetNumber"]').type('45');//NUMERO DE VIA

    cy.get('[name="prefix"]').type('23');//PREFIJO

    cy.get('[name="houseNumber"]').type('1');//CASA

    cy.get('[name="infoResidence"]').type('De esquina');//INFORMACION DE RESIDENCIA

    cy.get('[name="academicLevels"]').type('UNIVERSITARIO');//NIVEL ACADEMICO
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="maritalStatus"]').type('CASADO');//ESTADO CIVIL
    cy.get('.MuiAutocomplete-popper').click();

    cy.get('[name="typeHousing"]').type('FAMILIAR');//TIPO DE VIVIENDA
    cy.get('.MuiAutocomplete-popper').click();

    const empresaAleatorio = faker.company.companyName();//EMPRESA
    cy.get('[name="company"]').type(empresaAleatorio);

    const cargoAleatoria = faker.name.jobTitle();//CARGO
    cy.get('[name="position"]').type(cargoAleatoria);

    cy.get('[name="typeContract"]').type('INDEFINIDO');//TIPO DE CONTRATO
    cy.get('.MuiAutocomplete-popper').click();

    const fechacontratoAleatorio = generarFechaAleatoriaa();//FECHA INICIO DE CONTRATO
    cy.get('[name="contractStart"]').type(fechacontratoAleatorio);

    cy.get('[name="salary"]').type(10000000);//SALARIO

//Imagenes----------------------------------------------------------------------------------------------------------------------------
    const  imagen6 = '16941169870201.jpg';
    cy.get('[name="pcdFroDoc"]').attachFile(imagen6)
    cy.wait(1000)

    const  imagen7 = 'descarga.jpg';
    cy.get('[name="pcdReaDoc"]').attachFile(imagen7)
    cy.wait(1000)

    const  imagen8 = 'imagenroja.jpg';
    cy.get('[name="pcdSerDoc"]').attachFile(imagen8)
    cy.wait(1000)

    const  imagen9 = '1699471315039.jpg';
    cy.get('[name="pcdLoaDoc"]').attachFile(imagen9)
    cy.wait(1000)

    cy.get('[id="saveCoDebtor"]').click();

    cy.wait(5000)

    }

    cy.get('[name="buttonNextStep"]').click();

    cy.wait(15000)

}