//1

const categoriesListEl = document.querySelector('#categories');
const allItemEl = categoriesListEl.querySelectorAll('.item')

// console.dir(categoriesListEl.children.length);
console.log(`Кількість категорії>> ${categoriesListEl.children.length}`);
console.log(allItemEl);

allItemEl.forEach( (item) => { console.dir(item.firstElementChild.textContent); const itemLenght })


//2
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
   ];

   const ulIngredients = document.getElementById('ingredients');
   ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    ulIngredients.appendChild(li);
  });
//3

const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    }, ];


//4