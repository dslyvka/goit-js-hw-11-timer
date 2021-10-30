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
  }

  start() {
    this.findMarkup();
    setInterval(() => {
      this.updateTime();
      this.updateTimerValues();
    }, 1000);
  }
}

let timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 17, 2021'),
});

