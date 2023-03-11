const replaceKeys = (items, keysToReplace) => {
    return items?.map(item => {
        const map = new Map(Object.entries(item));
        map?.forEach((value, key) => {
            if (keysToReplace[key]) {
                map.set(keysToReplace[key], value);
                map.delete(key);
            }
        });
        return Object.fromEntries(map);
    });
}

const cars = [{
    cardId: 1,
    cardName: 'Audi'
},
{
    cardId: 2,
    cardName: 'BMW'
},
{
    cardId: 3,
    cardName: 'Mercedes'
}]

const keysToReplace = {
    cardId: "identificador",
    cardName: "nombre",
}
