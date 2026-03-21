import { AppHeader } from './components/blocks/AppHeader.js';
import { AppPageProvider } from './utils/hooks/contextBased/useAppPage.js';
import { PageLayout } from './components/pages/PageLayout.js';

function App() {
  return (
    <AppPageProvider>
      <AppHeader />
      <PageLayout />
    </AppPageProvider>
  );
}

export default App;
