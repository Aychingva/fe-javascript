//task17

// let number = parseInt(prompt("Ededi daxil edin"));
// let sum = 0;

// while(number>0){
//     sum+=number%10;
//     number= Math.floor(number / 10);
// }

// console.log(sum);


//task18

// const fullname=prompt("adinizi ve soyadinizi daxil edin");
// let name=fullname.split(" ");
// console.log(name);

// let firstName=name[0];
// console.log(`salam ${firstName}`);

//task 19

// const cost=(prompt("qiymeti daxil edin"));
// let price=cost.split(".");

// let manat=price[0];
// let qepik=price[1];
// console.log(manat, "manat" ,qepik, "qepik");

//task20

// const fee=prompt("emek haqqini daxil edin");
// console.log(fee*0.87);


//task21
// const Fullname=prompt("soyadinizi adinizi ata adinizi daxil edin:");
// const name1=Fullname.split(" ");
// let surname=name1[0];
// let name=name1[1];
// let fathername=name1[2];
// let firstlettername=name[0];
// let firstletterfather=fathername[0];
// console.log(`${surname}.${firstlettername}.${firstletterfather}`);

//task22

// const menfet=parseInt(prompt(" menfeti daxil edin"));
// const year=parseInt(prompt("ili daxil edinn"));
// const faiz=parseInt(prompt("faizi dxail edin"));
// let sum=menfet+((menfet*faiz/100)*year)
// console.log(sum);

//task23

// const value = 10; 
// const result = value < 15; 
// console.log(result);


//task24

// const age=parseInt(prompt("yasinizi daxil edin"));

// if(age<18){

//     console.log("access denied");
// }else{
//     console.log("access granted");

// }


//task25



// const num=prompt("ededleri daxil edin:");
// let number=num.split(" ").map(Number);
// let a=number[0];
// let b=number[1];
// let c=number[2];
// let sum=0;
// if(a==b || b==c || a==c){
//     console.log("eyni eded daxil etmisiz")
// }else if(a<b &&a>c || a>b&&a<c) {
//     console.log(a);
// }else if(b<c&&b>a ||b>c&&b<a){
//     console.log(b);
// }else{
//     console.log(c);
// }
 
//task 26

// const year=parseInt(prompt("ili daxil edin"));

// if(year%4==0){
//     console.log("uzun ildir");
// }else{
//     console.log("uzun il deyil");
// }


//task 27
// let id = prompt('Enter product ID:');

// switch (id) {
//   case '1':
//     alert('Available 10 pcs.');
//     break;
//   case '2':
//     alert('Available 256 pcs.');
//     break;
//   case '3':
//     alert('Available 53 pcs.');
//     break;
//   case '4':
//     alert('There are 3 available.');
//     break;
//   default:
//     alert('Out of stock');
// }



//task 28

// const gender = prompt("Cinsinizi F və ya M şəklində daxil edin").toString();

// if (gender == "F") {
//     console.log("female");
// } else {
//     console.log("male");
// }

//task 29

// const monthNumber = parseInt(prompt("Ayın nömrəsini daxil edin (1-dən 12-ə qədər):"));


// switch (monthNumber) {
//   case 1:
//     console.log("Yanvar");
//     break;
//   case 2:
//     console.log("Fevral");
//     break;
//   case 3:
//     console.log("Mart");
//     break;
//   case 4:
//     console.log("Aprel");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("İyun");
//     break;
//   case 7:
//     console.log("İyul");
//     break;
//   case 8:
//     console.log("Avqust");
//     break;
//   case 9:
//     console.log("Sentyabr");
//     break;
//   case 10:
//     console.log("Oktyabr");
//     break;
//   case 11:
//     console.log("Noyabr");
//     break;
//   case 12:
//     console.log("Dekabr");
//     break;
//   default:
//     console.log("Düzgün bir ay nömrəsi daxil etmədiniz.");
// }



//task30

function Date1(input){
  const months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", 
    "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
  let total=input.split('.');
  const year=parseInt(total[0],10);
  const month=parseInt(total[1],10);
  const day=parseInt(total[2],10);

if (month < 1 || month > 12) {
    return 'Ay 1 ilə 12 arasında olmalıdır.';
}
if (day < 1 || day > 31) {
    return 'Gün 1 ilə 31 arasında olmalıdır.';
}

if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
  return 'Bu ayda 30 gün var.';
}

if (month === 2) {
  if(year%4!=0 && day>=29){
    return " fevral 28 gunden ibaret";
    


  }

}
  return `${day} ${months[month-1]} ${year}`;



}


const input=prompt("hal hazirki tarixi qeyd edin");
const result=Date1(input);
console.log(result);