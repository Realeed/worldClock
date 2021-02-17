addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundImage = 'url(b1.jpg)';   //styling the body
    document.body.style.backgroundSize = '100%';
    document.body.style.margin = '1%';
    let NY = document.createElement('button');        //creates button for New York time
    NY.innerHTML = 'New York Time';
    NY.style.width = '430px';
    NY.style.fontSize = '50px';
    NY.style.cursor = 'pointer';
    document.body.appendChild(NY);
    NY.onclick = () => {
        //styling the body when New York time is clicked

        document.body.style.width = '35%';                 
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';

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
    LA.style.width = '500px';
    LA.style.fontSize = '50px';
    LA.style.cursor = 'pointer';
    LA.style.marginLeft = '1%';
    document.body.appendChild(LA);
    LA.onclick = () => {
        //styling the body when LA time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';

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
    SF.style.width = '510px';
    SF.style.fontSize = '50px';
    SF.style.cursor = 'pointer';
    SF.style.marginLeft = '1%';
    document.body.appendChild(SF);
    SF.onclick = () => {
        //styling the body when SF time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';

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
    let HS = document.createElement('button');                     //creates button for Houston time
    HS.innerHTML = 'Houston Time';
    HS.style.width = '430px';
    HS.style.marginTop = '1%'
    HS.style.fontSize = '50px';
    HS.style.cursor = 'pointer';
    document.body.appendChild(HS);
    HS.onclick = () => {
        //styling the body when Houston time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';

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
            hour = t.getHours() - 10;
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
    let LD = document.createElement('button');                     //creates button for London time
    LD.innerHTML = 'London Time';
    LD.style.width = '500px';
    LD.style.marginTop = '1%';
    LD.style.marginLeft = '1%';
    LD.style.fontSize = '50px';
    LD.style.cursor = 'pointer';
    document.body.appendChild(LD);
    LD.onclick = () => {
        //styling the body when London time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';

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
            hour = t.getHours() - 4;
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
    let PS = document.createElement('button');                     //creates button for Paris time
    PS.innerHTML = 'Paris Time';
    PS.style.width = '510px';
    PS.style.marginTop = '1%';
    PS.style.marginLeft = '1%';
    PS.style.fontSize = '50px';
    PS.style.cursor = 'pointer';
    document.body.appendChild(PS);
    PS.onclick = () => {
        //styling the body when Paris time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';

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
            hour = t.getHours() - 3;
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