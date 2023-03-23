import React from 'react'
import { Header } from '../components/Header/Header'
import { ListCard } from '../components/ListCard/ListCard'
import { SearchBar } from '../components/SearchBar/SearchBar'

export const HomePage = () => {
  return (
    <>
      <Header/>
      <main className='main__container'>
        <SearchBar/>
        <ListCard/>
      </main>
      
    </>
  )
}
