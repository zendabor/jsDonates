 import { DonateForm } from './donate-form.js';
 import { DonateList } from './donate-list.js';
 import * as func from '../core/utils/utils';


 export default class App {
     constructor(state) {
         this.state = state;
         this.DonateForm = new DonateForm(state.totalAmount);
         this.DonateList = new DonateList(state.donates, this.createNewDonate.bind(this));
     }
     run() {
         document.body.append(this.DonateForm.render(), this.DonateList.render());
         const forma = document.querySelector('form');
         const formaInp = document.querySelector('.donate-form__donate-input');
         forma.addEventListener('submit', (e) => {
             e.preventDefault();
             e.stopPropagation();
             const donat = {
                 amount: parseInt(formaInp.value),
                 date: new Date(),
             }

             this.createNewDonate(donat);
         })
     }
     createNewDonate(newDonate) {
         this.state.donates.push(newDonate);
         func.calculateSumOfNumbers(this.state.donates.map(item => item.amount));
         this.state.totalAmount += newDonate.amount;
         this.DonateForm.updateTotalAmount(newDonate.amount);
         this.DonateList.updateDonates();
     }
 }