// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyA7oNh1OvDKLlKckEJpFwswy2kg_aULyCg",
    authDomain: "secrojas-coder.firebaseapp.com",
    projectId: "secrojas-coder"
});
  
var db = firebase.firestore();

function guardar()
{
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var category_id = document.getElementById('category_id').value;
    var type_id = document.getElementById('type_id').value;
    var price = document.getElementById('price').value;
    var stock = document.getElementById('stock').value;
    var image = document.getElementById('image').value;

    db.collection("items").add({
        title:title,
        description:description,
        category_id:category_id,
        type_id:type_id,
        price:price,
        stock:stock,
        image:image
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('title').value='';
        document.getElementById('description').value='';
        document.getElementById('category_id').value='';
        document.getElementById('type_id').value='';
        document.getElementById('price').value='';
        document.getElementById('stock').value='';
        document.getElementById('image').value='';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}

var tabla = document.getElementById('tabla');
db.collection("items").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().title}`);
        tabla.innerHTML += `
            <tr>
                <td scope="row">${doc.data().title}</td>
                <td>${doc.data().description}</td>
                <td>${doc.data().category_id}</td>
                <td>${doc.data().type_id}</td>
                <td>${doc.data().price}</td>
                <td>${doc.data().stock}</td>
                <td>${doc.data().image}</td>
            </tr>
        `
    });
});

var tabla2 = document.getElementById('tabla-orders');
db.collection("orders").onSnapshot((querySnapshot) => {
    tabla2.innerHTML='';
    querySnapshot.forEach((doc) => {
        
        tabla2.innerHTML += `
            <tr>
                <td scope="row">${doc.id}</td>
                <td scope="row">${doc.data().total}</td>                
            </tr>
        `
    });
});

