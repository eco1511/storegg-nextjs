import jwtDecode from 'jwt-decode';
import TransactionDetailContent from '../../../component/organisms/TransactionDetailContent';
import { HistoryTransactionType, JWTPayloadTypes, UserType } from '../../../services/data.types';
import { getTransactionsDetail } from '../../../services/member';

interface TransactionDetailProps {
  transactionDetail: HistoryTransactionType,
}
export default function TransactionDetail(props: TransactionDetailProps) {
  const { transactionDetail } = props;
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    }
  },
  params: {
    idTrx: string;
  }
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { token } = req.cookies;
  const { idTrx } = params;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permannet: false,
      },
    };
  }
  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload: JWTPayloadTypes = jwtDecode(jwtToken);
  const userFromPayload: UserType = payload.player;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
  const response = await getTransactionsDetail(idTrx, jwtToken);
  return {
    props: {
      transactionDetail: response,
    },
  };
}
