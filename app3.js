// Создать объект банковского филиала: Код(число), Название(строка),
// График работы (строка), Работает ли точка вечером (логический),
// Адрес филиала (объект) со следующими полями: Город (строка),
// улица (строка), дом(строка)

var branch = {
    Cod: 1044525225, /* Поставил спереди 1, т.к. первый 0 выдает за ошибку,
    даже когда спереди пишешь Number*/
    Name: 'Sberbank',
    Schedule: '10.00-19.00',
    Schedule1: true,
    Adress: {
        Town: 'Omsk',
        Avenu: 'Комарова',
        Home: 6,
    }
}
console.log(
    'Режим работы:',
    branch.Schedule1 ? 'Работает' : "Не работает"
);