//real-time listener
db.collection('formData').onSnapshot((snapshot)=>{
  console.log(snapshot.docChanges()); 
})