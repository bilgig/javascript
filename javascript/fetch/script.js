fetch('https://dummyjson.com/products')
.then(response =>{
    if(!response.ok){
        throw new Error('API isteği başarısız. Durum kodu: '+response.status)
    }
    return response.json();
})
.then(data=>{
    updateTable(data);

})
.catch(error=> {
    console.error(error)
})
function updateTable(data){
console.log("response :"+data.products)
console.log("id :"+data.products.id)
console.log("title: "+data.products.title)
const tableBody=document.getElementById('table-body');

data.products.forEach(e => {

const row=document.createElement('tr');

row.innerHTML= `
<td>${e.id}</td>
<td>${e.title}</td>
<td>${e.price}</td>
`
tableBody.appendChild(row);
});

/*for(let i=0;i<data.products.lenght;i++){
    const row=document.createElement('tr');
    row.innerHTML= `
    <td>${data.products.id}</td>
    <td>${data.products.title}</td>
    <td>${data.products.price}</td>
    `
    tableBody.appendChild(row);
}*/

}
