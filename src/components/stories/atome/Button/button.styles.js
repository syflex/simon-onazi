import tw, { styled } from "twin.macro"
// import Link from "gatsby-link"
import { Link } from "@reach/router"

// const buttonVariant = (props) => {
//     switch (props.variant) {
//       case 'primary':
//         return tw`
                
//               `
//       case 'secondary':
//         return `
                  
//               `
//       case 'tertiary':
//         return `
                  
//               `
//       case 'misc':
//         return `
                  
//               `
//       case 'warning':
//         return `
                  
//               `
//       case 'error':
//         return `
                  
//               `
//       case 'success':
//         return `
                  
//               `
//       case 'menu':
//         return `
                  
//               `
//       case 'image':
//         return `
                  
//         `
//       default:
//           return tw`
//           bg-black text-white
//           `
//     }
//   }

  const buttonVariant = {
    primary: tw``,
    secondary: tw``,
    tertiary: tw``,
    misc: tw``,
    warning: tw``,
    error: tw``,
    success: tw``,
    menu: tw``,
    image: tw``,
    default: tw`
    bg-transparent hover:bg-green-900 text-green-900
    hover:text-white py-2 px-4 border border-green-900 hover:border-transparent 
    rounded font-semibold cursor-pointer
    `
  }

  const buttonSize = {
    small: tw``,
    medium: tw``,
    large: tw``,
    default: tw` 
    `
  }
  
  const getVariant = ({ name }) => buttonVariant[name] || buttonVariant.default
  const getSize = ({ name }) => buttonSize[name] || buttonSize.default  

export const StyledButton = styled.button(getVariant,getSize)
