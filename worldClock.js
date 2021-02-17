addEventListener('DOMContentLoaded', () => {
    document.title = 'World Clock';
    document.body.style.backgroundImage = 'url(b1.jpg)';   //styling the body
    document.body.style.overflow = 'hidden';
    document.body.style.backgroundSize = '100%';
    document.body.style.marginLeft = '2%';
    document.body.style.fontFamily = '"Brush Script MT", cursive';
    let other = document.createElement('button');
    other.innerHTML = 'See for another country';
    other.style.width = '500px';
    other.style.height = '65px';
    other.style.fontSize = '38px';
    other.style.cursor = 'pointer';
    let us = document.createElement('p');
    us.innerHTML = 'US Cities';
    us.style.fontSize = '60px';
    document.body.append(us);
    let NY = document.createElement('button');        //creates button for New York time
    NY.innerHTML = 'New York Time';
    NY.style.width = '430px';
    document.body.append(NY);
    NY.onclick = () => {
        //styling the body when New York time is clicked

        document.body.style.width = '35%';                 
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 12; i++) {
            let but = document.getElementsByTagName('button')[i];
            but.style.display = 'none';
        }
        for (let i = 0; i < 2; i++) {
            let text = document.getElementsByTagName('p')[i];
            text.style.display = 'none';
        }
        let date = document.createElement('p');
        
        //getting the date
        let t = new Date();                               
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = (month + 1) + '/' + day + '/' + year;
        date.style.fontSize = '140px';
        date.style.color = 'gray';
        document.body.append(date);
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
        document.body.append(time);
        document.body.append(other);
        other.onclick = () => {
            window.location.reload();
        }
    }  
    let LA = document.createElement('button');                //creates button for LA time
    LA.innerHTML = 'Los Angeles Time';
    LA.style.width = '500px';
    LA.style.marginLeft = '1%';
    document.body.append(LA);
    LA.onclick = () => {
        //styling the body when LA time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 12; i++) {
            let but = document.getElementsByTagName('button')[i];
            but.style.display = 'none';
        }
        for (let i = 0; i < 2; i++) {
            let text = document.getElementsByTagName('p')[i];
            text.style.display = 'none';
        }
        let date = document.createElement('p');

        //getting the date
        let t = new Date();
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = (month + 1) + '/' + day + '/' + year;
        date.style.fontSize = '140px';
        date.style.color = 'gray';
        document.body.append(date);
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
        document.body.append(time);
        document.body.append(other);
        other.onclick = () => {
            window.location.reload();
        }
    }
    let SF = document.createElement('button');                     //creates button for SF time
    SF.innerHTML = 'San Francisco Time';
    SF.style.width = '510px';
    SF.style.marginLeft = '1%';
    document.body.append(SF);
    SF.onclick = () => {
        //styling the body when SF time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 12; i++) {
            let but = document.getElementsByTagName('button')[i];
            but.style.display = 'none';
        }
        for (let i = 0; i < 2; i++) {
            let text = document.getElementsByTagName('p')[i];
            text.style.display = 'none';
        }
        let date = document.createElement('p');

        //getting the date
        let t = new Date();
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = (month + 1) + '/' + day + '/' + year;
        date.style.fontSize = '140px';
        date.style.color = 'gray';
        document.body.append(date);
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
        document.body.append(time);
        document.body.append(other);
        other.onclick = () => {
            window.location.reload();
        }
    }
    let HS = document.createElement('button');                     //creates button for Houston time
    HS.innerHTML = 'Houston Time';
    HS.style.width = '430px';
    HS.style.marginTop = '1%'
    document.body.append(HS);
    HS.onclick = () => {
        //styling the body when Houston time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 12; i++) {
            let but = document.getElementsByTagName('button')[i];
            but.style.display = 'none';
        }
        for (let i = 0; i < 2; i++) {
            let text = document.getElementsByTagName('p')[i];
            text.style.display = 'none';
        }
        let date = document.createElement('p');

        //getting the date
        let t = new Date();
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = (month + 1) + '/' + day + '/' + year;
        date.style.fontSize = '140px';
        date.style.color = 'gray';
        document.body.append(date);
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
        document.body.append(time);
        document.body.append(other);
        other.onclick = () => {
            window.location.reload();
        }
    } 
    let CG = document.createElement('button');                     //creates button for Chicago time
    CG.innerHTML = 'Chicago Time';
    CG.style.width = '500px';
    CG.style.marginTop = '1%';
    CG.style.marginLeft = '1%';
    document.body.append(CG);
    CG.onclick = () => {
        //styling the body when Chicago time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 12; i++) {
            let but = document.getElementsByTagName('button')[i];
            but.style.display = 'none';
        }
        for (let i = 0; i < 2; i++) {
            let text = document.getElementsByTagName('p')[i];
            text.style.display = 'none';
        }
        let date = document.createElement('p');

        //getting the date
        let t = new Date();
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = (month + 1) + '/' + day + '/' + year;
        date.style.fontSize = '140px';
        date.style.color = 'gray';
        document.body.append(date);
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
        document.body.append(time);
        document.body.append(other);
        other.onclick = () => {
            window.location.reload();
        }
    }
    let DC = document.createElement('button');                     //creates button for Washington time
    DC.innerHTML = 'Washington Time';
    DC.style.width = '510px';
    DC.style.marginTop = '1%';
    DC.style.marginLeft = '1%';
    document.body.append(DC);
    DC.onclick = () => {
        //styling the body when Washington time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 12; i++) {
            let but = document.getElementsByTagName('button')[i];
            but.style.display = 'none';
        }
        for (let i = 0; i < 2; i++) {
            let text = document.getElementsByTagName('p')[i];
            text.style.display = 'none';
        }
        let date = document.createElement('p');

        //getting the date
        let t = new Date();
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = (month + 1) + '/' + day + '/' + year;
        date.style.fontSize = '140px';
        date.style.color = 'gray';
        document.body.append(date);
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
        document.body.append(time);
        document.body.append(other);
        other.onclick = () => {
            window.location.reload();
        }
    }
    let europe = document.createElement('p');
    europe.innerHTML = 'Europe Cities';
    europe.style.fontSize = '60px';
    document.body.append(europe);
    let LD = document.createElement('button');                     //creates button for London time
    LD.innerHTML = 'London Time';
    LD.style.width = '430px';
    LD.style.marginTop = '1%';
    document.body.append(LD);
    LD.onclick = () => {
        //styling the body when London time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 12; i++) {
            let but = document.getElementsByTagName('button')[i];
            but.style.display = 'none';
        }
        for (let i = 0; i < 2; i++) {
            let text = document.getElementsByTagName('p')[i];
            text.style.display = 'none';
        }
        let date = document.createElement('p');

        //getting the date
        let t = new Date();
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = (month + 1) + '/' + day + '/' + year;
        date.style.fontSize = '140px';
        date.style.color = 'gray';
        document.body.append(date);
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
        document.body.append(time);
        document.body.append(other);
        other.onclick = () => {
            window.location.reload();
        }
    }
    let PS = document.createElement('button');                     //creates button for Paris time
    PS.innerHTML = 'Paris Time';
    PS.style.width = '500px';
    PS.style.marginTop = '1%';
    PS.style.marginLeft = '1%';
    document.body.append(PS);
    PS.onclick = () => {
        //styling the body when Paris time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 12; i++) {
            let but = document.getElementsByTagName('button')[i];
            but.style.display = 'none';
        }
        for (let i = 0; i < 2; i++) {
            let text = document.getElementsByTagName('p')[i];
            text.style.display = 'none';
        }
        let date = document.createElement('p');

        //getting the date
        let t = new Date();
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = (month + 1) + '/' + day + '/' + year;
        date.style.fontSize = '140px';
        date.style.color = 'gray';
        document.body.append(date);
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
        document.body.append(time);
        document.body.append(other);
        other.onclick = () => {
            window.location.reload();
        }
    }
    let BR = document.createElement('button');                     //creates button for Berlin time
    BR.innerHTML = 'Berlin Time';
    BR.style.width = '510px';
    BR.style.marginTop = '1%';
    BR.style.marginLeft = '1%';
    document.body.append(BR);
    BR.onclick = () => {
        //styling the body when Berlin time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 12; i++) {
            let but = document.getElementsByTagName('button')[i];
            but.style.display = 'none';
        }
        for (let i = 0; i < 2; i++) {
            let text = document.getElementsByTagName('p')[i];
            text.style.display = 'none';
        }
        let date = document.createElement('p');

        //getting the date
        let t = new Date();
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = (month + 1) + '/' + day + '/' + year;
        date.style.fontSize = '140px';
        date.style.color = 'gray';
        document.body.append(date);
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
        document.body.append(time);
        document.body.append(other);
        other.onclick = () => {
            window.location.reload();
        }
    }
    let MD = document.createElement('button');                     //creates button for Madrid time
    MD.innerHTML = 'Madrid Time';
    MD.style.width = '430px';
    MD.style.marginTop = '1%';
    document.body.append(MD);
    MD.onclick = () => {
        //styling the body when Madrid time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 12; i++) {
            let but = document.getElementsByTagName('button')[i];
            but.style.display = 'none';
        }
        for (let i = 0; i < 2; i++) {
            let text = document.getElementsByTagName('p')[i];
            text.style.display = 'none';
        }
        let date = document.createElement('p');

        //getting the date
        let t = new Date();
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = (month + 1) + '/' + day + '/' + year;
        date.style.fontSize = '140px';
        date.style.color = 'gray';
        document.body.append(date);
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
        document.body.append(time);
        document.body.append(other);
        other.onclick = () => {
            window.location.reload();
        }
    }
    let BC = document.createElement('button');                     //creates button for Barcelona time
    BC.innerHTML = 'Barcelona Time';
    BC.style.width = '500px';
    BC.style.marginTop = '1%';
    BC.style.marginLeft = '1%';
    document.body.append(BC);
    BC.onclick = () => {
        //styling the body when Barcelona time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 12; i++) {
            let but = document.getElementsByTagName('button')[i];
            but.style.display = 'none';
        }
        for (let i = 0; i < 2; i++) {
            let text = document.getElementsByTagName('p')[i];
            text.style.display = 'none';
        }
        let date = document.createElement('p');

        //getting the date
        let t = new Date();
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = (month + 1) + '/' + day + '/' + year;
        date.style.fontSize = '140px';
        date.style.color = 'gray';
        document.body.append(date);
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
        document.body.append(time);
        document.body.append(other);
        other.onclick = () => {
            window.location.reload();
        }
    }
    let AM = document.createElement('button');                     //creates button for Amsterdam time
    AM.innerHTML = 'Amsterdam Time';
    AM.style.width = '510px';
    AM.style.marginTop = '1%';
    AM.style.marginLeft = '1%';
    document.body.append(AM);
    AM.onclick = () => {
        //styling the body when Amsterdam time is clicked

        document.body.style.width = '35%';
        document.body.style.margin = 'auto';
        document.body.style.marginTop = '-10%';
        document.body.style.userSelect = 'none';
        document.body.style.overflow = 'hidden';
        for (let i = 0; i < 12; i++) {
            let but = document.getElementsByTagName('button')[i];
            but.style.display = 'none';
        }
        for (let i = 0; i < 2; i++) {
            let text = document.getElementsByTagName('p')[i];
            text.style.display = 'none';
        }
        let date = document.createElement('p');

        //getting the date
        let t = new Date();
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = (month + 1) + '/' + day + '/' + year;
        date.style.fontSize = '140px';
        date.style.color = 'gray';
        document.body.append(date);
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
        document.body.append(time);
        document.body.append(other);
        other.onclick = () => {
            window.location.reload();
        }
    }
    document.querySelectorAll('button').forEach(button => {
        button.style.fontFamily = '"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace';
        button.style.fontSize = '40px';
        button.style.cursor = 'pointer';
    })
})