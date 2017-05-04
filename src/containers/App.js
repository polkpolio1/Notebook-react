import React from 'react'
import NoteListContainer from './NoteListContainer'
import AddNoteContainer from './AddNoteContainer'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const App = () => (
  <div>
    <Header />
    <div className="main container">
      <AddNoteContainer />
      <NoteListContainer />
    </div>
    <Footer />
  </div>
)

export default App