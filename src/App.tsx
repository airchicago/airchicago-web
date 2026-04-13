import { RouterProvider } from 'react-router';
import { routes } from './utils/definitions/routeDefinitions';

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
