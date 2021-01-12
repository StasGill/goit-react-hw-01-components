import React from 'react'
import PropTypes from 'prop-types';


const Transaction = ({transaction},{key}) => {
    return (
        <tr key={key} className="transactionItem">
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
        </tr>
    );
}
Transaction.propTypes = {
    stat: PropTypes.object,
  };

export default Transaction;