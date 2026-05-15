import { AppHeader } from './components/blocks/AppHeader';
import { AppPageProvider } from './utils/hooks/contextBased/useAppPage';
import { PageLayout } from './components/pages/PageLayout';

function App() {
  return (
    <AppPageProvider>
      <AppHeader />
      <PageLayout />
    </AppPageProvider>
  );
}

export default App;
