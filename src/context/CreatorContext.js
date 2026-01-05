import { createContext, useContext, useEffect, useState } from "react";
import { addFavorites, fetchFavorites, removeFavorites } from "../services/api";

const CreatorContext = createContext()
export const useCreatorContext = () => useContext(CreatorContext)

export const CreatorProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        const loadFavorites = async () => {
            const data = await fetchFavorites()
            if (data) setFavorites(data)
        }
        loadFavorites()
    }, [])

    const addToFavorites = async (creator) => {
        setFavorites(prev => [...prev, creator])
        await addFavorites(creator.id)
    }

    const removeFromFavorites = async (creatorId) => {
        setFavorites(prev => prev.filter(c => c.id !== creatorId))
        await removeFavorites(creatorId)
    }

    const isFavorite = (creatorId) => {
        return favorites.some(c => c.id === creatorId)
    }

    const val = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <CreatorContext.Provider value={val}>
        {children}
    </CreatorContext.Provider>
}