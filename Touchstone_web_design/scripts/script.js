let calend = document.querySelector("#currentCalendar");


let topRow=document.createElement("tr");
calend.appendChild(topRow).innerText="test";


const date = new Date();
console.log(date);

const month = date.getMonth()+1;
const year = date.getFullYear();
const day = date.getDate();


console.log(month);
console.log(year);
console.log(day);


let activities = {
1:"Group Yoga at the Park",
2:"Group Pilates at Senior Building ",
3:"Reading at local school ",
7:"Free Gym",
}

let months={
    1:31,
    2:28,
    3:31,
    4:30,
    5:31,
    6:30,
    7:31,
    8:31,
    9:30,
    10:31,
    11:30,
    12:31
}

let num = 0;
while(num<months[month]){
    let row=document.createElement('tr');
    for(let j=0; j<7;j++){
        let col=document.createElement('td');
        for(const x in months){
            if(x==j){
                col.innerHTML=months[x];
            }
        }
        row.appendChild(col)
    }
    calend.appendChild(row);
}