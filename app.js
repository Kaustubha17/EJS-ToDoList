const bodyParser = require('body-parser');
const express=require('express');
const app=express();

app.listen(3000,()=>{console.log("app is listening at port 3000")});
app.set('view engine','ejs');
app.get("/",(req,res)=>{
    
    let today=new Date().getDay();
    // if(today.getDay()===0||6){
    //     res.send("Yay!! it's the weekend!");
    // }
    // else {
    
    // res.send("Boo, I have to work");
    // }

let day="";
    if(today==6){
day="Saturday";

    }
    else if(today==5){
        day="Friday";

    }
    else if(today==4){
        day="Thursday";
       
    }

    else if(today==3){
        day="Wednesday";
    }
     else if(today==2){
        day="Tuesday";
        
    }
     else if(today==1){
        day="Monday";
      
    }
     else if(today==0){
        day="Sunday";
        
    }
    res.render("list",{kindOfDay:day})
    //This step requires .ejs file to be present in views folder if not present then creste it
    //res.render(filename in views folder with ejs extension, js object key being the name in ejs file and value being the varaible name in js  script )
})

//  <%  %> also known as scriplet tags --used for any javascipt code embedded also <% helps in getting value from javascript code 