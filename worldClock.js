addEventListener('DOMContentLoaded', () => {
    let newYork = document.createElement('button');
    newYork.innerHTML = 'NYC Time';
    newYork.style.width = '300px';
    newYork.style.fontSize = '40px'
    document.body.appendChild(newYork);
    newYork.onclick = () => {
        document.body.style.width = '50%';
        document.body.style.margin = 'auto';
        let date = document.createElement('p');
        let t = new Date();
        let year = t.getFullYear();
        let month = t.getMonth();
        let day = t.getDate();
        date.innerHTML = month + 1 + '/' + day + '/' + year + ' ';
        date.style.fontSize = '50px';
        document.body.appendChild(date);
        let time = document.createElement('p');
        time.style.fontSize = '50px'
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
            }
            if (hour < 10) {
                hour = '0' + hour;
            }
            time.innerHTML = hour + ':' + minute + ':' + second;
        }
        setInterval(upd, 0)
        document.body.appendChild(time)
    }    
})