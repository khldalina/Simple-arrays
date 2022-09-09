const books = [
    {
       Name: 'The Taming of the Shrew',
       Author: 'William Shakespeare',
       Genre: 'comedy',
       Year: 1592,
    },
    {
        Name: 'A Clash of Kings',
        Author: 'George Raymond Richard Martin',
        Genre: 'fantasy',
        Year: 1998,
    },
    {
        Name: 'It',
        Author: 'Stephen Edwin King',
        Genre: 'horror',
        Year: 1986,
    },
    {
        Name: 'Much Ado About Nothing',
        Author: 'William Shakespeare',
        Genre: 'comedy',
        Year: 1600,
    },
    {
        Name: 'A Game of Thrones',
        Author: 'George Raymond Richard Martin',
        Genre: 'fantasy',
        Year: 1996,
    },
    {
        Name: 'Fire & Blood',
        Author: 'George Raymond Richard Martin',
        Genre: 'fantasy',
        Year: 2018,
    },
    {
        Name: 'Frankenstein: or, The Modern Prometheus',
        Author: ' Mary Shelleyt',
        Genre: 'horror',
        Year: 1816,
    },
    {
        Name: 'Pet Sematary',
        Author: 'Stephen Edwin King',
        Genre: 'horror',
        Year: 1983,
    },
    {
        Name: 'Misery',
        Author: 'Stephen Edwin King',
        Genre: 'horror',
        Year: 1987,
    },
    {
        Name: 'All\'s Well That Ends Well',
        Author:'William Shakespeare',
        Genre: 'comedy',
        Year: 1623,
    }
];
const genreFilter = books.filter((books) => {
        return books.Genre === 'horror';
});
const resultGenreFilter = genreFilter.map(book => book.Name.toUpperCase());
console.log(resultGenreFilter);

const yearFilter = books.filter((books) => {
        return books.Year >= 1901 && books.Year<=2000;
    });
const resultYearFilter = yearFilter.map(book => book.Name.toUpperCase());
console.log(resultYearFilter);

const yearsFilter = books.filter((books) => {
        return books.Year >= 2001;
    });
const resultYearsFilter = yearsFilter.map(book => book.Name.toUpperCase());
console.log(resultYearsFilter);
