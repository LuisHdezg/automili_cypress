

export const agregarDocumentos = () =>{
    const  imagen1 = '1698348143916.jpeg';
    cy.get('[name="pdFroDoc"]').attachFile(imagen1)
    cy.wait(1000)

    const  imagen2 = '1698348132084.jpeg';
    cy.get('[name="pdReaDoc"]').attachFile(imagen2)
    cy.wait(1000)

    const  imagen3 = '1698683098178.jpeg';
    cy.get('[name="pdPerDoc"]').attachFile(imagen3)
    cy.wait(1000)

    const  imagen4 = '1698348146653.jpeg';
    cy.get('[name="pdSerDoc"]').attachFile(imagen4)
    cy.wait(1000)

    const  imagen5 = '1698333417064.jpeg';
    cy.get('[name="pdPayRemDoc"]').attachFile(imagen5)
    cy.wait(1000)

    cy.wait(2000)

    cy.get('[name="buttonNextStep"]').click();
}