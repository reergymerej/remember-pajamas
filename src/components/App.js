import React from 'react'
import { connect } from 'react-redux'
import { loadItems, loadItemsCancel } from '../actions'
import * as selectors from '../selectors'
import ItemList from './ItemList'
import ListControls from './ListControls'


class App extends React.Component {
  render() {
    const { pages, currentPage, hasNextPage, hasPreviousPage, loadItems, loadItemsCancel, isLoading } = this.props
    return (
      <div className="container mx-auto my-8">
        <ListControls
          pages={pages}
          currentPage={currentPage}
          hasPreviousPage={hasPreviousPage}
          hasNextPage={hasNextPage}
          onLoadItems={loadItems}
          onLoadItemsCancel={loadItemsCancel}
          canLoad={!isLoading}
        />
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
  pages: selectors.getTotalPages(state),
  currentPage: selectors.getCurrentPage(state),
  hasPreviousPage: selectors.getHasPreviousPage(state),
  hasNextPage: selectors.getHasNextPage(state),
})

const mapDispatchToProps = {
  loadItems,
  loadItemsCancel,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
