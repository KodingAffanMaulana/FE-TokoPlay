import Home from './Pages/Home/Home';
import './App.css'
import { Header } from './components/Header/Header';

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
    <div>
      <div className='App'>
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
