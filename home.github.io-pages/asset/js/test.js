document.getElementById('button2').addEventListener('click',getJson);
function getJson(){
  fetch("data1.json")
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        let output = '';
        // data.sents.forEach((post) => {
        //   output += `<li>${post.content}</li>`;
        // })
        var num = Math.round(Math.random() * (2299 - 201)) +201;
        output= data.sents[num].content
        document.getElementById('description').innerHTML = output;
        alert("something");
      })
      .catch(err => console.log(err));
}