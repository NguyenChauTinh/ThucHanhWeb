// fetch("https://fakestoreapi.com/products").then((data)=>{
//     return data.json();
// }).then((objectData)=>{
//     let tableData = "";
//     objectData.map((values)=>{
//         console.log(objectData[0].title)
//         tableData += 
//         `<tr>
//         <td>1</td>
//         <td>Nguyen</td>
//         <td>Tinh</td>
//         <td>20</td>
//         </tr>`;
//     });
//     document.getElementById("table_body").innerHTML=tableData;
// })

fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();
}).then((objectData)=>{
    let tableData = "";
    objectData.map((values)=>{
        // console.log(objectData[0].title)
        tableData += 
        `<tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"></td>
        </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
})