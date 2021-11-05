//1-JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
    // Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function isPrime(number) {
    for (let i = 2; i < number; i++) {
      if(number % i == 0) {
           return false
        }
    }
    return true
}
function findPrime(...number) { 
    for (let i = 0; i < number.length; i++) {
        if(isPrime(number[i])){
            console.log(number[i] + " asaldır")
        }
        else{
            console.log(number[i] + " asal değildir")
        }
   }
}
findPrime(6,11,89,105,371,546)

//-_-
//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
//İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.

function friendNumbers(sayi1,sayi2) { 
    let toplam1=0
    let toplam2=0

    for (let i = 0; i < sayi1; i++) {
        if (sayi1 % i == 0) {
            toplam1 += i  
        }
    }
    for (let i = 0; i < sayi2; i++) {
        if (sayi2 % i == 0) {
            toplam2 += i 
        }
    }
    if ((toplam1 == sayi2) && (toplam2 == sayi1)) {
        console.log(sayi1+ " ve "+sayi2 +" Arkadaş sayılardır.") 
    }
    else{
        console.log(sayi1+ " ve "+sayi2 +" Arkadaş sayı değillerdir.")
    }
}
friendNumbers(16,61)
friendNumbers(284,220)
friendNumbers(1184,1210)
friendNumbers(17296,18416)

//-_-
//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
//Mükemmel sayılar: Tüm bölenlerinin sayısının toplamı sayının kendisine bölünen sayıya mükemmel sayı denir.


function mukemmelSayi() {
   
    for (let i=1; i<1001; i++) {
        let toplam=0
        for (let j= 1; j<i; j++) {
          if (i % j == 0) {
              toplam += j
          }  
        }
        if (toplam == i) {
            console.log(i + " Mükemmel sayıdır.")
        } 
    }
}
mukemmelSayi()

//-_-
//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function asalSayilar() {

    let sayac=0
    for (let i = 2; i < 1000; i++) {
        for (let j = 1; j<= i; j++) {
            if (i%j == 0) {
                sayac++
            }
        }
        if (sayac == 2) {
            console.log(i +" Asaldır")
            sayac=0
        }
       else{
           sayac=0
           
       }   
    }
}asalSayilar()