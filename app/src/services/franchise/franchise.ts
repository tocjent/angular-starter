interface Movie {
    title: string;
    releaseDate: string;
}

interface Franchise {
    name: string,
    movies: Movie[]
};

export interface FranchiseService {
    getAll: () => Franchise[];
};

export var franchiseService: () => FranchiseService = () => ({
    getAll: () => [
        {
            name: "Star Wars",
            cover: "assets/star-wars.jpg",
            description: "Star Wars is an American epic space opera franchise, centered on a film series created by George Lucas.",
            movies: [
                {title: "Star Wars: Episode IV - A New Hope", releaseDate: "1977"},
                {title: "Star Wars: Episode V - The Empire Strikes Back", releaseDate: "1980"},
                {title: "Star Wars: Episode VI - Return of the Jedi", releaseDate: "1983"},
                {title: "Star Wars: Episode I - The Phantom Menace", releaseDate: "1999"},
                {title: "Star Wars: Episode II - Attack of the Clones", releaseDate: "2002"},
                {title: "Star Wars: Episode III - Revenge of the Sith", releaseDate: "2005"},
                {title: "Star Wars: Episode VII - The Force Awakens", releaseDate: "2015"}
            ]
        },
        {
            name: "Harry Potter",
            cover: "assets/potter.jpg",
            description: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling.",
            movies: [
                {title: "Harry Potter and the Sorcerer's Stone", releaseDate: "2001"},
                {title: "Harry Potter and the Chamber of Secrets", releaseDate: "2002"},
                {title: "Harry Potter and the Prisoner of Azkaban", releaseDate: "2004"},
                {title: "Harry Potter and the Goblet of Fire", releaseDate: "2005"},
                {title: "Harry Potter and the Order of the Phoenix", releaseDate: "2007"},
                {title: "Harry Potter and the Half-Blood Prince", releaseDate: "2009"},
                {title: "Harry Potter and the Deathly Hollows, Part 1", releaseDate: "2010"},
                {title: "Harry Potter and the Deathly Hollows, Part 2", releaseDate: "2011"}
            ]
        },
        {
            name: "Indiana Jones",
            cover: "assets/jones.jpg",
            description: "The Indiana Jones franchise is based on the adventures of a fictional archaeologist.",
            movies: [
                {title: "Raiders of the Lost Ark", releaseDate: "1981"},
                {title: "Indiana Jones and the Template of Doom", releaseDate: "1984"},
                {title: "Indiana Jones and the Last Crusade", releaseDate: "1989"},
                {title: "Indiana Jones and the Kingdom of the Crystal Skull", releaseDate: "2008"}
            ]
        }
    ]
});
