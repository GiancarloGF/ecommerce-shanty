import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../utils/Store';

export default function Shipping() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state; //Confirm if user is logged in.
  //If not, user is redirected to login page with queries that indicate what is the last page to go to.
  if (!userInfo) {
    router.push('/login?redirect=/shipping');
  }

  return <div>Shipping page</div>;
}