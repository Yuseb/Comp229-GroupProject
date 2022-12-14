export class Product
{
  constructor(
    // tslint:disable-next-line: variable-name
    public _id?: number,
    public Product_Name?: string,
    public Brand?: string,
    public Size?: string,
    public Description?: string,
    public Price?: number
  ){}

  public toString(): string
  {
    return `
    Product
    -------------------------------
    Name       : ${this.Product_Name}
    Brand      : ${this.Brand}
    Size       : ${this.Size}
    Description: ${this.Description}
    Price      : ${this.Price}
    -------------------------------
    `;
  }
}


