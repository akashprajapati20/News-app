
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';



export default class News extends Component {
    // articles =[
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Gizmodo Australia"
    //     },
    //     "author": "Owen Bellwood",
    //     "title": "Rolls-Royce Recruited a Fashion Designer to Build its Most Complex Phantom Ever",
    //     "description": "Rolls-Royce isn’t a company that does things in half-measures. It’s built its reputation making the biggest, best and most opulent...\nThe post Rolls-Royce Recruited a Fashion Designer to Build its Most Complex Phantom Ever appeared first on Gizmodo Australia.…",
    //     "url": "https://www.gizmodo.com.au/2023/03/rolls-royce-recruited-a-fashion-designer-to-build-its-most-complex-phantom-ever/",
    //     "urlToImage": "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2023/03/08/ecef48745335d83c09b1540b9d6bead1.jpg?quality=80&resize=1280,720",
    //     "publishedAt": "2023-03-08T04:00:50Z",
    //     "content": "Rolls-Royce isnt a company that does things in half-measures. Its built its reputation making the biggest, best and most opulent cars money can buy, and its latest one-off creation is no different. C… [+3104 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": "the-next-web",
    //     "name": "The Next Web"
    //     },
    //     "author": "Andrea Hak",
    //     "title": "5 things founders want you to know about the Dutch tech scene this Women’s Day",
    //     "description": "Women’s Day is a day when we celebrate the achievements of the amazing women founders, developers, and VCs that are bringing innovation and disruption to the Dutch tech ecosystem. But it should also be a day when we confront the barriers and challenges women …",
    //     "url": "https://thenextweb.com/news/5-founders-dutch-tech-scene-womens-day",
    //     "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F03%2FAdd-a-heading-2.jpg&signature=f301cd949572513f28349d64230a44b1",
    //     "publishedAt": "2023-03-08T03:57:26Z",
    //     "content": "Womens Day is a day when we celebrate the achievements of the amazing women founders, developers, and VCs that are bringing innovation and disruption to the Dutch tech ecosystem.\r\nBut it should also … [+18598 chars]"
    //     },
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Paul Tan's Automotive News"
    //     },
    //     "author": "Gerard Lye",
    //     "title": "Tesla chose to invest in Malaysia because we are the 7th largest producer in the E&E, semiconductor sector",
    //     "description": "Just a few days ago, minister of international trade and industry Tengku Datuk Seri Zafrul Tengku Abdul Aziz revealed Tesla will officially set up shop in Malaysia. This will see the American car company establish […]\nThe post Tesla chose to invest in Malaysi…",
    //     "url": "https://paultan.org/2023/03/08/why-tesla-chose-to-invest-in-malaysia/",
    //     "urlToImage": "https://paultan.org/image/2023/03/tengku-zafrul-tesla-malaysia-1200x630.jpg",
    //     "publishedAt": "2023-03-08T03:47:47Z",
    //     "content": "Just a few days ago, minister of international trade and industry Tengku Datuk Seri Zafrul Tengku Abdul Aziz revealed Tesla will officially set up shop in Malaysia. This will see the American car com… [+1163 chars]"
    //     }
    //     ,
    //     {
    //     "source": {
    //     "id": null,
    //     "name": "Biztoc.com"
    //     },
    //     "author": "apnews.com",
    //     "title": "Elon Musk apologizes after mocking laid-off Twitter employee",
    //     "description": "FILE - Tesla and SpaceX CEO Elon Musk speaks at the SATELLITE Conference and Exhibition, March 9, 2020, in Washington. After nine days of being locked out of his Twitter work computer, Haraldur Thorleifsson tweeted at owner Elon Musk, Monday, March 6, 2023, t…",
    //     "url": "https://biztoc.com/x/8bd06d1cc9ae6214",
    //     "urlToImage": "https://c.biztoc.com/p/8bd06d1cc9ae6214/og.webp",
    //     "publishedAt": "2023-03-08T03:42:08Z",
    //     "content": "FILE - Tesla and SpaceX CEO Elon Musk speaks at the SATELLITE Conference and Exhibition, March 9, 2020, in Washington. After nine days of being locked out of his Twitter work computer, Haraldur Thorl… [+303 chars]"
    //     }
    //     ]

    static propTypes = {
          category:PropTypes.string,
          pageSize:PropTypes.string,
          country: PropTypes.string,
          apiKey: PropTypes.string,
    };
    static defaultProps = {
      country: 'in',
      pageSize:8,
      category: "general",
      
    };

    async update(){
      this.props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data= await fetch(url);
      this.props.setProgress(30);
      let parsedData=await data.json();
      this.props.setProgress(70);
      console.log(parsedData);
      this.setState({
        // page:this.state.page,
        articles:parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
      })
      this.props.setProgress(100);
    }
//       handlePrevButton=async()=>{
//         // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//         // let data= await fetch(url);
//         // let parsedData=await data.json();
//         // console.log(parsedData);
//         // this.setState({
//         //   page:this.state.page-1,
//         //   articles:parsedData.articles
//         // })
//         this.setState({page:this.state.page-1 })
//            this.update();
//      }
//       handleNextButton=async()=>{
          
//           // if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

//           // }
//           // else{

//           //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//           //   let data= await fetch(url);
//           //   let parsedData=await data.json();
//           //   console.log(parsedData);
//           //   this.setState({
//           //     page:this.state.page+1,
//           //     articles:parsedData.articles
//           //   })
//           // }
//           this.setState({page:this.state.page+1})
//           this.update();
//  }

 fetchMoreData = async() => {
   this.setState({ loading: true });
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
   this.setState({
     page:this.state.page +1
   });
      let data= await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({
        // page:this.state.page,
        articles:this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResults,
        loading:false
      })

  
};
        constructor(props){
            super(props);
            console.log("constructor called") ;
            this.state={
                // articles : this.articles,
                articles : [],
                loading:true,
                page:1,
                totalResults:0  
            }
            document.title=`SkyNews-${this.props.category}`;
        }
        async componentDidMount(){
         console.log("cdm");
        //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        //  let data= await fetch(url);
        //  let parsedData =await data.json();
        //  console.log(parsedData);
        //  this.setState({
        //    articles:parsedData.articles,
        //    totalResults: parsedData.totalResults
        //  })
        this.update();
      
      }
  render() {

    
    return (
      <div className='container'>
        <h1  style={{marginTop:"95px"}}>Top {this.props.category} Headlines </h1>
       {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={this.state.loading && <Spinner />}
        >
          <div className="container">
        <div className="row my-3  py-3">
        {this.state.articles.map((element)=>{ 

         return <div className="col-md-4" key={element.url}>
               <NewsItem  title={element.title} description={element.description} date={element.publishedAt} author={element.author} imageUrl={element.urlToImage} source={element.source.name}newsUrl={element.url}/>
            </div>
        })}
              
        </div>
        </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1}className="btn btn-dark" onClick={this.handlePrevButton}>&larr; Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark"onClick={this.handleNextButton}>Next &rarr;</button>
        </div> */}
      </div>
    )
  }
}
