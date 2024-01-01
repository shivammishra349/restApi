function clickhere(event){
    event.preventDefault();
    let name=event.target.name.value;
    let description=event.target.description.value;
    let price=event.target.price.value;
    let quantity=event.target.qty.value;

    let obj={
        name:name,
        description:description,
        price:price,
        quntity:quantity
    }

    axios.post("https://crudcrud.com/api/9e94bff09b374b0998a416a253b0f1d5/crud",obj)
    .then((res)=>{
        showUser(res.data)
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}


    axios.get("https://crudcrud.com/api/9e94bff09b374b0998a416a253b0f1d5/crud")
    .then((res)=>{
        for(let i=0;i<res.data.length;i++)
        {
            showUser(res.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)
    })

function showUser(obj){
    
    let parent=document.getElementById('candylist');
    let Child=document.createElement('li');
    Child.textContent=obj.name+" "+obj.description+" "+obj.price+" "+obj.quntity
    
    
    let buy1=document.createElement('input');
    buy1.type="button";
    buy1.value="buy1";
    buy1.class="buy1"
    Child.appendChild(buy1);
    parent.appendChild(Child);

    
    let buy2=document.createElement('input');
    buy2.type="button";
    buy2.value="buy2";
    buy2.class="buy2"
    Child.appendChild(buy2);
    parent.appendChild(Child);


    let buy3=document.createElement('input');
    buy3.type="button";
    buy3.value="buy3";
    Child.appendChild(buy3);
    parent.appendChild(Child)


}