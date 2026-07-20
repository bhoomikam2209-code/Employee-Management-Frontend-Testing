function login(){

    let username=document.getElementById("username").value;

    let password=document.getElementById("password").value;

    if(username=="admin" && password=="admin123"){

        window.location="dashboard.html";

    }

    else{

        document.getElementById("message").innerHTML="Invalid Username or Password";

    }

}function logout(){

    alert("Logged Out Successfully");

    window.location="login.html";

}