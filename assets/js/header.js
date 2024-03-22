"use strict" // strict mode
const header = document.querySelector("header")

const headerHTML = `
<div class="container">
<a href="/index.html" class="img-link">
<img
  src="/assets/images/logo.png"
  class="logo"
  alt="Logo"
/>
</a>
<span class="menu-bars">&#9776;</span>
<nav class="nav">
  <ul class="main-ul">
    <li><a href="/index.html">Home</a></li>
    <li><a href="/pages/about.html">About NTP</a></li>
    <li><a href="/pages/organizers.html">Organizers</a></li>
    <li><a href="/pages/sponsors.html">Sponsors</a></li>
    <li class="sub-menu">
      <div>
        <a href="/pages/participants.html">Projects Competition</a>
        <span class="open-ul-mobile">&#10549;</span>
      </div>
      <ul class="inner-ul">
        <li>
          <a href="/pages/participants.html">Call For Participation</a>
        </li>
        <li><a href="/pages/dates.html">Important Dates</a></li>
        <li><a href="/pages/guidelines.html">Report Guideline</a></li>
        <li><a href="/pages/submission.html">Project Submission</a></li>
      </ul>
    </li>
    <li><a href="/pages/parade-program.html">Parade Program</a></li>
    <li>
      <a
        href="/pages/contact-us.html"
        class="contact-us"
        >Contact Us</a
      >
    </li>
    <li>
      <a
        href="/pages/submission.html"
        class="registration"
        >Project Submission</a
      >
    </li>
  </ul>
</nav>
</div>
`
header.insertAdjacentHTML("beforeend", headerHTML)

const footerHTML = `<div class="footerContainer">
  <div class="footer-content">
    <div class="footer-section">
      <h3>Contact Us</h3>
      <p>Email: ntp11ju@gmail.com</p>
    </div>
    <div class="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li class="footer-section li"><a href="/">Home</a></li>
        <li class="footer-section li"><a href="/pages/about.html">About Us</a></li>
        <li class="footer-section li"><a href="/pages/contact-us.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Follow Us</h3>
      <ul class="social-links">
        <li><a href="https://www.facebook.com/NTPJo?mibextid=uzlsIk" target="_blank">Facebook</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>Copyright &copy; 2024 | CPE Team.</p>
  </div>
</div>`
document.body.insertAdjacentHTML("beforeend", footerHTML)

const socialMediabar = `
<!-- Floating Social Media bar Starts -->
    <div class="float-sm">
      <div class="fl-fl float-fb">
        <a href="https://www.facebook.com/NTPJo?mibextid=uzlsIk" target="_blank"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="15px"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#fff" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg></a>
      </div>
    </div>
    <!-- Floating Social Media bar Ends -->`
document.body.insertAdjacentHTML("afterbegin", socialMediabar)

if (window.location.host === "ntp11.netlify.app")
  window.history.replaceState(
    null,
    "",
    window.location.href.replace(".html", "")
  )
