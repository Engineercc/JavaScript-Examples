
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
/*for (var i = 0; i < files.length; i++) {
  console.log(files[i]);
    if((files[i].content.length)%2==0)
    console.log(files[i].content);
}*/

/*files.forEach((fileDisplay,x) => { // first: func. name, second: array index, third: array
  console.log(fileDisplay);
});*/
var keys=[];
var myKeys=[];
var myContents=[];
var myTitles=[];

for(key in person){
 // console.log(key + ' : ' + person[key],person[key]);
 keys.push(key); // verilen diziye başka bir dizi ekler.
}
for(key in files){
  myKeys.push(files[key]); // Files arrayini pushladı. 
  // Burada object tipi olduğu için  [] içinde key değerini yazdık.

  myContents.push(files[key].content); // sadece contentleri pushladı.
  myTitles.push(files[key].title); // sadece titleları pushladı.
}
 console.log(keys);
  console.log(myKeys);
  console.log(myContents);
  console.log(myTitles);

//console.log(Object.keys(person).lastIndexOf(key));
