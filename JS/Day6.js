// const hello =()=> {

//     console.log("Hello World")
// }


// hello()



let marks = {

    vinay : 40,
    Akash : 50,
    Daulat : 60,
    Ajay : 70



}

// for(let i=0 ;i<Object.keys(marks).length;i++)
// {

//     console.log("Marks of "+ Object.keys(marks)[i] + " are "+ marks[Object.keys(marks)[i]])
// }


for (let key in marks){

    console.log("marks of "+key+ " Are " + marks[key])
}