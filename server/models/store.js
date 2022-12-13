"use strict"
class product
{
    constructor(_id = "", Product_Name = "", Brand ="", Description="", Price = 0)
    {
        this._id = _id;
        this.Product_Name = Product_Name;
        this.Brand = Brand;
        this.Description = Description;
        this.Price = Price;
    }

    toString()
    {
        return "_id          :" + this._id + "\n" +
               " Product_Name: " + this.Product_Name + "\n" +
               " Brand      : " + this.Brand + "\n" +
               " Description :" + this.Description + "\n" +
               " Price       :" + this.Price;
    }
}

class Line
{
    constructor(product = new product(), quantity = 1)
    {
        this.product = product;
        this.quantity  = quantity;
    }

    toString()
    {
        return "{" + this.product.toString() + "}, \n" +
            " quantity: " + this.quantity;
    }

    total()
    {
        return this.product.Price * this.quantity;
    }
}

class Cart
{
    constructor(lines = [], itemCount = 0, cartPrice = 0)
    {
        this.lines = lines;
        this.itemCount = itemCount;
        this.cartPrice = cartPrice;
    }

    toString() 
    {
        let outputString = "";
        let count = 0;
        
        for(let line of this.lines)
        {
        outputString += "{" + line.toString();
        count++;
        outputString += (count > this.lines.length) ? "}, \n" : "} \n";
        }
        outputString += ", itemCount: " + this.itemCount + "\n";
        outputString += ", cartPrice: " + this.cartPrice;
        return outputString;
    }

    addLine(line)
    {
        this.lines.push(line);
        this.cartPrice += line.total();
    }

    empty()
    {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }
}

module.exports.Cart = Cart;
module.exports.Line = Line;
module.exports.Product = product;