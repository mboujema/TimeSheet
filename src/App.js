import React from 'react';
import 'bulma/css/bulma.css'
import PageAccueil from './components/PageAccueil';
import Navbar from './components/navbar'

export default class App extends React.Component {
  render() {
    return (
      <div>
          <PageAccueil></PageAccueil>
          
      </div>
    )
  }
}
