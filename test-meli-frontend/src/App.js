import 'scss/app.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as Routes from 'constants/routes'
import CajaBusqueda from 'components/CajaBusqueda/CajaBusqueda'
import Productos from 'components/Productos/Productos';
import DetalleProducto from 'components/DetalleProducto/DetalleProducto';
import Inicio from  'components/Inicio/Inicio'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CajaBusqueda />
        <Switch>
          <Route path={Routes.PRINCIPAL} exact component={() => <Inicio />} />
          <Route path={Routes.PRODUCTOS} component={() => <Productos />} />
          <Route path={Routes.DETALLE_PRODUCTO} exact component={() => <DetalleProducto />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
