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

let fisrtName = "Falikhuddin";

let fullName2 = (fisrtName + lastName);
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
