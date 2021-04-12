import Areas from "./pages/Areas";
import Competitions from "./pages/Competitions";
import CompetitionsDetail from "./pages/CompetitionsDetail";
import Home from "./pages/Home";
import Matchs from "./pages/Matches";
import Teams from "./pages/Teams";

export const router = [
  {  
    path: '/',
    exact: true,
    Component: <Home />,
    menu: {
      status: true,
      name: 'Home'
    }
  },

  {  
    path: '/competitions',
    exact: true,
    Component: <Competitions />,
    menu: {
      status: true,
      name: 'Competitions'
    }
  },

  {  
    path: '/competitions/:id',
    exact: true,
    Component: <CompetitionsDetail />,
    menu: {
      status: false,
      name: 'CompetitionsDetail'
    }
  },

  {  
    path: '/matches',
    exact: true,
    Component: <Matchs />,
    menu: {
      status: true,
      name: 'Matchs'
    }
  },

  // {  
  //   path: '/matches/:id',
  //   exact: true,
  //   Component: <CompetitionsDetail />,
  //   menu: {
  //     status: true,
  //     name: 'Home'
  //   }
  // },
  
  {  
    path: '/teams',
    exact: true,
    Component: <Teams />,
    menu: {
      status: true,
      name: 'Teams'
    }
  },

  // {  
  //   path: '/teams/:id',
  //   exact: true,
  //   Component: <CompetitionsDetail />,
  //   menu: {
  //     status: true,
  //     name: 'Home'
  //   }
  // },

  {  
    path: '/areas',
    exact: true,
    Component: <Areas />,
    menu: {
      status: true,
      name: 'Areas'
    }
  },

  // {  
  //   path: '/areas/:id',
  //   exact: true,
  //   Component: <CompetitionsDetail />,
  //   menu: {
  //     status: true,
  //     name: 'Home'
  //   }
  // },
]
