import { faAtom } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Topbar.css';


const Topbar = () => {
  return (
    <div style={{ backgroundColor: '#23CC88', }}>
      <div className='container' >
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: '0px 0px', }}>
          <div class="container-fluid" style={{ backgroundColor: '#23CC88', }}>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item top-bar-border d-flex align-items-center">
                  <i class="far fa-clock"></i>
                  <a class="nav-link active top-bar-font" >9:30am - 6:30pm Mon - Sun</a>
                </li>
                <li class="nav-item top-bar-border d-flex align-items-center px-3">
                  <i class="fas fa-phone"></i>
                  <a class="nav-link active top-bar-font" >+800-123-4567 6587</a>
                </li>
                <li class="nav-item top-bar-border d-flex align-items-center px-3">
                  <i class="fas fa-map-marker-alt"></i>
                  <a class="nav-link active top-bar-font" > Anmoore Road Brooklyn, NY 230</a>
                </li>
              </ul>

              <form class="d-flex">
                <li class="nav-item top-bar-border d-flex align-items-center p-3">
                  <i class="fab fa-facebook-messenger "></i>
                </li>
                <li class="nav-item top-bar-border d-flex align-items-center " >
                  <i class="fab fa-twitter px-3"></i>
                </li>
                <li class="nav-item top-bar-border d-flex align-items-center " >
                  <i class="fab fa-vimeo-v px-3"></i>
                </li>
                <li class="nav-item top-bar-border d-flex align-items-center " >
                  <i class="fab fa-skype px-3"></i>
                </li>
                <li class="nav-item top-bar-border d-flex align-items-center " >
                  <i class="fas fa-rss px-3"></i>
                </li>

              </form>

            </div>

          </div>
        </nav>
      </div>
    </div>

  );
};

export default Topbar;