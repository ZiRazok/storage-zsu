const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "",
    user: "",
    database: "",
    password: ""
});

export default connection.connect(err=>{
    if(err){
        console.log(`Error: ${err}`);
        return err;
    }
    else console.log(`Database: ${database} is [OK]`);
})