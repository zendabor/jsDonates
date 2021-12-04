import { settings as setup } from '../core/constans/settings';
import * as func from '../core/utils/utils';

export class DonateList {
    constructor(donates) {
        this.donates = donates;
    }
    render() {
        const mainContainer = this.mainContainer || document.createElement('div');
        this.mainContainer = mainContainer;
        mainContainer.className = 'donates-container';
        const donatTitle = this.donatTitle || document.createElement('h1');
        this.donatTitle = donatTitle;
        donatTitle.className = 'donates-container__title';
        donatTitle.textContent = 'Список донатов';
        const donatContainer = document.createElement('div');
        this.donatContainer = donatContainer;
        donatContainer.className = 'donates-container__donates';
        this.donates.forEach(element => {
            const dateItem = document.createElement('div');
            dateItem.className = 'donate-item';
            dateItem.textContent = func.getFormattedTime(element.date);
            const moneyItem = document.createElement('b');
            moneyItem.textContent = `${element.amount}${setup.currency}`;
            dateItem.append(moneyItem);
            donatContainer.append(dateItem);
        });
        mainContainer.append(donatTitle, donatContainer);
        return mainContainer;
    }
    updateDonates() {
        this.donatContainer.remove();
        this.render();
    }
}