import React from 'react';
import 'bulma/css/bulma.css'
import PageAccueil from './components/PageAccueil';
import Timesheet from './components/Timesheet';

export default class App extends React.Component {
  render() {
    return (
      <div>
          <PageAccueil></PageAccueil>
      </div>
    )
  }
}
