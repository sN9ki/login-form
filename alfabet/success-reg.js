class SuccessReg {
    constructor() {
        this.popup = document.querySelector('.pop-up');
        this.closeButton = document.querySelector('.close-button');
        this.close = document.querySelector('.close');
        this.userName = document.querySelector('.user-name');
        this.timer = null;

        this.closeButton.addEventListener('click', () => this.openClose(true));
        this.close.addEventListener('click', () => this.openClose(true));
    }

    openClose(hide) {
        this.popup.classList.toggle('hidden', hide);
        if (hide) {
            clearInterval(this.timer);
        }
    }

    writeName(name) {
        clearInterval(this.timer);
        this.openClose(false);
        this.userName.textContent = '';

        const letters = Array.from(name.trim());
        let result = '';
        let index = 0;
        let step = 0;

        this.timer = setInterval(() => {
            const letter = letters[index];
            const candidate = findAlphabet(letter)[step];

            if (candidate === undefined || candidate === letter) {
                result += letter;
                this.userName.textContent = result;
                index++;
                step = 0;
                if (index === letters.length) {
                    clearInterval(this.timer);
                }
            } else {
                this.userName.textContent = result + candidate;
                step++;
            }
        }, 15);
    }
}
