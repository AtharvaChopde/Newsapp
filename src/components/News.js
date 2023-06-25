import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import "./Newsitem.css"
import "./main.css"
import Horizontalbar from './Horizontalbar'

export default function News() {

    const [news,setNews] = useState( [
        {
            "source": {
                "id": null,
                "name": "Toronto Star"
            },
            "author": "Gilbert Ngabo - Sports Reporter",
            "title": "Blue Jays make pitch to cricket fans to attend Saturday’s game against the A’s",
            "description": "The first 15,000 fans will receive a free Blue Jays cricket replica jersey. There will also be a cricket simulator in the 500 level.",
            "url": "https://www.thestar.com/sports/bluejays/2023/06/22/blue-jays-make-pitch-to-cricket-fans-to-attend-saturdays-game-against-the-as.html",
            "urlToImage": "https://images.thestarimages.com/zuJK5hFGHyDtm60BnH3kC2UihAM=/1200x800/smart/filters:cb(1687391691024):format(webp)/https://www.thestar.com/content/dam/thestar/sports/bluejays/2023/06/22/blue-jays-make-pitch-to-cricket-fans-to-attend-saturdays-game-against-the-as/_1chris_gayle.jpg",
            "publishedAt": "2023-06-22T09:00:00Z",
            "content": "The Blue Jays’ pitch to fans heading to Rogers Centre this Saturday: Come for the usual baseball fun, and leave with a healthy dose of cricket knowledge. The Jays will celebrate Cricket Day for the f… [+2704 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Michael Jones",
            "title": "England vs Australia LIVE: Cricket scorecard and Women’s Ashes updates from day one at Trent Bridge",
            "description": "Heather Knight leads the hosts in the only test match of the multi-format Women’s Ashes",
            "url": "https://www.independent.co.uk/sport/cricket/womens-ashes-score-live-england-australia-cricket-b2362164.html",
            "urlToImage": "https://static.independent.co.uk/2023/06/22/09/2023-06-20T143331Z_1769845455_UP1EJ6K14FT8G_RTRMADP_3_CRICKET-TEST-ENG-AUS-PREVIEW.JPG?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-06-22T08:59:06Z",
            "content": "England announce team to face Australia\r\nEngland have gone early with the announcement of their 11 players to take on the Aussies in this test match. The toss - where teams are usually confirmed does… [+350 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Standard"
            },
            "author": null,
            "title": "New floodlights to be installed at Wankhede Stadium ahead of 2023 World Cup",
            "description": "The Wankhede Stadium will soon get a facelift with new set of LED floodlights set to be installed along with refurbished hospitality boxes ahead of the 2023 ODI World Cup, scheduled in October-November this year.\nAlong with one India game, there is a semi-fin…",
            "url": "https://www.business-standard.com/cricket/news/new-floodlights-to-be-installed-at-wankhede-stadium-ahead-of-2023-world-cup-123062200480_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2020-05/16/full/1589610917-1391.jpg",
            "publishedAt": "2023-06-22T08:55:59Z",
            "content": "The Wankhede Stadium will soon get a facelift with new set of LED floodlights set to be installed along with refurbished hospitality boxes ahead of the 2023 ODI World Cup, scheduled in October-Novemb… [+2132 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mirror Online"
            },
            "author": "mirrornews@mirror.co.uk (Matthew Cooper)",
            "title": "England legend claims Australia are \"scared\" of 'Bazball' despite first Ashes Test win",
            "description": "Australia may have won the first Ashes Test at Edgbaston, but Ian Bell is still expecting England to win the series and believes 'Bazball' has \"unnerved\" Pat Cummins' side",
            "url": "https://www.mirror.co.uk/sport/cricket/ashes-england-australia-bazball-bell-30294809",
            "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article30286285.ece/ALTERNATES/s1200/0_GettyImages-1499041889.jpg",
            "publishedAt": "2023-06-22T08:49:36Z",
            "content": "England legend Ian Bell has claimed Australia are \"scared\" of 'Bazball' and is confident they will bounce back from defeat at Edgbaston ready for the second Test at Lord's. \r\nAustralia may have won a… [+3277 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNA"
            },
            "author": null,
            "title": "McDonald backs Smith, Labuschagne to fire in second Ashes test",
            "description": "Australia coach Andrew McDonald backed Steve Smith and Marnus Labuschagne to rebound from rare twin failures in the opening Ashes test, but said it was a positive sign that his team could still win without getting hefty contributions from them.The pair muster…",
            "url": "https://www.channelnewsasia.com/sport/mcdonald-backs-smith-labuschagne-fire-second-ashes-test-3579946",
            "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--Xot_rUoC--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-06-22t083559z_1_lynxmpej5l08m_rtroptp_3_cricket-test-eng-aus-preview.jpg?itok=ldHOhLsw",
            "publishedAt": "2023-06-22T08:35:59Z",
            "content": "Australia coach Andrew McDonald backed Steve Smith and Marnus Labuschagne to rebound from rare twin failures in the opening Ashes test, but said it was a positive sign that his team could still win w… [+1624 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Diplomat"
            },
            "author": "Rathindra Kuruwita",
            "title": "Devotion of Fans Lets South Asian Cricketers Get Away With Crimes",
            "description": "Cricketers enjoy prestige and popularity. Their connections to the political and business elite enable them to get away easily even with sexual assault.",
            "url": "https://thediplomat.com/2023/06/devotion-of-fans-lets-south-asian-cricketers-get-away-with-crimes/",
            "urlToImage": "https://thediplomat.com/wp-content/uploads/2023/06/sizes/td-story-s-2/thediplomat_2023-06-22-083620.jpg",
            "publishedAt": "2023-06-22T08:34:00Z",
            "content": "Advertisement\r\nFor many South Asians, cricket is life. Even at times when the national team is underperforming, and in the case of Sri Lanka the team has been failing for years, people tune in to wat… [+6135 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Ollie Lewis",
            "title": "The Ashe: Stuart Broad taunts Australian media over Ollie Robinson treatment amid Usman Khawaja saga",
            "description": "There has been plenty of scrutiny on Robinson after he was heard calling Usman Khawaja a 'f***ing p***k' after dismissing him for 141 runs during the fiercely-contested first Ashes Test.",
            "url": "https://www.dailymail.co.uk/sport/cricket/article-12222147/The-Ashe-Stuart-Broad-taunts-Australian-media-Ollie-Robinson-treatment-amid-Usman-Khawaja-saga.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/22/09/72407565-0-image-a-4_1687423285727.jpg",
            "publishedAt": "2023-06-22T08:28:25Z",
            "content": "Stuart Broad has weighed in on the drama surrounding Ollie Robinson as the English veteran took to social media to poke fun at the Australian media.\r\nThere has been plenty of scrutiny on Robinson aft… [+2588 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "Chhetri's Hat-trick vs Pakistan Triggers Kohli Comparison Memes",
            "description": "Sunil Chhetri scored a hat-trick against Pakistan in India's SAFF Championship opener, reminding fans of Virat Kohli's show in T20 World Cup 2022.",
            "url": "https://sports.ndtv.com/football/virat-kohli-sunil-chhetri-memes-flood-internet-after-india-captains-hat-trick-against-pakistan-4142491",
            "urlToImage": "https://c.ndtvimg.com/2023-06/tdau09i_virat-kohli-and-sunil-chhetri_650x300_22_June_23.jpg",
            "publishedAt": "2023-06-22T08:18:43Z",
            "content": "The Indian football team's dominant 4-0 win over Pakistan in the SAFF Championship opener saw none other than the captain Sunil Chhetri step up and deliver. Chhetri bagged a brilliant hat-trick for I… [+2303 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Aine Fox",
            "title": "‘Bittersweet’ Windrush 75th anniversary marked",
            "description": "Events will be held at the Port of Tilbury where the Empire Windrush ship arrived on June 22 1948.",
            "url": "https://www.independent.co.uk/news/uk/caribbean-windsor-itv-news-james-cleverly-amber-rudd-b2361955.html",
            "urlToImage": "https://static.independent.co.uk/2023/06/22/00/a743b6ebf7a5e656c080edc9d4ad48eaY29udGVudHNlYXJjaGFwaSwxNjg3NDUxODY4-2.72697937.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-06-22T08:13:02Z",
            "content": "For free real time breaking news alerts sent straight to your inbox sign up to our breaking news emails\r\nSign up to our free breaking news emails\r\nCommemorations and celebrations are taking place acr… [+3827 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Rob Smyth (now) and Adam Collins (later)",
            "title": "Women’s Ashes Test match, day one: England v Australia – live",
            "description": "<ul><li>Over-by-over updates from the one-off match at Trent Bridge</li><li>Play in the cricket starts in Nottingham at 11am BST/8pm AEST</li><li>Get in touch: send your thoughts to Rob by email</li></ul>Ambassador, with all this Ashes cricket you really are …",
            "url": "https://www.theguardian.com/sport/live/2023/jun/22/the-womens-ashes-2023-england-vs-australia-live-updates-test-match-cricket-eng-v-aus-latest-score-scorecard-day-one-trent-bridge",
            "urlToImage": "https://i.guim.co.uk/img/media/ff9e57ecb2b662a057848656b94c95109661d953/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=2c0dc868a407c1b896dfed6abde846f3",
            "publishedAt": "2023-06-22T08:01:41Z",
            "content": "How the Women's Ashes works\r\nSome of you will already know this but its worth a refresher. The womens Ashes is a multi-format competition: one Test match, three T20s and three ODIs.\r\nThere are four p… [+8892 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "George Sessions",
            "title": "Curators of exhibition at MCC Museum hoping to inspire Jewish England Test star",
            "description": "England and Australia fans at Lord’s next week will get the chance to visit the new exhibition in the MCC Museum.",
            "url": "https://www.independent.co.uk/sport/cricket/jewish-cricket-england-australia-ashes-b2362159.html",
            "urlToImage": "https://static.independent.co.uk/2023/06/22/09/21125520-6b1c49fb-53e6-441d-a142-0506b08ffb83.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-06-22T08:00:15Z",
            "content": "Sign up to our free sport newsletter for all the latest news on everything from cycling to boxing\r\nSign up to our free sport email for all the latest news\r\nThe curators of the inaugural exhibition at… [+5732 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Scott Bailey",
            "title": "Andrew McDonald looking for big response from Scott Boland after Bazball pounding at Edgbaston",
            "description": "Australia are searching for a way to help quick Scott Boland better contend with England's aggressive batting, as selectors weigh up their bowling attack ahead of the second Test at Lord's.",
            "url": "https://www.dailymail.co.uk/sport/cricket/article-12221867/Andrew-McDonald-looking-big-response-Scott-Boland-Bazball-pounding-Edgbaston.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/22/07/72404171-0-image-a-43_1687415877286.jpg",
            "publishedAt": "2023-06-22T07:21:34Z",
            "content": "Australia are searching for a way to help Scott Boland better contend with England's aggressive batting, as coaches weigh up their bowling attack for the second Test at Lord's.\r\nThe players have been… [+2495 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "City A.M."
            },
            "author": "Frank Dalleres",
            "title": "Andrew Strauss and Bryan Habana to return to sport at first ever Padel Classic in London",
            "description": "Sporting greats Sir Andrew Strauss and Bryan Habana are set to come out of retirement next summer for an all-star padel pro-am tournament at the Hurlingham Club.  The Padel Classic, which will also feature a corporate tournament, is scheduled to be played on …",
            "url": "https://www.cityam.com/andrew-strauss-and-bryan-habana-to-return-to-sport-at-first-ever-padel-classic-in-london/",
            "urlToImage": "https://www.cityam.com/wp-content/uploads/2023/06/GettyImages-1415553503.jpg",
            "publishedAt": "2023-06-22T07:00:00Z",
            "content": "Thursday 22 June 2023 8:00 am\r\nFormer England cricket captain Andrew Strauss is playing in the Padel Classic at the Hurlingham Club next year\r\nSporting greats Sir Andrew Strauss and Bryan Habana are … [+2274 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Www.gov.uk"
            },
            "author": "Department for Levelling Up, Housing and Communities",
            "title": "News story: Windrush 75: Celebrating 75 Years of the Windrush Generation",
            "description": "National Windrush Day (22 June) this year marks 75 years since the MV Empire Windrush arrived in the UK.",
            "url": "https://www.gov.uk/government/news/windrush-75-celebrating-75-years-of-the-windrush-generation",
            "urlToImage": "https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/187769/s960_windr.PNG",
            "publishedAt": "2023-06-22T06:50:44Z",
            "content": "<ul><li>Educational, arts and sporting projects and activities are being held across the UK to celebrate the Windrush generation and their contribution to society.\r\n</li><li>New Speakers for Schools … [+3900 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Times Of India",
            "title": "Live Score: Netherlands vs USA, World Cup Qualifiers",
            "description": "Netherlands vs United States of America ODI Live Cricket Score: USA are desperate to win having both their matches so far, while Netherlands also tas",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/netherlands-vs-united-states-of-america-odi-cricket-score-updates-ned-vs-usa-icc-world-cup-2023-qualifiers/liveblog/101183570.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-101183570,width-1070,height-580,imgsize-44538,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-06-22T06:45:59Z",
            "content": "Ryan Klein to Steven Taylor, No run.\r\nRyan Klein to Steven Taylor, No run.\r\nRyan Klein to Steven Taylor, Fullish delivery, outside off, Steven Taylor squeezes it through point and collects a couple o… [+6738 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Telegraph.co.uk"
            },
            "author": "Fiona Tomas, Will Macpherson, Daisy Goodwin",
            "title": "Women’s Ashes 2023: England vs Australia fixtures, format and TV channel for Test series",
            "description": "Everything you need to know about the 2023 Women's Ashes, including dates, venues, tickets, and news of the squads and warm-up matches",
            "url": "https://www.telegraph.co.uk/cricket/2023/06/22/womens-ashes-2023-england-australia-fixtures-format-tv/",
            "urlToImage": "https://www.telegraph.co.uk/content/dam/cricket/2023/06/20/TELEMMGLPICT000339541095_16872559779240_trans_NvBQzQNjv4Bq7C2LdXbH_PAlC1lFkEwjzKAezwuvexs_ues-aCB_TCg.jpeg?impolicy=logo-overlay",
            "publishedAt": "2023-06-22T06:41:30Z",
            "content": "Jon Lewis, the England head coach, has picked the uncapped Western Storm duo Lauren Filer and Danielle Gibson in his squad for the Womens Ashes.\r\nEngland are bidding to reclaim the Ashes for the firs… [+3787 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Tim Paine believes Australia holds advantage over England in Ashes series",
            "description": "Former Test skipper of the Australian cricket team, Tim Paine, has expressed his belief that Australia possesses an advantage over England in the upcoming Ashes series due to their ability to play at \"different tempos,\" while England tends to adopt a more agg…",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/ashes/former-skipper-tim-paine-believes-australia-holds-advantage-over-england-in-ashes-series/articleshow/101183057.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-101183290,width-1070,height-580,imgsize-52378,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-06-22T06:38:33Z",
            "content": "England coach McCullum stands by attacking approach despite Ashes defeatCoach Brendon McCullum has expressed his belief that England's attacking approach in the opening Ashes Test \"validated\" their s… [+170 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Times Of India",
            "title": "Live Score: WI vs Nepal, World Cup Qualifiers",
            "description": "West Indies vs Nepal ODI Live Cricket Score: Both Nepal and West Indies are coming into this match after beating USA and will look to add to their po",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/west-indies-vs-nepal-odi-live-cricket-score-updates-wi-vs-nep-icc-world-cup-2023-qualifiers/liveblog/101183112.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-101183112,width-1070,height-580,imgsize-54430,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-06-22T06:31:29Z",
            "content": "Gulsan Jha to Shai Hope, No run.\r\nGulsan Jha to Shai Hope, Very full and outside off, pushed to cover.\r\nGulsan Jha to Johnson Charles, OUT! GONE! Charles goes now and West Indies in slight trouble he… [+4541 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Now",
            "title": "Expecting low double-digit growth rate year on year for the next two years: Sanjay Sethi, Chalet Hotels",
            "description": "I think we are at least four years away from demand and supply catching up. The reason being hotels are a brick-and-mortar business which take time to develop and from announcing a hotel to actually opening it to guests can be anywhere between four to seven y…",
            "url": "https://economictimes.indiatimes.com/markets/expert-view/expecting-low-double-digit-growth-rate-year-on-year-for-the-next-two-years-sanjay-sethi-chalet-hotels/articleshow/101182846.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-101182868,width-1070,height-580,imgsize-2966,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-06-22T06:29:33Z",
            "content": "\"Demand is outpacing supply by a significant margin and supply is not easy to come by. In fact, even more difficult in large cities because real estate prices are through the roof,\" says Sanjay Sethi… [+8704 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Telegraph.co.uk"
            },
            "author": "Will Macpherson, Nick Hoult, Tim Wigmore",
            "title": "Next Ashes Test 2023: England vs Australia fixtures, start times and TV channel",
            "description": "Everything you need to know from the 2023 Ashes, including match dates, venues, live rights and highlights",
            "url": "https://www.telegraph.co.uk/cricket/2023/06/22/ashes-2023-england-vs-australia-fixtures-start-times-tv-channel-watch/",
            "urlToImage": "https://www.telegraph.co.uk/content/dam/cricket/2023/06/20/TELEMMGLPICT000340018411_16872903276630_trans_NvBQzQNjv4Bq64Te6HCATcSH7dW9rjlZqd5s70qLB_3Zrzk1dhnjjvo.jpeg?impolicy=logo-overlay",
            "publishedAt": "2023-06-22T06:22:08Z",
            "content": "Australia lead the Ashes 1-0 after a thrilling two-wicket victory at Edgbaston. Set 281 to win, the final day of the first Test was in the balance until a ninth-wicket partnership between Pat Cummins… [+3685 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "\"Back It Up With Your Skills\": Fuming Ponting Lashes Out At England Star",
            "description": "England pacer Ollie Robinson had given Ricky Ponting's example when questioned about his antics in the Edgbaston Test against Australia.",
            "url": "https://sports.ndtv.com/ashes-2023/back-it-up-with-your-skills-ricky-ponting-fires-shots-at-england-pacer-ollie-robinson-4142206",
            "urlToImage": "https://c.ndtvimg.com/2023-05/fggq554o_ricky-ponting-bcci_625x300_19_May_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2023-06-22T06:09:22Z",
            "content": "England pacer Ollie Robinson has courted plenty of attention for his antics in the first Ashes Test. His duels with Usman Khawaja were well noted by the cricketing fraternity and the pacer was even a… [+1661 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Esther Addley",
            "title": "Thursday briefing: The latest in the hunt for the missing Titan sub",
            "description": "In today’s newsletter: As the search intensifies, we look at the key developments – and controversy – around the lost submersible<ul><li>Sign up here for our daily newsletter, First Edition</li></ul>Good morning. If it is still intact – and the five men insid…",
            "url": "https://www.theguardian.com/world/2023/jun/22/thursday-briefing-the-latest-in-the-hunt-for-the-missing-titan-sub",
            "urlToImage": "https://i.guim.co.uk/img/media/ec05383822a4b1965ff7705b8a35d5298fd9e72f/0_35_800_480/master/800.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=66106217dd80ffc60d8b681d08661d92",
            "publishedAt": "2023-06-22T06:01:30Z",
            "content": "Good morning. If it is still intact and the five men inside are still alive the missing Titan submersible is now down to its very last few hours of usable oxygen.\r\nSince Sunday, when the tiny carbon … [+18302 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "City A.M."
            },
            "author": "Frank Dalleres",
            "title": "Ed Warner: Rugby, boxing, netball, Para sport – what should Saudi Arabia buy next?",
            "description": "Challenge accepted! A reader last week asked what the most investable sports worldwide are from the perspective of a sovereign wealth fund such as Saudi Arabia’s PIF. He had rugby union in mind, but wanted a long train journey to dredge up others. A return tr…",
            "url": "https://www.cityam.com/ed-warner-rugby-boxing-netball-para-sport-what-should-saudi-arabia-buy-next/",
            "urlToImage": "https://www.cityam.com/wp-content/uploads/2023/06/GettyImages-1402351142.jpg",
            "publishedAt": "2023-06-22T06:00:00Z",
            "content": "Thursday 22 June 2023 7:00 am\r\nSaudi Arabia’s Public Investment Fund, headed by Yasir al-Rumayyan, has invested in football and golf could rugby or boxing be next?\r\nChallenge accepted! A reader last … [+7853 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "Netherlands vs United States Of America, WC Qualifier, Live Score Updates",
            "description": "NED vs USA, Cricket World Cup Qualifier, Live:Netherlands aim to keep their World Cup hopes alive as they take on minnows United States Of America in a crunch qualifier at the Takashinga Sports Club in Harare",
            "url": "https://sports.ndtv.com/cricket/netherlands-vs-united-states-of-america-world-cup-qualifier-live-score-updates-4142371",
            "urlToImage": "https://c.ndtvimg.com/2023-06/emijd178_max-odowd-806_625x300_22_June_23.jpg",
            "publishedAt": "2023-06-22T05:56:14Z",
            "content": "Hello and a warm welcome folks! The Netherlands and the USA will lock horns in the 10th match of the ICC World Cup Qualifiers at Takashinga Sports Club, Harare. The Netherlands lost to Zimbabwe by si… [+1811 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "West Indies vs Nepal ICC World Cup Qualifier: Live Score And Updates",
            "description": "West Indies vs Nepal ICC World Cup Qualifier LIVE: West Indies look to continue rampant run in qualifiers.",
            "url": "https://sports.ndtv.com/cricket/west-indies-vs-nepal-icc-world-cup-qualifier-live-cricket-score-and-updates-4142359",
            "urlToImage": "https://c.ndtvimg.com/2023-06/0e0c1gfo_west-indies-qualifier-twitter_625x300_22_June_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2023-06-22T05:49:01Z",
            "content": "We are headed towards an exciting period in the ICC Cricket World Cup Qualifiers as the race for the Super Sixes heats up and we focus our attention on match 9 for a Group A encounter between West In… [+2198 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "EFL fixtures released, plus transfer window latest",
            "description": "Updates as EFL fixtures are released at 09:00 BST, plus transfer news as Ilkay Gundogan heads to Barcelona and Chelsea reject Man Utd's Mason Mount bid",
            "url": "https://www.bbc.co.uk/sport/live/football/65982507",
            "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
            "publishedAt": "2023-06-22T05:23:34Z",
            "content": "Another busy one today.\r\nJust last week, I was here revealing all the Premier League fixtures. Today, at 09:00 BST, it is the turn of the EFL. Stay tuned for that.\r\nThere's also a load of transfer ne… [+325 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Hollie Richardson , Graeme Virtue , Ali Catterall and Jack Seale",
            "title": "TV tonight: Sex and the City fans can’t wait for Samantha’s fabulous return",
            "description": "And Just Like That is back with the promise of Kim Cattrall. Plus, the BBC kicks off another year of Glastonbury coverage. Here’s what to watch this evening Continue reading...",
            "url": "https://www.theguardian.com/tv-and-radio/2023/jun/22/tv-tonight-sex-and-the-city-fans-cant-wait-for-samanthas-fabulous-return",
            "urlToImage": "https://i.guim.co.uk/img/media/0653687877fbcdb12dab5c7d9730b1ee28596017/2405_241_6380_3828/master/6380.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=19ff139e80a4d1738acb433474caaa80",
            "publishedAt": "2023-06-22T05:20:00Z",
            "content": "And Just Like That\r\n9pm, Sky Comedy\r\nThe fabulous friends are back, and this season its been confirmed that Kim Cattrall will make a fleeting, albeit glorious, return as Samantha Jones. Is Carrie dat… [+2285 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "'England will go on attack' - Women's Ashes Test preview",
            "description": "BBC cricket pundits Ebony Rainford-Brent, Alison Mitchell and Henry Moeran look ahead to the start of the Women's Ashes.",
            "url": "https://www.bbc.co.uk/sport/av/cricket/65964180",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/C701/production/_130154905_p0fw7jnt.jpg",
            "publishedAt": "2023-06-22T05:17:17Z",
            "content": "BBC cricket pundits Ebony Rainford-Brent, Alison Mitchell and Henry Moeran look ahead to the start of the Women's Ashes. \r\nThe Women's Ashes start on Thursday with a one-off Test - worth four points … [+214 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "PCB's likely chairman Zaka Ashraf rejects 'hybrid model' for Asia Cup, on collision course with BCCI - Times of India",
            "description": "<ol><li>PCB's likely chairman Zaka Ashraf rejects 'hybrid model' for Asia Cup, on collision course with BCCI  Times of India\r\n</li><li>Zaka Ashraf hoping to undo Asia Cup 'injustice' towards Pakistan | Cricbuzz.com - Cricbuzz  Cricbuzz\r\n</li><li>After Rejecti…",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMitgFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9zcG9ydHMvY3JpY2tldC9hc2lhLWN1cC9wY2JzLWxpa2VseS1jaGFpcm1hbi16YWthLWFzaHJhZi1yZWplY3RzLWh5YnJpZC1tb2RlbC1mb3ItYXNpYS1jdXAtb24tY29sbGlzaW9uLWNvdXJzZS13aXRoLWJjY2kvYXJ0aWNsZXNob3cvMTAxMTcwNDA2LmNtc9IBsQFodHRwczovL20udGltZXNvZmluZGlhLmNvbS9zcG9ydHMvY3JpY2tldC9hc2lhLWN1cC9wY2JzLWxpa2VseS1jaGFpcm1hbi16YWthLWFzaHJhZi1yZWplY3RzLWh5YnJpZC1tb2RlbC1mb3ItYXNpYS1jdXAtb24tY29sbGlzaW9uLWNvdXJzZS13aXRoLWJjY2kvYW1wX2FydGljbGVzaG93LzEwMTE3MDQwNi5jbXM?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-06-22T05:11:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "The Ashes 2023: How do England beat world-dominating Australia?",
            "description": "It's the million-dollar question of women's cricket: How do you beat Australia?",
            "url": "https://www.bbc.co.uk/sport/cricket/65918010",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17ED0/production/_130100089_howdoenglandbeattheunbeatableteamindex.jpg",
            "publishedAt": "2023-06-22T05:06:32Z",
            "content": "Heather Knight is hoping to lead England to her first Ashes win as captain at the fourth attempt\r\n<table><tr><th>Women's Ashes Test 2023</th></tr>\r\n<tr><td>Venue: Trent Bridge Dates: 22-26 June</td><… [+6454 chars]"
        },
        {
            "source": {
                "id": "the-irish-times",
                "name": "The Irish Times"
            },
            "author": "Ciarán Murphy",
            "title": "Ciarán Murphy: Time the GAA treated women’s teams with respect and equality",
            "description": "The country’s top football and camogie players are simply demanding the basics – things like mileage expenses, medical services, and playing gear",
            "url": "https://www.irishtimes.com/sport/gaelic-games/2023/06/22/ciaran-murphy-time-the-gaa-treated-womens-teams-with-respect-and-equality/",
            "urlToImage": "https://www.irishtimes.com/resizer/7kivhKY5Ha58oLbQLUbkm43DNNQ=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/VTMHDPSCQBHY7MOJYA3GG2UXWY.jpg",
            "publishedAt": "2023-06-22T05:00:00Z",
            "content": "Last week I got a text message from a friend of mine currently engaged in a frantic 80-hour week of taxiing his kids from one sport to the next to the next. Hes by no means a GAA person, and in fact … [+5010 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Pa Sport Staff",
            "title": "On this day in 2012: Danish Kaneria given lifetime domestic ban by ECB",
            "description": "The ECB panel delivered a damning verdict following the Pakistani’s involvement in a spot-fixing plot.",
            "url": "https://www.independent.co.uk/sport/cricket/ecb-pakistani-essex-english-welsh-b2362063.html",
            "urlToImage": "https://static.independent.co.uk/2023/06/22/06/2a9dfde67b89000258bdc2e8aa826576Y29udGVudHNlYXJjaGFwaSwxNjg3NDI1MTUx-2.3891430.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-06-22T05:00:00Z",
            "content": "Sign up to our free sport newsletter for all the latest news on everything from cycling to boxing\r\nSign up to our free sport email for all the latest news\r\nDanish Kaneria was banned from English and … [+1558 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "NCA NewsWire",
            "title": "Ricky Ponting slams Ollie Robinson over his Ashes outburst at Usman Khawaja during first Test",
            "description": "Former Australian captain Ricky Ponting has put new Ashes villain Ollie Robinson in the gun, labelling the bowler a 'slow learner' for his efforts to unsettle Usman Khawaja in the opening Test.",
            "url": "https://www.dailymail.co.uk/sport/cricket/article-12221207/Slow-learner-Ponting-whacks-Ashes-villain-called-delivers-harsh-truth-England.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/22/05/72400953-0-image-a-2_1687407870628.jpg",
            "publishedAt": "2023-06-22T04:42:46Z",
            "content": "Former Australian captain Ricky Ponting has put new Ashes villain Ollie Robinson in the gun, labelling the bowler a 'slow learner' for his failed efforts to unsettle Usman Khawaja in the opening Test… [+3661 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "ft.com",
            "title": "Ashes showdown looks to put women’s cricket on par with men’s game",
            "description": "Joint marketing boosts ticket sales for England-Australia clash in previously male-dominated sport",
            "url": "https://biztoc.com/x/02f67ce4fc235b7c",
            "urlToImage": "https://c.biztoc.com/210/og.png",
            "publishedAt": "2023-06-22T04:38:04Z",
            "content": "Joint marketing boosts ticket sales for England-Australia clash in previously male-dominated sport\r\nThis story appeared on ft.com, 2023-06-21."
        },
        {
            "source": {
                "id": null,
                "name": "Khabarhub.com"
            },
            "author": "Khabarhub",
            "title": "World Cup Qualifier: Nepal playing against West Indies",
            "description": "KATHMANDU: Nepal is playing its third match in the ICC One Day Cricket World Cup Qualifiers against West Indies today. In the match to be held at 12: 45 pm, Nepal is competing against the West Indies in Harare. Earlier, Nepal lost to Zimbabwe in the first mat…",
            "url": "https://english.khabarhub.com/2023/22/308165/",
            "urlToImage": "https://english.khabarhub.com/wp-content/uploads/2023/06/Nepal_West-Indies_sportewave.webp",
            "publishedAt": "2023-06-22T04:25:40Z",
            "content": "KATHMANDU: Nepal is playing its third match in the ICC One Day Cricket World Cup Qualifiers against West Indies today.\r\nIn the match to be held at 12: 45 pm, Nepal is competing against the West Indie… [+541 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "Watch: Anderson Turns Peacekeeper To Dissolve Robinson-Khawaja Altercation",
            "description": "Ollie Robinson and Usman Khawaja squared-off on multiple occasions during the Edgbaston Test.",
            "url": "https://sports.ndtv.com/ashes-2023/tension-rises-again-between-usman-khawaja-ollie-robinson-during-1st-ashes-test-watch-4140023",
            "urlToImage": "https://c.ndtvimg.com/2023-06/fonjfhqo_usman-khawaja-_625x300_21_June_23.jpg",
            "publishedAt": "2023-06-22T04:15:37Z",
            "content": "The thrilling first Ashes Test match between England and Australia ended in the favour of the Pat Cummins-led side on Tuesday by two wickets. Playing in Birmingham, the visitors held their nerves as … [+2084 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lancashire Telegraph"
            },
            "author": "Sarah McGee",
            "title": "Plea issued after vandals break into Accrington Cricket Club",
            "description": "Vandals caused thousands in damage after breaking into cricket club",
            "url": "https://www.lancashiretelegraph.co.uk/news/23603177.plea-issued-vandals-break-accrington-cricket-club/",
            "urlToImage": "https://www.lancashiretelegraph.co.uk/resources/images/16912165/?type=og-image",
            "publishedAt": "2023-06-22T04:00:00Z",
            "content": "The vandals broke in at around 1am, damaging bi-folding doors, a garage roof, and the sites alarm and CCTV system.\r\nBryan McGrath, committee member at Accrington Cricket Club, said it will cost thous… [+1797 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "\"I Can't Do Much\": Incoming Pakistan Board Chief Softens Asia Cup Stance",
            "description": "Zaka Ashraf, the PCB nominated chairman of the board, has softened his stance on the Asia Cup, saying since the 'hybrid model' has already been approved, he can't do much to change it.",
            "url": "https://sports.ndtv.com/cricket/i-cant-do-much-incoming-pakistan-board-chief-softens-asia-cup-stance-4142107",
            "urlToImage": "https://c.ndtvimg.com/2023-06/89ilec6o_zaka-ashraf-twitter_650x300_22_June_23.jpg",
            "publishedAt": "2023-06-22T03:29:35Z",
            "content": "A fresh Asia Cup 2023 controversy seemed to have erupted on Wednesday after the incoming Pakistan Cricket Board (PCB) chief Zaka Ashraf slammed the 'hybrid model', suggesting Pakistan should be hosti… [+1754 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Sports Desk",
            "title": "Ricky Ponting hits back at Ollie Robinson for dragging his name while defending his send-off of Usman Khawaja",
            "description": "Former Australia captain says \"If he (Robinson) is sitting back thinking about me, then no wonder he bowled like the way that he did in that game.\"",
            "url": "https://indianexpress.com/article/sports/cricket/ricky-ponting-hits-back-at-ollie-robinson-for-dragging-his-name-while-defending-his-send-off-of-usman-khawaja-8678903/",
            "urlToImage": "https://images.indianexpress.com/2023/06/Ollie-Robinson.jpg",
            "publishedAt": "2023-06-22T02:53:27Z",
            "content": "Former Australia captain Ricky Ponting has slammed England seamer Ollie Robinson for dragging his name while defending his send-off of Usman Khawaja. \r\n“We’ve all seen Ricky Ponting and other Aussies… [+1213 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "James Cooney",
            "title": "Aussie Ashes heroes add insult to injury by choosing to party in infamous pub after Test win",
            "description": "Australian cricket players have been spotted celebrating their thrilling Ashes victory in the pub that David Warner threw a punch at Joe Root - and some English fans are furious.",
            "url": "https://www.dailymail.co.uk/sport/cricket/article-12221171/Aussie-Ashes-heroes-add-insult-injury-choosing-party-infamous-pub-Test-win.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/22/03/72398691-0-image-a-171_1687400601574.jpg",
            "publishedAt": "2023-06-22T02:48:52Z",
            "content": "Australian cricket players have been spotted celebrating their thrilling Ashes victory in the pub where David Warner punched Joe Root almost exactly a decade ago - and some English fans are furious.\r… [+3634 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Mary Mrad",
            "title": "Moment WA premier tells Taylor Swift 'it's your loss' after she snubbed major cities on Eras Tour",
            "description": "WA Premier Roger Cook has reacted to news Taylor Swift will only be performing in Sydney and Melbourne during the Australian leg of her The Eras Tour.",
            "url": "https://www.dailymail.co.uk/tvshowbiz/article-12221269/Moment-WA-premier-tells-Taylor-Swift-loss-snubbed-major-cities-Eras-Tour.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/22/03/72399017-0-image-a-59_1687400438827.jpg",
            "publishedAt": "2023-06-22T02:48:51Z",
            "content": "Western Australia Premier Roger Cook has reacted to news Taylor Swift will only be performing in Sydney and Melbourne during the Australian leg of her The Eras Tour.\r\nThe pop superstar announced on W… [+1801 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "\"This Is Bit Of Overspin...\": Australia Great On ICC's Penalising Moeen",
            "description": "England all-rounder Moeen Ali became the talk of the town after he was reprimanded by the International Cricket Council for breaching the Code of Conduct during the ongoing first Ashes Test",
            "url": "https://sports.ndtv.com/ashes-2023/this-is-bit-of-overspin-australia-great-on-iccs-penalising-moeen-ali-4136997",
            "urlToImage": "https://c.ndtvimg.com/2023-06/ucoo86e8_moeen-ali-afp_625x300_18_June_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2023-06-22T02:26:34Z",
            "content": "England all-rounder Moeen Ali became the talk of the town after he was reprimanded by the International Cricket Council for breaching the Code of Conduct during the ongoing first Ashes Test against A… [+1849 chars]"
        },
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "ABC News",
            "title": "How Darcie Brown has become an integral cog in the Australian women's cricket squad",
            "description": "Darcie Brown has only played 35 matches for Australia, but her trophy cabinet is already stacked to the brim, with the quick a key part of Australia's success.",
            "url": "https://www.abc.net.au/news/2023-06-22/womens-ashes-darcie-brown-on-the-rise-for-australia/102509246",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/0fff20d60b45a6723cf2ad762665616d?impolicy=wcms_crop_resize&cropH=2237&cropW=3976&xPos=0&yPos=142&width=862&height=485",
            "publishedAt": "2023-06-22T02:00:51Z",
            "content": "Darcie Brown is still a fresh face in one of the most successful teams in world sporting history.\r\nIn the past 15 months, Brown has won an ODI World Cup, a T20 World Cup, a Commonwealth gold medal an… [+4739 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Nepal Vs West Indies ICC Men`s ODI Cricket World Cup 2023 Qualifier Group A Match Livestreaming: When And W... - Zee News",
            "description": "<ol><li>Nepal Vs West Indies ICC Men`s ODI Cricket World Cup 2023 Qualifier Group A Match Livestreaming: When And W...  Zee News\r\n</li><li>World Cup Qualifiers and India series: West Indies face scheduling conflict | Cricbuzz.com - Cricbuzz  Cricbuzz\r\n</li><l…",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMivgFodHRwczovL3plZW5ld3MuaW5kaWEuY29tL2NyaWNrZXQvbmVwYWwtdnMtd2VzdC1pbmRpZXMtaWNjLW1lbi1zLW9kaS1jcmlja2V0LXdvcmxkLWN1cC0yMDIzLXF1YWxpZmllci1ncm91cC1hLW1hdGNoLWxpdmVzdHJlYW1pbmctd2hlbi1hbmQtd2hlcmUtdG8td2F0Y2gtbmVwLXZzLXdpLWxpdmUtaW4taW5kaWEtMjYyNTE1Mi5odG1s0gHCAWh0dHBzOi8vemVlbmV3cy5pbmRpYS5jb20vY3JpY2tldC9uZXBhbC12cy13ZXN0LWluZGllcy1pY2MtbWVuLXMtb2RpLWNyaWNrZXQtd29ybGQtY3VwLTIwMjMtcXVhbGlmaWVyLWdyb3VwLWEtbWF0Y2gtbGl2ZXN0cmVhbWluZy13aGVuLWFuZC13aGVyZS10by13YXRjaC1uZXAtdnMtd2ktbGl2ZS1pbi1pbmRpYS0yNjI1MTUyLmh0bWwvYW1w?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-06-22T01:44:25Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Tyrell Feaster, Ap",
            "title": "MLB 'views Netherlands, Germany, and France as potential destinations for future games in Europe'",
            "description": "Major League Baseball has big plans for growing its European fanbase and, on top of returning to London, it also intends to target other countries, such as France, Germany, and the Netherlands.",
            "url": "https://www.dailymail.co.uk/sport/mlb/article-12221083/MLB-views-Netherlands-Germany-France-potential-destinations-future-games-Europe.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/22/00/72377143-0-image-a-65_1687391492561.jpg",
            "publishedAt": "2023-06-22T01:39:50Z",
            "content": "Major League Baseball has big plans for growing its European fanbase and, on top of reintroducing baseball to fans in London, it also intends to target other countries, such as France, Germany, and t… [+6487 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rolling Stone"
            },
            "author": "John Lonsdale",
            "title": "‘And Just Like That’ Season Two: How to Watch the ‘Sex and the City’ Reboot Online",
            "description": "Can't help but wonder where to stream the 'Sex and the City' reboot's premiere? Here's how to watch the new episodes at home",
            "url": "https://www.rollingstone.com/tv-movies/tv-movie-news/how-to-watch-and-just-like-that-sex-and-the-city-hbo-online-1267406/",
            "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2021/12/And-Just-Like-That-Watch-HBO-Max.jpg?w=1584&h=900&crop=1",
            "publishedAt": "2023-06-22T01:00:00Z",
            "content": "Carrie, Miranda, and Charlotte return to the small screen once again for the latest installment in the Sex and the City franchise, And Just Like That Season Two, with the first two new episodes now s… [+3885 chars]"
        },
        {
            "source": {
                "id": "news-com-au",
                "name": "News.com.au"
            },
            "author": "Lexie Cartwright",
            "title": "Taylor Swift’s Australian tour for ‘Eras’: Ticketek releases ticket prices",
            "description": "Taylor Swift ignited pandemonium among her Australian fans when she announced yesterday she was bringing her blockbuster &lsquo;Eras&rsquo; tour down under next year.",
            "url": "https://www.news.com.au/entertainment/music/tours/ticketek-releases-prices-for-taylor-swifts-eras-tour-in-australia/news-story/ce5f1ecccbea4676dea41dc9e1ff6e54",
            "urlToImage": "https://content.api.news/v3/images/bin/a4d6b7823a209327172fd438c17903bd",
            "publishedAt": "2023-06-22T00:23:00Z",
            "content": "Taylor Swift ignited pandemonium among her Australian fans when she announced yesterday she was bringing her blockbuster ‘Eras’ tour down under next year.\r\nBut unless diehard ‘Swifties’ are content s… [+4200 chars]"
        },
        {
            "source": {
                "id": "national-geographic",
                "name": "National Geographic"
            },
            "author": "Liz Langley",
            "title": "Nevada is crawling with swarms of smelly 'Mormon crickets'",
            "description": "Millions of the bugs, native to the U.S. West, are blanketing sidewalks and devouring vegetation.",
            "url": "https://www.nationalgeographic.com/animals/article/swarms-mormon-crickets-invade-nevada",
            "urlToImage": "https://i.natgeofe.com/n/cdc052b2-827a-4f1a-93d6-6a7ea6e1e7f6/NationalGeographic_2773137_16x9.jpg?w=1200",
            "publishedAt": "2023-06-22T00:00:00Z",
            "content": "Hordes of Mormon cricketstechnically a type of shield-back katydid and not a cricket at allhave been migrating through Elko, Nevada and other areas of the West in recent weeks, creating a scene like … [+548 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Boston Globe"
            },
            "author": "Christina Goldbaum, Zia ur-Rehman",
            "title": "‘Like doomsday’: How hope of a better life ended on a boat in the Mediterranean",
            "description": "Two young cousins from For decades, as India and Pakistan fought over the contested area of Kashmir, the town faced frequent cross-border shelling, destroying homes and taking lives. Leaving was a way for young men to escape that violence and support their fa…",
            "url": "https://www.bostonglobe.com/2023/06/21/world/like-doomsday-how-hope-better-life-ended-boat-mediterranean/",
            "urlToImage": "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/Ia8_UmRTeuhV0ddToNnEI6ycSYs=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/WG22YBQAPJR6U4MDYLIUHG6F44.jpg",
            "publishedAt": "2023-06-21T23:31:20Z",
            "content": "So late one night in March, they hugged their fathers and brothers goodbye and set off on the journey, across hundreds of miles, by land, air, and sea, through four countries and driven by a dream of… [+5233 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rolling Stone"
            },
            "author": "John Lonsdale",
            "title": "How to Watch the Complete ‘Sex and the City’ Series Online Free",
            "description": "On the heels of another season of 'And Just Like That,' here's how to watch the show that started it all",
            "url": "https://www.rollingstone.com/tv-movies/tv-movie-news/how-to-watch-sex-and-the-city-online-free-1234775848/",
            "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2023/06/Sex-and-the-city-original-series.jpg?crop=4px%2C46px%2C1796px%2C1010px&resize=1600%2C900",
            "publishedAt": "2023-06-21T23:30:58Z",
            "content": "And just like that … 25 years have gone by since Sex and the City first made its television debut. Starring Sarah Jessica Parker (Carrie Bradshaw), Kim Cattrall (Samantha Jones), Kristin Davis (Charl… [+3422 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Aine Fox",
            "title": "‘Bittersweet’ Windrush 75th anniversary marked",
            "description": "Events will be held at the Port of Tilbury where the Empire Windrush ship arrived on June 22 1948.",
            "url": "https://www.independent.co.uk/news/uk/amber-rudd-caribbean-windsor-itv-news-the-king-b2361955.html",
            "urlToImage": "https://static.independent.co.uk/2023/06/22/00/a743b6ebf7a5e656c080edc9d4ad48eaY29udGVudHNlYXJjaGFwaSwxNjg3NDUxODY4-2.72697937.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-06-21T23:01:17Z",
            "content": "For free real time breaking news alerts sent straight to your inbox sign up to our breaking news emails\r\nSign up to our free breaking news emails\r\nCommemorations and celebrations are taking place acr… [+3543 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mirror Online"
            },
            "author": "mirrornews@mirror.co.uk (Sara Wallis)",
            "title": "Faces of Windrush generation immortalised by portraits as King Charles lauds 'pioneers'",
            "description": "Marking the 75th anniversary of HMT Empire Windrush docking in Essex, a BBC documentary will follow the project, which King Charles III has commemorated in a book",
            "url": "https://www.mirror.co.uk/news/royals/faces-windrush-generation-immortalised-portraits-30292821",
            "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article30292896.ece/ALTERNATES/s1200/1_new-exclusive-social-Recovered-copy.jpg",
            "publishedAt": "2023-06-21T23:01:00Z",
            "content": "The King is celebrating Windrush pioneers with a series of portraits commissioned for the Royal Court Collection.\r\n Marking the 75th anniversary of HMT Empire Windrush docking in Essex, a BBC documen… [+4732 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Kevin Liptak,Arlette Saenz,Jennifer Hansler",
            "title": "Biden rolls out the red carpet for Modi for a visit fraught with trade-offs",
            "description": "Welcoming Indian Prime Minister Narendra Modi to the White House this week for a state visit -- the most elevated form of American diplomacy -- will require President Joe Biden to make certain trade-offs.",
            "url": "https://www.cnn.com/2023/06/21/politics/joe-biden-narendra-modi-visit/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230621090523-01-modi-biden.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-06-21T22:00:06Z",
            "content": "Welcoming Indian Prime Minister Narendra Modi to the White House this week for a state visit the most elevated form of American diplomacy will require President Joe Biden to make certain trade-offs.\r… [+8258 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Japan Today"
            },
            "author": null,
            "title": "MLB views UK as a gateway to European growth, with eyes on Paris and Germany",
            "description": "London seems like a no-brainer for a European road trip. Paris is all but assured next. Why not throw in Germany and the Netherlands? Major League Baseball has big plans for Europe, starting with an English reintroduction to the sport this weekend when the St…",
            "url": "https://japantoday.com/category/sports/mlb-views-the-uk-as-a-gateway-to-european-growth-with-eyes-on-paris-and-germany",
            "urlToImage": null,
            "publishedAt": "2023-06-21T21:37:35Z",
            "content": "London seems like a no-brainer for a European road trip. Paris is all but assured next. Why not throw in Germany and the Netherlands?\r\nMajor League Baseball has big plans for Europe, starting with an… [+6090 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Ian Herbert",
            "title": "IAN HERBERT: Forget Bazball, this was brain dead!",
            "description": "IAN HERBERT: 'If you fail, you fail,' was what Ben Stokes said before the Test began. A philosophy to amuse many a sacked football manager. A philosophy which does not really stack up.",
            "url": "https://www.dailymail.co.uk/sport/cricket/article-12220411/IAN-HERBERT-Forget-Bazball-brain-dead.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/21/21/72389071-0-image-a-64_1687379664213.jpg",
            "publishedAt": "2023-06-21T21:32:01Z",
            "content": "A match of the utmost sublimity, of course. Contrasts in philosophies of style and captaincy. Cricket that ebbed and flowed and sparkled like a river beneath the bluest summer sky, turning Skys intro… [+6351 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Nasser Hussain, David Lloyd, Paul Newman, Lawrence Booth",
            "title": "TEN BURNING ASHES ISSUES: Time to drop Moeen Ali? And Do England need to re-think Bazball?",
            "description": "Mail Sport experts - former England captain Nasser Hussain, former England coach David Lloyd, Cricket Correspondent Paul Newman and Wisden editor Lawrence Booth - tackle 10 key questions.",
            "url": "https://www.dailymail.co.uk/sport/cricket/article-12220459/TEN-BURNING-ASHES-ISSUES-Time-drop-Moeen-Ali-England-need-think-Bazball.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/21/22/72391557-0-image-a-14_1687383219386.jpg",
            "publishedAt": "2023-06-21T21:30:49Z",
            "content": "An epic first Test ended with Australia just about getting over the line to take a 1-0 lead in the Ashes. \r\nPat Cummings and Nathan Lyon steered the tourists to victory with the bat, scoring an unbea… [+13486 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Kate Cross",
            "title": "KATE CROSS: Australia hold no fear after dealing with this parasite in my intestine",
            "description": "KATE CROSS - ENGLAND PACE BOWLER: An Ashes series is always that little bit extra special and this one is especially so. We are all champing at the bit to get going now.",
            "url": "https://www.dailymail.co.uk/sport/cricket/article-12220191/KATE-CROSS-Australia-hold-no-fear-dealing-parasite-intestine.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/21/21/72388399-0-image-a-47_1687378685586.jpg",
            "publishedAt": "2023-06-21T21:30:46Z",
            "content": "An Ashes series is always that little bit extra special and this one is especially so. We are all champing at the bit to get going now.\r\nA five-day Test at Trent Bridge to kick it all off today is pa… [+5649 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Cory Woodroof",
            "title": "Starling Marte's golf-like swing turned an absurdly low pitch into a 2-run double",
            "description": "Mets outfielder Starling Marte defied the laws of gravity with this astounding hit on a low ball.",
            "url": "https://ftw.usatoday.com/2023/06/starling-marte-mets-low-pitch-hit-astros",
            "urlToImage": "https://ftw.usatoday.com/wp-content/uploads/sites/90/2023/06/marte.png?w=1024&h=576&crop=1",
            "publishedAt": "2023-06-21T20:55:32Z",
            "content": "New York Mets outfielder Starling Marte didn’t let the laws of gravity keep him from hammering a ball that was coming his way on Wednesday.\r\nOn a very low Houston Astros pitch that went on a downward… [+1171 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Elite Daily"
            },
            "author": "Adrianne Reece, and ,Michele Mendez",
            "title": "Taylor Swift’s ‘The Eras’ Tour: New Dates, Tickets, & Opening Act",
            "description": "Taylor Swift just announced 42 new international dates for her 2024 'The Eras Tour.' Here's who opening for the singer next year and where fans can register for tickets.",
            "url": "https://www.elitedaily.com/entertainment/taylor-swift-the-eras-tour-new-dates-tickets-opening-acts",
            "urlToImage": "https://imgix.bustle.com/uploads/image/2023/6/21/3dc25eff-bf0d-4e5f-8e5b-94ee4c528df7-tay001.jpeg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
            "publishedAt": "2023-06-21T20:55:19Z",
            "content": "Swfities, this is not a drill: Taylor Swift has extended her Eras Tour again. On June 20, the singer added 45 (!) international dates across Europe, Asia, and Australia. These exciting add-ons come n… [+6640 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "T20 Blast: Smeed fires Somerset past Glamorgan",
            "description": "Will Smeed top scored for south group leaders Somerset, who powered past Glamorgan in Cardiff.",
            "url": "https://www.bbc.co.uk/sport/cricket/65980063",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1204F/production/_130170837_smead_huw1.jpg",
            "publishedAt": "2023-06-21T20:32:05Z",
            "content": "Will Smeeds 66 helped Somerset past Glamorgan at Sophia Gardens.\r\n<table><tr><th>Vitality Blast, South Group: Glamorgan v Somerset</th></tr>\r\n<tr><td>Glamorgan 171 (19.3 overs): Carlson 71, Van der G… [+4082 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hplusmagazine.com"
            },
            "author": "abhishek",
            "title": "Enjoy Essentially The Most Rewarding Expertise With Big 5 On 1xbit",
            "description": "Enjoy Essentially The Most Rewarding Expertise With Big 5 On 1xbit There are many reasons why the operator grew to prominence that quickly, and above all, that is mainly owing to the intensive range of markets to wager on. The...",
            "url": "https://hplusmagazine.com/2023/06/21/enjoy-essentially-the-most-rewarding-expertise-8/",
            "urlToImage": "https://hplusmagazine.com/wp-content/uploads/2020/06/cropped-transhumanism_h_2-svg-1.png",
            "publishedAt": "2023-06-21T20:26:53Z",
            "content": "There are many reasons why the operator grew to prominence that quickly, and above all, that is mainly owing to the intensive range of markets to wager on. The minimal deposit that you can place in y… [+48510 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hplusmagazine.com"
            },
            "author": "abhishek",
            "title": "1xbit Evaluate 2023",
            "description": "1xbit Evaluate 2023 Log in utilizing social networks, with Telegram being the really helpful option, supplied you could have a registered account on this social community. Select ‘Cricket’ from the website’s menu and select a match/series/tournament you want …",
            "url": "https://hplusmagazine.com/2023/06/21/1xbit-evaluate-2023-2/",
            "urlToImage": "https://hplusmagazine.com/wp-content/uploads/2020/06/cropped-transhumanism_h_2-svg-1.png",
            "publishedAt": "2023-06-21T20:13:13Z",
            "content": "Log in utilizing social networks, with Telegram being the really helpful option, supplied you could have a registered account on this social community. Select ‘Cricket’ from the website’s menu and se… [+39899 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hplusmagazine.com"
            },
            "author": "abhishek",
            "title": "Mild Up The Xmas Tree With 1xbit And Win This Christmas",
            "description": "Mild Up The Xmas Tree With 1xbit And Win This Christmas Nonetheless, some sites like 1xBit nonetheless register with regulatory our bodies. However, information about the official licence of 1xBit isn’t on the net site, making it hard to confirm....",
            "url": "https://hplusmagazine.com/2023/06/21/mild-up-the-xmas-tree-with-1xbit-and-win-this-2/",
            "urlToImage": "https://hplusmagazine.com/wp-content/uploads/2020/06/cropped-transhumanism_h_2-svg-1.png",
            "publishedAt": "2023-06-21T20:13:09Z",
            "content": "Nonetheless, some sites like 1xBit nonetheless register with regulatory our bodies. However, information about the official licence of 1xBit isn’t on the net site, making it hard to confirm. We don’t… [+34353 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hplusmagazine.com"
            },
            "author": "abhishek",
            "title": "How 1xbet Hopes To Seize Ugandan Market",
            "description": "How 1xbet Hopes To Seize Ugandan Market Click on the telephone icon at the far top left of the home web page to obtain the app. As with some other web site, you must do your due diligence before signing...",
            "url": "https://hplusmagazine.com/2023/06/21/how-1xbet-hopes-to-seize-ugandan-market-128/",
            "urlToImage": "https://hplusmagazine.com/wp-content/uploads/2020/06/cropped-transhumanism_h_2-svg-1.png",
            "publishedAt": "2023-06-21T20:09:08Z",
            "content": "Click on the telephone icon at the far top left of the home web page to obtain the app. As with some other web site, you must do your due diligence before signing up and joining the positioning. You … [+37314 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hplusmagazine.com"
            },
            "author": "abhishek",
            "title": "How 1xbet Hopes To Seize Ugandan Market",
            "description": "How 1xbet Hopes To Seize Ugandan Market Click on the telephone icon at the far top left of the home web page to obtain the app. As with some other web site, you must do your due diligence before signing...",
            "url": "https://hplusmagazine.com/2023/06/21/how-1xbet-hopes-to-seize-ugandan-market-128-2/",
            "urlToImage": "https://hplusmagazine.com/wp-content/uploads/2020/06/cropped-transhumanism_h_2-svg-1.png",
            "publishedAt": "2023-06-21T20:09:08Z",
            "content": "Click on the telephone icon at the far top left of the home web page to obtain the app. As with some other web site, you must do your due diligence before signing up and joining the positioning. You … [+37314 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NBCSports.com"
            },
            "author": "Associated Press",
            "title": "Jake Fraley’s homer sends the surging Reds to their 11th straight win, 5-3 over the Rockies",
            "description": "Jake Fraley hit a tiebreaking, two-run homer in the eighth inning, and the Cincinnati Reds extended their majors-best winning streak to 11 games, rallying past the Colorado Rockies 5-3 on Wednesday for a three-game sweep.",
            "url": "https://mlb.nbcsports.com/2023/06/21/jake-fraleys-homer-sends-the-surging-reds-to-their-11th-straight-win-5-3-over-the-rockies/",
            "urlToImage": "https://mlb.nbcsports.com/wp-content/uploads/sites/7/2023/06/USATSI_20925903.jpg",
            "publishedAt": "2023-06-21T20:08:49Z",
            "content": "London seems like a no-brainer for a European road trip. Paris is all but assured next. Why not throw in Germany and the Netherlands?\r\nMajor League Baseball has big plans for Europe, starting with an… [+5919 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hplusmagazine.com"
            },
            "author": "abhishek",
            "title": "Tips On How To Construct A Secure Business With 1xbet Betting Firm",
            "description": "Tips On How To Construct A Secure Business With 1xbet Betting Firm Creating the 1xBet account is considered one of the easiest processes that can be completed in only a few minutes. Therefore, do not waste time in vain and...",
            "url": "https://hplusmagazine.com/2023/06/21/tips-on-how-to-construct-a-secure-business-with/",
            "urlToImage": "https://hplusmagazine.com/wp-content/uploads/2020/06/cropped-transhumanism_h_2-svg-1.png",
            "publishedAt": "2023-06-21T20:01:41Z",
            "content": "Creating the 1xBet account is considered one of the easiest processes that can be completed in only a few minutes. Therefore, do not waste time in vain and instead go to the net site of the online op… [+47646 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hplusmagazine.com"
            },
            "author": "abhishek",
            "title": "1xbet Bonus 2023",
            "description": "1xbet Bonus 2023 After a successful 1xBet enroll, I deposited 6,000 UGX and was routinely credited with my 200% bonus, which boosted my bankroll. If you deposit more than 360,000 UGX upto the maximum bet, which is 1,250,000 UGX, you...",
            "url": "https://hplusmagazine.com/2023/06/21/1xbet-bonus-2023/",
            "urlToImage": "https://hplusmagazine.com/wp-content/uploads/2020/06/cropped-transhumanism_h_2-svg-1.png",
            "publishedAt": "2023-06-21T20:01:40Z",
            "content": "After a successful 1xBet enroll, I deposited 6,000 UGX and was routinely credited with my 200% bonus, which boosted my bankroll. If you deposit more than 360,000 UGX upto the maximum bet, which is 1,… [+41242 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hplusmagazine.com"
            },
            "author": "abhishek",
            "title": "1xbet Bonus 2023",
            "description": "1xbet Bonus 2023 After a successful 1xBet enroll, I deposited 6,000 UGX and was routinely credited with my 200% bonus, which boosted my bankroll. If you deposit more than 360,000 UGX upto the maximum bet, which is 1,250,000 UGX, you...",
            "url": "https://hplusmagazine.com/2023/06/21/1xbet-bonus-2023-2/",
            "urlToImage": "https://hplusmagazine.com/wp-content/uploads/2020/06/cropped-transhumanism_h_2-svg-1.png",
            "publishedAt": "2023-06-21T20:01:40Z",
            "content": "After a successful 1xBet enroll, I deposited 6,000 UGX and was routinely credited with my 200% bonus, which boosted my bankroll. If you deposit more than 360,000 UGX upto the maximum bet, which is 1,… [+41242 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mirror Online"
            },
            "author": "mirrornews@mirror.co.uk (Russell Myers)",
            "title": "Prince William hails Windrush generation as he meets one of first arrivals 75 years ago",
            "description": "Marking the anniversary of the Empire Windrush docking at Tilbury, the hour-long programme will tell the story of those who left the Caribbean for a new life in Britain",
            "url": "https://www.mirror.co.uk/news/uk-news/prince-william-hails-windrush-generation-30292445",
            "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article30292945.ece/ALTERNATES/s1200/1_new-exclusive-social-Recovered-copy.jpg",
            "publishedAt": "2023-06-21T20:00:19Z",
            "content": "Prince William hailed the Windrush generation as he met one of the first arrivals as part of a Daily Mirror-backed Pride of Britain documentary.\r\nMarking the 75th anniversary of the Empire Windrush d… [+2420 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New Zealand Herald"
            },
            "author": "Stuart Whitaker",
            "title": "Te Puke retailer Don Bayliss remembered as a larger-than-life character",
            "description": "His funeral was one of the biggest the town has ever seen.",
            "url": "https://www.nzherald.co.nz/bay-of-plenty-times/news/don-bayliss-remembered-as-a-larger-than-life-character/BXNAYOG4DRGJTGS6FJ3MB4ELYQ/",
            "urlToImage": "https://www.nzherald.co.nz/resizer/E_6EgBYIS-bjIC24P1wuMuYc2-s=/1200x675/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/JT6SWQA3BVDA3D7EJEUTWCOWRY.JPG",
            "publishedAt": "2023-06-21T20:00:00Z",
            "content": "Don Bayliss on the occasion of his second retirement as owner of Don Bayliss Clothing in Te Puke. Photo / Stuart WhitakerWe lost one of lifes characters really - and thats sad because I dont know if … [+5296 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Rediff.com"
            },
            "author": "sports@rediff.co.in (Rediff Sports)",
            "title": "Steve Waugh, Sania Mirza attend opening ceremony",
            "description": "Dubai witnessed a historic moment as the inaugural edition of the Global Chess League was held on Thursday.",
            "url": "https://www.rediff.com/sports/report/global-chess-league-steve-waugh-sania-mirza-attend-opening-ceremony/20230622.htm",
            "urlToImage": "https://im.rediff.com/sports/2023/jun/21chess-league.jpg",
            "publishedAt": "2023-06-21T19:58:54Z",
            "content": "Dubai witnessed a historic moment in the world of chess as the inaugural edition of the Global Chess League officially opened with a dazzling ceremony at the Ritz-Carlton Hotel.\r\nChess enthusiasts, d… [+1580 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Mukta Lad",
            "title": "Cannes Lions 2023: India bags 6 medals on second day",
            "description": "FCB Group also won two silvers in the entertainment category - FCB Interface won for Navneet's 'TR For Teacher' campaign in the 'Entertainment, Social Behaviour & Cultural Insight' category, and FCB India and FCB Kinnect won the other silver in the 'Entertain…",
            "url": "https://economictimes.indiatimes.com/news/international/world-news/cannes-lions-2023-india-bags-6-medals-on-second-day/articleshow/101172089.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-101172096,width-1070,height-580,imgsize-630536,overlay-economictimes/photo.jpg",
            "publishedAt": "2023-06-21T19:38:48Z",
            "content": "Indian agencies bagged six medals on day 2 of the International Festival of Creativity, held in Cannes. Of the six wins, FCB India's 'Untangling the Politics of Hair' for Stir won a gold in the 'Indu… [+1604 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Richard Gibson",
            "title": "RICHARD GIBSON - INSIDE COUNTY CRICKET: Veteran Steven Croft blasts his first T20 century",
            "description": "RICHARD GIBSON:",
            "url": "https://www.dailymail.co.uk/sport/cricket/article-12220297/RICHARD-GIBSON-INSIDE-COUNTY-CRICKET-Veteran-Steven-Croft-blasts-T20-century.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/21/20/72386439-0-image-a-37_1687375927408.jpg",
            "publishedAt": "2023-06-21T19:32:43Z",
            "content": "Steven Crofts maiden Twenty20 hundred at the age of 38 came about more by circumstance than design.\r\nCrofts name was illuminated on a Lancashire scorecard full of stars when he crunched a 52-ball 101… [+7059 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sky Sports"
            },
            "author": null,
            "title": "Barcelona agree deal to sign Gundogan from Man City",
            "description": "Barcelona have agreed a deal to sign Ilkay Gundogan from Manchester City on a free transfer, with the midfielder set to pen a three-year contract.",
            "url": "https://www.skysports.com/football/news/11095/12907277/ilkay-gundogan-barcelona-agree-deal-to-sign-man-city-midfielder-on-free-transfer",
            "urlToImage": "https://e0.365dm.com/23/06/1600x900/skysports-ilkay-gundogan-erling-haaland_6177221.jpg?20230603164158",
            "publishedAt": "2023-06-21T19:15:00Z",
            "content": "Barcelona have agreed a deal to sign Ilkay Gundogan from Manchester City on a free transfer, with the midfielder set to pen a three-year contract.\r\nThe move has not been officially announced by eithe… [+1445 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Ali Martin",
            "title": "No need to panic but England have big decisions to make for Lord’s",
            "description": "Losing the first Ashes Test in such a manner will highlight the failings even though a lot went rightSo, where do England go from here? After coming up short in a teeming, undulating first Ashes Test at Edgbaston, one that left combatants and spectators drain…",
            "url": "https://www.theguardian.com/sport/2023/jun/21/england-big-decisions-lords-ashes-cricket",
            "urlToImage": "https://i.guim.co.uk/img/media/40e8111db31cb17e3b23f2441b9d44246b100ee9/0_134_3101_1861/master/3101.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=26f397996c88c66f79ffa360088a0bb4",
            "publishedAt": "2023-06-21T19:00:48Z",
            "content": "So, where do England go from here? After coming up short in a teeming, undulating first Ashes Test at Edgbaston, one that left combatants and spectators drained but richer for it, the smart-alec answ… [+12491 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "City A.M."
            },
            "author": "Matt Hardy",
            "title": "‘The WPL is out ahead but The Hundred can be next best thing in women’s cricket’",
            "description": "The Hundred may be approaching its third season this summer but it has been blown off course by the hurricane that is the Women’s Premier League (WPL). The WPL is the women’s equivalent to the Indian Premier League (IPL), cricket’s biggest global franchise pr…",
            "url": "https://www.cityam.com/the-wpl-is-out-ahead-but-the-hundred-can-be-next-best-thing-in-womens-cricket/",
            "urlToImage": "https://www.cityam.com/wp-content/uploads/2023/06/GettyImages-1420535720.jpg",
            "publishedAt": "2023-06-21T19:00:00Z",
            "content": "Wednesday 21 June 2023 8:00 pm\r\nThe Hundred may be approaching its third season this summer but it has been blown off course by the hurricane that is the Womens Premier League (WPL). (Photo by Alex D… [+4120 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": null,
            "title": "Nuance over bazball, aggression tamed",
            "description": "Named after their coach Brendon 'Baz' McCullum, bazball is aggressive play hitched to a mental fearlessness that pushes for victory, no matter what the conditions are. It has reaped the side dividends, with a dramatic roster of victories.",
            "url": "https://economictimes.indiatimes.com/opinion/just-in-jest/nuance-over-bazball-aggression-tamed/articleshow/101171840.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-101171844,width-1070,height-580,imgsize-47996,overlay-economictimes/photo.jpg",
            "publishedAt": "2023-06-21T18:57:54Z",
            "content": "In the world of easy binaries, the world is divided into two sorts of people - those who are gung-ho, and those who are 'Gunga Din'. The first pertains to folks who are unthinkingly enthusiastic and … [+1249 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": "Valkerie Baynes",
            "title": "Lauren Filer backed to give England 'wicket-taking' edge",
            "description": "Heather Knight hopes Dukes ball will aid England's quest for 20 wickets",
            "url": "https://www.espncricinfo.com/story/heather-knight-lauren-filer-england-test-debut-wicket-taking-1382764",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/362300/362395.6.jpg",
            "publishedAt": "2023-06-21T18:51:57Z",
            "content": "NewsHeather Knight hopes Dukes ball will aid England's quest for 20 wickets\r\nHeather Knight addresses the media  •  PA Images/Getty\r\nWith nearly 15,000 people set to attend over the course of the fiv… [+4696 chars]"
        },
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "Brittany Carter",
            "title": "'I get grumpy when people say that': The key change that could define the Women's Ashes series",
            "description": "You've heard of Bazball, but what about Jonball? Australia and England are set to fire in the upcoming Women's Ashes series.",
            "url": "https://www.abc.net.au/news/2023-06-22/key-change-that-could-define-2023-womens-ashes-series/102507146",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/ae20e96d744aa731e6b9d99d35b53369?impolicy=wcms_crop_resize&cropH=2625&cropW=4666&xPos=0&yPos=147&width=862&height=485",
            "publishedAt": "2023-06-21T18:36:21Z",
            "content": "We are days out from the first ball of the Women's Ashes, and it'll be another big commitment from fans of the Australian team to follow along throughout the night.\r\nCricket diehards were tested with… [+11785 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Standard"
            },
            "author": null,
            "title": "CWC Qualifier Day 4 Report: Scintillating Scotland lit up the tournament",
            "description": "ICC CWC Qualifier 2023: Michael Leask played a blinder as Scotland defeated arch-rivals Ireland by one wicket in a last-ball finish at the Cricket World Cup Qualifier. In a West Asian derby, Oman beat UAE comprehensively",
            "url": "https://www.business-standard.com/cricket/news/cwc-qualifier-day-4-report-scintillating-scotland-lit-up-the-tournament-123062101357_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-06/21/full/1687370416-6331.jpg",
            "publishedAt": "2023-06-21T18:20:13Z",
            "content": "Michael Leask wins the game for Scotland with a 91* against Ireland at the CWC Qualifier 2023. Photo: Cricket Scotalnd"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "mint",
            "title": "Merger should go through whether I’m the CEO or not: Punit Goenka",
            "description": "In his first interview since announcing the merger in December 2021, Punit Goenka speaks about the commitment of both Zee and Sony towards the merger and the way ahead for the company",
            "url": "https://www.livemint.com/companies/merger-should-go-through-whether-i-m-the-ceo-or-not-punit-goenka-11687370950315.html",
            "urlToImage": "https://www.livemint.com/lm-img/img/2023/06/21/600x338/2-0-1275529496-punitgoenka2-0_1679599960353_1687371330133.JPG",
            "publishedAt": "2023-06-21T18:15:56Z",
            "content": "MUMBAI : Punit Goenka, the managing director and chief executive of Zee Entertainment Enterprises Ltd, has his hands fullon one end, he is working on completing the companys merger with Sony Pictures… [+10751 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WWD"
            },
            "author": "Msocha1",
            "title": "Walter Van Beirendonck Men’s Spring 2024",
            "description": "The Belgian designer explored the specter of generative AI through wonky clothes.",
            "url": "https://wwd.com/runway/mens-spring-2024/paris/walter-van-beirendonck/review/",
            "urlToImage": "https://wwd.com/wp-content/uploads/2023/06/walter-van-beirendonck-men-spring-2024-paris-001.jpg?w=1024",
            "publishedAt": "2023-06-21T18:14:17Z",
            "content": "If you tasked generative AI with approximating Walter Van Beirendonck spring 2024 men’s collection, among this human’s suggested list of prompts: cricket padding, blimps, cycling jerseys, frothy wedd… [+1283 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "Fire At Harare Sports Club, ICC Examines Venue For Further WC Qualifiers",
            "description": "The venue is slated to host four more Super Six games, three more group matches, and the championship game on July 9.",
            "url": "https://sports.ndtv.com/cricket/fire-at-cricket-world-cup-qualifier-venue-in-harare-report-4141664",
            "urlToImage": "https://c.ndtvimg.com/2023-06/tiafa95o_harare-sports-city-twitter_625x300_22_June_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2023-06-21T18:07:11Z",
            "content": "A fire broke out at the Harare Sports Club, one of the two venues for the ongoing ICC Cricket World Cup qualifiers matches, on Tuesday, Zimbabwe Cricket confirmed in a statement. A quick response fro… [+1980 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Authority"
            },
            "author": "Ryan Whitwam",
            "title": "Motorola Moto G Stylus 5G (2023) review: Should you buy it?",
            "description": "The 2023 Moto G Stylus 5G has a solid 1080p LCD and cool gesture control, but it all comes down to how much you want a stylus.",
            "url": "https://www.androidauthority.com/motorola-moto-g-stylus-5g-2023-review-3335628/",
            "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2023/06/Moto-G-Stylus-5G-8.jpg",
            "publishedAt": "2023-06-21T18:00:38Z",
            "content": "If you want a stylus and 5G support without spending an arm and a leg, the Moto G Stylus 5G (2023) is a decent option with solid performance and a good display.\r\nMotorola Moto G Stylus 5G (2023) revi… [+10891 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deadspin"
            },
            "author": "Sean Beckwith",
            "title": "Not sure the UK will find MLB any more entertaining than the US",
            "description": "Serious question: If you underwent a bunch of plastic surgery, how eager would you be to show off the new goods? Even though the boob job is lopsided, the calf implants didn’t take, and your face literally can’t smile through the botox, you’d be on the first …",
            "url": "https://deadspin.com/st-louis-cardinals-cubs-mlb-england-west-ham-1850561446",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/16e34bdc55d0137065e46b3848727ba6.jpg",
            "publishedAt": "2023-06-21T17:54:00Z",
            "content": "Serious question: If you underwent a bunch of plastic surgery, how eager would you be to show off the new goods? Even though the boob job is lopsided, the calf implants didnt take, and your face lite… [+4449 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": "Valkerie Baynes",
            "title": "Alyssa Healy nervous but excited for 'most hyped Women's Ashes'",
            "description": "Test selection will come down to \"a couple of calls here and there\", says Australia captain",
            "url": "https://www.espncricinfo.com/story/australia-alyssa-healy-nervous-excited-women-s-ashes-1382756",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/362300/362394.6.jpg",
            "publishedAt": "2023-06-21T17:39:07Z",
            "content": "NewsTest selection will come down to \"a couple of calls here and there\", says Australia captain\r\nAlyssa Healy walks out to Australia middle practice at Trent Bridge  •  PA Images via Getty Images\r\nAl… [+5043 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Telegraph.co.uk"
            },
            "author": "Fiona Tomas",
            "title": "Heather Knight’s England to embrace ‘Bazball’ in women’s Ashes",
            "description": "Hosts know they will have to be at their best if they are to beat formidable Australia side that has reigned supreme in all formats",
            "url": "https://www.telegraph.co.uk/cricket/2023/06/21/heather-knights-england-to-embrace-bazball-in-womens-ashes/",
            "urlToImage": "https://www.telegraph.co.uk/content/dam/cricket/2023/06/21/TELEMMGLPICT000339999617_16873679064280_trans_NvBQzQNjv4BqF63Hcb6k_7i1LXEFJido7cHMj960fXL19vqsQgw6fmc.jpeg?impolicy=logo-overlay",
            "publishedAt": "2023-06-21T17:33:01Z",
            "content": "It is a sentiment shared by Clare Connor, the ECBs managing director of womens cricket. England women have got the opportunity to play a positive style of cricket alongside the approach were used to … [+2108 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bleeding Cool News"
            },
            "author": "Rich Johnston",
            "title": "Madam Satan in Archie Comics' September 2023 Solicits",
            "description": "Archie Comics has Madam Satan from their Chilling Adventures Presents line celebrating her 83rd birthday this year, and not looking a day over 76. Here is their September 2023 solicits and solicitations. CHILLING ADVENTURES PRESENTS… MADAM SATAN: HELL ON EART…",
            "url": "https://bleedingcool.com/comics/madam-satan-in-archie-comics-september-2023-solicits/",
            "urlToImage": "https://bleedingcool.com/wp-content/uploads/2023/06/MadamSatanHellOnEarthVar-1200x628.jpg",
            "publishedAt": "2023-06-21T17:27:09Z",
            "content": "Posted in: Comics | Tagged: archie, madam satan\r\nArchie Comics have Madam Satan from their Chilling Adventures Presnets line in their September 2023 solicits and solicitations.\r\nArchie Comics has Mad… [+5764 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "David Charlesworth",
            "title": "The greatest show and spotlight on bowlers – Women’s Ashes talking points",
            "description": "Australia are without regular captain Meg Lanning due to medical issues.",
            "url": "https://www.independent.co.uk/sport/cricket/australia-england-kate-cross-ashes-ben-stokes-b2361809.html",
            "urlToImage": "https://static.independent.co.uk/2023/06/21/18/16f0b5b9c778a633fd28dd3672f58473Y29udGVudHNlYXJjaGFwaSwxNjg3NDU0MjI4-2.72688105.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-06-21T17:25:13Z",
            "content": "Sign up to our free sport newsletter for all the latest news on everything from cycling to boxing\r\nSign up to our free sport email for all the latest news\r\nEngland will attempt to end a miserable pas… [+3751 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Lewis Browning",
            "title": "Pat Cummins' wife reveals she watched dramatic first Ashes Test win in a lay-by in Yorkshire",
            "description": "Arriving at the crease with his side seven wickets down and still needing 71 runs to win the game, Cummins hit a not out 44 and enjoyed an unbeaten partnership of 55 with Nathan Lyon.",
            "url": "https://www.dailymail.co.uk/sport/cricket/article-12219929/Pat-Cummins-wife-reveals-watched-dramatic-Ashes-Test-win-lay-Yorkshire.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/21/18/72383273-0-image-a-8_1687368146674.jpg",
            "publishedAt": "2023-06-21T17:23:41Z",
            "content": "Pat Cummins' wife has revealed the bizarre location she watched her husband steer Australia to victory in the first Ashes Test.\r\nCummins took his side over the line at Edgbaston on Tuesday in what wa… [+2300 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Rory Dollard",
            "title": "England approach ‘validated’ despite defeat in opening Ashes Test, says Brendon McCullum",
            "description": "England drove the game forward for the majority of five gripping days at Edgbaston but still find themselves 1-0 down with four to play",
            "url": "https://www.independent.co.uk/sport/cricket/brendon-mccullum-ben-stokes-pat-cummins-edgbaston-jonny-bairstow-b2361800.html",
            "urlToImage": "https://static.independent.co.uk/2023/06/21/18/a4eb4019c0a4d1e925c785b027417a9aY29udGVudHNlYXJjaGFwaSwxNjg3NDMwNTI4-2.72643796.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-06-21T17:15:20Z",
            "content": "Sign up to our free sport newsletter for all the latest news on everything from cycling to boxing\r\nSign up to our free sport email for all the latest news\r\nHead coach Brendon McCullum insisted Englan… [+4201 chars]"
        },
        {
            "source": {
                "id": "the-irish-times",
                "name": "The Irish Times"
            },
            "author": "Simon Burnton",
            "title": "Brendon McCullum defends tactics and blames England defeat on bad luck",
            "description": "Head coach says his side will double down on approach for second Test at Lord's",
            "url": "https://www.irishtimes.com/sport/2023/06/21/brendon-mccullum-defends-tactics-and-blames-england-defeat-on-bad-luck/",
            "urlToImage": "https://www.irishtimes.com/resizer/TFdyVHWMZILgWFtRBvO3zQyhElo=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/STVIME6GQSBWXUJWDGRC6YJUTM.jpg",
            "publishedAt": "2023-06-21T17:11:10Z",
            "content": "Brendon McCullum has insisted that Englands thrilling, narrow defeat against Australia in the first Ashes Test has not tarnished his teams freewheeling approach to the game.\r\nMcCulllum said that desp… [+4460 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Pa Sport Staff",
            "title": "Robertson appreciative as Newcastle remember Tiote – Wednesday’s sporting social",
            "description": "Stars also turn out at the Louis Vuitton Fashion Show.",
            "url": "https://www.independent.co.uk/sport/andy-robertson-newcastle-aston-villa-manchester-united-billy-gilmour-b2361798.html",
            "urlToImage": "https://static.independent.co.uk/2023/06/21/18/2a0a523d8503089bfbd72aa2dd6590e0Y29udGVudHNlYXJjaGFwaSwxNjg3NDUzMzky-2.72692792.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-06-21T17:10:17Z",
            "content": "Sign up to our free sport newsletter for all the latest news on everything from cycling to boxing\r\nSign up to our free sport email for all the latest news\r\nSports stars and clubs across the world con… [+701 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": "Matt Roller",
            "title": "Brendon McCullum: Edgbaston defeat 'validated our style of play'",
            "description": "England coach says team will likely ramp up aggression for second Test at Lord's",
            "url": "https://www.espncricinfo.com/story/brendon-mccullum-australia-edgbaston-defeat-validated-england-style-1382737",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/360800/360883.6.jpg",
            "publishedAt": "2023-06-21T17:05:22Z",
            "content": "NewsEngland coach says team will likely ramp up aggression for second Test at Lord's\r\nBrendon McCullum and Ben Stokes will be sticking to their methods  •  Alex Davidson/Getty Images\r\nBrendon McCullu… [+4117 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": "Matt Roller",
            "title": "Middlesex lead queue to sign Derbyshire's Leus du Plooy",
            "description": "Head coach Mickey Arthur hopes Derbyshire captain can be persuaded to stay",
            "url": "https://www.espncricinfo.com/story/derbyshire-leus-du-plooy-middlesex-1382748",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/361700/361763.6.jpg",
            "publishedAt": "2023-06-21T17:05:22Z",
            "content": "NewsHead coach Mickey Arthur hopes Derbyshire captain can be persuaded to stay\r\nLeus du Plooy is Derbyshire's captain  •  Getty Images\r\nLeus du Plooy is considering an offer from Middlesex as he weig… [+2538 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "FRANCE 24 English"
            },
            "author": "FRANCE24",
            "title": "England coach McCullum has 'no regrets' after Australia loss",
            "description": "Defeat left England 1-0 down in the five-match Ashes contest as they bid for a first series win over arch rivals Australia since 2015.\n\nEngland were denied victory in Birmingham by an unbroken ninth-wicket stand of 55 between Australia captain Pat Cummins and…",
            "url": "https://www.france24.com/en/live-news/20230621-england-coach-mccullum-has-no-regrets-after-australia-loss",
            "urlToImage": "https://s.france24.com/media/display/a4ed695e-1055-11ee-98f0-005056a90284/w:1280/p:16x9/199578f603bb758617728aa8557f1cf6d0c49c60.jpg",
            "publishedAt": "2023-06-21T17:04:12Z",
            "content": "Birmingham (United Kingdom) (AFP) England coach Brendon McCullum insisted he had \"no regrets\" about his side's tactics after a stunning two-wicket loss to Australia in the first Test at Edgbaston. De… [+2687 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "England will go 'harder' at Australia - McCullum",
            "description": "Coach Brendon McCullum says England will go \"harder\" at Australia after their agonising two-wicket defeat in the first Ashes Test at Edgbaston.",
            "url": "https://www.bbc.co.uk/sport/cricket/65934474",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AA88/production/_130165634_brendonmccullum.jpg",
            "publishedAt": "2023-06-21T17:02:20Z",
            "content": "Coach Brendon McCullum says England will go \"harder\" at Australia after their agonising two-wicket defeat in the first Ashes Test at Edgbaston.\r\nNinth-wicket pair Pat Cummins and Nathan Lyon got Aust… [+3013 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Paul Newman",
            "title": "Brendon McCullum insists he has NO regrets over England's approach in first Ashes Test",
            "description": "The England coach had no regrets when the dust settled on what will be remembered as a classic opening Ashes contest that England could and really should have won on the final day.",
            "url": "https://www.dailymail.co.uk/sport/cricket/article-12219555/Brendon-McCullum-insists-NO-regrets-Englands-approach-Ashes-Test.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/21/17/72381303-0-image-a-19_1687365560628.jpg",
            "publishedAt": "2023-06-21T17:00:49Z",
            "content": "Englands sluggers may have been dropped to the canvas by more orthodox boxers at Edgbaston but Brendon McCullum insisted on Wednesday they will keep on swinging when they attempt to hit back in round… [+4914 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Simon Burnton",
            "title": "Brendon McCullum defends tactics and blames England defeat on bad luck",
            "description": "<ul><li>Australia won first Ashes Test by two wickets at Edgbaston</li><li>‘The way we played, I think it’s validated our style of play’</li></ul>Brendon McCullum has insisted that England’s thrilling, narrow defeat against Australia in the first Ashes Test h…",
            "url": "https://www.theguardian.com/sport/2023/jun/21/cricket-brendon-mccullum-defends-tactics-and-blames-england-defeat-on-bad-luck",
            "urlToImage": "https://i.guim.co.uk/img/media/796b66e045ec6516ab9e5ecab1344b99dc587d0a/0_300_4499_2700/master/4499.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f8c8d8a1d9afa7cef226e789229a6e88",
            "publishedAt": "2023-06-21T17:00:45Z",
            "content": "Brendon McCullum has insisted that Englands thrilling, narrow defeat against Australia in the first Ashes Test has not tarnished his teams freewheeling approach to the game.\r\nMcCulllum said that desp… [+9770 chars]"
        }
    ])


    // const getNews=async()=>{
    //     let data = await fetch("https://newsapi.org/v2/everything?q=cricket&from=2023-05-24&sortBy=publishedAt&apiKey=557da9d85b4648c289d641493ea815ba")
    //     const jsondata = await data.json();
       

    //     setNews(jsondata.articles)
    // }
    
    // useEffect(()=>{
    //     getNews()
    // })


   


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



  return (

    <>
    <div className='outer'>
    <div className="item1 slider name1 img" id= "img">
    <h1>News.co</h1>

    </div>
  <Horizontalbar/>
    <div className="item1 main scrollable">
    {
  news.map((x, i) => (
    <div className="news-item" key={i}>
      <NewsItem photo={x.urlToImage} title={x.title} desc={x.description} />
    </div>
  ))
}

        </div> 
    <div className="item1 name3">

    </div>

    </div>
    </> 
  )
}