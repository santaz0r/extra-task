import { createRoutesView } from 'atomic-router-react';
import { HomePageRoute } from './home-page';

export const Pages = createRoutesView({
  routes: [HomePageRoute],
});
