import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/Detail';

const App = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('https://affanmaulanamidproject-production.up.railway.app/thumbnails')
  //     .then((res) => res.json())
  //     .then(res => {
  //       console.log(res)
  //       setProducts(res)
  //     })
  // }, [])

  // return (
  //   <div className="App">
  //     <div>
  //       <div>
  //         {products.map((e) => (
  //           <div key={e.videoID}>
  //             <img src={`${e.imageUrl}`} alt='poto'/>
  //             <p>{e.videoID}</p>
  //           </div>
  //         ))}</div>
  //     </div>
  //   </div>
  // );
  return (
    <div className='App'>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
