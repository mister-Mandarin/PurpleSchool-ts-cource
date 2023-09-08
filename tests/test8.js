/*
Написать функцию сортировки любых объектов,
которые имеют id по убыванию или по возрастанию
 */
var arrSort = [
    { id: 3, name: 'Одни' },
    { id: 5, name: 'Два' },
    { id: 4, name: 'Три' },
    { id: 1, name: 'Четыре' },
    { id: 2, name: 'Пять' }
];
function sortById(arr, type) {
    if (type === void 0) { type = 'asc'; }
    return arr.sort(function (a, b) {
        switch (type) {
            case "asc":
                return a.id - b.id;
            case "desc":
                return b.id - a.id;
        }
    });
}
console.log(sortById(arrSort, 'asc'));
console.log(sortById(arrSort, 'desc'));
