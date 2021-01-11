import React from 'react'

const Transaction = ({transaction}) => {
    return (
        <tr id={transaction.id} className="transactionItem">
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
        </tr>
    );
}

export default Transaction;