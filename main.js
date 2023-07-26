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