import React from "react";
import './home.css'
import Blog from "../blog";
import logo1 from '../img/logo.png'
import logo2 from '../img/logo2.png'
import spicy from '../img/spicy.png'
import last from '../img/last.png'
import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'
import img6 from '../img/img6.png'
import o from '../img/o.png'
import burger from '../img/burger.png'
import n from '../img/n.png'
import time from '../img/time.png'
import fork from '../img/Fork.png'
import ads from '../img/Ads.png'
import poho2 from '../img/poho2.png'
import poho3 from '../img/poho3.png'
import poho4 from '../img/poho4.png'
import poho5 from '../img/poho5.png'
import n2 from '../img/n2.png'
import poho6 from '../img/poho6.png'
import poho7 from '../img/poho7.png'
import poho8 from '../img/poho8.png'
import cook from '../img/cooker.png'
import i from '../img/i.png'
import post from '../img/Post.png'
import pos2 from '../img/Post1.png'
import pos3 from '../img/Post2.png'
import pos4 from '../img/Post4.png'
import insta from '../img/insta.png'
import w1 from '../img/w1.png'
import w2 from '../img/w2.png'
import w3 from '../img/w3.png'
import w4 from '../img/w4.png'
import w5 from '../img/w5.png'
import w6 from '../img/w6.png'
import w7 from '../img/w7.png'
import w8 from '../img/w8.png'
import photo from '../img/Photo.png'
import pq from '../img/pq.png'
import salat from '../img/salat.png'


export default function Home() {
    return (
        <div className="parentSH">
            <div className="navigator">
                <div style={{ marginTop: '13px', marginLeft: '20px' }}>
                    <Blog image={logo1} />
                </div>
                <nav>
                    <li><a href="home">Home</a></li>
                    <li><a href="recipes">Recipes</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">About Us</a></li>
                </nav>
                <div style={{
                    marginLeft: '320px',
                    marginTop: '13px'
                }}>
                    <Blog image={logo2} />
                </div>
            </div>
            <div style={{ marginTop: '50px', marginLeft: '30px' }}>
                <Blog image={spicy} />
            </div>
            <div style={{ marginTop: '50px' }}>
                <p style={{ fontSize: '60px', marginLeft: '70px' }}>Categories</p>
            </div>
            <button style={{
                marginLeft: '1080px',
                fontSize: '23px',
                width: '260px',
                height: '60px',
                borderRadius: '20px'

            }}>View All Categories</button>
            <div className="imgFirst">
                <Blog image={img1} />
                <Blog image={img2} />
                <Blog image={img3} />
                <Blog image={img4} />
                <Blog image={img5} />
                <Blog image={img6} />
            </div>
            <div>
                <p style={{ fontSize: '60px', textAlign: 'center', marginTop: '50px' }}>Simple and tasty recipes</p>
                <p style={{ textAlign: 'center', marginTop: '30px', lineHeight: '33px' }}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br />
                    labore et dolore magna aliqut enim ad minim </p>
            </div>




            <div className="imgFood">
                <div>
                    <div>
                        <Blog image={o} />
                        <div style={{
                            marginTop: '-390px',
                            marginLeft: '15px'
                        }}>
                            <Blog image={burger} />
                        </div>
                    </div>
                    <div style={{ marginLeft: '308px', marginTop: '-240px' }}> <Blog image={n} /> </div>
                    <p style={{ marginTop: '190px', marginLeft: '20px', fontSize: '24px', fontWeight: 800 }}>Big and Juicy Wagyu Beef <br /> Cheeseburger</p>

                    <div style={{ marginTop: '20px', marginLeft: '29px' }}> <Blog image={time} /> </div>
                    <p style={{ marginLeft: '70px', marginTop: '-24px' }}>30 minutes</p>
                    <div style={{
                        marginLeft: '210px',
                        marginTop: '-21px'
                    }}>
                        <Blog image={fork} />
                    </div>
                    <p style={{ marginLeft: '270px', marginTop: '-25px' }}>snack</p>
                </div>

                <div>
                    <div>
                        <Blog image={o} />
                        <div style={{
                            marginTop: '-390px',
                            marginLeft: '15px'
                        }}>
                            <Blog image={poho2} />
                        </div>
                    </div>
                    <div style={{ marginLeft: '308px', marginTop: '-240px' }}> <Blog image={n2} /> </div>
                    <p style={{ marginTop: '190px', marginLeft: '20px', fontSize: '24px', fontWeight: 800 }}>Fresh Lime Roasted Salmon with <br /> Ginger Sauce</p>

                    <div style={{ marginTop: '20px', marginLeft: '29px' }}> <Blog image={time} /> </div>
                    <p style={{ marginLeft: '70px', marginTop: '-24px' }}>30 minutes</p>
                    <div style={{
                        marginLeft: '210px',
                        marginTop: '-21px'
                    }}>
                        <Blog image={fork} />
                    </div>
                    <p style={{ marginLeft: '270px', marginTop: '-25px' }}>fish</p>
                </div>

                <div>
                    <div>
                        <Blog image={o} />
                        <div style={{
                            marginTop: '-390px',
                            marginLeft: '15px'
                        }}>
                            <Blog image={poho3} />
                        </div>
                    </div>
                    <div style={{ marginLeft: '308px', marginTop: '-240px' }}> <Blog image={n2} /> </div>
                    <p style={{ marginTop: '190px', marginLeft: '20px', fontSize: '24px', fontWeight: 800 }}>Strawberry Oatmeal Pancake <br /> with Honey Syrup</p>

                    <div style={{ marginTop: '20px', marginLeft: '29px' }}> <Blog image={time} /> </div>
                    <p style={{ marginLeft: '70px', marginTop: '-24px' }}>30 minutes</p>
                    <div style={{
                        marginLeft: '210px',
                        marginTop: '-21px'
                    }}>
                        <Blog image={fork} />
                    </div>
                    <p style={{ marginLeft: '270px', marginTop: '-25px' }}>breakfast</p>
                </div>

            </div>


            <div className="imgFoot">
                <div>
                    <div>
                        <Blog image={o} />
                        <div style={{
                            marginTop: '-390px',
                            marginLeft: '15px'
                        }}>
                            <Blog image={poho4} />
                        </div>
                    </div>
                    <div style={{ marginLeft: '308px', marginTop: '-240px' }}> <Blog image={n} /> </div>
                    <p style={{ marginTop: '190px', marginLeft: '20px', fontSize: '24px', fontWeight: 800 }}>Fresh and Healthy Mixed <br /> Mayonnaise Salad</p>

                    <div style={{ marginTop: '20px', marginLeft: '29px' }}> <Blog image={time} /> </div>
                    <p style={{ marginLeft: '70px', marginTop: '-24px' }}>30 minutes</p>
                    <div style={{
                        marginLeft: '210px',
                        marginTop: '-21px'
                    }}>
                        <Blog image={fork} />
                    </div>
                    <p style={{ marginLeft: '270px', marginTop: '-25px' }}>Healthy</p>
                </div>

                <div>
                    <div>
                        <Blog image={o} />
                        <div style={{
                            marginTop: '-390px',
                            marginLeft: '15px'
                        }}>
                            <Blog image={poho5} />
                        </div>
                    </div>
                    <div style={{ marginLeft: '308px', marginTop: '-240px' }}> <Blog image={n2} /> </div>
                    <p style={{ marginTop: '190px', marginLeft: '20px', fontSize: '24px', fontWeight: 800 }}>Chicken Meatballs with Cream <br /> Cheese</p>

                    <div style={{ marginTop: '20px', marginLeft: '29px' }}> <Blog image={time} /> </div>
                    <p style={{ marginLeft: '70px', marginTop: '-24px' }}>30 minutes</p>
                    <div style={{
                        marginLeft: '210px',
                        marginTop: '-21px'
                    }}>
                        <Blog image={fork} />
                    </div>
                    <p style={{ marginLeft: '270px', marginTop: '-25px' }}>Meat</p>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <Blog image={ads} />
                </div>

            </div>

            <div className="imgFood">
                <div>
                    <div>
                        <Blog image={o} />
                        <div style={{
                            marginTop: '-390px',
                            marginLeft: '15px'
                        }}>
                            <Blog image={poho7} />
                        </div>
                    </div>
                    <div style={{ marginLeft: '308px', marginTop: '-240px' }}> <Blog image={n} /> </div>
                    <p style={{ marginTop: '190px', marginLeft: '20px', fontSize: '24px', fontWeight: 800 }}>Fruity Pancake with Orange & <br /> Blueberry</p>

                    <div style={{ marginTop: '20px', marginLeft: '29px' }}> <Blog image={time} /> </div>
                    <p style={{ marginLeft: '70px', marginTop: '-24px' }}>30 minutes</p>
                    <div style={{
                        marginLeft: '210px',
                        marginTop: '-21px'
                    }}>
                        <Blog image={fork} />
                    </div>
                    <p style={{ marginLeft: '270px', marginTop: '-25px' }}>Sweet</p>
                </div>

                <div>
                    <div>
                        <Blog image={o} />
                        <div style={{
                            marginTop: '-390px',
                            marginLeft: '15px'
                        }}>
                            <Blog image={poho6} />
                        </div>
                    </div>
                    <div style={{ marginLeft: '308px', marginTop: '-240px' }}> <Blog image={n2} /> </div>
                    <p style={{ marginTop: '190px', marginLeft: '20px', fontSize: '24px', fontWeight: 800 }}>The Best Easy One Pot Chicken <br /> and Rice</p>

                    <div style={{ marginTop: '20px', marginLeft: '29px' }}> <Blog image={time} /> </div>
                    <p style={{ marginLeft: '70px', marginTop: '-24px' }}>30 minutes</p>
                    <div style={{
                        marginLeft: '210px',
                        marginTop: '-21px'
                    }}>
                        <Blog image={fork} />
                    </div>
                    <p style={{ marginLeft: '270px', marginTop: '-25px' }}>Snack</p>
                </div>

                <div>
                    <div>
                        <Blog image={o} />
                        <div style={{
                            marginTop: '-390px',
                            marginLeft: '15px'
                        }}>
                            <Blog image={poho8} />
                        </div>
                    </div>
                    <div style={{ marginLeft: '308px', marginTop: '-240px' }}> <Blog image={n2} /> </div>
                    <p style={{ marginTop: '190px', marginLeft: '20px', fontSize: '24px', fontWeight: 800 }}>The Creamiest Creamy Chicken <br /> and Bacon Pasta</p>

                    <div style={{ marginTop: '20px', marginLeft: '29px' }}> <Blog image={time} /> </div>
                    <p style={{ marginLeft: '70px', marginTop: '-24px' }}>30 minutes</p>
                    <div style={{
                        marginLeft: '210px',
                        marginTop: '-21px'
                    }}>
                        <Blog image={fork} />
                    </div>
                    <p style={{ marginLeft: '270px', marginTop: '-25px' }}>Noodles</p>
                </div>

            </div>
            <div style={{ marginTop: '340px', marginLeft: '40px' }}>

                <p style={{ fontSize: '50px' }}>Everyone can be a <br />
                    chef in their own kitchen</p>
                <p style={{ marginTop: '30px', lineHeight: '30px' }}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br />
                    eiusmod tempor incididunt ut labore et dolore magna aliqut enim <br />
                    ad minim </p>
                <button style={{
                    width: '140px',
                    height: '50px',
                    borderRadius: '15px',
                    background: 'black',
                    color: 'white',
                    marginTop: '30px'
                }}>Learn more</button>
            </div>
            <div style={{
                marginLeft: '700px',
                marginTop: '-500px'
            }}>
                <Blog image={cook} />
            </div>


            <div>
                <p style={{ fontSize: '60px', textAlign: 'center', marginTop: '50px' }}>Check out @foodieland on Instagram</p>
                <p style={{ fontSize: '20px', textAlign: 'center', marginTop: '50px', lineHeight: '30px', color: 'gray' }}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore <br />
                    magna aliqut enim ad minim </p>
            </div>

            <div style={{ marginLeft: '-10px' }}>
                <Blog image={i} />
            </div>

            <div style={{
                display: 'flex',
                gap: '50px',
                marginLeft: '40px',
                marginTop: '-680px'
            }}>
                <Blog image={post} />
                <Blog image={pos2} />
                <Blog image={pos3} />
                <Blog image={pos4} />
            </div>
            <div style={{

                marginTop: '86px',


            }}>
                <button style={{
                    marginLeft: '590px',
                    width: '210px',
                    height: '50px',
                    background: 'black',
                    color: 'white',
                    borderRadius: '15px',
                    paddingRight: '40px'
                }}>Visit Our Instagram</button>

                <div style={{
                    marginTop: '-35px',
                    marginLeft: '750px'
                }}>
                    <Blog image={insta} />
                </div>
            </div>

            <div style={{ marginTop: '220px' }}>
                <p style={{ fontSize: '50px', marginLeft: '20px' }}>Try this delicious recipe <br />
                    to make your day</p>
            </div>
            <p style={{ marginLeft: '740px', marginTop: '-80px', lineHeight: '30px' }}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor <br />
                incididunt ut labore et dolore magna aliqut enim ad minim </p>

            <div style={{ marginTop: '90px', display: 'flex', marginLeft: '36px', gap: '60px' }}>
                <Blog image={w1} />
                <Blog image={w2} />
                <Blog image={w3} />
                <Blog image={w4} />
            </div>
            <div style={{ marginTop: '0px', display: 'flex', marginLeft: '36px', gap: '60px' }}>
                <Blog image={w5} />
                <Blog image={w6} />
                <Blog image={w7} />
                <Blog image={w8} />
            </div>


            <div>
                <div style={{ marginTop: '90px', marginLeft: '40px' }}>
                    <Blog image={pq} />

                    <div><p style={{ marginTop: '-360px', marginLeft: '320px', fontSize: '55px' }}>Deliciousness to your inbox</p></div>
                    <p style={{ marginLeft: '380px', marginTop: '20px', lineHeight: '20px', color: 'gray' }}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    {/* <div style={{marginTop: '-290px'}}> */}
                    <input type="email" placeholder=" your email address" style={{ width: '450px', height: '60px', marginLeft: '390px', marginTop: '90px', borderRadius: '15px', border: 'none' }} />
                    {/* </div> */}
                    <button style={{ width: '120px', height: '47px', marginLeft: '-123px', borderRadius: '15px', border: 'none', color: "white", background: 'black' }}>subscribe</button>

                </div>
                <div style={{ marginLeft: '42px', marginTop: '-300px' }}>
                    <Blog image={salat} />
                </div>
                <div style={{ marginLeft: '970px', marginTop: '-245px' }}>
                    <Blog image={photo} />
                </div>
            </div>


            <div style={{ marginTop: '150px', marginLeft: '40px' }}>
                <Blog image={logo1} />
            </div>



            <div style={{ marginTop: '30px', marginLeft: '40px' }}>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
            </div>

            <div className="box">
                <nav style={{ display: 'flex', marginLeft: '1000px', gap: '50px', marginTop: '-50px' }}>
                    <a href="">Recipes</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                    <a href="">About us</a>
                </nav>
            </div>

            <div style={{ marginTop: '130px', textAlign: 'center' }}>
                <Blog image={last} />
            </div>
            <div style={{ marginTop: '-20px', marginLeft: '1230px' }}>
                <Blog image={logo2} />
            </div>
        </div>


    )
}