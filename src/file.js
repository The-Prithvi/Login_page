function login(){
    var a = document.getElementById("un").value;
    var b = document.getElementById("pw").value;
    if(a == "prithvi20" &&  b == "1234"){
        location.assign("http://127.0.0.1:5500/src/action.html");
    }
    else{
        window.alert("Username or Password is incorret");
    }
}
