const n=3, k =5;

const transaltor = {
    0 : "01",
    1: "10"
}

const transcode = (str) =>{
    if(str.length ==0){
        return ""
    }

    const lastBit = str[str.length-1]
    const  trimmedStr = str.slice(0,str.length -1) 

    return transcode(trimmedStr) + transaltor[lastBit]
}




const rec  = (n) =>{
    if (n==0)
        return "0"
    const res = rec(n-1)
    return transcode(res)
}

console.log(rec(2));