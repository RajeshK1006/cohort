const executable = () => {
    console.time("loop timer");
    for(let i =0;i<5;i++){
        let ans = i;
    }

    console.timeEnd("loop timer");
}

const CallingBack = (callback) => {
    setTimeout(()=>{
        callback()
    }, 5000);
}


const Interval = setInterval(()=>{
    console.log("hELLO WORLD")
}, 2000);

setTimeout(()=>{
clearInterval(Interval)
},10000)

CallingBack(executable);