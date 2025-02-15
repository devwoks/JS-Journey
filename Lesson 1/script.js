document.getElementById("myButton").addEventListener("click", function() {
    let name = document.getElementById("userName").value;
    document.getElementById("result").innerHTML = "Hello, " + name + "!";
  });

  console.log('Script is linked properly');