const products=[
    {id:1 , product_name:"Asus Laptop " , price:20000 },
    {id:2 , product_name:"Asus Mobile " , price:20000 },
    {id:3 , product_name:"HP Laptop " , price:20000 },
    {id:4 , product_name:"Lebevo Tab " , price:20000 },
    {id:5 , product_name:"Lebevo Laptop " , price:20000 },
    {id:6 , product_name:"Samsung Galaxy " , price:20000 }

]
function product_serach(products,search){
    const matched=[];
    for (const product of products) {
        if (product.product_name.toLowerCase().includes(search.toLowerCase())){
           matched.push(product);
        };
    }
    return matched;
}



 const Search=product_serach(products,  "aSus");
 console.log(Search);