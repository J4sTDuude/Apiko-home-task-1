// Home Task №1

Array.prototype.sortStudents = function sortStudents() {
    let self = JSON.parse(JSON.stringify(this));
    self.sort((a, b) => {
        if (a.firstName + a.lastName > b.firstName + b.lastName) {
            return 1;
        }
        if (a.firstName + a.lastName < b.firstName + b.lastName) {
            return -1;
        }

        return 0;
    });

    return self;
};

Array.prototype.sortRatting = function sortRatting() {
    let self = JSON.parse(JSON.stringify(this));
    self.sort((a, b) => {
        return b.ratting - a.ratting;
    });

    return self;
};

Array.prototype.findMaxGrade = function findMaxGrade() {
    let max = this.reduce((acc, curr) =>
        acc.ratting > curr.ratting ? acc : curr
    );

    return max;
};

Array.prototype.findMinGrade = function findMaxGrade() {
    let min = this.reduce((acc, curr) =>
        acc.ratting < curr.ratting ? acc : curr
    );

    return min;
};

Array.prototype.findAvarageGrade = function findAvarageGrade() {
    let avarageRatting = Math.round(
        studentsArr.reduce((acc, curr) => acc + curr.ratting, 0) /
            studentsArr.length
    );

    console.log(`Середня оцінка: ${avarageRatting}`);

    let avarageStudentGrade = studentsArr.reduce((student, curr) =>
        Math.abs(avarageRatting - curr.ratting) <
        Math.abs(avarageRatting - student.ratting)
            ? curr
            : student
    );

    return avarageStudentGrade;
};

function generatePassword(length , isNumbers, isSymbols) {
    const addNumbers =  isNumbers;
    const addSymbols =  isSymbols;

    const Characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const symbols = ['!', '?', '@'];

    const getRandom = array => array[Math.floor(Math.random() * array.length)];

    let finalCharacters = '';

    if (addNumbers) {
      finalCharacters = finalCharacters.concat(getRandom(numbers));
    }

    if (addSymbols) {
      finalCharacters = finalCharacters.concat(getRandom(symbols));
    }

    for (let i = 0; i < length - 2; i++) {
      finalCharacters = finalCharacters.concat(getRandom(Characters));
    }

    return  finalCharacters.split('').sort(() => 0.5 - Math.random()).join('');
}


const studentsArr = [
    {
        firstName: "Юрій",
        lastName: "Шерстюк",
        ratting: 60,
    },
    {
        firstName: "Поліна",
        lastName: "Броваренко",
        ratting: 90,
    },

    {
        firstName: "Тамара",
        lastName: "Васильчук",
        ratting: 54,
    },

    {
        firstName: "Борис",
        lastName: "Таращук ",
        ratting: 45,
    },

    {
        firstName: "Богдан",
        lastName: "Крамаренко",
        ratting: 88,
    },
    {
        firstName: "Григорій",
        lastName: "Захарчук",
        ratting: 67,
    },
    {
        firstName: "Лариса",
        lastName: "Лисенко",
        ratting: 89,
    },

    {
        firstName: "Василь",
        lastName: "Пономаренко ",
        ratting: 42,
    },

    {
        firstName: "Тарас",
        lastName: "Мельниченко",
        ratting: 69,
    },

    {
        firstName: "Дмитро",
        lastName: "Антоненко",
        ratting: 78,
    },

];

const maxGradeStudent = studentsArr.findMaxGrade();

const studentRates = studentsArr.map((student) => {
    student = { ...student };
    student.rate = Math.round(
        ((maxGradeStudent.ratting - student.ratting) /
            maxGradeStudent.ratting) *
            100
    );
    return student;
});



console.log('Масив обєктів: ', studentsArr);

console.log('Сортування за Іменем та Прізвищем:', studentsArr.sortStudents());

console.log('Сортування за оцінкою: ', studentsArr.sortRatting());

console.log('Студент з найвищою оцінкою: ', maxGradeStudent);

console.log('Студент з найнижчою оцінкою: ', studentsArr.findMinGrade());

console.log('Студент з середньою оцінкою: ', studentsArr.findAvarageGrade());

console.log('Список з відсотком відставання від лідера: ', studentRates);

console.log('Згенерований пароль: ', generatePassword(8, true, true));
