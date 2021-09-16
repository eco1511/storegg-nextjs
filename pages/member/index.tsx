import OverviewsContent from '../../component/organisms/OverviewsContent';
import SideBar from '../../component/organisms/SideBar';

export default function Overviews() {
  return (
    <section className="overview overflow-auto">
      <SideBar activeMenu="overview" />
      <OverviewsContent />
    </section>
  );
}
