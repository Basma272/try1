
let productName=document.getElementById("productName")
let productPrice=document.getElementById("productPrice")
let productCateg=document.getElementById("productCateg")
let productDescription=document.getElementById("productDescription")
let Inputsearch=document.getElementById("inputsearch")
let productlist=[]

if(localStorage.getItem('product')!=null){
    productlist= JSON.parse(localStorage.getItem('product'))  
    display()
}

 
function addProduct(){

    var product={
        name:productName.value,
        price:productPrice.value,
         categ:productCateg.value,
        desc:productDescription.value,

    }
    productlist.push(product)


    display()

    clear()

}



function clear(){
    productName.value=''
    productPrice.value=''
    productCateg.value=''
productDescription.value=''

}


function display(){
    localStorage.setItem('product',JSON.stringify(productlist))

    let cartona=""


    for(var i=0;i<productlist.length;i++){

        cartona+=`<tr>
       <td>${productlist[i].name}</td>
       <td>${productlist[i].price}</td>
       <td>${productlist[i].categ}</td>
       <td>${productlist[i].desc}</td>
        <td><button onclick="Delete(${i})"> delete</button></td>
       </tr>

    
    `;
    document.getElementById('hello').innerHTML=cartona
    }

}
function Delete(index) {
    productlist.splice(index,1)
    display()
    

}

function search() {
    ''.toLowerCase
    let inputvalue=Inputsearch.value
    let cartona=''
    for(var i=0;i<productlist.length;i++){
        if(productlist[i].name.toLowerCase().includes(inputvalue.toLowerCase() )){
          cartona+=`<tr>
            <td>${productlist[i].name}</td>
            <td>${productlist[i].price}</td>
            <td>${productlist[i].categ}</td>
            <td>${productlist[i].desc}</td>
             <td><button onclick="Delete(${i})"> delete</button></td>
            </tr>
     
         
         `;
         document.getElementById('hello').innerHTML=cartona
        }
      
    }

  

}
// function kkk(){
//     let productlist= JSON.parse(localStorage.getItem('product'))
//     let cartona=""


//     for(var i=0;i<productlist.length;i++){

//         cartona+=`<tr>
//        <td>${productlist[i].name}</td>
//        <td>${productlist[i].price}</td>
//        <td>${productlist[i].categ}</td>
//        <td>${productlist[i].desc}</td>
//         <td><button onclick="Delete(${i})"> delete</button></td>
//        </tr>

    
//     `;
//     document.getElementById('hello').innerHTML=cartona
//     }
//     console.log (productlist)

// }
// kkk()
