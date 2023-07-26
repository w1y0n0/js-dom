// console.log('Hallo World');

/**
 * Akses Data by TAG
 */
const tag_h1 = document.getElementsByTagName('h1');
console.log(tag_h1);
console.log(tag_h1[0].innerHTML); //semua tulisan termasuk TAG HTML (ex: Javascript DOM <b>Tutorial</b> <small style="display: none;">rahasia</small>)
console.log(tag_h1[0].innerText); //style:display:none hidden (ex: Javascript DOM Tutorial)
console.log(tag_h1[0].textContent); //sesuai yg ditulis (ex: Javascript DOM Tutorial rahasia)

// console.log(tag_h1[1].innerHTML);
// console.log(tag_h1[1].innerText);
// console.log(tag_h1[1].textContent);

const tag_small = document.getElementsByTagName('small');
console.log(tag_small);
console.log(tag_small[0].innerText);
console.log(tag_small[1].innerText);

/**
 * Akses Data by id
 */
const id_desc = document.getElementById('deskripsi');
console.log(id_desc.textContent);

/**
 * Akses Data by class
 */
const class_tgl = document.getElementsByClassName('tanggal');
console.log(class_tgl);
console.log(class_tgl[0].textContent);

/**
 * Akses Element by query selector
 */
// const data_desc = document.querySelector('p'); // by tag
const data_desc = document.querySelector('#deskripsi'); // by id
console.log(data_desc.textContent);
const data_tgl = document.querySelector('.tanggal'); // by className
console.log(data_tgl.textContent);

/**
 * Akses Element by querySelectorAll
 */
const data_p = document.querySelectorAll('p');
console.log(data_p);
console.log(data_p[0].textContent);
console.log(data_p[1].textContent);
const data_li = document.querySelectorAll('.list-group-item');
console.log(data_li);
console.log(data_li[4].textContent);

/**
 * Styling Element
 */
const data_p_desc = document.querySelectorAll('p');
console.log(data_p_desc[0].textContent);
data_p_desc[0].style.background = "#fff";
data_p_desc[0].style.border = "2px solid grey";
data_p_desc[0].style.borderTop = "2px solid red";
data_p_desc[0].style.borderBottom = "2px solid cyan";
data_p_desc[0].style.padding = "10px";

/**
 * Setting class
 */
const dt_small = document.querySelector('small');
dt_small.style.padding = "5px";
dt_small.style.fontFamily = "Courier New";
dt_small.classList.add('bg-warning');
console.log(dt_small.className);

const dt_ul = document.querySelector('ul');
// dt_ul.classList.remove('list-group');
console.log(dt_ul.className);

const dt_h1 = document.querySelector('h1');
dt_h1.classList.toggle('bg-danger'); //add jk blm ada, remove jk sdh ada

/**
 * Modif Element (Tambah dan Hapus)
 */
const data_penulis = document.createElement('div');
data_penulis.textContent = 'Penulis: Abdullah';
// dt_h1.before(data_penulis);
dt_h1.after(data_penulis); //tambah <div></div> setelah <h1></h1>

data_p[0].remove(); //hapus tag <p></p> index ke-0

/**
 * Modif atribut dari element
 */
// dt_small.setAttribute('style', 'color:red;border:1px solid #000');
dt_small.setAttribute('style', 'color:red');
// console.log(dt_small.className); //find attr class
// console.log(dt_small.getAttribute('id')); //find attr id
console.log(dt_small.getAttribute('style')); //find attr id
// <a href='https://labsi.biz.id' class='btn btn-sm btn-primary'>www.labsi.biz.id</a>
const data_link = document.createElement('a');
// data_link.href = 'https://labsi.biz.id';
// data_link.classList.add('btn');
// data_link.classList.add('btn-sm');
// data_link.classList.add('btn-primary');
// data_link.textContent = 'www.labsi.biz.id';
data_link.setAttribute('href', 'https://labsi.biz.id');
data_link.setAttribute('class', 'btn btn-sm btn-primary mb-2');
data_link.textContent = 'www.labsi.biz.id';

data_penulis.after(data_link);

/**
 * Modif Text
 */
// dt_h1.textContent = 'Hello, Semua!';
// dt_h1.textContent = 'Hello, Semua! ' + dt_h1.textContent;
dt_h1.textContent = 'Hello, Semua! ' + dt_h1.innerText + '. Sangat Menyenangkan.';

/**
 * Traverse dom children
 */
// console.log(dt_ul.innerHTML);
// console.log(data_li);
const li = dt_ul.children;
console.log(li[0].textContent);

/**
 * Traverse dom parent
 */
const dataList = document.querySelector('.list-group-item');
console.log(dataList.textContent);
console.log(dataList.parentElement);

/**
 * Traverse dom closest (cari nenek moyang nya hirarki parent ke atas)
 */
const terdekat = dataList.closest('div');
// const terdekat = dataList.closest('.container');
console.log(terdekat);

/**
 * Traverse dom elementSibling
 */
console.log(dt_h1.previousElementSibling.textContent);
console.log(dt_h1.nextElementSibling.textContent);