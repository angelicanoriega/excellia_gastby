import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby"
const objectGraphql = graphql`
{
    allStrapiMenu1S {
        nodes {
          id
          nombre
        }
      }
      allStrapiMenu2S {
        nodes {
          nombre
          id
        }
      }
}

`
console.log(objectGraphql.nombre);
class Header extends Component {

    menu1 = (data) => {
        console.log(data);
        return data.allStrapiMenu1S.nodes.map((item) => {
            return (
                <li key={item.id} className="menu-587 first"><a href={item.ruta}>{item.nombre}</a></li>

            )
        })

    }

    menu2 = (data) => {
        console.log(data);
        return data.allStrapiMenu2S.nodes.map((item) => {
            return (
                <li key={item.id} className="menu-587 first"><a href={item.ruta}>{item.nombre}</a></li>

            )
        })

    }

    render() {
        return (
            <StaticQuery
                query={objectGraphql}
                render={data => (
                    <header>
                        <section>
                            <div className="container">
                                <div className="row" style={{ position: "relative" }}>
                                    <div className="idioma">
                                        <form className="lang_dropdown_form language" id="lang_dropdown_form_language" action="/bk_centinela/en/home" method="post" acceptCharset="UTF-8"><div>
                                            <div className="form-item form-type-select form-item-lang-dropdown-select">
                                                <selected className="custom-select mb-2 mr-sm-2 mb-sm-0" id="lang-dropdown-select-language" style={{ width: "100px" }} name="lang_dropdown_select"><option defaultValue="es">Español</option><option defaultValue="en" >English</option></selected>
                                            </div>
                                            <input type="hidden" name="es" defaultValue="/bk_centinela/es/inicio" />
                                            <input type="hidden" name="en" defaultValue="/bk_centinela/en/home" />
                                            <noscript>
                                                <div>
                                                    <input type="submit" id="edit-submit--2" name="op" defaultValue="Go" className="form-submit" />
                                                </div>
                                            </noscript>
                                            <input type="hidden" name="form_build_id" defaultValue="form-kVyaU80hriPFQWE67Z2r5ogDFjJAywo_m4VmUwU2Dv8" />
                                            <input type="hidden" name="form_id" defaultValue="lang_dropdown_form" />
                                        </div>
                                        </form>
                                    </div>

                                    <div className="col-lg-3 col-xl-4 logo">
                                        <h1><a href="/bk_centinela/en">Fishery Centinela</a></h1>
                                    </div>
                                    <div className="col-lg-9 col-xl-8 m-none">
                                        <nav>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <ul id="menu2" className="submenu">
                                                        {this.menu1(data)}

                                                    </ul>
                                                </div>
                                                <div className="col-md-12">
                                                    <ul id="menu1" className="menu2">
                                                        {this.menu2(data)}
                                                    </ul>                            </div>
                                            </div>
                                        </nav>
                                    </div>

                                    <div className="col-12 m-menu">
                                        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                                                <i className="fa fa-bars" aria-hidden="true"></i> Navegación
                        </button>

                                            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                                                <ul id="menu1b" className="navbar-nav"><li className="menu-1056 active-trail first active"><a href="/bk_centinela/en/home" className="active-trail active">Home</a></li>
                                                    <li className="menu-1092"><a href="/bk_centinela/en/about-us">About us</a></li>
                                                    <li className="menu-1098"><a href="/bk_centinela/en/products">Products and services</a></li>
                                                    <li className="menu-1116"><a href="/bk_centinela/en/infrastructure">Infrastructure</a></li>
                                                    <li className="menu-1103"><a href="/bk_centinela/en/quality-control">Quality Control</a></li>
                                                    <li className="menu-1112 last"><a href="/bk_centinela/en/sustainability">Sustainability</a></li>
                                                </ul>                            <ul id="menu2b" className="navbar-nav"><li className="menu-587 first"><a href="/bk_centinela/en/news">News</a></li>
                                                    <li className="menu-1120"><a href="/bk_centinela/en/human-talent">Human talent</a></li>
                                                    <li className="menu-1107"><a href="https://www.mifuturogr.com/es-PE/empresas/listado-empresas/pesquera-centinela/" target="_blank" rel="noreferrer">Work with us</a></li>
                                                    <li className="menu-1105"><a href="/bk_centinela/en/clients">Clients</a></li>
                                                    <li className="menu-1132 last"><a href="/bk_centinela/en/contact">Contact</a></li>
                                                </ul>                        </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </header>

                )}
            />



        )
    }
}


export default Header
