// alert ('Belajar Javascript Dicoding');
console.log("Menulis Kode JavaScript");
console.log("Muhammad Falikhuddin Daffa");

console.log("Materi JavaScript Dicoding");

/*
FUNDAMENTAL JAVASCRIPT
console.log adalah kode bawaan javascript untuk menampilkan pesan ke konsol
Bisa berupa web consol atau consol dari terminal

JavaScript membagi instruksi menjadi 2 jenis, yaitu expression dan statement
Expression adalah unit kode  yang dapat dievaluasi menjadi suatu nilai 
Statement adalah instruksi untuk melakukan sebuah aksi tertentu, bisa berupa membuat variabel, melakukan perulangan, pengecekan kondisi, dll

Rangkuman
- Expression merupakan kode yang menghasilkan nilai
- Statement menunjukkan aksi yang dilakukan
*/

console.log(25); // Baris kode expression
console.log(3+5); // Baris kode yang merupakan expression. Interpreter mengevaluasi kode dan menampilkan nilai 8

var myName; // Baris kode statement
let myAge;

/*
VARIABLE
Variabel umumnya digunakan untuk menyimpan informasi atau nilai yang akan dikelola dalam sebuah program
Pada JavaScript terdapat 3 cara untuk mendeklarasikan variabel yaitu var, let, dan const
Statement tidak bisa diisi dengan statement karena statement membutuhkan nilai bukan aksi

Variabel diibaratkan sebagai wadah yang menyimpan nilai. Proses inisialisai atau assignment berarti kita memasukkan nilai ke dalam wadah
Variabel-variabel yang ada akan tersimpan di memori komputer 
Setiap variabel mempunyai nama yang bisa kita panggil dan gunakan 
Penamaan variabel harus masuk akal dengan konteksnya supaya mudah dalam maintenance
Hindari penamaan variabel dengan istilah umum
Gunakan penamaan variabel yang mendeskripsikan nilai didalamnya
Aturan penamaan variabel
- tidak ada spasi, gunakan underscore atau camelCase
- tidak ada karakter spesial

Const merupakan kependekan dari constant artinya kita mendeklarasikan variabel dengan const ketika nilainya tidak bisa diubah atau bernilai konstan
Ibarat sebuah wadah yang setelah diisi maka kita segel
*/

let fullName; // deklarasi kode statement
fullName = "Muhammad Falikhuddin Daffa"; // kode untuk menginisialisasikan nilai ke dalam sebuah variabel dengan tanda sama dengan (=) disebut assignment expression
console.log(fullName);

let lastName = " Daffa"; // assignment expression
console.log(lastName);

let firstName = "Falikhuddin";

let fullName2 = (firstName + lastName);
console.log(fullName2);

const birthDay = 25082002;
console.log(birthDay);

/*
TIPE DATA
Pada JavaScript terdapat beberapa tipe data
- Undefined
  Tipe data terbentuk ketika sebuah variabel tidak memiliki nilai. Artinya mendeklarasikan variabel tanpa menginisialisasikan nilai
- Number   
  Nilai dari tipe data number adalah angka
  Tipe data number dapat melakukan operasi aritmatika
  ===============================================
  Operator      Fungsi          Contoh
  +             Penjumlahan     10+10=20
  -             Pengurangan     10-2=8
  /             Pembagian       21/3=7
  *             Perkalian       2*2=4
  %             Sisa hasil bagi 5%2=1     modulus
  **            Perpangkatan    3**2=9

  ++            Increment       Menambah nilai 1 pada nilai variabel
  --            Decrement       Mengurangi nilai 1 pada nilai variabel
  ===============================================
  Operator dapat dituliskan sebelum atau sesudah variabel tapi hal tersebut bukan berati sama
  > jika dituliskan setelah variabel (x++), expression menghasilkan nilai variabel sebelum ditingkatkan hasilnya
  > jika dituliskan sebelum variabel (++x), expression menghasilkan nilai variabel setelah ditingkatkan hasilnya
- BigInt
  Pada javascript tipe data number memiliki batasan. Untuk kebutuhan umum sudah mencukupi.
  Sering digunakan untuk kriptografi
  Untuk membedakan tipe BigInt dan Number tambahkan karakter "n" di akhir angka
  Meskipun untuk menyimpan angka besar tetapi bigInt tetap bisa digunakan untuk menyimpan angka kecil
- Strings
  Sebuah teks, untuk menampilkan nilai string gunakan tanda petik 1 ('') atau 2 ("") diantara teks
  Tidak ada perbedaan menggunakan petik 1 atau 2, dapat digunakan secara bergantian terutama saat menulis teks yang mengandung tanda petik
  Jika teks memiliki 2 buah jenis tanda petik, gunakan backslash (\) sebelum tanda petik, disebut juga escape string
  Backslash juga berguna untuk mengabaikan simbol lain yang menimbulkan ambigu dalam string
  String dapat menggunakan operator (+), berfungsi untuk menggabungkan 2 teks menjadi 1 (string concatenation)
  Dapat memasukkan variabel ke dalam string template (string interpolation) (`)
- Boolean
  Boolean hanya memilik 2 nilai, yaitu true atau false
  Kunci utama dalam penentuan logika 
- Null 
  Serupa dengan undefined, namun perlu diinisialisasi pada variabel
  Null biasa digunakan sebagai nilai sementara tetapi sebenarnya nilai tersebut tidak ada
  Jika ingin sebuah variabel namun belum memerlukan nilai apa apa dan tidak ingin terikat oleh tipe data apapun
- Symbol
  Tipe data baru
  Tipe simbol digunakan untuk menunjukkan identifier yang unik 
  Symbol disebut identifier yang unik karena meskipun membuat 2 variabel dengan nama dan deskripsi sama keduanya dianggap berbeda
  Symbol ini umumnya digunakan sebagai nama property dari Object. Object sendiri merupakan tipe data kompleks untuk menyimpan berbagai struktur data.
*/

let x; 
console.log(typeof(x)); // tipe data undefined
// mendeklarasikan variabel x, tapi kita tidak menginisialisasikan dengan nilai
// ketika memastikan dengan menggunakan fungsi typeof() maka akan menghasilkan output undefined
// fungsi typeof() digunakan untuk memastikan tipe data pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks

let y = 25;
let z = 12.25; // gunakan titik pada desimal
console.log(typeof(y));
console.log(typeof(z));

let a = 3;
let b = 2;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// Increment dan Decrement
let ab = 5;
console.log(ab++); // logika menampilkan nilai variabel ab lalu increment
console.log(ab); // nilai ab setelah increment adalah 6

let bc = 5;
console.log(++bc); // nilai ab 6 karena itu hasil setelah increment

// BigInt
let bigInt = 43578435897489437893447389573984579832758932n;
let intBiasa = 43578435897489437893447389573984579832758932;

console.log(bigInt);
console.log(intBiasa);

console.log(typeof(bigInt));
console.log(typeof(intBiasa));

console.log(5n+2n);
console.log(5n-2n);
console.log(5n*2n); 
console.log(5n/2n); // menggunakan bigInt makan operasi pembagian dibulatkan kebawah
console.log(5n%2n);

 // String
let salam = "Selamat Pagi";
console.log(salam);

let pertinyiin = '"Mau Kemana?" tanya saya';
console.log(pertinyiin);

let jiwib = '"Kesana" jawab Daffa\''; // escape string
console.log(jiwib);
console.log("Windows path: C:\\Program Files\\MyProject"); // escape string digunakan untuk simbol backslash

console.log(`Halo nama saya ${fullName}`); //string interpelation menggunakan backsticks (`)

// Boolean
let booleanx = true;
let booleany = false;

console.log(typeof(booleanx));
console.log(typeof(booleany));

let kurangDari = a < b;
let lebihDari = a > b;

console.log(kurangDari);
console.log(lebihDari);

// Null
let kapanNikah = null;
console.log(kapanNikah);

// Symbol
const idr = Symbol("idr");
const idr2 = Symbol("idr");
console.log(idr);
console.log(idr==idr2);

/*
OPERATOR
Operator dalam bahasa pemrograman yaitu simbol yang memberi tahu intepreter untuk melakukan operasi matematika, relasional, atau logika
- Assignment Operator
  Operator tanda sama dengan (=) yang digunakan untuk menginisialisasi nilai pada variabel
  Variabel disebelah kiri, nilainya disebelah kanan
- Comparison Operator
  Operator untuk membandingkan dan sebagai logika dasar
  ===============================================
  Operator        Fungsi
  ==              Membandingkan kedua nilai apakah sama (tidak identik)
  !=              Membandingkan kedua nilai apakah tidak sama (tidak identik)
  ===             Membandingkan kedua nilai apakah identik
  !==             Membandingkan kedua nilai apakah tidak identik
  >               Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua
  >=              Membandingkan dua nilai apakah nilai pertama lebih dari atau sama dengan nilai kedua
  <               Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua
  <=              Membandingkan dua nilai apakah nilai pertama kurang dari atau sama dengan nilai kedua
  ===============================================
  Ketika membandingkan 2 nilai, JavaScript akan mengevaluasi dan mengembalikan dengan hasil boolean 
  Perbedaan "sama" dan "identik"
  Dalam operator komparasi di javascript, terdapat perbedaan antara "sama" (==) dan "identik" (===)
- Logical Operator
  Terdapat operator yang digunakan untuk menetapkan logika yang lebih kompleks, yaitu Logical Operator
  Dengan logical operator kita dapat menggunakan kombinasi dari dua nilai boolean atau bahkan lebih dalam menetapkan logika
  Pada javascript terdapat 3 buah karakter khusus yang berfungsi sebagai logical operator
  ===============================================
  &&              Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true)
  ||              Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true)
  !               Operator tidak (not). Digunakan untuk membalikkan suatu kondisi
  ===============================================
*/

a+=b; // expression a+=b digunakan sebagai shortcut dari a=a+b, cara ini dapat digunakan di operator aritmatika lain
console.log(a); 
a-=b; // a=a-b
console.log(a);
a*=b; // a=a*b
console.log(a);
a/=b; // a=a/b
console.log(a);
a%=b; // a=a%b
console.log(a);

console.log(a<b);
console.log(a>b);

const aNumber = 10;
const aStirng = '10';

console.log(aNumber == aStirng); // hasil true, kerena nilainya sama-sama 10
console.log(aNumber === aStirng); // hasil false, karena walaupun nilainya sama, tetapi tipe data berbeda

// AND Operator a=3 dan b=2
console.log(a < 4 && b > 1); // (true && true) -> true
console.log(a > 4 && b > 1); // (false && true) -> false

// OR Operator
console.log(a < 4 || b > 1); // (true || true) -> true
console.log(a > 4 || b > 1); // (false || true) -> true

// NOT Operator
console.log(!(a < 4)); // !(true) -> false
console.log(!(a < 4 && b > 1)); // !(true && true) -> false

/*
IF ELSE (PERCABANGAN)
IF/ELSE mendukung ternary operator atau conditional expression dengan ini dapat menuliskan if else statement hanya dengan satu baris
  Truthy/False
di dalam if statement kita perlu memasukkan expression yang akan dievaluasi
umumnya expression akan mengembalikan nilai boolean untuk menentukan kondisi true atau false
apakah bisa tidak mengembalikan nilai boolean? bisa
Setiap nilai pada javascript dasarnya mewarisi sifat boolean, nilai ini dikenal dengan truthy and falsy 
Truthy = true, falsy = false
tipe data yang dianggap falsy
- Number 0
- BigInt 0n
- String kosong seperti "" atau ''
- null
- undefined
- NaN atau Not a Number
*/

const hujan = true; // jika bernilai false maka kode blok dalam if tidak dijalankan 
console.log("Persiapan sebelum berangkat"); 

if(hujan) {
  console.log("Hari ini hujan. Bawa Payung");
}
console.log("Berangkat");

if(a > 5) {
  console.log(a);
} else {
  console.log("Nilai kurang dari 5");
}

let language = "English";
let greeting = "Selamat Pagi";

if(language === "English") {
  greeting = "Good Morning!";
} else if(language === "French") {
  greeting = "Bonjour!";
} else if(language === "Japanese") {
  greeting = "Ohayou Gozaimasu!";
}

console.log(greeting);

// condition ? true expression : false expression
/* ternary operator membutuhkan 3 operand, sebelum tanda tanya(?) berisi kondisi yang ingin kita evaluasi 
kemudian diikuti dengan expression bernilai benar sebelum tanda titik dua dan expression bernilai salah setelah titik dua
Karena merupakan conditional expression maka operand kedua dan ketiga harus mengembalikan nilai
*/

const isMember = true;
const discount = isMember? 0.1 : 0; //jika isMember bernilai true maka 0.1 dan jika bernilai false maka 0
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`); 

// Truthy and Falsy
let name = "";

if (name) { // falsy
  console.log(`Nama saya ${nama}`);
} else {
  console.log("Nama masih kosong");
}

/*SWITCH CASE
Tanda kurung setelah keyword switch berisi variabel atau expression yang akan dievaluasi. 
Kemudian untuk setiap kondisi yang mungkin terjadi, kita masukkan keyword case diikuti dengan nilai yang valid. 
Jika kondisi pada case sama dengan variabel pada switch, maka blok kode setelah titik dua (:) akan dijalankan. 
Keyword break digunakan untuk keluar dari proses switch. 
Terdapat satu case bernama default yang memiliki fungsi yang sama dengan keyword else pada control flow if-else. 
Jika tidak ada nilai yang sama dengan variabel pada switch, maka blok kode ini akan dijalankan.
*/

let sapaan = null;
switch (language) {
  case "English":
    sapaan = "Good Morning";
    break;
  case "French":
    sapaan = "Bonjour";
    break;
  case "Japanese":
    sapaan = "Ohayou Gozaimasu";
    break;
  default:
    sapaan = "Selamat Pagi";    
}

console.log(sapaan);

/*LOOPING
Dari beberapa cara melakukan proses loop dapat menggunakan "for"
Penjelasan kode blok dibawah:
1. variabel i sebagai index iterasi, variabel ini menginisialisasi nilai awal perulangan
2. javascript akan melakukan pengecekan kondisi apakah perulangan masih perlu dilakukan, jika bernilai true maka kode blok for akan dijalankan
3. increment/decrement, disini melakukan penambahan atau pengurangan variabel iterasi 
Cara lain dalam melakukan looping adalah dengan for .. of
For of tidak membutuhkan banyak statement untuk melakukan looping pada array
Dengan for of nilai tiap array akan diinisialisasikan pada variabel baru yang ditentukan pada tiap proses loopingnya
Jumlah proses looping juga menyesuaikan dengan ukuran array
Do .. while
Sama seperti for, intruksi while mengevaluasi ekspresi boolean dan menjalankan kode dalam blok while ketika bernilai true
While dapat melakukan perulangan yang sama dengan for, tetapi while lebih cocok digunakan pada kasus di mana kita tidak tahu pasti berapa banyak perulangan
*/

for (let i=0; i<5; i++) { // jika i kurang dari 5, makan tampilkan nilai i
  console.log(i);
}

// looping for .. of
let myArray = ["Luke", "Graham", "Bell"];

for (const arrayItem of myArray) { 
  console.log(arrayItem);
}

// looping do .. while
let i = 1;

/*while (i<=10) { // kondisi while akan dievaluasi sebelum kode didalamnya dijalankan 
  console.log(i);
  i++;
}*/

do {
  console.log(i);
  i++;
} while (i<=5); // do while akan mengevaluasi boolean expression setelah kodenya dijalankan 

console.log("Struktur Data");

/* MODUL PENGENALAN STRUKTUR DATA
Tipe data yang kita bahas sebelumnya termasuk dalam kategori tipe data primitif yang hanya bisa menyimpan satu nilai
Pada modul ini membahas tipe data JavaScript yang dapat menyimpan struktur data yang lebih kompleks
- Object
- Array
- Map
- Set
*/

/* OBJECT
Sebuah tipe data yang sangat berguna dalam pengembangan aplikasi dengan JavaScript 
Objek mampu menyimpan nilai dari beragam nilai dari beragam tipe data dan membentuk data lebih kompleks
Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal {}
const user = {};
Objek berisi pasangan key dan value yang juga dikenal dengan property
Key berperan mirip seperti nama variabel yang menyimpan sebuah nilai
Sementara, value berisi nilai dengan tipe data apa pun termasuk objek lain
Key dan Value di dalam object dituliskan seperti berikut:
*/

let object = {key1: "value1", key2: "value2", key3: "value3"} 
// key harus berupa string dan dituliskan sebelum titik dua(:), lalu diikuti dengan value-nya
// Meskipun key merupakan string, kita tidak perlu menuliskan tanda petik kecuali ada karakter khusus seperti spasi

const user = {
  name: "Falikhuddin Daffa",
  age: 20,
  species: "Human",
  isJedi: true,
  "home world": "Tattooine"
};

console.log(`Halo, nama saya ${user.name}`);
console.log(`Umur saya ${user.age}`);
console.log(`Saya berasal dari ${user["home world"]}`);
// selain dot operator, kita juga bisa mengakses properti dari object menggunakan bracket atau tanda kurung siku []

const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Correlian Engineering Coorporation",
  maxSpeed: 1200,
  color: "Light Gray"
};

spaceship.color = "Glossy Red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "Light Freighter";

delete spaceship.manufacturer; // dapat menghapus property pada object menggunakan keyword delete

console.log(spaceship);
console.log(`Halo, nama saya ${spaceship.name}`);
console.log(`${spaceship.maxSpeed}`);
// object spaceship dideklarasikan sebagai const, tetapi masih bisa diubah
// yang perlu diperhatikan adalah mengubah nilai berbeda dengan menginisialisasi ulang nilai
// ketika membuat sebuah object, kita tidak terikat dengan properti di dalamnya sehingga masih bisa memodifikasi nilainya
// ketika kita mengubah object menggunakan assignment operator dan property/key sudah ada, maka nilai yang di dalamnya akan tergantikan dengan nilai yang baru
// sedangkan jika property dengan nama key yang ditentukan tidak ditentukan, maka property baru akan ditambahkan ke object

/*ARRAY
array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkan dalam satu variabel
jika berusaha mengakses index diluar ukuran array maka akan akan undefined 
untuk menambahkan data ke dalam array kita bisa menggunakan metode push(), push() akan menambahkan data di akhir array
mengeluarkan data dari array bisa menggunakan pop(), pop() akan mengeluarkan data yang ada di akhir array
metode shift() digunakan untuk mengeluarkan elemen pertama dari array
metode unshift() digunakan untuk menambahkan elemen pertama dari array
keyword delete menghapus data pada index ditentukan lalu membiarkan posisi tersebut kosong
splice() digunakan untuk menghapus elemen
*/

let arrayKu = ["Duid", 45.2, 30, true, "Halas"];
arrayKu.push('JavaScript'); // menambahkan data terakhir ke dalam array
arrayKu.pop(); // mengeluarkan data terakhir dari array
arrayKu.shift(); // mengeluarkan data pertama dari array
arrayKu.unshift('Falikhuddin'); // menambahkan dara pertama dari array
delete arrayKu[3]; // hanya menghapus index yang sudah ditentukan lalu membiarkan posisi itu kosong
arrayKu.splice(2, 1); // menghapus dari index 2 sebanyak 1 elemen

console.log(arrayKu);
console.log(arrayKu[3]);
console.log(arrayKu[5]);
console.log("Panjang nilai array " + arrayKu.length);

/*SPREAD OPERATOR
Spread operator, fitur yang digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen
Spread operator dituliskan dengan tiga titik (...)
*/

const favorites =  ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others]; 

console.log(...favorites); // spread operator bekerja seperti meleburkan nilai array menjadi beberapa elemen sesuai panjang nilai array
console.log(allFavorites); // nilai dua array tersebut berhasil tergabung

const obj1 = {firstName: 'Obi-Wan', age: 30};
const obj2 = {lastName: 'Kenobi', gender: 'M'};

const newObj = {...obj1, ...obj2};

console.log(newObj);

/* DESTRUCTING OBJECT & ARRAY
Iterasi object dan array adalah dua hal yang paling banyak digunakan dalam mengelola data di JavaScript
JSON (JavaScript Object Nation) merupakan format data paling populer yang digunakan dalam transaksi data saat ini
Destructing dalam javascript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil
1. Destructing Object
Penulisan sintaks destructing object menggunakan object literal ({}) di sisi kiri dari operator assignment
2. Destructing Assignment 
Saat melakukan destructing assignment, perlu menuliskan destructing object di dalam tanda kurung
Jika tidak menuliskan tanda kurung, tanda kurung kurawal akan membuat javascript mengira itu adalah block statement, sementara block statement tidak bisa berada pada sisi kiri assignment
3. Default Values
Ketika mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi undefined

 */

const profile = {
  namaBapak: "Samani",
  namaIbuk: "Sriani",
  age: 18
}

// let namaBapak = "Sentot"; destructive assignment
// let age = 41;

// tanda kurung akan memberi tahu javascript bahwa tanda kurawal didalamnya bukan block statement melainkan sebuah expression sehingga assignment dapat dilakukan
// ({ namaBapak, age} = profile);

const {namaBapak, age, isMale} = profile;

console.log(namaBapak);
console.log(age);
console.log(isMale);

