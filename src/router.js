import Areas from "./pages/Areas";
import Competitions from "./pages/Competitions";
import CompetitionDetail from "./pages/CompetitionDetail";
import Home from "./pages/Home";
import Matchs from "./pages/Matches";
import Teams from "./pages/Teams";
import CompetitionTeams from "./pages/CompetitionTeams";
import CompetitionStandings from "./pages/CompetitionStandings";
import CompetitionMatches from "./pages/CompetitionMatches";
import CompetitionScorers from "./pages/CompetitionScorers";

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
    Component: <CompetitionDetail />,
    menu: {
      status: false,
      name: 'CompetitionDetail'
    }
  },

  {  
    path: '/competitions/:id/teams',
    exact: true,
    Component: <CompetitionTeams />,
    menu: {
      status: false,
      name: 'CompetitionTeams'
    }
  },

  {  
    path: '/competitions/:id/standings',
    exact: true,
    Component: <CompetitionStandings />,
    menu: {
      status: false,
      name: 'CompetitionStandings'
    }
  },

  {  
    path: '/competitions/:id/matches',
    exact: true,
    Component: <CompetitionMatches />,
    menu: {
      status: false,
      name: 'CompetitionMatches'
    }
  },

  {  
    path: '/competitions/:id/scorers',
    exact: true,
    Component: <CompetitionScorers />,
    menu: {
      status: false,
      name: 'CompetitionScorers'
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
  //   Component: <CompetitionDetail />,
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
  //   Component: <CompetitionDetail />,
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
  //   Component: <CompetitionDetail />,
  //   menu: {
  //     status: true,
  //     name: 'Home'
  //   }
  // },
]
