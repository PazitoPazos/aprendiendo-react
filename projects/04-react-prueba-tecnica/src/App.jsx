
import CatImage from './components/CatImage'
import { useCatFact } from './hooks/useCatFact'

function App() {
  const { fact, refreshFact } = useCatFact()

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatetes</h1>
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        {fact && <p>{fact}</p>}
        {<CatImage fact={fact} />}
      </section>
      <br />
      <button onClick={handleClick}>Another random fact</button>
    </main>
  )
}

export default App
