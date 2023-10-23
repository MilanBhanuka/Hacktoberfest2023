import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import ChartandMaps from './components/ChartandMaps';
import Form from './components/Form';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/reducers';
import CovidMap from './components/CovidMap';
import EditContact from './components/EditContact';


const store = createStore(rootReducer);
function App() {

  return (
    <div className="flex flex-col md:flex-row">
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar className="w-1/4 md:w-1/5" />
          <div className="flex-1 bg-gray-200 p-4 md:p-10">
            <Routes>
              <Route path='/' element={<Contact />}></Route>
              <Route path="/form" element={<Form />} />
              <Route path='/chart-and-maps' element={<ChartandMaps />} />
              <Route path='/covid-map' element={<CovidMap />} />
              <Route path="/edit/:id" element={<EditContact />}/>

            </Routes>
            {/* <div className="text-xl h-screen md:text-2xl font-bold">Main Content</div> */}
          </div>
        </BrowserRouter>
      </Provider>
    </div >
  );
}

export default App;
