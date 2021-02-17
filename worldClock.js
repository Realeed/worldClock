addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundImage = 'url(b1.jpg)';   //styling the body
    document.body.style.backgroundSize = '100%';
    document.body.style.margin = '2%';
    let newYork = document.createElement('button');        //creates button for New York time
    newYork.innerHTML = 'New York Time';
    newYork.style.width = '450px';
    newYork.style.fontSize = '50px';
    newYork.style.cursor = 'pointer';
    document.body.appendChild(newYork);
    newYork.onclick = () => {
        //styling the body when New York time is clicked

        document.body.style.width = '35%';                 
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-5%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';
        newYork.style.display = 'none';
        LA.style.display = 'none';
        SF.style.display = 'none';
        let date = document.createElement('p');
        
        //getting the date
        let t = new Date();                               
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = (month + 1) + '/' + day + '/' + year;
        date.style.fontSize = '140px';
        date.style.color = 'gray';
        document.body.appendChild(date);
        let time = document.createElement('p');
        time.style.fontSize = '150px';

        //getting the time
        let upd = () => {
            let t = new Date();
            hour = t.getHours() - 9;
            minute = t.getMinutes();
            second = t.getSeconds();
            if (second < 10) {
                second = '0' + second;
            };
            if (minute < 10) {
                minute = '0' + minute;
            };
            if (hour < 0) {
                hour = 24 + hour;
                date.innerHTML = (month + 1) + '/' + (day - 1) + '/' + year;
            }
            if (hour < 10) {
                hour = '0' + hour;
            }
            time.innerHTML = hour + ':' + minute + ':' + second;
        }

        //setting interval for time to be updated every second
        setInterval(upd, 0);
        document.body.appendChild(time);
        let other = document.createElement('button');
        other.innerHTML = 'See for another country';
        other.style.width = '540px';
        other.style.height = '75px';
        other.style.fontSize = '42px';
        other.style.cursor = 'pointer';
        document.body.appendChild(other);
        other.onclick = () => {
            window.location.reload();
        }
    }  
    let LA = document.createElement('button');                //creates button for LA time
    LA.innerHTML = 'Los Angeles Time';
    LA.style.width = '520px';
    LA.style.fontSize = '50px';
    LA.style.cursor = 'pointer';
    LA.style.marginLeft = '2%';
    document.body.appendChild(LA);
    LA.onclick = () => {
        //styling the body when LA time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-5%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';
        newYork.style.display = 'none';
        LA.style.display = 'none';
        SF.style.display = 'none';
        let date = document.createElement('p');

        //getting the date
        let t = new Date();
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = (month + 1) + '/' + day + '/' + year;
        date.style.fontSize = '140px';
        date.style.color = 'gray';
        document.body.appendChild(date);
        let time = document.createElement('p');
        time.style.fontSize = '150px';

        //getting the time
        let upd = () => {
            let t = new Date();
            hour = t.getHours() - 12;
            minute = t.getMinutes();
            second = t.getSeconds();
            if (second < 10) {
                second = '0' + second;
            };
            if (minute < 10) {
                minute = '0' + minute;
            };
            if (hour < 0) {
                hour = 24 + hour;
                date.innerHTML = (month + 1) + '/' + (day - 1) + '/' + year;
            }
            if (hour < 10) {
                hour = '0' + hour;
            }
            time.innerHTML = hour + ':' + minute + ':' + second;
        }

        //setting interval for time to be updated every second
        setInterval(upd, 0);
        document.body.appendChild(time);
        let other = document.createElement('button');
        other.innerHTML = 'See for another country';
        other.style.width = '540px';
        other.style.height = '75px';
        other.style.fontSize = '42px';
        other.style.cursor = 'pointer';
        document.body.appendChild(other);
        other.onclick = () => {
            window.location.reload();
        }
    }
    let SF = document.createElement('button');                     //creates button for SF time
    SF.innerHTML = 'San Francisco Time';
    SF.style.width = '550px';
    SF.style.fontSize = '50px';
    SF.style.cursor = 'pointer';
    SF.style.marginLeft = '2%';
    document.body.appendChild(SF);
    SF.onclick = () => {
        //styling the body when SF time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-5%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';
        newYork.style.display = 'none';
        LA.style.display = 'none';
        SF.style.display = 'none';
        let date = document.createElement('p');

        //getting the date
        let t = new Date();
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = (month + 1) + '/' + day + '/' + year;
        date.style.fontSize = '140px';
        date.style.color = 'gray';
        document.body.appendChild(date);
        let time = document.createElement('p');
        time.style.fontSize = '150px';

        //getting the time
        let upd = () => {
            let t = new Date();
            hour = t.getHours() - 12;
            minute = t.getMinutes();
            second = t.getSeconds();
            if (second < 10) {
                second = '0' + second;
            };
            if (minute < 10) {
                minute = '0' + minute;
            };
            if (hour < 0) {
                hour = 24 + hour;
                date.innerHTML = (month + 1) + '/' + (day - 1) + '/' + year;
            }
            if (hour < 10) {
                hour = '0' + hour;
            }
            time.innerHTML = hour + ':' + minute + ':' + second;
        }

        //setting interval for time to be updated every second
        setInterval(upd, 0);
        document.body.appendChild(time);
        let other = document.createElement('button');
        other.innerHTML = 'See for another country';
        other.style.width = '540px';
        other.style.height = '75px';
        other.style.fontSize = '42px';
        other.style.cursor = 'pointer';
        document.body.appendChild(other);
        other.onclick = () => {
            window.location.reload();
        }
    }
})