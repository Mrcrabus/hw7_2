window.addEventListener('load', function () {

    class Timer {
        constructor(selector, initialTime) {
            this.box = document.querySelector(selector);
            this.time = initialTime;
            this.interval = null;
            this.start();
        }

        start() {
            this.render();

            this.interval = setInterval(/* some magic */() => {
                this.tick();
            }, 1000);
        }

        tick() {
            this.time--;
            this.render();

            if (this.time < 1) {
                this.stop();
            }
        }

        stop() {
            clearInterval(this.interval);
        }

        render() {
            this.box.innerHTML = this.time;
        }
    }

    class FormatTimer extends Timer {
        render() {
            this.h = parseInt(this.time / 3600);
            this.hs = this.time % 3600;
            this.m = parseInt(this.hs / 60);
            this.s = this.hs % 60;

        }

        /* stop(){
            super.stop();
            console.log('timer was stopped on time = ' + this.time);
        } */
    }


    class WordsTimer extends FormatTimer {

        render() {
            super.render();
            let wordH = this.wordsHours(this.h)
            let wordM = this.wordsMinutes(this.m)
            let wordS = this.wordsSeconds(this.s)
            this.box.innerHTML = `${this.h} ${wordH}:${this.m} ${wordM}:${this.s} ${wordS}`;

        }


        //Не дай Бог, кому увидеть такой код)
        wordsHours(hours) {
            let word;
            let numbers = [2, 3, 4];
            let numberOver = [5, 6, 7, 8, 9]


            if (hours >= 5 && hours <= 19) {
                word = 'часов'
            } else if (hours % 10 === 0) {
                word = 'часов'
            } else if (numbers.includes(hours % 10)) {
                word = 'часа'
            } else if (numberOver.includes(hours % 10)) {
                word = 'часов'
            } else {
                word = 'час'
            }
            return word;
        }

        wordsMinutes(minutes) {
            let word;
            let numbers = [2, 3, 4];
            let numberOver = [5, 6, 7, 8, 9]


            if (minutes >= 5 && minutes <= 19) {
                word = 'минут'
            } else if (minutes % 10 === 0) {
                word = 'минут'
            } else if (numbers.includes(minutes % 10)) {
                word = 'минуты'
            } else if (numberOver.includes(minutes % 10)) {
                word = 'минут'
            } else {
                word = 'минута'
            }
            return word;
        }

        wordsSeconds(seconds) {
            let word;
            let numbers = [2, 3, 4];
            let numberOver = [5, 6, 7, 8, 9]

            if (seconds >= 5 && seconds <= 19) {
                word = 'секунд'
            } else if (seconds % 10 === 0) {
                word = 'секунд'
            } else if (numbers.includes(seconds % 10)) {
                word = 'секунды'
            } else if (numberOver.includes(seconds % 10)) {
                word = 'секунд'
            } else {
                word = 'секунда'
            }
            return word;
        }


    }

    let t1 = new Timer('.timer1', 10);


    let t2 = new WordsTimer('.timer2', 55000);


    let btnSale = document.querySelector('.getSale');

    btnSale.addEventListener('click', function () {
        btnSale.innerHTML = 'Скидка Ваша!';
        btnSale.disabled = true;
        t2.stop();
    });
});

