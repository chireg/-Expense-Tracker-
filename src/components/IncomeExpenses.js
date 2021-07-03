import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);
    const amount=transactions.map(transactions =>transactions.amount);
    const total=amount.reduce((acc,item) => (acc +=item),0).toFixed(2);
    const income = amount
                .filter(item => item > 0)
                .reduce((acc, item) => (acc += item), 0)
                .toFixed(2);
    const expense = Math.abs(amount
                .filter(item => item < 0)
                .reduce((acc, item) => (acc += item), 0)
                .toFixed(2));

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p  className="money plus"> ₹ {income}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus"> ₹ {expense}</p>
            </div>   
        </div>
    )
}
