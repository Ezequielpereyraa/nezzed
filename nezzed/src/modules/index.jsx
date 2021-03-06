import React from 'react';
import SliderBanner from '../components/sliderBannerComponent';
import Quote from '../components/quoteComponent';
import Footer from '../components/footerComponent';
import Assistant from '../components/assistantComponent';

export default function Home() {
  return (
    <>
      <SliderBanner />
      <article className='content row'>
        <article className='content-info-covid col-12 col-sm-12 col-lg-11 col-xl-11 bg-info'>
          <img src='/img/covid.png' alt='Covid-19' className='covid' />
          <img src='/img/covid.png' alt='Covid-19' className='covid2' />
          <h3 className='sidebar__titulo'>Covid-19</h3>
          <p className='sidebar__descripcion'>
            Nuestro equipo está atendiendo desde sus casas. Disculpe las
            molestias. La salud primero.
            <span className='hashtag'>#QuedateEnCasa</span>
          </p>
        </article>
        <article className='box-info col-12 col-sm-12 col-lg-3 col-xl-3 card'>
          <article className='card-body'>
            <img
              src='/img/factory.png'
              alt='Factory'
              className='img-box-info'
            />
            <h3 className='card__title'>Software Factory</h3>
            <hr />
            <p className='card-description'>
              Somos software factory en todo LATAM. Nos destacamos por la
              calidad, y no por la cantidad. <i>Código bonito y ágil</i>.
            </p>
          </article>
        </article>
        <article className='box-info col-12 col-sm-12 col-lg-3 col-xl-3 card'>
          <article className='card-body'>
            <img
              src='/img/consulting.png'
              alt='Factory'
              className='img-box-info'
            />
            <h3 className='card__title'>Software Consulting</h3>
            <hr />
            <p className='card-description'>
              Somos tu partner en el desarrollo, y en la producción. Entendemos
              tu negocio, tenemos la solución.
            </p>
          </article>
        </article>
        <article className='box-info col-12 col-sm-12 col-lg-3 col-xl-3 card'>
          <article className='card-body'>
            <img
              src='/img/outsourcing.png'
              alt='Factory'
              className='img-box-info'
            />
            <h3 className='card__title'>Outsourcing</h3>
            <hr />
            <p className='card-description'>
              Trabajamos en conjunto con tu equipo de desarrollo. Ahorrate
              invertir en capacitación, nosotros lo hacemos por usted.
            </p>
          </article>
        </article>
        <Quote />
      </article>
      <Assistant />
      <Footer />
    </>
  );
}
