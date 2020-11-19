import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      clicked: ''
    }
  }

  menuClick = (e) => {
    this.setState({
      clicked: e.target.id
    })

  }

  detailsToDisplay() {
    switch (this.state.clicked) {
      case "profile": return <Profile />
      case "photo": return <Photos />
      case "cocktail": return <Cocktails />
      case "pokemon": return <Pokemon />

    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar menuClick={this.menuClick} />
        { this.detailsToDisplay() }
      </div>
    )
  }

}

export default MainBox
