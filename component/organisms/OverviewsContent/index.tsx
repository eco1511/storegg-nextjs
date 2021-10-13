import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { GetMemberOverview } from '../../../services/player';
import Categori from './Category';
import TabelRows from './TabelRows';

export default function OverviewsContent() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);
  useEffect(async () => {
    const response = await GetMemberOverview();
    if (response.error) {
      toast.error(response.message);
    } else {
      console.log('data :', response);
      setCount(response.count);
      setData(response.data);
    }
  }, []);
  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              {count.map((item) => (
                <Categori
                  key={item._id}
                  icon="ic-dekstop"
                  nominal={item.value}
                >
                  {item.name}
                </Categori>
              ))}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">Game</th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((items) => (
                  <TabelRows
                    key={items._id}
                    title={items.historyVoucherTopup.gameName}
                    category={items.historyVoucherTopup.category}
                    item={`${items.historyVoucherTopup.coinQuantity} ${items.historyVoucherTopup.coinName}`}
                    price={items.value}
                    status={items.status}
                    image={`${IMG}/${items.historyVoucherTopup.thumbnail}`}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
