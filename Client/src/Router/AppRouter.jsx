import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import routes from './Routes'
const AppRouter = () => {
  return (
    <Router>
        <Routes>
            {routes.map(({path, Element}) => (
            <Route key={path} path={path} element={Element}/>
            ))}
        </Routes>
    </Router>

  )
}

export default AppRouter;