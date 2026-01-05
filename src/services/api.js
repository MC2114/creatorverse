import { query } from "express";
import { supabase } from "../client";

// Fecth all creators for ShowCreators, sorted by latest 
export const fetchAll = async () => {
    const { data, error } = await supabase
        .from("creator")
        .select("*")
        .order('created_at', { ascending: true })

    if (error) console.error(error)
    return data
}

// Fetch single creator for ViewCreator
export const fetchSingle = async () => {
    const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single()

    if (error) console.error(error)
    return data
}

// Add creator
export const addCreator = async (creator) => {
    const { name, description, imageURL, youtubeURL, twitterURL, instagramURL } = creator
    const { error } = await supabase
        .from("creators")
        .insert([
            {
                id: `${name}-${Date.now()}`,
                name: name,
                description: description,
                imageURL: imageURL,
                youtubeURL: youtubeURL,
                twitterURL: twitterURL,
                instagramURL: instagramURL,
                created_at: Date.now(),
                is_favorite: false
            }
        ])

    if (error) console.error(error)
}

// Edit creator info
export const editCreator = async (creator) => {
    const { error } = await supabase
        .from("creators")
        .update(creator)
        .eq('id', creator.id)

    if (error) console.error(error)
}

// Delete creator
export const deleteCreator = async (id) => {
    const { error } = await supabase
        .from("creators")
        .delete()
        .eq("id", id)

    if (error) console.error(error)
}


// Search for creator using search bar
export const searchCreators = async (query) => {
    const { data, error } = await supabase
        .from('creators')
        .select('*')
        .textSearch('name', `'${query}'`)

    if (error) console.error(error)
    return data
}

// Get all favorite creators
export const fetchFavorites = async () => {
    const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq("is_favorite", true)
        .order('created_at', { ascending: true })

    if (error) console.error(error)
    return data
}

// Add favorite
export const addFavorites = async (id) => {
    const { error } = await supabase
        .from('creators')
        .update({ 'is_favorite': true })
        .eq('id', id)

    if (error) console.error(error)
}

// Remove from favorites
export const removeFavorites = async (id) => {
    const { error } = await supabase
        .from('creators')
        .update({ 'is_favorite': false })
        .eq('id', id)

    if (error) console.error(error)
}