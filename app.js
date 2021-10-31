class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }

  findMarkup() {
    this.timerMarkup = document.querySelector(`${this.selector}`);
    this.daysRef = this.timerMarkup.querySelector('[data-value="days"]');
    this.hoursRef = this.timerMarkup.querySelector('[data-value="hours"]');
    this.minsRef = this.timerMarkup.querySelector('[data-value="mins"]');
    this.secsRef = this.timerMarkup.querySelector('[data-value="secs"]');
  }

  updateTime() {
    this.time = this.targetDate - new Date();
    if (this.time <= 0) {
      this.stop();
    }

    this.days = Math.floor(this.time / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    this.mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    this.secs = Math.floor((this.time % (1000 * 60)) / 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateTimerValues() {
    this.daysRef.textContent = this.pad(this.days);
    this.hoursRef.textContent = this.pad(this.hours);
    this.minsRef.textContent = this.pad(this.mins);
    this.secsRef.textContent = this.pad(this.secs);
    if (this.time <= 0) {
      this.daysRef.textContent = '00';
      this.hoursRef.textContent = '00';
      this.minsRef.textContent = '00';
      this.secsRef.textContent = '00';
    }
  }

  start() {
    this.findMarkup();
    this.intervalId = setInterval(() => {
      this.updateTime();
      this.updateTimerValues();
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}

let timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 1, 2021'),
});
