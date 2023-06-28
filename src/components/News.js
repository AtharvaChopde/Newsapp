import React, { useState,useEffect, useRef, useContext } from 'react'
import NewsItem from './NewsItem'
import "./Newsitem.css"
import "./main.css"
import Horizontalbar from './Horizontalbar'
import SearchBox from './Searchbox'
import Button from './Button'
import Item1 from './Item1'


export default function News() {

    const [news,setNews] = useState( [
        // {
        //     "source": {
        //         "id": null,
        //         "name": "Toronto Star"
        //     },
        //     "author": "Gilbert Ngabo - Sports Reporter",
        //     "title": "Blue Jays make pitch to cricket fans to attend Saturday’s game against the A’s",
        //     "description": "The first 15,000 fans will receive a free Blue Jays cricket replica jersey. There will also be a cricket simulator in the 500 level.",
        //     "url": "https://www.thestar.com/sports/bluejays/2023/06/22/blue-jays-make-pitch-to-cricket-fans-to-attend-saturdays-game-against-the-as.html",
        //     "urlToImage": "https://images.thestarimages.com/zuJK5hFGHyDtm60BnH3kC2UihAM=/1200x800/smart/filters:cb(1687391691024):format(webp)/https://www.thestar.com/content/dam/thestar/sports/bluejays/2023/06/22/blue-jays-make-pitch-to-cricket-fans-to-attend-saturdays-game-against-the-as/_1chris_gayle.jpg",
        //     "publishedAt": "2023-06-22T09:00:00Z",
        //     "content": "The Blue Jays’ pitch to fans heading to Rogers Centre this Saturday: Come for the usual baseball fun, and leave with a healthy dose of cricket knowledge. The Jays will celebrate Cricket Day for the f… [+2704 chars]"
        // },
        // {
        //     "source": {
        //         "id": "independent",
        //         "name": "Independent"
        //     },
        //     "author": "Michael Jones",
        //     "title": "England vs Australia LIVE: Cricket scorecard and Women’s Ashes updates from day one at Trent Bridge",
        //     "description": "Heather Knight leads the hosts in the only test match of the multi-format Women’s Ashes",
        //     "url": "https://www.independent.co.uk/sport/cricket/womens-ashes-score-live-england-australia-cricket-b2362164.html",
        //     "urlToImage": "https://static.independent.co.uk/2023/06/22/09/2023-06-20T143331Z_1769845455_UP1EJ6K14FT8G_RTRMADP_3_CRICKET-TEST-ENG-AUS-PREVIEW.JPG?quality=75&width=1200&auto=webp",
        //     "publishedAt": "2023-06-22T08:59:06Z",
        //     "content": "England announce team to face Australia\r\nEngland have gone early with the announcement of their 11 players to take on the Aussies in this test match. The toss - where teams are usually confirmed does… [+350 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "Business Standard"
        //     },
        //     "author": null,
        //     "title": "New floodlights to be installed at Wankhede Stadium ahead of 2023 World Cup",
        //     "description": "The Wankhede Stadium will soon get a facelift with new set of LED floodlights set to be installed along with refurbished hospitality boxes ahead of the 2023 ODI World Cup, scheduled in October-November this year.\nAlong with one India game, there is a semi-fin…",
        //     "url": "https://www.business-standard.com/cricket/news/new-floodlights-to-be-installed-at-wankhede-stadium-ahead-of-2023-world-cup-123062200480_1.html",
        //     "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2020-05/16/full/1589610917-1391.jpg",
        //     "publishedAt": "2023-06-22T08:55:59Z",
        //     "content": "The Wankhede Stadium will soon get a facelift with new set of LED floodlights set to be installed along with refurbished hospitality boxes ahead of the 2023 ODI World Cup, scheduled in October-Novemb… [+2132 chars]"
        // },
        // {
        //     "source": {
        //         "id": null,
        //         "name": "Mirror Online"
        //     },
        //     "author": "mirrornews@mirror.co.uk (Matthew Cooper)",
        //     "title": "England legend claims Australia are \"scared\" of 'Bazball' despite first Ashes Test win",
        //     "description": "Australia may have won the first Ashes Test at Edgbaston, but Ian Bell is still expecting England to win the series and believes 'Bazball' has \"unnerved\" Pat Cummins' side",
        //     "url": "https://www.mirror.co.uk/sport/cricket/ashes-england-australia-bazball-bell-30294809",
        //     "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article30286285.ece/ALTERNATES/s1200/0_GettyImages-1499041889.jpg",
        //     "publishedAt": "2023-06-22T08:49:36Z",
        //     "content": "England legend Ian Bell has claimed Australia are \"scared\" of 'Bazball' and is confident they will bounce back from defeat at Edgbaston ready for the second Test at Lord's. \r\nAustralia may have won a… [+3277 chars]"
        // },

    ])
    // const [search,setSearch] = useState("")
    const [page,setPage]= useState(1)
    const [totalPages,setTotalPages] = useState(1)
    const [grid,setGrid] = useState(true);
    const [stylem, setstylem] = useState("item1 main scrollable");
    const [country,setCountry] = useState("")
    const [searchnews,setSearchnews] = useState("all")
   

    // const getNews=async()=>{
    //     let data = await fetch("https://newsapi.org/v2/everything?q=cricket&from=2023-05-24&sortBy=publishedAt&apiKey=557da9d85b4648c289d641493ea815ba")
    //     const jsondata = await data.json();
       

    //     setNews(jsondata.articles)
    // }

    const pageSize = 4;

    const getNews = async () => {
        let data = await fetch(
          `https://newsapi.org/v2/everything?q=${searchnews}&from=2023-05-28&sortBy=publishedAt&pageSize=${pageSize}&page=${page}&country=${country}&apiKey=4752b0c3962248f1b86ff5519dcb4873`
        );
        const jsonData = await data.json();
        setNews(jsonData.articles);
        if(jsonData.totalPages){
        setTotalPages(Math.ceil(jsonData.totalResults/pageSize))
        }
      };
    
    // useEffect(()=>{
    //     getNews()
    // })


    useEffect(() => {
        getNews();
      }, [searchnews, news]);
    
      const handleSearch = (e) => {
        e.preventDefault();
        getNews();
      };
    


    // function cycleClasses() {
    //     var element = document.getElementById("img");
    //     var classes = ["img1", "img2"];
    //     var currentIndex = 0;
      
    //     function updateClass() {
    //     element.classList.add("fade-out");
    //     setTimeout(function () {
    //     element.classList.remove(classes[currentIndex], "fade-out");
    //     currentIndex = (currentIndex + 1) % classes.length;
    //     element.classList.add(classes[currentIndex], "fade-in");
    //     setTimeout(function () {
    //           element.classList.remove("fade-in");
    //         }, 500); 
    //       }, 500); 
    //     }
    //     updateClass();
    //     setInterval(updateClass, 3000);
    //   }
      
      
    //   useEffect(()=>{
    //     cycleClasses()
    // })



   




   const all = ()=>{
    setCountry("")
   }

   const us = ()=>{
    setCountry("us")
    alert("us")
   }

   const jpn = ()=>{
    setCountry("jp")
   }
   const rus = ()=>{
    setCountry("ru")
   }
   
   const fr = ()=>{
    setCountry("fr")
   }
   



   const Handlenext = ()=>{

    if (page < totalPages) setPage(page+1);
   
    
   }


   const Handleprev = ()=>{
    if (page > 1) setPage(page-1)
    setPage(1)
   }

  
   
   const switcher = ()=>{
    if (grid)
     {
        setGrid(false)
        setstylem("item1 scrollable middle")
    }
    else if (!grid) {
        setGrid(true)
        setstylem("item1 main scrollable")
    }   
   }



  

    const alrf = ()=>{
        alert("helo")
    }

function visit (url) {

    window.open(url)

}




  return (

    <>
    <div className='outer'>
    <div className="item1 slider name1 img" id= "img">
    <h1>News.co</h1>

    </div>

    {
        grid?(
            <>
            {/* <Horizontalbar callwho = {country}/> */}
           
            <div class="horizontal-bar">
   
   <div className="btns">
   <button className="explore-button" onClick={all}>
      <span>All</span>
    </button>
    <button className="explore-button" onClick={us}>
      <span>America</span>
    </button>
    <button className="explore-button" onClick={jpn}>
      <span>Japan</span>
    </button>
    <button className="explore-button" onClick={rus}>
      <span>Russia</span>
    </button>
    <button className="explore-button" onClick={fr}>
      <span>France</span>
    </button>
     {/* <Button title = "America"/>
     <Button title = "Japan"/>
     <Button title = "Russia"/>
     <Button title = "France"/>
    */}
   
   </div>
</div>
            </>
        ):
       <></>


    }
  
    <div className={stylem} id='maingrid'>
    {/* {
  news.map((x, i) => (
    <div className="news-item" key={i}>
      <NewsItem photo={x.urlToImage} title={x.title} desc={x.description} />
    </div>



  ))
} */}

{/* <NewsItem photo={news[0].urlToImage} title={news[0].title} desc={news[0].description} />

<NewsItem photo={news[0].urlToImage} title={news[0].title} desc={news[0].description} />

<NewsItem photo={news[0].urlToImage} title={news[0].title} desc={news[0].description} />

<NewsItem photo={news[0].urlToImage} title={news[0].title} desc={news[0].description} /> */}


{
        !grid?(
            
           
news.map((x, i) => (
    <div key={i} onClick={()=>{
        window.open(x.url)
    }}>
      <Item1 url={x.urlToImage} title={x.title.slice(0,20)} desc={x.description.slice(0,80)} />
    </div>
       ))







           
        ):

       news.map((x, i) => (
    <div className="news-item" key={i} >
      <NewsItem photo={x.urlToImage} title={x.title} desc={x.description}  />
    </div>
       ))



    }







        </div> 
    <div className="item1 griditem1">
    <div className="league 1 prev">
    {
        !grid?(
            <div className="prev-button" onClick={Handleprev}>
            Previous
            </div>
            
        ):
       <></>


    }

   




    </div>
    <div className="league k1 k2">
        <a href="#" class="home-button">
        <span class="icon home"></span>
        Home
        </a>
        <div className="home-button" onClick={switcher}>
        <span class="icon like"></span>
        Switch
        </div>
        </div>
    <div className="league hppm">
        <h1> Latest News </h1>


        {
             news.slice(0,3).map((x, i) => (
                <div className="hppn1" key= {i} onClick= {()=>{
                    window.open(x.url) 
                }}>
                <div className="hppn2 hh">{x.title.slice(0,20)}</div>
                <div className="hppn2 ll">{x.description.slice(0,40)}</div>
                </div>
                   ))
        }



        {/* <div className="hppn1" onClick= {()=>{
            window.open(news[0].url)
        }}>
        <div className="hppn2 hh">{news[0].title.slice(0,20)}</div>
        <div className="hppn2 ll">{news[0].description.slice(0,40)}</div>
        </div>
        <div className="hppn1" onClick= {()=>{
            window.open(news[1].url)
        }}>
        <div className="hppn2 hh">{news[1].title.slice(0,20)}</div>
        <div className="hppn2 ll">{news[1].description.slice(0,40)}</div>
        </div>
        <div className="hppn1" onClick= {()=>{
            window.open(news[2].url)
        }}>
        <div className="hppn2 hh">{news[2].title.slice(0,20)}</div>
        <div className="hppn2 ll">{news[2].description.slice(0,40)}</div>
        </div> */}
    
    </div>
    
  

    </div>

    <div className="item1 griditem2">
        <div className="league 1 prev">
        
   

        {
        !grid?(
            <div className="prev-button" onClick={Handlenext}>
            Next
            </div>
            
        ):
       <></>


    }

        </div>
        <div className="league l2">

        
        <form onSubmit={handleSearch}>
        <div className="wrapper">
            <input  className= "searchbox" type="text" placeholder='Search' onChange={(e)=>{
                if (e.target.value==="") setSearchnews("all")
                else
                setSearchnews(e.target.value);
                
                
            }} />
            <button className='searchbutn' type='submit'>Go</button>
            </div>
        </form>
       

        </div>
        <div className="league 3"></div>
        <div className="league 4"></div>
        <div className="league 5"></div>
        <div className="league 6"></div>


    </div>

    </div>
    </> 
  )
}
