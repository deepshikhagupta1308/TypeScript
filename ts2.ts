//WAP input as a age and return true and false?


const checkAgeStatus = (age:number): boolean => {
    if(age > 18) {
      return true;
    }
    return false;
}

//WAP input as two string and check if same string return true else false.


const checkString = (str1:string,str2:string): Boolean => {
    if(str1===str2){
        return true
    }
    return false
}

//WAP to reverse a string.
//Approach1:

interface IReverseString {
    output:string;
}

const reverseString = (str:string) : IReverseString => {
        let rev = "";
        for(let i=0;i<str.length;i++){
            rev = str[i]+rev;
        }
        return {output:rev};
}

//Approach2:

const reverseStringTwo = (str:string) : string => {
    let result = "";
    for(let j=0;j<str.length;j++){
        result = str[j]+result;
    }
    return result;
}

