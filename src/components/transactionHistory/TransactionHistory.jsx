import styles from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.transactionHistory}>
    <table className={styles.tableTransaction}>
      <thead className={styles.theadTransaction}>
        <tr>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={styles.td}>{type}</td>
            <td className={styles.td}>{amount}</td>
            <td className={styles.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TransactionHistory;