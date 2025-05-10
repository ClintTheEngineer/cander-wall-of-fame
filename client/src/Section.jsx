import React from 'react'


export const Section = () => {
  const lebronArticle = document.getElementById('lebronArticle');
  const jordanArticle = document.getElementById('jordanArticle');
  const kareemArticle = document.getElementById('kareemArticle');
  const timArticle = document.getElementById('timArticle');
  const magicArticle = document.getElementById('magicArticle');
  const chrisArticle = document.getElementById('chrisArticle');
  const larryArticle = document.getElementById('larryArticle');
  const billArticle = document.getElementById('billArticle');
  const wiltArticle = document.getElementById('wiltArticle');
  const banner = document.getElementById('banner');
  const banner2 = document.getElementById('banner-2');

 
  
  
  function lebronClick(){    
    if (lebronArticle.style.display !== 'none'){
      lebronArticle.style.display = 'none';
      jordanArticle.style.display = 'none';
      kareemArticle.style.display = 'none';
      timArticle.style.display = 'none';
      magicArticle.style.display = 'none';
      chrisArticle.style.display = 'none';
      larryArticle.style.display = 'none';
      billArticle.style.display = 'none';
      wiltArticle.style.display = 'none';
      banner.style.display = 'none';
      banner2.style.display = 'none';
    
      } else {
        lebronArticle.style.display = 'block';
        jordanArticle.style.display = 'none'
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
      }
    }

   function jordanClick(){
      
      
      if (jordanArticle.style.display !== 'none'){
      jordanArticle.style.display = 'none';
      lebronArticle.style.display = 'none';
      kareemArticle.style.display = 'none';
      timArticle.style.display = 'none';
      magicArticle.style.display = 'none';
      chrisArticle.style.display = 'none';
      larryArticle.style.display = 'none';
      billArticle.style.display = 'none';
      wiltArticle.style.display = 'none';
      banner.style.display = 'none';
      banner2.style.display = 'none';
    
      } else {
        jordanArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
      }
    }


    function kareemClick(){
      if (kareemArticle.style.display === 'block'){
       kareemArticle.style.display = 'none';
       lebronArticle.style.display = 'none';
       jordanArticle.style.display = 'none';
       timArticle.style.display = 'none';
       magicArticle.style.display = 'none';
       chrisArticle.style.display = 'none';
       larryArticle.style.display = 'none';
       billArticle.style.display = 'none';
       wiltArticle.style.display = 'none';
       banner.style.display = 'none';
       banner2.style.display = 'none';
       } else {
        kareemArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
       }
     }
   
      function timClick(){
       if (timArticle.style.display === 'block'){
        timArticle.style.display = 'none';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        banner.style.display = 'none';
        banner2.style.display = 'none';
       } else {
        timArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
       }
     }
   
      function magicClick(){
       if (magicArticle.style.display === 'block'){
        magicArticle.style.display = 'none';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        banner.style.display = 'none';
        banner2.style.display = 'none';
       } else {
        magicArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
       }
     }
   
      function chrisClick(){
       if (chrisArticle.style.display === 'block'){
        chrisArticle.style.display = 'none';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        banner.style.display = 'none';
        banner2.style.display = 'none';
       } else {
        chrisArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
       }
     }
   
      function larryClick(){
       if (larryArticle.style.display === 'block'){
        larryArticle.style.display = 'none';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        banner.style.display = 'none';
        banner2.style.display = 'none';
       } else {
        larryArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        billArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
       }
     } 
   
      function billClick(){
       if (billArticle.style.display === 'block'){
        billArticle.style.display = 'none';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
        banner.style.display = 'none';
        banner2.style.display = 'none';
       } else {
        billArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        wiltArticle.style.display = 'none';
       }
     }
   
      function wiltClick(){
       if (wiltArticle.style.display === 'block'){
        wiltArticle.style.display = 'none';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
        banner.style.display = 'none';
        banner2.style.display = 'none';
       } else {
        wiltArticle.style.display = 'block';
        lebronArticle.style.display = 'none';
        jordanArticle.style.display = 'none';
        kareemArticle.style.display = 'none';
        timArticle.style.display = 'none';
        magicArticle.style.display = 'none';
        chrisArticle.style.display = 'none';
        larryArticle.style.display = 'none';
        billArticle.style.display = 'none';
       }
     }
   


  return (
    <>
        <section id="main-container">
        <div id="lebron" onClick={lebronClick} className="sub-container"><p id="lbj" className="player-name">LeBron James</p></div>
        <div id="michael" onClick={jordanClick} className="sub-container"><p id="mj" className="player-name">Michael Jordan</p></div>
        <div id="kareem" onClick={kareemClick} className="sub-container"><p id="kaj" className="player-name">Kareem Abdul-Jabbar</p></div>  
        <div id="tim" onClick={timClick} className="sub-container"><p id="td" className="player-name">Tim Duncan</p></div>
        <div id="magic" onClick={magicClick} className="sub-container"><p id="mej" className="player-name">Magic Johnson</p></div>
        <div id="chris" onClick={chrisClick} className="sub-container"><p id="cp3" className="player-name">Chris Paul</p></div>  
        <div id="larry" onClick={larryClick} className="sub-container"><p  id="lb" className="player-name">Larry Bird</p></div>
        <div id="bill" onClick={billClick} className="sub-container"><p id="br" className="player-name">Bill Russell</p></div>
        <div id="wilt" onClick={wiltClick} className="sub-container"><p id="wc" className="player-name">Wilt Chamberlain</p></div>  
    </section>
    </>
  )
}


