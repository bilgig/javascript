const postForm=document.getElementById('post-form');
postForm.addEventListener('submit', function(event){
event.preventDefault();
const title=document.getElementById('title').value;
const body=document.getElementById('body').value;

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
        title,
        body,
        user:1,
    }),
    headers:{
        'Content-type':'application/json; charset=UTF-8',
    },
})
.then((response)=>{
    if(!response.ok){
    throw new Error('Gönderi oluşturma başarısız.Durum Kodu:'+ response.status);
    }
    return response.json();
})
.then((json)=>{
    console.log('Oluşturulan Gönderi:', json);
    alert('Gönderi başarıyla oluşturuldu!');
    postForm.reset();
})
.catch((error)=>{
    console.error(error);
});

});