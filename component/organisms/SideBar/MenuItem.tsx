import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

interface MenuItemProps {
    title: string;
    icon: 'menu-overviews' | 'menu-transaction' | 'menu-rewards' | 'menu-card' | 'menu-messages' | 'menu-setting' | 'menu-logout';
    active?: boolean;
    href: string;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const {
    title, icon, active, href,
  } = props;
  const className = cx({
    item: true,
    'mb-3': true,
    active,
  });
  return (
    <div className={className}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="menu-icon" />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
