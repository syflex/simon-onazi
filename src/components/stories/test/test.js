// import React from "react"
// import Carousel from '../molecules/Carousel'
// import { graphql, useStaticQuery } from 'gatsby'

// const Test = ({ pageContext }) => {

//     const data = useStaticQuery(graphql`
//         query carouselQuery {
//             craftAPI {
//                 globalSet {
//                     ... on CraftAPI_homepageCarousel_GlobalSet {
//                         id
//                         name
//                         carousel {
//                             ... on CraftAPI_carousel_carousel_BlockType {
//                                 numberOfGames
//                                 sort
//                                 gameCategory {
//                                     slug
//                                     id
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     `)
// //   <GameCard
// //     isGame={true}
// //     id={12}
// //     title='Forever Diamonds'
// //     logo= 'https://s3.eu-west-1.amazonaws.com/giochigatsby/game_images/thunderstruck.jpg'
// //     ratings={4.35}
// //     url='https://www.giochidislots.com/it/slot-machines/forever-diamond'
// //     bonusUrl='https://www.giochidislots.com/it/go/starcasino'
// //   />

//   return JSON.stringify(data.craftAPI.globalSet , null, 2)
// }
// export default Test