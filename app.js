const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const Date = require(__dirname + "/date.js");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var newAddon = ["Buy food" ,"cook food",
  "eat the food"];
var newWork=[];
app.get("/", (req, res) => {
 
  // if(currentDay === 6 || currentDay ===0){
  //     day = "weekend";
  //    // res.send("its a  weekend")
  // }
  // else{
  //     day = "weekday";
  //     //res.send("its a weekday")
  // }
  // switch (currentDay) {
  //   case 0:
  //     day = "sunday";
  //     break;
  //   case 1:
  //     day = "monday";
  //     break;
  //   case 2:
  //     day = "tuesday";
  //     break;
  //   case 3:
  //     day = "wednesday";
  //     break;
  //   case 4:
  //     day = "thursday";
  //     break;
  //   case 5:
  //     day = "friday";
  //     break;
  //   case 6:
  //     day = "saturday";
  //     break;
  //   default:
  //       console.log("error: this is an invalid day its equal to: "+currentDay) 
  // }
let day = Date.getDay();
  res.render("list", { listType: day ,newToDo: newAddon , value:"" });
  //res.send("we are working fine")
});

app.post('/',(req,res)=>{
 
   if(req.body.submit == "work"){
     var nwork = req.body.newToDo;
     newWork.push(nwork);
    res.redirect("/work")
   }
   else{
    var newAdd = req.body.newToDo;
    newAddon.push(newAdd)
    res.redirect("/")
   }
  
})
app.get('/work',(req,res)=>{
  
   res.render("list", { listType: "Work List" ,newToDo: newWork , value: "work"});
})

app.get('/about',(req,res)=>{
  res.render("about")
})

app.listen(port, () => {
  console.log("we are up and live");
});
