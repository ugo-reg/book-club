function date(){
    let now= new Date();
    let dateNum= now.getDate();
    let year= now.getFullYear();
    let hour= now.getHours();
    let minutes= now.getMinutes();
    let seconds= now.getSeconds();
    let days= ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day= days[now.getDay()];
    let months=[
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    let month= months[now.getMonth()];
    if (minutes < 10){
        minutes = `0${minutes}`;
    }
    if (hour < 10){
        hour = `0${hour}`;
    }

    let date= document.getElementById("current-date");
    if (date){
    date.innerHTML= `${day} ${month} ${dateNum},<br> <br> ${hour}: ${minutes} :${seconds}`;

}
}
date()