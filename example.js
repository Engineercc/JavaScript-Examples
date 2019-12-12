console.log("whats up JS ?");
var i = document.querySelector("h2").innerText = "kes Lan!!";

var key = 5;
var x = "011";
var y = "23xx";

//console.log(x + y);
//console.log(key.toString() + y);

//console.log(typeof(parseInt(x + y)));
//console.log(parseInt(x + y));

var a = [1, 2, 3].map((i) => parseInt(i));

var b = a;
console.log(b);

var lang = "Java";
lang += "Script";

console.log(lang);

var person = {
  name: 'Yunus',
  surname: 'Altintop',
  age: 26,
  gender: 'Male'
};
person.job = 'Computer Engineering'
//console.log(person);
person.social = {
  twitter: '0xFFF2FF',
  instagram: '@sutlukahve0',
  LinkedIn: 'YunusAltintop',
}

//console.log('twitter =' + person.social.twitter);
person.social.twitter = '@0x334FF';
console.log(person.social.twitter);
var x = 30;
console.log(--x + 2);

//console.log(!NaN);
var a = NaN;
var b = 5;

//console.log(Boolean(b&&a));

var i = 0;
/*for(i; i<10;i++){
 
 if((person.name=='Yunus' && person.gender=='Male') || person.surname=='Alt')
 console.log('true');
 else
 console.log(false);

}*/

var b = 0;
/*while(b<10){
  console.log('restInPeace');
  b++;
  if(b==5){
    console.log('bitti.');
    break;
  }
}*/


var files = [
  { title: 'index', content: ['header', 'footer'] },
  { title: 'script', content: 'scriptCodes' },
  { title: 'style', content: ['margin', 'animation'] },
  { title: 'jquery', content: 'jqueryCodes' },

];
for (var i = 0; i < files.length; i++) {
  console.log(files[i]);
}
for (var j = 0; j < files.length; j++) {
  if (j % 2 == 0)
    console.log(files[j].content);
}


/*files.forEach((fileDisplay,x) => { // first: func. name, second: array index, third: array
  console.log(fileDisplay);
});*/
var keys = [];
var myKeys = [];
var myContents = [];
var myTitles = [];

for (key in person) {
  // console.log(key + ' : ' + person[key],person[key]);
  keys.push(key); // verilen diziye başka bir dizi ekler.
}
for (key in files) {
  myKeys.push(files[key]); // Files arrayini pushladı. 
  // Burada object tipi olduğu için  [] içinde key değerini yazdık.

  myContents.push(files[key].content); // sadece contentleri pushladı.
  myTitles.push(files[key].title); // sadece titleları pushladı.
}
/* console.log(keys);
  console.log(myKeys);
  console.log(myContents);
  console.log(myTitles);*/

//console.log(Object.keys(person).lastIndexOf(key));
/*switch (a>1){
case a>1:
  console.log('case 1');
case (a<0):
  console.log('number even');
case a:
  console.log('number itself');
}*/

/*var fnc = function(x,y) {
  console.log('name : ' + x,'age : ' + y);
}
var fnc2= function(z){
  console.log('name :' + z);
}
fnc(person.name,person.age);
fnc2('sen');

var fnc3= function(x){
  if(x%2==0)
    return 'num is even';
  return 'num is odd';
}
var q = fnc3(1);
console.log(q);

var addToArray = function(arr){
  return arr.push(5); // return dersek değer pushlandıktan sonraki arrayin length'ini verir.
}

var g= addToArray([]);
g=addToArray([g]);
console.log(g);

var fnd= function(x){
  if(x<10)
    return 'x kucuk  10';
  else if(x==10)
    return 'x esit 10' 
  return 'x buyuk  10';
}

v= fnd(10);
console.log(v);
*/
var f = (x) => { // EC6  fonksiyon tanımlaması
  console.log('rest in peace ' + x);
}

f(person.name);

/*const c= 33; // const tanımlanan bir değer sabittir. Değiştirilemez.
//c=34;
console.log(c);

const foo= {a:1}; // buradaki örnekte ise değişen foo'nun kendisi değil, nesnenin içidir.
foo.b=2;
console.log(foo);

let t=11; // let ile tanımlanan bir değer, sonradan değiştirilebilir.
t=12;
console.log(t);

let l= {x:1};// Object  // bu örnekteki gibi  tipi de değiştirilebilir.
l=[1,2];    // Array
console.log(l);
*/

const ic = 11; //const ile let block scope değişkenlendir.
let h = 7; // Yani tanımlanan bloğun içinde yaşarlar. 
var hh = 99; // var ile letin farkı da zaten budur. var function scopedur(local de denir).
let s = 22; // let ise block scopedur. Sadece tanımlanan yerde yaşarlar.
if (true) {
  h = 4;
  let s = 12
  console.log(s); // görüldüğü gibi burada s değeri 12, çünkü tanımlandığı yerde geçerli.
}
console.log(h, s); // burada ise s değeri 22, çünkü global olarak erişilebilir.

var zz = 'Yunus Altintop Ey Almanya';
console.log(zz.substr(2, 4)); // index 0'dan başlıyor.
console.log(zz.substring(2, 4)); // index 1'den başlıyor.
console.log(zz.split(' ', 1)); //belirtilen Stringden itibaren böler. (burada boşluktan itibaren)
console.log(zz.split('Altintop'));

var cc = { x: 1, z: 2 };
console.log(cc.hasOwnProperty('x')); // objenin kendi içindeki elemanı sorguluyor.
console.log(Object.keys(cc));
console.log(Object.values(cc));
console.log(cc.z.toString());

var jj = [1, 2, 3];

var sJoin = jj.join(' '); //string oldu.
console.log(sJoin);
var kk = sJoin.split(' '); // array oldu
console.log(kk); //
kk.forEach((i) => { // array olduğu için array methodları kullanabildik.
  console.log(i);
});
var arrayMap = jj.map((item) => { // Map, verilen fonksiyonun döndüğü değerden, yeni bir dizi
  // Oluşturur.
  return item * 10;
});
console.log(arrayMap);

var tt = [10, 2, 34, 66, 55, 66, 77, 5, 1, 7];
// tt.splice(index(kendi de dahil),kaç eleman çıkarılacak,eklenecek elemanlar) 
tSplice = tt.splice(2, 5, 3, 4)
console.log(tSplice); // diziden çıkarılanlar(34,66,55,66,77)--diziye eklenenler(3,4);
console.log(tt);

console.log(tt.sort());
console.log(tt.reverse());
