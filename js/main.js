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






// <h1 id="h1">HELLO</h1>
//     <button id="changeText" >Change this text</button>
// <!-- 2 -->
// <h2>interesting</h2>
// <img id="imgg" src="https://i.pinimg.com/236x/25/90/a1/2590a1a6759841581e6e1ed7fc91376d.jpg" alt="квіти">   


// <!-- 3 -->
// <a id="link1" href="https://e1.pxfuel.com/desktop-wallpaper/582/832/desktop-wallpaper-iphone-pink-sunset-aesthetic-pink.jpg">my foto</a>
// <!-- <img id="imgs" src="https://klike.net/uploads/posts/2018-12/1544426804_10.jpg" alt="Перше зображення"> -->
// <button id="change-link-button">Змінити посилання </button>
// <!-- <a id="link1" href="https://e1.pxfuel.com/desktop-wallpaper/582/832/desktop-wallpaper-iphone-pink-sunset-aesthetic-pink.jpg">Моє посилання</a>
//     <img id="imgs" src="https://klike.net/uploads/posts/2018-12/1544426804_10.jpg" alt="Моє зображення">
//     <button id="change-link-button">Змінити посилання </button> -->

// <!-- 4 -->
// <ul id="list">
//     <li>HOW ARE YOU</li>
//     <li>GREAT, WHAT ABOUT YOU</li>
//     <li>IM FINE THANKS</li>
//   </ul>
//   <button onclick="changElm()">Змінити перший елемент</button>
