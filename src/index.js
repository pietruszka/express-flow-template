//@flow

import express from "express";
import  bodyParser from "body-parser";
import multer from "multer";
import morgan from "morgan";

function square(n: number): number {
    return n * n;
}

let t = typeof square(2); // Error!

function concat(a: string, b:string): string {
    return a+b;
}
interface MyI{
    +prop: string
};
class Application implements MyI{
    field: number | string = 5;
    prop: string = "5";
    constructor(){
        //this.field = "d";
        this.prop = "555";
    };
}

console.log(new Application().field)

let app: express$Application;
app = express();

app.use((req: $Request, res: $Response)=>{
    res.send("f");
});

app.listen(3000, ()=>{console.log("Server is running")});