import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Lenis from 'lenis'
import { useEffect } from 'react'

function SmoothScroll({ children }) {

  useEffect(() => {
    const lenis = new Lenis({
  duration: 0.8,
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 1.1,
  touchMultiplier: 1.2,
  infinite: false,
});


    function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  }, [])

  return children
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmoothScroll>
      <App />
    </SmoothScroll>
  </React.StrictMode>,
)
