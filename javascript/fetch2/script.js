fetch('https://jsonplaceholder.typicode.com/posts')
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
console.log("response :"+data)
console.log("id :"+data.id)
console.log("title: "+data.title)
console.log("title: "+data.body)

const tableBody=document.getElementById('table-body');

data.forEach(e => {

const row=document.createElement('tr');

row.innerHTML= `
<td>${e.id}</td>
<td>${e.title}</td>
<td>${e.body}</td>
<td><button class="btn btn-primary" onclick="showDetail(${e.id})">Detay</button></td>
`
tableBody.appendChild(row);
});

}
function showDetail(id) {
    console.log('Detaylar için id: ', id);
}
