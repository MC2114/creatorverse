import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client'

function ShowCreators(props) {
    const [creators, setCreators] = useState([])
    useEffect(() => {
        const fetchCreators = async () => {
            const { data, error } = await supabase
                .from("creator")
                .select("*")
                .order('created_at', { ascending: true })

            if (!error) setCreators(data)
        }
        fetchCreators()
    }, [])

    return (
        <div className='show-creators'>
            <div className='creator-grid'>
                {creators.length === 0 ? (
                    <p>No creators yet. Create one!</p>
                ) :
                    creators.map((creator) => (
                        <Card creator={creator} key={creator.id} />
                    ))
                }
            </div>
        </div >
    )
}

export default ShowCreators