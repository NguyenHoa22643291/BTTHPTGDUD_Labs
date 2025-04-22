import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../slice/themeSlice'

export default function ThemeToggle() {
  const theme = useSelector(state => state.theme)
  const dispatch = useDispatch()

  return (
    <div className={theme === 'dark' ? 'bg-blue-950 text-black min-h-screen p-4' : 'bg-white text-black min-h-screen p-4'}>
      <button
        className="bg-blue-100 text-black px-4 py-2 rounded"
        onClick={() => dispatch(toggleTheme())}
      >
        Chuyển theme ({theme})
      </button>
    </div>
  )
}
