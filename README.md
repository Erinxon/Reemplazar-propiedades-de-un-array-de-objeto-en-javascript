# Reemplazar propiedades de un array de objeto en javascript

``` javascript
const replaceKeys = (items, keysToReplace) => {
  return items.map(item => {
       const map = new Map(Object.entries(item));
        const modifiedItem  = {}
        map.forEach((value, key) => {
            if (keysToReplace[key]) {
                modifiedItem[keysToReplace[key]] = value;
            }
        });
        return modifiedItem 
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

console.log(replaceKeys(cars, keysToReplace))
```
