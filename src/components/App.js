import React from 'react'
import { connect } from 'react-redux'
import { loadItems, loadItemsCancel } from '../actions'
import * as selectors from '../selectors'
import Button from './Button'
import ItemList from './ItemList'

class App extends React.Component {
  render() {
    return (
      <div className="container mx-auto my-8">
        { !this.props.isLoading
          ? <Button onClick={this.props.loadItems}>Load Items</Button>
          : <Button onClick={this.props.loadItemsCancel}>Cancel Load Items</Button>
        }
        { this.props.hasLoadTimeout && <div>timed out loading items</div> }
        { this.props.hasLoadItemsError && <div>error loading items</div> }
        { this.props.items.length > 0 && <ItemList items={this.props.items} /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: selectors.getIsLoading(state),
  hasLoadTimeout: selectors.getItemLoadTimeout(state),
  hasLoadItemsError: selectors.getItemsLoadError(state),
  items: selectors.getItems(state),
})

const mapDispatchToProps = {
  loadItems,
  loadItemsCancel,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
