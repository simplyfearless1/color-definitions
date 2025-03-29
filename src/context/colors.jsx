import React, { createContext, useState, useEffect } from 'react';
import { request } from '@/api';
import { API_ENDPOINTS } from '@/config/api';

export const ColorDefinitionsContext = createContext()

export const ColorDefinitionsProvider = ({ children }) => {
  const [colorDefinitions, setColorDefinitions] = useState([{id: 0, title: '', hex: ''}])
  const [loading, setLoading] = useState(true)

  const handleDataSucess = async (res) => {
    const req = await res
    if(req.status === 200) {
      setColorDefinitions([...req.data])
    }
    setLoading(false)
  }
  const fetchData = () => {
    request(API_ENDPOINTS.COLORS, '', 'get', handleDataSucess)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ColorDefinitionsContext.Provider value={{ colorDefinitions, loading }}>
      {children}
    </ColorDefinitionsContext.Provider>
  )
}