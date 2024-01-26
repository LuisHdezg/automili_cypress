import{generarIdentificacion, generarFechaAleatoriaa, generarcamara}from '../funciones.cy'
import faker from 'faker'


describe('Registro de app', () => {

    it('Registrando usuario', () =>{
    cy.visit("https://appqa.miliv2.com/");



    //REGISTRO DE USUARIO--------------------------------------------------------------------------------------------------------------------------------------------

    cy.get('[data-testid="f2cd66a1-7ed5-411b-a4f1-caa4a1ffec77"]').click();
    cy.get('[data-testid="88c07d04-5b6c-4fe3-99f1-225c097a8d17"]').click();
    cy.wait(5000)
    cy.get('[data-testid="1"]').click();

    cy.get('[data-testid="cfdfa229-cf36-4eaf-b9ab-2e04de19096c"]').type('1143462281');

    const  telefono = generarIdentificacion();
    cy.get('[data-testid="002d6c27-3973-411c-a5fd-fa65c9ac8908"]').type(telefono);


    /* const correoAleatorio = faker.internet.email();//CORREO */
    cy.get('[data-testid="8b87fbc0-4ac9-4b76-9838-ece66dc3f22a"]').type(/* correoAleatorio */"pruebaswowqa@hotmail.com");


    cy.get('[data-testid="512b42e9-9367-41f4-bff8-01411bd581f7"]').type('123456');
    cy.get('[data-testid="9ce8a6b0-cc4e-4dd1-8707-f6a676055892"]').type('123456');

    cy.get('[data-testid="e4b84ceb-9e9e-4e0e-a3e0-29d7911fba02"]').click();

    cy.get('[data-testid="daddf932-d994-4b73-8c14-2ce97de9e4ec"]').click();

    cy.wait(3000)

    cy.get('[data-testid="c8bba9a4-252f-4f63-a174-fccadd2f541d"]').type('2502');


    const nombre = faker.name.firstName();
    cy.get('[data-testid="e2a830cd-44b6-4039-8c03-26d4d50e03b1"]').type(nombre);

    const segundonombre = faker.name.firstName();
    cy.get('[data-testid="c8a9905f-5c36-4350-8269-fab4d062e884"]').type(segundonombre);

    const apellido = faker.name.lastName();
    cy.get('[data-testid="978be40a-c02f-4147-bbc9-49659fdf448c"]').type(apellido);

    const segundoapellido = faker.name.lastName();
    cy.get('[data-testid="078aa858-5b80-4e8f-b6e1-f2d200a8d486"]').type(segundoapellido);


    const cargoAleatoria = faker.name.jobTitle();
    cy.get('[data-testid="9df287e0-db87-4260-8ebc-73ec9ffabf7a"]').type(cargoAleatoria);


    cy.get('[data-testid="32848c2e-f5e8-4cf7-b47f-36c72195af77"]').click();
    cy.get('[data-testid="2"]').click();



    const fechacontrato = generarFechaAleatoriaa();
    cy.get('[data-testid="e6d48cec-189b-41b5-8d14-547c60758559"]').type(fechacontrato);


    cy.get('[data-testid="3dc6cd64-1b6c-4d4a-93b7-8131227381e9"]').type('10000000');
    cy.get('[data-testid="61fa4448-7489-421f-8c34-12d6878a293c"]').type('10000000');

    cy.get('[data-testid="564a1ee4-b615-4ea1-864a-7bc798097922"]').click();
    cy.get('[data-testid="NO"]').click();


  /*   cy.get('[data-testid="c46f8d7c-7c23-41fc-b3a1-58dff0801ab7"]').click();
    cy.get('[data-testid="7"]').click();




    cy.get('[data-testid="prueba"]').click();
    cy.get('[data-testid="N6GtYwcWgRc0aS2ugIX-4"]').click();




    cy.get('[data-testid="8a5c2134-cd9b-4899-a835-2ef770663e9f"]').click();
    cy.get('[data-testid="1"]').click();

    const cuentabancaria = generarcamara();
    cy.get('[data-testid="c576a9f3-fa54-4e8a-93a8-bf72a3724ba6"]').type(cuentabancaria); */

    cy.wait(8000)

    cy.get('[data-testid="eaca16fc-7a53-435c-8b89-b9ad8d5c5084"]').click();

    cy.wait(30000)




//------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------Inicio de Sesion----------------------------------------------------------------------------------------------------------------------------

/* 
    cy.get('[data-testid="4e0bd032-4d48-43ea-8760-21e17c8b3975"]').click();
    cy.wait(1000)
    cy.get('[data-testid="1"]').click()


    cy.get('[data-testid="dc9b9c6c-6ce0-44e8-826d-dc3947f5ebc2"]').type('1143462221');

    cy.get('[data-testid="c7679544-0b38-4210-ba13-fa35c0d47903"]').type('123456');

    cy.get('[data-testid="19e19576-23fa-4695-a1e4-1a4be6f6d213"]').click();


//--------------------------------------------------------------------------------------------------------------------------------------------

    cy.get('[data-testid="721b4f41-7eb4-4526-a7a6-d426ffbc0543"]').click()//SOLICITAR
    cy.wait(7000)


    cy.get('[data-testid="EkIlYXl856LK6Itp7gdK710"]').click();//LINEA S2
    cy.wait(5000)

    cy.get('[tabindex="0"]').click()


    cy.wait(7000)


    cy.get('[data-testid="565f7f2c-45f7-4f41-ad9e-2fceff6ecb57"]').click()//SOLICITAR
 */




    })
 })