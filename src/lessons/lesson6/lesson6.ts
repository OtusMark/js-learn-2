// import { Interface } from 'readline';

console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// class Test {
//     name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
// }
//
// let test = new Test('Evgen');
// console.log(test)

// interface IPerson {
//     name: string;
//     age: number;
// }
//
// class Person implements IPerson {
//     name: string;
//     age: number;
//     greeting: () => void;
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//         this.greeting = function () {
//             console.log('greeting');
//         }
//     }
//
//     hi() {
//         console.log('hi')
//     }
//
//      bye = () => {
//          console.log('bye')
//      }
// }
//
// let human = new Person('Evgen', 32);
// let human2 = new Person('Vlad', 32);
// console.log(human)
// console.log(human2)
//
// console.log(human.hi === human2.hi);
// console.log(human.greeting === human2.greeting);
// console.log(human.bye === human2.bye);

// interface IPerson {
//     name: string;
//     age: number;
// }
//
// class Person implements IPerson {
//     name: string;
//     age: number;
//
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//
//     greeting() {
//         console.log('greeting from parent');
//     }
//
//     Yo() {
//         console.log('Yo');
//     }
// }
//
// interface IPolitePerson extends IPerson {
//     greeting: Function;
// }
//
// interface IBye {
//     bye: Function;
// }
//
// class PolitePerson extends Person implements IPolitePerson, IBye {
//     constructor(name: string, age: number) {
//         super(name, age);
//     }
//
//     greeting() {
//         console.log('greeting');
//         super.greeting();
//     }
//     bye() {
//         console.log('bye');
//     }
// }
//
// let human = new PolitePerson('Evgen', 32);
// console.log(human);
// human.greeting();

// class Test {
//     name: string;
//     //@ts-ignore
//     static key = 10;
//     //@ts-ignore
//     #param = 10;
//     //@ts-ignore
//     #param2 = 50;
//     private key2 = 5;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
//
// let human = new Test('Evgen');
// //@ts-ignore
// human.key2 = 50;
// //@ts-ignore
// human['#param'] = 100;
// console.log(human)
// console.log(Test.key)
// //@ts-ignore
// window.test = human;

class T {
    constructor() {
    }
    Yo() {
        console.log('Yo')
    }
}

class TTT extends T {
    constructor() {
        super();
    }
    Yo = () => {
        console.log('YoYoYo');
        super.Yo();
    }
}

let t = new TTT();
console.log('t', t)
t.Yo();

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

interface IStudent {
    name: string;
    surname: string;
    groupNumber: number;
    progress: number[];
    averageMark: number;
}

class Student implements IStudent {
    name: string;
    surname: string;
    groupNumber: number;
    progress: number[];
    averageMark: number;

    constructor(name: string, surname: string, groupNumber: number, progress: number[]) {
        this.name = name;
        this.surname = surname;
        this.groupNumber = groupNumber;
        this.progress = progress;
        this.averageMark = this.progress.reduce((sum, mark) => sum + mark) / this.progress.length;
    }

    private static sortStudent(s1: Student, s2: Student) {
        if (s1.averageMark > s2.averageMark) {
            return 1;
        } else if (s1.averageMark < s2.averageMark) {
            return -1;
        } else {
            return 0;
        }
    }

    static sort(arr:Array<Student>) {
        const temp = [...arr];
        return temp.sort(this.sortStudent);
    }

    private static isAllMarksEqual(marks: number[], mark: number) {
        return marks.every(item => item === mark);
    }

    private static filterStudent(arr:Array<Student>) {
        const result: Array<Student> = [];
        arr.forEach(item => {
            if(this.isAllMarksEqual(item.progress, 4) || this.isAllMarksEqual(item.progress, 5)) {
                result.push(item);
            }
        });
        return result;
    }

    static printGoodStudent(arr:Array<Student>) {
        this.filterStudent(arr).forEach(s => {
            console.log(`Studen - ${s.surname}, Group - ${s.groupNumber}`);
        });
    }
}

let students:Array<Student> = [];

students.push(new Student('Eugene', 'Sheuchuk', 1, [4,4,4,4,4]));
students.push(new Student('Vlad', 'Bizin', 2, [5,5,5,5,5]));
students.push(new Student('Hanna', 'Kicel', 3, [4,5,4,5,5]));
students.push(new Student('Nick', 'Stone', 4, [3,4,3,5,3]));
students.push(new Student('Alex', 'Page', 5, [3,4,3,3,4]));
students.push(new Student('Test', 'Testovich', 6, [3,5,3,5]));

//console.log(Student.sort(students));
Student.printGoodStudent(students);


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// type TT = {
//     param1: any;
//     param2: any;
// }
//
// type TT2 = {
//     param3: any;
// }
//
// type TT3 = TT & TT2;
//
// class Task2 implements TT3 {
//     param1: any;
//     param2: any;
//     constructor(param1: any = 10, param2: any = null ) {
//         this.param1 = param1;
//         this.param2 = param2;
//     }
// }




// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};