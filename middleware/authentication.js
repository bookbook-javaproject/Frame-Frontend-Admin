export default function (context) {
  const {
    app,
    redirect,
    store: { state },
  } = context;

  if (!state.isLogin) {
    // redirect('/login');
  }
}
