import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
import { Button } from '@chakra-ui/react'

export const Navbar = () => {
    const {theme, toggleTheme, isLight} = useContext(ThemeContext)
  return (
    <div>
         
         <Button onClick={toggleTheme} colorScheme='teal' variant='outline'> Toggle {isLight ? 'Dark' : 'Light'}</Button>
    </div>
  )
}
