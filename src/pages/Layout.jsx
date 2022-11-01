import { Provider } from 'react-redux';
import store from '../store';

import '../scss/layout/layout.scss';
import Header from './Header';
import Products from './Products';
import DetailSide from './DetailSide';


const Layout = ()=>{
  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <Products/>
        <DetailSide/>
      </div>
    </Provider>
  )
}

export default Layout;