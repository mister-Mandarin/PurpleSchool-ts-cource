/*
Написать функцию сортировки любых объектов,
которые имеют id по убыванию или по возрастанию
 */

const arrSort = [
    {id: 3, name: 'Одни'},
    {id: 5, name: 'Два'},
    {id: 4, name: 'Три'},
    {id: 1, name: 'Четыре'},
    {id: 2, name: 'Пять'}
]

interface IsortId {
    id: number
}

function sortById<T extends IsortId>(arr: T[], type: 'asc' | 'desc' = 'asc'): T[] {
   return arr.sort((a, b) => {
       switch (type) {
           case "asc":
               return a.id - b.id
           case "desc":
               return b.id - a.id
       }
   })
}

console.log(sortById(arrSort, 'asc'));
console.log(sortById(arrSort, 'desc'));