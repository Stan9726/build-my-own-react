function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child =>
        typeof child === 'object' ? child : createTextElement(child)
      )
    }
  }
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  }
}

const MyReact = {
  createElement
}

/** @jsx MyReact.createElement */
const element = (
  <div id="foo">
    <h1>Hello World</h1>
    <h2>MyReact</h2>
  </div>
)

const container = document.getElementById('root')
MyReact.render(element, container)
