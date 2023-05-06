function addMessage() {
   tmessage = document.getElementById("message").value;
   firstname = document.getElementById("name").value;  
   let important = document.getElementById("important").checked;
   let date = new Date();
   let d = date.getDate();
   let day = d.toString();
   let m = date.getMonth();
   let month = m.toString();
   let y = date.getFullYear();
   let year = y.toString();
   let stringdate = day + "." + month + "." + year;

    if (firstname==="") {
        document.getElementById("alert").innerHTML = "Please write your name!";
        document.getElementById("alert").style.display="block";
    }
    if (tmessage==="") {
        document.getElementById("alert").innerHTML = "Please write a message!";
        document.getElementById("alert").style.display="block";
    }
    else {
        let allMessages = [
            {
                message: document.getElementById("message").value,
                fname: document.getElementById("name").value,
                date: stringdate,
                important: important
            }
        ]
        let element = document.getElementById("messagetable");
        let html = "<tbody>";

        for (let i=0; i<allMessages.length; i++) {
            if (allMessages[i].important==true) {
                html = "<tbody class=important>";
                html += "<td>" + "&nbsp" + allMessages[i].date + "&nbsp" + "&nbsp" + "</td>";
                html += "<td>" + "(" + allMessages[i].fname + ")" + "</td>";
                html += "<tr>";
                html += "<td>" + allMessages[i].message + "</td>";
                html += "<tr>";   
            }
            else {
            html += "<td>" + "&nbsp" + allMessages[i].date + "&nbsp" + "&nbsp" + "</td>";
            html += "<td>" + "(" + allMessages[i].fname + ")" + "</td>";
            html += "<tr>";
            html += "<td>" + allMessages[i].message + "</td>";
            html += "<tr>";   
            }
        }

        document.forms[0].reset();  
        html +="</tbody>";
        element.innerHTML += html;
        }
}   
