import faker from 'faker';



const mount = (element) =>{
  let products = '';

  for(let i = 0;  i < 5; i++){
    const name =  faker.commerce.productName();
    products += `<div>${name}</div>`
  }

  element.innerHTML = products;

};


// situacao 1
// nos estamos rodando este arquivo em desenvolvimento com isolamento
// nos estamos usando nosso index.html 
// que definitivamente tem um elemento com o id 'dev-products' 
// nos queremos mostrar os elementos do app dentro desse elemento 

if (process.env.NODE_ENV === 'development'){
  const element = document.querySelector("#dev-products");
  if(element){
    mount(element);
  }
}


// situação 02 
// nos estamos rodando esse arquivo em produção no container app 
// sem garantia que o elemento 'dev-products' exista
// nos não queremos renderizar o app imediatamente

export { mount };