import ReactDOM from 'react-dom/client';
import React from 'react';

function MyApp() {
  return (
    <div>
      <h1>Hello Vite, React</h1>
    </div>
  );
}

const AnotherElement = (
   <a href="https://www.google.com/" target = '_blank'>Visit Google</a>
)

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const anotherUser = "Prajjwal Maharjan"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
);

export default MyApp;
