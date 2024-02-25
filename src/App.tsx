import { Toaster } from 'react-hot-toast'
import './App.css'
import RequestCard from './components/features/RequestCard/RequestCard'
import Layout from './components/layout/Layout'

function App() {

  return (
    <>
      <Toaster/>
      <Layout>
        <RequestCard/>
      </Layout>
    </>
  )
}

export default App
