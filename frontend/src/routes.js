import HomePage from './Pages/HomePage';
import PetProjectPage from './Pages/PetProjectPage';
import PetProjectRenderProps from './Pages/PerProjectRenderProps';

const routes = [
    {
      path: "/",
      component: HomePage,
      exact: true
      // loadData: () => getSomeData()
    },
    {
      path: "/pet-projects/:petProjectName",
      component: PetProjectRenderProps,
      exact: true,
    }
    
  ];

export default routes;