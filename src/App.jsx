import Header from './components/header/Header';
import Filter from './components/filter/Filter';
import ReactMaterialUITable from './components/table/Table';
import Footer from './components/footer/Footer';

import { rows, columns } from './assets/data';

import scss from './App.module.scss';

export default function App() {
  return (
    <>
      <Header />

      <main className={scss.main}>
        <div className='container'>

          <h1 className={scss.title}>Wishlist</h1>

          <p className={scss.products}>{rows.length} products</p>

          <Filter />

          <ReactMaterialUITable dataRowsTable={rows} dataColumnsTable={columns}/>

        </div>
      </main>

      <Footer />
    </>
  );
}