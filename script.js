
// const data={
//     title:"hello",
//     body:"body",
//     user_id:1
// }
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     body: JSON.stringify(data),
//     headers: {
//         'Content-Type': 'application/json'
//     }

// })
// .then(res => res.json())
// .then(data => console.log(data));



function authenticate() {
    var loginId = document.getElementById("loginId").value;
    var password = document.getElementById("password").value;

    var authEndpoint = "https://corsproxy.io/?https%3A%2F%2Fqa2.sunbasedata.com%2Fsunbase%2Fportal%2Fapi%2Fassignment_auth.jsp";

    
    var requestBody = {
        "login_id": loginId,
        "password": password
    };
    //console.log(requestBody);

    fetch(authEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
         var token = data.access_token;
         localStorage.setItem('token', token);
         redirectToPage();
        
    })
    .catch(error => {
        alert("Invalid email ID or Password");
        console.error('Error during authentication:', error);
    });
}
function redirectToPage() {

    window.location.href = 'customer.html';
 
}



