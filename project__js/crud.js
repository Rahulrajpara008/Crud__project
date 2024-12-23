//data insert
let allData = []
const saveData = ()=>{
    //check how many records are there in localstorage
    let getData = JSON.parse(localStorage.getItem("userdata"))
    let len = getData!= null ? getData.length+1: 1
    let name = document.getElementById('name').value
    let age = document.getElementById('age').value
    let course= document.getElementById('course').value
    let id = document.userfrm.userid.value
    if(id!=''){
        let res = getData.map((i)=>{
                if(i.id == id){
                    i.name = name
                    i.age = age
                    i.course = course
                }
                return i
        })
        allData = res
    } else {
        let obj = {
            id:len,
            name:name,
            age:age,
            course:course
        }
        allData.push(obj)
        console.log(allData);
    }
    
    localStorage.setItem("userdata",JSON.stringify(allData))
    document.userfrm.reset()
    display()
}
const display =()=>{
    let tr = ''
    let getData = JSON.parse(localStorage.getItem("userdata"))
    getData.map((i)=>{
        tr+= `
            <tr>
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td>${i.age}</td>
                <td>${i.course}</td>
                <td>
                    <button id="edittbtn" onclick='editData(${i.id})'>Edit</button>
                    <button id="deletebtn" onclick='delData(${i.id})'>Delete</button>
                </td>
            </tr>
        `
    })
    document.getElementById('alldata').innerHTML = tr
}
const delData = (id)=>{
    let getData = JSON.parse(localStorage.getItem("userdata"))
    let res = getData.filter((i)=>{
            return i.id != id
    })
    localStorage.setItem("userdata",JSON.stringify(res))
    display()
}
const editData = (id)=>{
    let getData = JSON.parse(localStorage.getItem("userdata"))
    let res = getData.find((i)=>{
            return i.id == id
    })
    document.getElementById('name').value = res.name
    document.getElementById('age').value = res.age
    document.getElementById('course').value = res.course
    document.userfrm.userid.value = res.id
}
display()