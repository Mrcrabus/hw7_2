window.addEventListener('load', function () {

    class Timer {
        constructor(selector, initialTime) {
            this.box = document.querySelector(selector);
            this.time = initialTime;
            this.interval = null;
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
            this.box.innerHTML = `${this.h}:${this.m}:${this.s}`;
        }

        /* stop(){
            super.stop();
            console.log('timer was stopped on time = ' + this.time);
        } */
    }

    class WordsTimer extends FormatTimer {
        render() {
            super.render();



        }

    }

    let t1 = new Timer('.timer1', 10);
    t1.start();
    console.log(t1);

    let t2 = new FormatTimer('.timer2', 5000);
    t2.start();
    console.log(t2);

    let btnSale = document.querySelector('.getSale');

    btnSale.addEventListener('click', function () {
        btnSale.innerHTML = 'Скидка Ваша!';
        btnSale.disabled = true;
        t2.stop();
    });
});

class Cat {
    constructor(type) {
        this.type = type;
    }

    findEat() {
        while (this.hungry) {
            this.find();
            this.run();
        }
    }
}

class HomeCat extends Cat {
    constructor(type, name) {
        super(type);
        this.name = name;
    }

    findEat() {
        while (this.hungry) {
            this.findOwner();
            this.say('myayayayyayayaya');

            if (this.daysWithoutEat > 3) {
                super.findEat();
            }
        }
    }
}

new HomeCat(1, 'a');