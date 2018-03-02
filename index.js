 let n = parseInt(prompt('ВВедіть n-не число Фібоначчі', ""));
 // //Fn = Fn-1 + Fn-2
 let f = [1, 1];
 let result;


 //Result1: 
 function fiboarr(n) {
     for (let i = 2; i < n; i++) {
         result = f[i-1] + f[i - 2];
         f.push(result);
     }
     return f[f.length - 1];

 }


 //Result2:
 function fiborecurs(n) {
    if (n < 2) return n;
    else
    return (fiborecurs(n - 2) + fiborecurs(n - 1));
 }


 //Result3:
 function fibowhile(n) {
    let i = 1;
    while (i < n) {
        result = f[i - 1] + f[i - 2];
        i += 1;
     }
     return result;
 }
 
 //Result4:
 function fibodowhile(n) {
     let i=1;
     do{
        result = f[i - 1] + f[i - 2];
        i++;
     }
     while(i<n);
     return result;
 }

 document.write("Число Фібоначчі через масив:  " + fiboarr(n) + "<br>");
 document.write("Число Фібоначчі через рекурсію:  " + fiborecurs(n) + "<br>");
 document.write("Число Фібоначчі через цикл while:  " + fibowhile(n) + "<br>");
 document.write("Число Фібоначчі через цикл do while:  " + fibodowhile(n) + "<br>");
 