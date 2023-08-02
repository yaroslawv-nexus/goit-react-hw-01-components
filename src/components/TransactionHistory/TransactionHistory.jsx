import { Table } from "./TransactionHistory.styled"


export const TransactionHistory = ({items}) => {
    return (
        <Table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(element => {
        return (<tr key={element.id}>
      <td>{element.type}</td>
      <td>{element.amount}</td>
      <td>{element.currency}</td>
    </tr>)
    })}
    
  </tbody>
</Table>
    )
}