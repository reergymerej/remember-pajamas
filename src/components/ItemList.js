import React from 'react'
import moment from 'moment'
import SmartText from 'react-smart-text'

const linkRegex = (/http.+/g)

const Link = ({ text }) => (
  <a href={text} className="text-sm">{text}</a>
)

const Text = ({ text }) => (
  <SmartText regex={linkRegex} component={Link}>
    {text}
  </SmartText>
)

const Item = ({ tags, created, text }) => (
  <div className="m-3 border border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="flex justify-between text-xs">
      <div>{ moment(created).fromNow() }</div>
      <div>{ tags.join(', ') }</div>
    </div>
    <div className="text-lg mt-3">
      <Text text={text} />
    </div>
  </div>
)

const ItemList = ({ items }) => (
  <div>
    { items.map(item => (
      <Item
        key={item._id}
        text={item.text}
        created={item.createdAt}
        tags={item.tags || []}
      />
    ))}
  </div>
)

export default ItemList
