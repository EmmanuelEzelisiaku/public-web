// import React from 'react'
// import Message from './pages/Messgage'
// import HomePage from './pages/HomePage'

// import { Switch, Route, Redirect } from 'react-router-dom';
// const App = () => {
//   return (
//     <div>
//         <Switch>
//           <Route exact path='/' component={HomePage} />
//           <Route path='/message' component={Message} />
//           <Route
//             exact
//             path='/signin'
//             render={() =>
//               this.props.currentUser ? (
//                 <Redirect to='/' />
//               ) : (
//                 <SignInAndSignUpPage />
//               )
//             }
//           />
//         </Switch>
//     </div>
//   )
// }

// export default App


import React from 'react'

import Message from './pages/Messgage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
      <Message/>
      {/* <HomePage/> */}
    </div>
  )
}

export default App
