const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// basics of filter 
const newNums = myNums.filter( (num) => num > 4 )

console.log(newNums);

console.log("----x----x----x----");

const newNums2 = myNums.filter( (num) => {  // when you start scope i.e. {} then we have to write return keyword
    return num > 4
})

console.log(newNums2);

console.log("----x----x----x----");

const newNums3 = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums3.push(num)
        // console.log(num)
    }
} )

console.log(newNums3);

console.log("----x----x----x----");


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter( (bk) => bk.genre === 'History');

console.log(userBooks);

console.log("----x----x----x----");

// const userBooks2 = books.filter( (bk) => { return bk.publish >= 2000 })

// remember about the scope
let userBooks2 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === 'History'
});

console.log(userBooks2);


