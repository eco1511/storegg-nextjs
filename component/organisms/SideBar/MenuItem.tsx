import Link from 'next/link';
import cx from 'classnames';
import Image from 'next/image';

interface MenuItemProps {
    title: string;
    icon: 'menu-overview' | 'menu-transaction' | 'menu-rewards' | 'menu-card' | 'menu-messages' | 'menu-setting' | 'menu-logout';
    active?: boolean;
    href?: string;
    onClick?: () => void;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const {
    title, icon, active, href = '/',
    onClick,
  } = props;
  const className = cx({
    item: true,
    'mb-3': true,
    active,
  });
  return (
    <div className={className} onClick={onClick}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt="menu-icon" />
      </div>
      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={href}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  );
}
