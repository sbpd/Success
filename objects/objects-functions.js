let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326  
}

let otherBook = {
  title: "A Peoples History",
  author: "Howard Zinn",
  pageCount: 723  
}

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge area

let conversionTemp = function (farenheit) {
  let tempConvert = {
    fToC: (farenheit - 32) / (9/5),
    fToK: (farenheit + 459.67) * 5 / 9
  }
  return {
    answer: `${farenheit} farenheit is converted to ${tempConvert.fToC} celsius and ${tempConvert.fToK} Kelvin`
  }
 }

 let result = conversionTemp(32)
 console.log(result.answer)