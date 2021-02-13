import React from "react";
import Head from "next/head"

export default function Home() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
          <title>App NextJs SSR</title>
        </Head>
  
        <body>
          <div className="container-fluid bg-light">
            <div className="text-center">
              <img className="mt-5" src="./images/logo2.jpg" />< br />
              <h1 className="display-3 ">Tabela de Produtos</h1>
            </div>
            <div className="row row-cols-4 row-cols-md-4 g-4 mt-5 mx-5 justify-content-center">
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/ps4.png" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Playstation 4</h5>
                    <p className="card-text text-danger"><s>R$ 2.990,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 2.800,00</b>  </p>
                  </div>
                </div>
              </div>
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/xboxone.png" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Xbox One</h5>
                    <p className="card-text text-danger"><s>R$ 2.499,90 </s></p>
                    <p className="card-text text-primary"> <b>R$ 2.300,00</b> </p>
                  </div>
                </div>
              </div>
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/gtav.png" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">GTA V p/ Xbox 360</h5>
                    <p className="card-text text-danger"><s>R$ 300,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 220,99</b>  </p>
                  </div>
                </div>
              </div>
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/injustice.png" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Injustice 2 p/ PS4</h5>
                    <p className="card-text text-danger"><s> R$ 89,00</s></p>
                    <p className="card-text text-primary"> <b>R$ 70,00</b>  </p>
                  </div>
                </div>
              </div>
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/controleps4.png" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Controle p/ PS4</h5>
                    <p className="card-text text-danger"><s>R$ 219,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 200,00</b>  </p>
                  </div>
                </div>
              </div>
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/mariokart.png" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Mario Kart p/ NSwitch</h5>
                    <p className="card-text text-danger"><s>R$ 360,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 330,00</b> </p>
                  </div>
                </div>
              </div>
  
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/mouse.png" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Mouse Gamer</h5>
                    <p className="card-text text-danger"><s>R$ 190,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 170,00</b> </p>
                  </div>
                </div>
              </div>
  
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/monitor.png" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Monitor Gamer</h5>
                    <p className="card-text text-danger"><s>R$ 9.800,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 9.500,00</b> </p>
                  </div>
                </div>
              </div>
  
              <div className="col mt-5 mr-2">
                <div className="card">
                  <img src="./images/teclado.png" className="card-img-top" alt="jóia" />
                  <div className="card-body">
                    <h5 className="card-title">Teclado Gamer</h5>
                    <p className="card-text text-danger "><s>R$ 250,00 </s></p>
                    <p className="card-text text-primary"> <b>R$ 230,00</b> </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
  
  
        </body>
      </div>
    )
  }
  