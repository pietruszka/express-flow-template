//@flow

import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import morgan from "morgan";

function square(n: number): number {
    return n * n;
}

let t = typeof square(2); // Error!

function concat(a: string, b:string): string {
    return a+b;
}
interface IApplication{
    prop: string | number | boolean;
    field: string | number;
}

interface ICustomer{
    Customer: Customer;

}
interface ICustomerPersonal{
    name: string | number;
    surname: string;
}



class Application implements ICustomerPersonal{
    field: number | string = 55555;
    prop: string = "5f";
    name: string | number = "g";
    surname: string = "g";

}

class Customer implements ICustomerPersonal{
    name: string | number;
    surname: string;
};

console.log(new Application().field)

let app: express$Application;
app = express();

app.use((req: $Request, res: $Response)=>{
    res.send("f");
});

app.listen(3000, ()=>{console.log("Server is running")});