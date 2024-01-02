function crud(event){
    event.preventDefault();
    let price=event.target.num.value;
    let name=event.target.name.value;
    
    let obj={
        price:price,
        name:name
    }
    axios.post("https://crudcrud.com/api/df60a62ac2a94283bffff70624bb72f6/ecom",obj)
    .then((res)=>{
        showuser(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}
axios.get("https://crudcrud.com/api/df60a62ac2a94283bffff70624bb72f6/ecom")
.then((res)=>{
    for(let i=0;i<res.data.length;i++)
    {
        showuser(res.data[i])
    }
})
.catch((err)=>{
    console.log(err)
})

function showuser(obj){
    let parent=document.getElementById('listItem');
    let child=document.createElement('li');
    child.textContent=obj.price+" - "+ obj.name;

    let deletebut=document.createElement('input');
    deletebut.type="button";
    deletebut.value="Delete Product"

    child.appendChild(deletebut);
    parent.appendChild(child)

    let count=0;
    let total=document.getElementById('num').value;
    count=count+total;
    console.log(count)
    
    

    deletebut.addEventListener('click',deleteuser)

    function deleteuser(){
        axios.delete(`https://crudcrud.com/api/df60a62ac2a94283bffff70624bb72f6/ecom/${obj._id}`)
        .then(()=>{
            parent.removeChild(child)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}