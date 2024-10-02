import React, { useEffect } from 'react'
import './App.css';
import TopNav from './components/nav/nav';
import DashView from './components/DashBoard/dashboard';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './api/getData';
import Loading from './components/Loading/Loading';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "10px"}} >
      <TopNav/>
      <hr style={{marginTop : "10px"}} />
      <DashView/>
    </div>
  ) : <Loading/>
}

export default App