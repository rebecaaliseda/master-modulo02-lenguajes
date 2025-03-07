import './style.css';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const monthsA = ['January', 'February', 'March', 'April', 'May', 'June'];
const monthsB = ['July', 'August', 'September', 'October', 'November', 'December'];

// 1.1 Head
const head = (array: string[]): string => {
  const [firstDay] = array;
  return firstDay;
};
console.log(head(days));

//  1.2 Tail
const tail = (array: string[]): string[] => {
  const [, ...followingDays] = array;
  return followingDays;
};
console.log(tail(days));

// 1.3 Init
const init = (array: string[]): string[] => {
  return array.slice(0, -1);
};
console.log(init(days));

// 1.4 Last
const last = (array: string[]): string => {
  const copy = [...array];
  return copy.pop();
};
console.log(last(days));

// 2.1 Concat
const concat = (a: string[], b: string[]): string[] => {
  return [...a, ...b];
};
console.log(concat(monthsA, monthsB));

// 2.2 Concat (opcional)
const newConcat = (...array: string[]): string[] => array;

console.log(newConcat(...days, ...monthsA, ...monthsB));

// 3.1 Clone
interface Pet {
  name: string;
  animal: string;
  race?: string;
  age?: number;
}

const dog = {
  name: 'Horus',
  animal: 'dog',
  age: 2,
};

function clone(source: Pet): Pet {
  return {
    ...source,
  };
}
console.log(clone(dog));

// 3.2 Merge
interface Person {
  name: string;
  surname?: string;
  country?: string;
  age?: number;
  married?: boolean;
}

const a: Person = {
  name: 'Maria',
  surname: 'Ibañez',
  country: 'SPA',
};

const b: Person = {
  name: 'Luisa',
  age: 31,
  married: true,
};

const merge = (source: Person, target: Person): Person => ({
  ...target,
  ...source,
});
console.log(merge(a, b));

// 4. Read Books
interface Book {
  title: string;
  isRead: boolean;
}

function isBookRead(books: Array<Book>, titleToSearch: string): boolean {
  const bookFound = books.find((book) => book.title === titleToSearch);
  return bookFound ? bookFound.isRead : false;
}

const books = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true },
];
console.log(isBookRead(books, 'Devastación')); // true
console.log(isBookRead(books, 'Canción de hielo y fuego')); // false
console.log(isBookRead(books, 'Los Pilares de la Tierra')); // false

// 5. Slot Machine
class SlotMachine {
  coins: number = 0;

  #restartGame() {
    this.coins = 0;
  }
  #insertCoins() {
    this.coins += 1;
  }
  play() {
    this.#insertCoins();

    let rouletteStates: boolean[] = [];
    for (let i = 0; i <= 2; i++) {
      rouletteStates.push(Math.random() > 0.5);
    }
    console.log(rouletteStates);

    const falseStateExists: boolean = rouletteStates.find((roulette) => roulette === false);
    if (falseStateExists === false) {
      console.log(`Good luck next time!!`);
    } else {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.#restartGame();
    }
  }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
