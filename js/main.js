// #1
const changeText = document.querySelector('#changeText');
const h1Text = document.querySelector('#h1');

console.log(h1Text);
console.log(changeText);

changeText.addEventListener('click', function() {
changeText.textContent = h1Text.textContent;
});

// #2
const imgo = document.querySelector('#imgg');

imgo.addEventListener('click', function(){
    imgo.src = 'https://kartinkin.net/uploads/posts/2022-12/1669979192_1-kartinkin-net-p-fon-s-kuromi-vkontakte-2.jpg';
});

//  #3 
const link1 = document.querySelector('#link1');
const imges = document.querySelector('#imgs');
const changeLinkButton = document.getElementById('change-link-button');
// link1.href = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNucRKn044wOGq4vv4_xDngt3hH2RvvpPHw&usqp=CAU';
// imges.alt = 'Нове зображення'
 
changeLinkButton.addEventListener('click', function() {
   link1.href = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNucRKn044wOGq4vv4_xDngt3hH2RvvpPHw&usqp=CAU';
  imges.alt = 'Нове зображення';
 });


// #4 
// const list =document.querySelector('#list');
// const li =document.querySelector('li');
// li.textContent = 'what about you';

function changElm() {
    // Отримуємо список за його ідентифікатором
   const list = document.getElementById("list");

    // Отримуємо перший елемент списку
    const oneElm = list.getElementsByTagName("li")[0];

    // Змінюємо вміст першого елемента на новий текст
    oneElm.textContent = " hi, im di what you name ";
}