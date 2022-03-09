import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHguWnYXDlslw/profile-displayphoto-shrink_800_800/0/1642283387726?e=1652313600&v=beta&t=S0zeDpgq2eHEuslAphMQHmmDOu139z2o-bAeaqP-8lk" 
              alt=""
              className="widgetLgImg"
              />
              <span className="widgetLgName">Alao Abdul-Quayyum</span>
            </td>
            <td className="widgetLgDate">9 Mar 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHguWnYXDlslw/profile-displayphoto-shrink_800_800/0/1642283387726?e=1652313600&v=beta&t=S0zeDpgq2eHEuslAphMQHmmDOu139z2o-bAeaqP-8lk" 
              alt=""
              className="widgetLgImg"
              />
              <span className="widgetLgName">Alao Abdul-Quayyum</span>
            </td>
            <td className="widgetLgDate">9 Mar 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHguWnYXDlslw/profile-displayphoto-shrink_800_800/0/1642283387726?e=1652313600&v=beta&t=S0zeDpgq2eHEuslAphMQHmmDOu139z2o-bAeaqP-8lk" 
              alt=""
              className="widgetLgImg"
              />
              <span className="widgetLgName">Alao Abdul-Quayyum</span>
            </td>
            <td className="widgetLgDate">9 Mar 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQHguWnYXDlslw/profile-displayphoto-shrink_800_800/0/1642283387726?e=1652313600&v=beta&t=S0zeDpgq2eHEuslAphMQHmmDOu139z2o-bAeaqP-8lk" 
              alt=""
              className="widgetLgImg"
              />
              <span className="widgetLgName">Alao Abdul-Quayyum</span>
            </td>
            <td className="widgetLgDate">9 Mar 2022</td>
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
