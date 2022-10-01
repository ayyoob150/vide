import './App.css';
import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import{NavBar,Feed,ChannelDetail,VideoDetail,SearchFeed} from './component';

function App() {
  const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
  params: {
    id: 'YQHsXMglC9A',
    hl: 'en',
    gl: 'US',
    next: 'CBQSDRILWVFIc1hNZ2xDOUEYACreAQjQr43tubfzi64BCNi24eOapu-n7AEIgejpz9fcuPajAQjwqMe8v7SEuJ0BCI3CwqDWu4nahAEItNrrwNnAzuQ1CK6-ooCH-Jj5JAik8O-ahq3L1sYBCMb965f10YS4UwiNkaXwtL_gzi4I1vOMu5f7r4HeAQjEuYHvqNfimgwIzvHK75mt1Z27AQjw_7n5yaLZ3_UBCJOq5eCOo-XS_QEIocGSnpeajIsXCN2F2tj65L_4zwEI4KbhwtjP98duCI_C_IbhttbzTAi2gO-y3KbjuZgBCNbN7-m31YCKVmoPd2F0Y2gtbmV4dC1mZWVk'
  },
  headers: {
    'X-RapidAPI-Key': '0ab1b80225msh1335736070cf5cap1571bajsnfbee6eb2a0f8',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Feed/>} />
      <Route path='/video/:id' element={<VideoDetail/>}/>
      <Route path='/channel/:id' element={<ChannelDetail/>}/>
      <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
