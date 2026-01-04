import React, { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ViewCreator from './pages/ViewCreator'
import { supabase } from './client'
import '@picocss/pico'
import './App.css'

const App = () => {
  const [creators, setCreators] = useState([])

  useEffect(() => {

    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from('creators_2025')
        .select()
        .order('created_at', { ascending: true })

      if (error) {
        console.error("Error fetching creators:", error);
        console.log("Error details:", error.message, error.details, error.hint);
      } else {
        setCreators(data)
      }
    }

    fetchCreators()
  }, [])


  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators data={creators} />
    },
    {
      path: "/edit/:id",
      element: <EditCreator data={creators} />
    },
    {
      path: "/new",
      element: <AddCreator />
    },
    {
      path: "/:id",
      element: <ViewCreator data={creators} />
    }
  ])


  return (
    <div className="App">

      <header>
        <h1>Creatorverse</h1>
        <nav>
          <ul>
            <li><a href="/" role="button">View All Creators</a></li>
            <li><a href="/new" role="button">Add a Creator</a></li>
          </ul>
        </nav>
      </header>

      <main> {element} </main>

    </div>

  )
}

export default App