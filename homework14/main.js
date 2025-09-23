const user = {
    alyona: {
        age:23,
        city: 'Saint-Petersburg',
        sayHello(name){
            console.log(`Hello ${name}`)
        }
    }
    }
    console.log(user.alyona)
    user.alyona.sayHello('Alyona')

    
    
    const users=[
        {name:'Lera', age:30, isAdmin:false},
        {name:'Polina', age:18, isAdmin:false},
        {name:'Sasha', age:27, isAdmin:false},
        {name:'Dima', age:22, isAdmin:true},
        {name:'Inna', age:43, isAdmin:false},
        {name:'Artyom', age:19, isAdmin:false},
        {name:'Petr', age:43, isAdmin:true},
        {name:'Alexey', age:19, isAdmin:false},
        {name:'Masha', age:29, isAdmin:true},
        {name:'Marina', age:34, isAdmin:false},
        {name:'Olga', age:40, isAdmin:false},
        {name:'Kolya', age:18, isAdmin:false},
    ]
    let numberUsers = 0
    for(let i=0; i<users.length;i++){
        if (users[i].isAdmin !== true) {
            numberUsers++
        }
    }
    console.log (numberUsers)


