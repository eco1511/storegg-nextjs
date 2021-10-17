import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { JWTPayloadTypes, UserType } from '../../../services/data.types';

export default function profile() {
  const [user, setUser] = useState({
    avatar: '',
    username: '',
    name: '',
    email: '',
  });
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserType = payload.player;
      setUser(userFromPayload);
    }
  }, []);
  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <div className="user text-center pb-50 pe-30">
      <img src={`${IMG}/${user.avatar}`} width={90} height={90} className="img-fluid mb-20" alt="profile" style={{ borderRadius: 100 }} />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
