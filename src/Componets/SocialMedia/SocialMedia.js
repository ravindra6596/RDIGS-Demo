import React from 'react';
import {Link} from 'react-router-dom';
const SocialMedia=()=>{
    return(
        <>
        <section className="social-media-section">
        <aside id="custom_html-9" class="widget_text widget widget_custom_html">
          <div class="textwidget custom-html-widget" id="navbar">
            <div id="floating-social">
              <Link
                class="a"
                target="_blank"
                to="https://www.linkedin.com/"
                rel="noopener"
              >
                <img
                  alt="linkedin"
                  src="https://3yghedxb20r3923my4c3z70e-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/linkedin-2.svg"
                />
              </Link>
              <Link
                class="a"
                target="_blank"
                to="https://www.facebook.com/"
                rel="noopener"
              >
                <img
                  alt="facebook"
                  src="https://3yghedxb20r3923my4c3z70e-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/facebook-2.svg"
                />
              </Link>
              <Link
                class="a"
                target="_blank"
                to="https://twitter.com/"
                rel="noopener"
              >
                <img
                  alt="twitter"
                  src="https://3yghedxb20r3923my4c3z70e-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/twitter-2.svg"
                />
              </Link>
              <Link
                class="a"
                target="_blank"
                to="https://www.instagram.com/"
                rel="noopener"
              >
                <img
                  alt="instagram"
                  src="https://3yghedxb20r3923my4c3z70e-wpengine.netdna-ssl.com/wp-content/uploads/2021/06/instagram-2.svg"
                />
              </Link>
            </div>
          </div>
        </aside>
        <button className="social-hide-button">
          <i class="fa fa-angle-double-left" aria-hidden="true"></i>
        </button>
      </section>
        </>
    )
}
export default SocialMedia;