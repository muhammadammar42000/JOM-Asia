import { MyRoutes } from './routes';

import "./admin/assets/fontawesome/css/all.css";
import '../node_modules/swiper/swiper-bundle.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './service-provider/assets/styles/app.scss'
import './admin/assets/style/app.scss'
import "react-toastify/dist/ReactToastify.css";
// import firebase from './admin/components/firebase/firebase'


function App() {
  return (
      <MyRoutes/>
    );
}

export default App;
