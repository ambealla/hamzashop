import { Container, Row, Col } from 'react-bootstrap';

import Logo from "../assets/LOGO 1.jpg";

export default function Footer() {
  return (
    <div className='bg-light'>
        <Container className='text-center pt-5 mt-5' style={{fontSize:"10px"}}>
            <Row>
                <Col>
                    <p>
                        Beautiful Home Store Ltda. <br />
                        Rua do Comércio, 1234 Cidade Linda-RS CEP: 91234-567
                        <br />
                        Beautiful.home@bh-store.com <br />
                        (51)4000-0001 | (51)9999-9999
                    </p>
                </Col>

                <Col>
                    <img
                        src={Logo}
                        alt="logotipo da Beautiful Home Store"
                        width={150}
                       style={ {   borderTopLeftRadius : "50%" ,
                            BorderTopRightRadius: "50%",
                            BorderBottomRightRadius:"50%",
                            BorderBottomLeftRadius: "50%"}}     />
                </Col>
            </Row>
            <p className='py-4'>© 2021 Vanessa Vargas. Todos os direitos reservados.</p>
            <section id="icon-blocks-template--14670501412967__733b8c89-955b-4eca-a757-653dff2b22ba" class="icon-blocks enter-view position-relative overflow-hidden bg-white text-body pt-0 pb-8 mt-0 mb-0 entered">
    <div class="container">
        <h2 class="title mb-4 visually-hidden">
            Icon Blocks
        </h2>
        <div class="row mx-n3 mx-lg-n4 row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3">
            
                <div class="col p-3 p-lg-4">
                    <div class="h-100 animate__animated animate__fast animate__fadeInRight" data-animate-class="animate__fadeInRight" >
                        <div class="card h-100 bg-white text-body shadow-none  text-start">
                            <div class="card-body text-start">
                                <div class="d-flex align-items-center">
                                    
                                        <div class="block-icon flex-shrink-0 me-5">
                                        <img src="./laivraison.svg" height={"100px"} width={"100px"} alt="" />
                                     
                                         </div>
                                    
                                    <div class="block-inner">
                                        
                                            <h3 class="title mb-4 h5">
                                                LIVRAISON GRATUIT
                                            </h3>
                                        
                                        
                                            <div class="description rte mt-n3 mb-0 fs-6">
                                                <p>La livraison gratuit et le paiement a la livraison.</p>
                                            </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="col p-3 p-lg-4">
                    <div class="h-100 animate__animated animate__fast animate__fadeInRight" data-animate-class="animate__fadeInRight" >
                        <div class="card h-100 bg-white text-body shadow-none  text-start" >
                            <div class="card-body text-start">
                                <div class="d-flex align-items-center">
                                    
                                        <div class="block-icon flex-shrink-0 me-5">
                                        </div>
                                    
                                    <div class="block-inner">
                                        
                                            <h3 class="title mb-4 h5">
                                                GARANTIE À 100%
                                            </h3>
                                        
                                        
                                            <div class="description rte mt-n3 mb-0 fs-5">
                                                <p>La garantie inclut tous les produits du magasin.</p>
                                            </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="col p-3 p-lg-4">
                    <div class="h-100 animate__animated animate__fast animate__fadeInRight" data-animate-class="animate__fadeInRight" >
                        <div class="card h-100 bg-white text-body shadow-none  text-start" >
                            <div class="card-body text-start">
                                <div class="d-flex align-items-center">
                                    
                                        <div class="block-icon flex-shrink-0 me-5">

                                        </div>
                                    
                                    <div class="block-inner">
                                        
                                            <h3 class="title mb-4 h5">
                                                100% SATISFAIT OU REMBOURSEMENT
                                            </h3>
                                        
                                        
                                            <div class="description rte mt-n3 mb-0 fs-6">
                                                <p>Vous pouvez prévisualiser gratuitement votre commande chez le livreur.</p>
                                            </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    </div>
</section>
        </Container>



        
    </div>    
  );
};