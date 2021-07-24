type Data = {
    name: string,
    age: number,
    clubs
}
type clubs = {
    clubname: string,
    yearofleave: number
}

export const data: Data[] = 
[
    {
        name: "ronaldo",
        age: 36,
        clubs: [
            {
                clubname: "rma",
                yearofleave: 2017
            },
            {
                clubname: "utd",
                yearofleave: 2009
            }
        ]
    },
    {
        name: "messi",
        age: 31,
        clubs: [
            {
                clubname: 'fcb',
                yearofleave: 2020,
            }
        ]
    }
]