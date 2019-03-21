

const goods = [
    { name: 'Iphone X', price: 70000, cover: src="images/iphonex.jpg" },
    { name: 'Защтное стекло', price: 1000, cover: src="images/glass.jpg" },
    { name: 'Бампер', price: 3000, cover: src="images/case.jpg" }
];


const renderItem = ({name, price, cover}) => `<div class="item"><div class="cover">${cover}</div><h2 class="name">${name}</h2><span class="price">${price}</span></div>`;

const renderList = items => {
    const itemsHtmls = items.map(renderItem);   //получаем массив разметок наших товаров
    document.querySelector('.goods').innerHTML = itemsHtmls;
};

renderList(goods);