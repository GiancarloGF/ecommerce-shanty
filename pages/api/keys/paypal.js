import nc from 'next-connect';
import { isAuth } from 'utils/auth';

const handler = nc();
handler.use(isAuth); //To validate authentication.
handler.get(async (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

export default handler;



// A paypal account is required to get its API key. In this case SANDBOX is used (for fake payments)
//Sb stands for sandbox.