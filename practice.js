
//ADD YOUR FIREBASE LINKS






















function addUser()
{

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update
    ({
        Name: "Adding another user"
    });
}

function clear()
{
    document.getElementById("user_name").value=" ";
}