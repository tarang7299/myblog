import * as genresAPI from "./fakeGenreService"

const movies = 
[
    {
        id: "1",
        title: "Baaghi",
        genre: { id: "2", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "2",
        title: "Blood DIamond",
        genre: { id: "2", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 2,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "3",
        title: "K.G.F: Chapter 1",
        genre: { id: "3", name: "Action" },
        numberInStock: 5,
        dailyRentalRate: 4.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: false

    },
    {
        id: "4",
        title: "Rockstar",
        genre: { id: "4", name: "Drama" },
        numberInStock: 6,
        dailyRentalRate: 5.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "5",
        title: "Chhichhore",
        genre: { id: "4", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "6",
        title: "Fast and Furious Presents Hobbs and Shaw",
        genre: { id: "4", name: "Drama" },
        numberInStock: 45,
        dailyRentalRate: 5.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "7",
        title: "Geetha Govindam",
        genre: { id: "4", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 9.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "8",
        title: "Interstellar ",
        genre: { id: "4", name: "Drama" },
        numberInStock: 50,
        dailyRentalRate: 6.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "9",
        title: "LUDO",
        genre: { id: "4", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 3.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "10",
        title: "The Shawshank Redemption.",
        genre: { id: "4", name: "Action" },
        numberInStock: 18,
        dailyRentalRate: 7.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "11",
        title: "Lucifer",
        genre: { id: "4", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 4.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "12",
        title: "Jeet ki Zid",
        genre: { id: "4", name: "Action" },
        numberInStock: 15,
        dailyRentalRate: 9.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "13",
        title: "Mumbai saga",
        genre: { id: "4", name: "Action" },
        numberInStock: 6,
        dailyRentalRate: 5.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "14",
        title:"Gully Boy",
        genre: { id: "4", name: "Action" },
        numberInStock: 20,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    
    {
        id: "15",
        title:"The Exorcist",
        genre: { id: "4", name: "Horror" },
        numberInStock: 20,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "16",
        title:" HEREDITARY ",
        genre: { id: "4", name: "Horror" },
        numberInStock: 20,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "17",
        title:"THE CONJURING ",
        genre: { id: "4", name: "Horror" },
        numberInStock: 20,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "18",
        title:"Insidious",
        genre: { id: "4", name: "Horror" },
        numberInStock: 20,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "19",
        title:"Golmal Return",
        genre: { id: "4", name: "Comedy" },
        numberInStock: 20,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    },
    {
        id: "20",
        title:"Golmal",
        genre: { id: "4", name: "Comedy" },
        numberInStock: 20,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        // liked: true
    }

];

export function getMovies() 
{
    return movies;
}