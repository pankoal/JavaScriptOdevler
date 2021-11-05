// var, let, const keyword lerdir.
let sayi1 = 10
sayi1 = "KeremCanTutak"
let student = {id:1, name:"Kerem"}
//console.log(student)

//function = fonkyon tanımlama 
//  " name (save )fonkyon ismi 
// "  params (student)ise paraetremiz 

function save(puan=10,ogrenci) {
    console.log(ogrenci.name+" : "+puan)
}
//save(undefined, student);

let students = ["Kerem Can" ,
 "Engin demirog", 
"büşra toprak"]
//console.log(students);

let students2 = [students,
    {id:1, name:"Kerem"} , "Ankara" ,
    {city : "Antalya"}] 
   //  console.log(students2);
//rest = geriye kalan parametreler 
//c# da params
//java da varArgs 
    let showProducts = function (id,...products   ) {
        console.log(id);
        console.log(products);
       // console.log(products[0]);
    }
    
    //console.log(typeof showProducts);
    //showProducts(10,["Elma","Armut","Karpuz"])

    //spread--ayrıştırmak
    let points = [1,2,3,4,50,4,60,14]
    console.log(...points);
    console.log(Math.max(...points))
    console.log(..."ABC","D",..."EFG","H");
    //... char'ları ayırır.

    //---Destructuring---
    let populations = [10000,20000,30000,[40000,100000]]
    let [small,medium,high,[xh,xxh]] = populations
    console.log(small);
    console.log(medium);
    console.log(high);
    console.log(xh);
    console.log(xxh);

    function someFunction([small1],number) {
        console.log(small1);
    }

    someFunction(populations)

    let category = {id:1, name:"içicek"}
    console.log(category.id);
    console.log(category["name"]);

    let {id,name} = category
    console.log(id);
    console.log(name);

    //Redux-- mimaride çok fazla kullanılacak 
    