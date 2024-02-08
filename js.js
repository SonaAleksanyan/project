

let users = [ {
    id:1,
    name: "John",
    age: 25,
    status:"admin",
    qountProduct:"",
  },
  
  { id:2,
    firstName: "Davo",
    age: 50,
    status:"underAdmin",
    qountProduct:"",
  },
  { id:3,
    firstName: "Gago",
    age: 55,
    status:'manager',
    qountProduct:"",
    
  },
   { id:4,
    firstName: "Lyosha",
    age: 45,
    status:'manager',
    qountProduct:"",
  },
 {  id:5,
    firstName: "Narek",
    age: 34,
    status:'banvor',
    qountProduct:"",
  },
   { id:6,
    firstName: "Mher",
    age: 32,
    status:'banvor',
    qountProduct:"",
  },
   { id:7,
    firstName: "Karen",
    age: 60,
    status:'banvor',
    qountProduct:"",
  },
   { id:8,
    firstName: "Serj",
    age: 18,
    status:'banvor',
    qountProduct:"",
  },
   { id:9,
    firstName: "Sona",
    age: 20,
    status:'banvor',
    qountProduct:"",
  },
   { id:10,
    firstName: "Nastya",
    age: 30,
    status:'banvor',
    qountProduct:"",
  },]

  const work = [
    {admin:[]},
    {anderAdmin:[]},
    {manager:[]},
    {banvor:[]},
  ]
  // users[5].qountProduct = 500
  users.map ((e,i)=>{
    e.status ==='banvor'? work[3].banvor.push(e):""
    e.status ==='manager'? work[2].manager.push(e):""
    e.status ==='underAdmin'? work[1].anderAdmin.push(e):""
    e.status ==='admin'? work[0].admin.push(e):""
  })
// console.log(work);
let dey = 0
 setInterval(()=>{
  dey++
  if(dey === 7){
 
  }
  console.log(dey);
  work[3].banvor.map( e=>{
    e.qountProduct += Math.floor(Math.random()*100)+1
 })
 console.log(work[3].banvor);
},2400)



const group1 =[]
const group2 =[]

group1[0]= work[2].manager[work[2].manager.length/2-1]
group2[0]= work[2].manager[work[2].manager.length/2]
group1[1] =[]
group2[1] =[]
 work[3].banvor.map((e,i)=>{
    i<work[3].banvor.length/2 ? group1[1].push(e):group2[1].push(e)
})
console.log(group1);
console.log(group2);

function random (){
return Math.floor(Math.random()*101);

}
console.log(random());




console.log(typeof alert);

