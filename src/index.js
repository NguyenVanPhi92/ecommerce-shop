import store from 'app/store'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'remixicon/fonts/remixicon.css'
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    closeOnClick
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)
