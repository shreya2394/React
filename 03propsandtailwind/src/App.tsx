import './App.css'
import Cards from './components/Cards'
import Cart from './components/Cart'

function App() {

  return (
    <>
    <div>
      <Cart/>
    </div>
      <div className="flex flex-row">
        <div className='mr-12'>
          <Cards available={true}/>
        </div>
        <div className='mr-12'>
          <Cards/>
        </div>
        <div className='mr-12'>
          <Cards available={false}/>
        </div>
      </div>
      <div className="flex flex-row">
        <div className='mr-12'>
          <Cards/>
        </div>
        <div className='mr-12'>
          <Cards/>
        </div>
        <div className='mr-12'>
          <Cards available={false}/>
        </div>
      </div>
      <div className="flex flex-row">
        <div className='mr-12'>
          <Cards available={false}/>
        </div>
        <div className='mr-12'>
          <Cards/>
        </div>
        <div className='mr-12'>
          <Cards/>
        </div>
      </div>

    </>
  )
}

export default App
