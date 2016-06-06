let display = document.getElementById('screen');

let onPress = function(val : string) {
    let value = display.innerText
    if(value === "00"){
    value = "";
    }
    value += val;
    display.innerText = value;
}

let onEqualsPress = function() {
    let value = display.innerText;
    if(value === "00"){
        alert('write expression first.')
    }else{
        // converting input in expression
        
        let operators = ['*','/','-','+'];
        let newEqua = [];
        if(value.indexOf('+') === -1 && value.indexOf('-') === -1  && value.indexOf('*') === -1 && value.indexOf('/') === -1){
            alert('no Operator found. invalid expression')
        }else{
            
            let val : any= "";
            let con : Boolean = true; 
            for (let i =0; i<value.length; i++){
                val += value[i];
                if(value[i] == "+" || value[i] == "-" || value[i] == "*" || value[i] == "/"){
                    val = val.split('');
                    val.pop();
                    val = val.join("");
                    newEqua.push(val);
                    newEqua.push(value[i]);
                    val = "";
                }else{
                    if(value.length === i+1){
                        newEqua.push(val);
                    }
                }
            }
            
            // calculation starts here 
            let num :number;
            // division
             for(let i =0; i<newEqua.length; i++){
                 if(newEqua[i] == '/'){
                     num =  parseFloat(newEqua[i-1]) / parseFloat(newEqua[i+1])
                     newEqua.splice(i-1,3,num);
                 }
             }
             //multiplaction
             for(let i =0; i<newEqua.length; i++){
                 if(newEqua[i] == '*'){
                     num =  parseFloat(newEqua[i-1]) * parseFloat(newEqua[i+1])
                     newEqua.splice(i-1,3,num);
                 }
             }
             
            //substraction 
             for(let i =0; i<newEqua.length; i++){
                 if(newEqua[i] == '-'){
                     num =  parseFloat(newEqua[i-1]) - parseFloat(newEqua[i+1])
                     newEqua.splice(i-1,3,num);
                 }
             }
             
            //addition
             for(let i =0; i<newEqua.length; i++){
                 if(newEqua[i] == '+'){
                     num =  parseFloat(newEqua[i-1]) + parseFloat(newEqua[i+1])
                     newEqua.splice(i-1,3,num);
                 }
             }
             
             let ans = newEqua.join("");
            
            display.innerText = ans;

        }
    }
}

let onClear = function() {
    display.innerText = "00";
}
