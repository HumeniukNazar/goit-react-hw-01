import s from './TransactionHistory.module.css'
const TransactionHistory = ({ items }) => {
    return(
        <table>
  <thead className={s.thead}>
    <tr>
      <th className={s.theadItem}>Type</th>
      <th className={s.theadItem}>Amount</th>
      <th className={s.theadItem}>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map((item) => {
                    return (
                        <tr className={s.tr} key={item.id}>
                            <td className={s.td}>{item.type}</td>
                            <td className={s.td}>{item.amount}</td>
                            <td className={s.td}>{item.currency}</td>
                        </tr>
                    )
                }
                )}
  </tbody>
</table>
    )
}
export default TransactionHistory;
