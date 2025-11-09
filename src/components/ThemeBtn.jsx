import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../features/theme/themeSlice'

function ThemeBtn() {
  const theme = useSelector((state) => state.theme.theme)
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(toggleTheme())
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleChange}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer dark:bg-gray-700 peer-checked:bg-gray-700 
        after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full 
        after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full dark:border-gray-600">
      </div>
    </label>
  )
}

export default ThemeBtn
