import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

interface SideBarProps{
  activeMenu: 'overview' | 'transactions' | 'setting';
}
export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  const router = useRouter();

  const onLogout = () => {
    Cookies.remove('token');
    router.push('/sign-in');
  };
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem href="/member" title="Overview" icon="menu-overview" active={activeMenu === 'overview'} />
          <MenuItem href="/member/transactions" title="Transactions" icon="menu-transaction" active={activeMenu === 'transactions'} />
          <MenuItem href="/member" title="Messages" icon="menu-messages" />
          <MenuItem href="/member" title="Card" icon="menu-card" />
          <MenuItem href="/member" title="Rewards" icon="menu-rewards" />
          <MenuItem href="/member/edit-profile" title="Setting" icon="menu-setting" active={activeMenu === 'setting'} />
          <MenuItem onClick={onLogout} title="Log Out" icon="menu-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
