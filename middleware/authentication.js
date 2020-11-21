export default function (context) {
  const {
    redirect,
    store: { state: { auth: { isLoggedIn } } },
  } = context;
  if (!isLoggedIn) {
    redirect('/login');
  }
}
