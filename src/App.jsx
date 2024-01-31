import { Post } from './Post';
import { Header } from './components/Header';


import styles from "./App.module.css";

import "./global.css"
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>

      <Header />
      

      <div className={styles.wrapper}>
      <Sidebar />
      
      
      <main>


      <Post
        author="Diego Fernandes"
        contest="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, ratione libero rerum, voluptatibus beatae pariatur quasi, illum debitis culpa cupiditate non labore et quaerat deserunt aperiam dolore nisi temporibus delectus?"
      />



      <Post
      author="José Rildo"
      contest="Conteúdo novo e de interesse geral"
      />


      </main>

      </div>
    </div>
  )
}

export default App;
