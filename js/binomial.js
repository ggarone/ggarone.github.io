function computeBinomial(){
    let n = document.getElementById('top').value;
    let k = document.getElementById('bottom').value;
    let result = (factorial(n)/(factorial(k)*factorial(n-k)));
    console.log(n + " " + k + " " + result);
    
    let resultDOM = document.getElementById('result');
    resultDOM.innerHTML = `<h2>The result is ${result}</h2>`;
}

function factorial(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
  }
