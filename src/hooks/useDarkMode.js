import { useEffect, useState } from "react"

export const useDarkMode = () => {
  var checkLocalTheme = null
  if (typeof window !== `undefined`) {
    checkLocalTheme = window.localStorage.getItem("theme")
  }
  const [theme, setTheme] = useState(
    checkLocalTheme || "light"
  )

  const toggleTheme = () => {
    if (theme === "light") {
      if (typeof window !== `undefined`) {
        window.localStorage.setItem("theme", "dark")
      }
      setTheme("dark")
    } else {
      if (typeof window !== `undefined`) {
        window.localStorage.setItem("theme", "light")
      }
      setTheme("light")
    }
  }

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const localTheme = window.localStorage.getItem("theme")
      localTheme && setTheme(localTheme)
    }
  }, [])

  return [theme, toggleTheme]
}
