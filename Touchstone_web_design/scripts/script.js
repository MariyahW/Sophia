let calend = document.querySelector("#currentCalendar");

let months = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
monthsName = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};
const date = new Date();
// console.log(date);

const month = date.getMonth() + 1;
const year = date.getFullYear();
const day = date.getDate();

let topRow = document.createElement("tr");
calend.appendChild(topRow).innerText = `${monthsName[month]} Community Involvement Calendar`;

topRow.style.textAlign='center';
// console.log(month);
// console.log(year);
// console.log(day);

let activities = {
  1: "Group Yoga at the Park",
  2: "Group Pilates at Senior Building ",
  3: "Reading at local school ",
  7: "Free Gym",
};

let num = 0;
let runningDate=1;
while (num +1< months[month] / 7) {
  let row = document.createElement("tr");
  row.innerHTML = `week ${num + 1}`;
  for (let j = 0; j <= 7; j++) {
    // console.log(j);
    let col = document.createElement("td");
    col.innerHTML = `${runningDate}`;
    runningDate++;
    for (const text in activities) {
      if (j == text) {
        col.innerHTML +=` ${activities[text] }`;
        if(runningDate>months[month]){
            console.log(months[month]);
            break;
            
        }
      }
      
    }
    if(runningDate-1>months[month]){
        console.log(months[month]);
        break;
        
    }
    
    row.appendChild(col);
  }
  calend.appendChild(row);
  num++;
}
