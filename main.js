// Returns the number of minutes in hours and minutes

let value = parseInt(prompt('Enter a number:'));
function hour(value) {
    let hour = value / 60;
    let hours = Math.floor(hour);
    // console.log(hours);
    let minutes = (hour - hours) * 60;
    // console.log(minutes);
    let minute = Math.round(minutes);
    // console.log(minute);
    var time = `${minutes} = ${hours} hour and ${minute} minutes`;
    console.log(time);
    return time;
}
hour(value);
