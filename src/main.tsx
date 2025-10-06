import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import BodyComponent from './components/BodyComponent/BodyComponent'
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <BodyComponent />
    <Toaster 
     position='top-right' 
     reverseOrder={false}
     toastOptions={{
      style: {
        background: '#fff',
        color: 'var(--black)',
        fontFamily: 'var(--roboto)',
        fontSize: '15px',
        height: '80px'
      },
      success: {
        style: {
          background: '#55FF3B',
        } 
      },
      error: {
        style: {
          background: '#FF3B3B'
        }
      }
     }}
     />
     <Footer />
  </StrictMode>,
)
