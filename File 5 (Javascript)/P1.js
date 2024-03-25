// console.log('Hello world');
// let a = 10;
// function f(){
//     if(true){
//         var b = 9
//         console.log(b);
//     }
//     console.log(b);
// }
// f()
// console.log(a);

// let obj = {
//     name: "Arjun",
//     age: 23,
//     greet: function (){
//         console.log("Hello"+this.name)
//     }
// }

// const ob = Object.create(obj);
// console.log(ob.greet())


const libraryCatalog = {
    books: [],
    addBook (title, author, genre){
        const book = {
            title,
            author,
            genre,
            available: true,
        };
        this.books.push(book);
    },
searchByTitle (title){
    return this.books.filter(book=>book.title.toLowerCase().includes(title.toLowerCase()));
},

returnBook (title){
    const bookIndex = this.books.findIndex(book=>book.title.toLowerCase()===title.toLowerCase());
    if(bookIndex != -1 && !this.books[bookIndex].available){
        this.books[bookIndex].available = true;
        return true;
    }
    else{
        return false;
    }
}

}

libraryCatalog.addBook("Wings of fire","dnasfn", "jfkwef");
console.log(libraryCatalog.searchByTitle("Wings of fire"));