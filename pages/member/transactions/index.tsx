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

interface GetServerSideProps{
  req: {
    cookies: {
      token: string,
    }
  }
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permannet: false,
      },
    };
  }
  return {
    props: {},
  };
}
