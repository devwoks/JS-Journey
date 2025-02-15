document.getElementById("myButton").addEventListener("click", function() {
    let name = document.getElementById("userName").value;
    document.getElementById("output").innerHTML = "Hello, " + name + "!";
  });

  console.log('Script is linked properly');