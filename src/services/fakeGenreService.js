


const genres = [
    { id: "1", name: "Action" },
    { id: "2", name: "Drama" },
    { id: "3", name: "Horror" }
];

export function getGenres() 
{
    return genres.filter(g => g);
}