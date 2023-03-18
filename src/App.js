import React, { Component } from 'react'
import Navbaar from './components/Navbaar';
import News from './components/News';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
  state={progress:0}
  setProgress=(progress)=>{
this.setState({progress:progress})
  }

   apiKey = "c204737d50e74f3fa422e737241c270e " ;
  render() {
    return (
      <>    
      <Router>  

      
        <Navbaar />
        <LoadingBar
       height={3}
        
        color='#f11946'
        progress={this.state.progress}
        
      />
      <div className='container'>

        
      <Routes>
      <Route exact path="/technology" element={<News  setProgress={this.setProgress}   key="technology" country="in" category="technology" apiKey={this.apiKey}pageSize="8" />} />
      <Route exact path="/" element={<News  setProgress={this.setProgress}   key="general" country="in" category="general" apiKey={this.apiKey}pageSize="8" />} />
      <Route exact path="/business" element={<News  setProgress={this.setProgress}   key="Business" country="in" category="Business" apiKey={this.apiKey}pageSize="8" />} />
      <Route exact path="/entertainment" element={<News  setProgress={this.setProgress}   key="Entertainment" country="in" apiKey={this.apiKey}category="Entertainment" pageSize="8" />} />
      <Route exact path="/general" element={<News  setProgress={this.setProgress}   key="General" country="in" category="General"apiKey={this.apiKey} pageSize="8" />} />
      <Route exact path="/health" element={<News  setProgress={this.setProgress}   key="Health" country="in" category="Health"apiKey={this.apiKey} pageSize= "8" />} />
      <Route exact path="/science" element={<News  setProgress={this.setProgress}   key="Science" country="in" category="Science" apiKey={this.apiKey}pageSize="8" />} />
      <Route exact path="/sports" element={<News  setProgress={this.setProgress}   key="Sports" country="in" category="Sports" apiKey={this.apiKey}pageSize="8" />} />
    </Routes>
      </div>
    </Router>
      </>
    )
  }
}


 