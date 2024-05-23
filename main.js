//Task 1

let cum = "salam dunya necesen ishler necedi";

function uppCumle(cumle) {
  let arr = cumle.split(" ");
  let uppArr = [];

  for (const i in arr) {
    uppArr.push((arr[i][0].toUpperCase()) + arr[i].slice(1))
  }
  return uppArr.join(' ');
}

console.log(uppCumle(cum));

//Task 2

function isPolindrom(str){
    let arr = str.split('');
    for (const i in arr) {
  
     if(arr[i]!== arr.reverse()[i]){
      return false;
     }
     
    }
    return true;
  }



