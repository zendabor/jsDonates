import { settings as setup } from '../core/constans/settings'

export class DonateForm {

    constructor(totalAmount) {
        this.totalAmount = totalAmount;
    }
    render() {
        const donateForm = document.createElement('form');
        this.donateForm = donateForm;
        donateForm.className = 'donate-form';
        const formTitle = document.createElement('h1');
        formTitle.id = 'total-amount';
        const formlabel = document.createElement('label');
        formlabel.className = 'donate-form__input-label';
        formlabel.textContent = `Введите сумму в ${setup.currency}`;
        const labelInp = document.createElement('input');
        labelInp.className = 'donate-form__donate-input';
        labelInp.name = 'amount';
        labelInp.type = 'number';
        labelInp.max = 100;
        labelInp.min = 1;
        labelInp.setAttribute('required', '');
        formlabel.append(labelInp);
        const formBtn = document.createElement('button');
        formBtn.className = 'donate-form__submit-button';
        formBtn.type = 'submit';
        formBtn.textContent = 'Задонатить';
        donateForm.append(formTitle, formlabel, formBtn)
        return donateForm;
    }
    updateTotalAmount(newAmount) {
        this.donateForm.querySelector('#total-amount').textContent = `${newAmount}${setup.currency}`;
    }
}