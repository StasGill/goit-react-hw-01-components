import React from 'react'
import Transaction from './transaction/Transaction'
import './taskFourStyle.css'


const TaskFour = ({transactions}) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr className="transactionSuperItem">
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {
                    transactions.map( transaction => <Transaction transaction={transaction} key={transaction.id}/>) 
                }
            </tbody>
        </table>
    );
}

export default TaskFour;