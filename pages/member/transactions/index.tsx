import SideBar from '../../../component/organisms/SideBar';
import TransactionContent from '../../../component/organisms/TransactionContent';

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}
