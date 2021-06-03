import React,{Component} from "react";
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import ReactHtmlParser from "react-html-parser"
const objectGraphql = graphql`
{
  allStrapiSeo {
    nodes {
      meta
    }
  }
}
`

class Layout extends Component {

    parserHtml =(data)=>{
        
        return data.allStrapiSeo.nodes.map((item) =>{     
          console.log(item);       
                return(
                    ReactHtmlParser(item.meta)
                )
        })
        
    }


    render (){
        return (
            <StaticQuery
            query={objectGraphql}
            render={data => (
            <Helmet defer={false} >
                {this.parserHtml(data)}
            </Helmet>

            )}
            />
            
        )
    }
}


export default Layout
