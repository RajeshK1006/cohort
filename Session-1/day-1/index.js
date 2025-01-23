const process = require("process");

const  env_var = process.env.MY_ENV_VARIABLE;
console.log(String(process.env.MY_ENV_VARIABLE).trim());

const check_Env = (data) => {
    if(data){
        console.log("Presence of env variable");
        console.log(data);
        
    }
    else{
        console.log("No env variable is present here..")
        console.log(__dirname);
        console.log("this is the exact file path");
        console.log(__filename);
    }
} 

check_Env(String(env_var));



console.log(process.cwd());
process.exit(1);