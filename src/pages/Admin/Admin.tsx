import { Routes, Route, useLocation } from 'react-router-dom';
import HeaderAdmin from './HeaderAdmin/HeaderAdmin';
import FooterAdmin from './FooterAdmin/FooterAdmin';
import NavigationPanel from './NavigationPanel/NavigationPanel';
import Main from './Main/Main';
import Categories from './Categories/Categories';
import Products from './Products/Products';
import Feedback from './Feedback/Feedback';

import FrontendInterview from './Interview/FrontendInterview/FrontendInterview';
import HRInterview from './Interview/HRInterview/HRInterview';

function Admin() {
  const location = useLocation();
  const showNavOnRoutes = ['/admin', '/admin/categories', '/admin/products', '/admin/feedback'];
  const shouldShowNav = showNavOnRoutes.includes(location.pathname);

  return (
    <>
      <HeaderAdmin />
      <main className="content">
        {shouldShowNav && <NavigationPanel />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/frontend-interview" element={<FrontendInterview />} />
          <Route path="/hr-interview" element={<HRInterview />} />
        </Routes>
      </main>
      <FooterAdmin />
    </>
  );
}

export default Admin;
