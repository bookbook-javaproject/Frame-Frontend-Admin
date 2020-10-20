import { Context } from '@nuxt/types';
import { RootState } from '~/store';
import content from '*.svg';

export default function (context: Context) {
  const {
    app,
    redirect,
    store: { state },
  } = context;

  if (!(state as RootState).isLogin) {
    redirect('/login');
  }
}
