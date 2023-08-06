/**
 * Esta función te permite hacer un reset de los campos selecciónados por el usuario.
 * No se retorna nada. recuerca que algunos valores se hace el reset a 0, otros a 1
 */
export function reset(billInput, customPercentageBtn, peopleInput) {
    billInput.value = "0";
    peopleInput.value = "1";
    customPercentageBtn.value = "";

    document.querySelector("#total").innerHTML = "0.00";
    document.querySelector("#tip-amount").innerHTML = "0.00";

}

/**
 * Esta función te permite calcular el tip(propina) que se recibirá
 * por cada persona.
 * @returns el monto de tip por persona.
 */
export function calcularTip(bill, tip, people) {

    const totalBill = (bill * tip / 100);
    const tipPerPerson = totalBill / people;
    return tipPerPerson.toFixed(2);
}

/**
 * Calcula el total a pagar por cada persona, incluyendo el tip que
 * le corresponde.
 * @returns el monto total por persona.
 */
export function calcularTotal(bill, tip, people) {

    const totalTip = (bill * tip) / 100;
    const totalPerPerson = (bill + totalTip) / people;
    return totalPerPerson.toFixed(2);
}

/**
 * Ejecutar tanto la función calcularTip() y la función 
 * calcularTotal(), luego retornar un array, teniendo en la posición 0 
 * el retorno de calcularTip() y en la posición 1 el retorno de calcularTotal()
 * @returns array [] con dos valores.
 */
export function calcularTodo(bill, tip, people) {
    let a = calcularTip(bill, tip, people);
    let b = calcularTotal(bill, tip, people);

    return [a, b];
}

/**
 * Valida si el valor de un campo es 0 o no, si lo es retorna true, si no, retorna false
 */
export function esCero(input) {

    switch (input) {
        case 0:
            return true;
        default:
            return false;

    }
}

/**
 * Añade la clase "active" al elemento.
 * @param { Node } input - un elemento input de html.
 * puedes investigar sobre : uso de classList en los elementos DOM. añadir, remover.
 */
export function claseActivo(input) {
    input.classList.add("active");
}