import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProfile = async (userId) => {
    try {
      const { data, error } = await supabase.from('profiles').select('*').eq('id', userId).single()
      if (error) { console.error('Error fetching profile:', error); setProfile(null); return; }
      setProfile(data)
    } catch (err) { console.error('Error fetching profile:', err); setProfile(null); }
  }

  useEffect(() => {
    setLoading(true)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) { setUser(session.user); fetchProfile(session.user.id); }
      setLoading(false)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) { setUser(session.user); await fetchProfile(session.user.id); }
      else { setUser(null); setProfile(null); }
      setLoading(false)
    })
    return () => { subscription?.unsubscribe() }
  }, [])

  const signUp = async (email, password, metadata = {}) => {
    try {
      setError(null)
      const { data, error } = await supabase.auth.signUp({ email, password, options: { data: metadata } })
      if (error) { setError(error.message); throw error; }
      return data
    } catch (err) { setError(err.message); throw err; }
  }

  const signIn = async (email, password) => {
    try {
      setError(null)
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) { setError(error.message); throw error; }
      return data
    } catch (err) { setError(err.message); throw err; }
  }

  const signOut = async () => {
    try {
      setError(null)
      const { error } = await supabase.auth.signOut()
      if (error) { setError(error.message); throw error; }
      setUser(null); setProfile(null)
    } catch (err) { setError(err.message); throw err; }
  }

  const value = { user, profile, loading, error, signUp, signIn, signOut, isAuthenticated: !!user }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
