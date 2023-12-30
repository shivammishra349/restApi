function storage(event){
    event.preventDefault()
   let name=event.target.name.value;
   let email=event.target.email.value;
   let contact=event.target.tel.value;


   //this is single call method
    // localStorage.setItem('username',name);
    // localStorage.setItem('email',email);
    // localStorage.setItem('Phone number',contact)
    
    


    //this is object creating method so that we can access all data within object

    let obj={
        name:name,
        email:email,
        phone:contact
    }
    axios.post("https://crudcrud.com/api/cbd93a6cd6544a79b5f71a949da42b39/AppoinmentApp",obj)
    .then((res)=>{
        showUserOnScreen(res.data)  
        console.log(res.data)
    })
    .then((err)=>{
        console.log(err)
    })

    
    
    // localStorage.setItem('userdetail',JSON.stringify(obj))
    // showUserOnScreen(obj)  
}
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/cbd93a6cd6544a79b5f71a949da42b39/AppoinmentApp")
    .then((res)=>{
        console.log(res)

        for(let i=0;i<res.data.length;i++)
        {
            showUserOnScreen(res.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)
    })
})
function showUserOnScreen(obj){
    let ParentEle=document.getElementById('listOfItem');

    let childEle=document.createElement('li');

    childEle.textContent=obj.name +"    " +obj.email +"      "+obj.phone;

    let deleteBut=document.createElement('input');
    deleteBut.type="button";
    deleteBut.value="Delete";
    childEle.appendChild(deleteBut);
    ParentEle.appendChild(childEle)

    deleteBut.onclick=()=>{
            localStorage.removeItem(obj.userdetail);
            ParentEle.removeChild(childEle)
    }


    //Edit button and functionality

    let editbut=document.createElement('input');
    editbut.type="button";
    editbut.value="edit";
    childEle.appendChild(editbut);
    ParentEle.appendChild(childEle)


   
    editbut.onclick=()=>{
        localStorage.removeItem(obj.userdetail);
        ParentEle.removeChild(childEle)
         let name=  document.getElementById('name').value=obj.name;
         document.getElementById('email').value=obj.email;
         document.getElementById('phone').value=obj.phone
    }
}