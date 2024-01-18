/*function completeName(nome: string, sobrenome: string) {
    return 'Welcome ' + nome + ' ' + sobrenome;
}

console.log(completeName('Matheus', 'Gomes Montovani'));

function soma(number1: number, number2: number): number {
    return number1 + number2;
};

function result() {
    var number1 =  parseFloat((<HTMLInputElement>document.getElementById('number1')).value);
    var number2 =  parseFloat((<HTMLInputElement>document.getElementById('number2')).value);

    var resultado = soma(number1, number2);

    (<HTMLInputElement>document.getElementById('result')).value = resultado.toString();

    console.log('Resultado: ' + resultado);
};*/
function dataBaseFilled(name, lastName, birthday, course) {
    if (name == '' || lastName == '' || birthday == null || course == '') {
        alert('Name is empty\nLast name is empty\nBirthday is empty\nCourse is empty');
    }
    else {
        alert('Name: ' + name + '\n' +
            'Last name: ' + lastName + '\n' +
            'Birthday: ' + birthday + '\n' +
            'Course: ' + course);
    }
}
;
function confirn() {
    var name = document.getElementById('Name').value;
    var lastName = document.getElementById('Last_Name').value;
    var birthday = new Date(document.getElementById('Birthday').value);
    var course = document.getElementById('Course').value;
    dataBaseFilled(name, lastName, birthday, course);
}
;
