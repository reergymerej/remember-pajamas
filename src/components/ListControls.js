import React from 'react'
import Button from './Button'

const Iffy = ({ text, cond }) => {
  let result = 'not sure'
  switch (cond) {
    case true:
      result = 'yes'
      break
    case false:
      result = 'no'
      break
  }
  return (
    <div>
      {text}: {result}
    </div>
  )
}

const ListControls = (props) => (
  <div>
    pages: { props.pages }<br />
    current page: { props.currentPage }<br />
    <Iffy text="has previous?" cond={props.hasPreviousPage} />
    <Iffy text="has next?" cond={props.hasNextPage} />
    { props.canLoad
      ? <Button onClick={props.onLoadItems}>Load Items</Button>
      : <Button onClick={props.onLoadItemsCancel}>Cancel Load Items</Button>
    }
  </div>
)

export default ListControls
