import React from 'react'
import Transaction from './transaction/Transaction'


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
                    transactions.map( transaction => <Transaction transaction={transaction}/>) 
                }
            </tbody>
        </table>
    );
}

export default TaskFour;