import React, { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";

const Nav = ({ isAuthenticated }) => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 1000, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <>
      <div className="wrapper" data-aos="fade-down">
        <div className={showMobMenu ? "active nav" : "nav"}>
          <div className="logo-title">
            {/* todo :: a logo */}

            {/* <svg
              className="MyLogo"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="white"
                stroke="none"
              >
                <path
                  d="M2205 5110 c-971 -90 -1634 -557 -1893 -1335 -50 -149 -70 -244 -81
-388 -47 -576 255 -1177 759 -1513 236 -157 483 -238 765 -251 155 -7 189 1
183 40 -3 21 -10 22 -123 29 -546 30 -1000 337 -1254 845 -122 244 -180 496
-181 777 -1 708 389 1261 1073 1522 565 216 1363 228 1878 29 482 -186 928
-591 1212 -1100 98 -176 157 -326 205 -514 25 -98 27 -122 27 -316 0 -188 -3
-220 -24 -305 -101 -404 -344 -626 -914 -834 -77 -28 -144 -58 -150 -67 -14
-23 -1 -67 23 -74 47 -15 302 61 452 135 357 176 594 462 689 828 146 569 -98
1257 -640 1801 -64 65 -154 148 -201 185 -296 236 -643 405 -960 466 -190 38
-641 58 -845 40z"
                />
                <path
                  d="M1837 4529 c-38 -17 -95 -46 -127 -65 -32 -19 -61 -34 -64 -34 -3 0
-27 14 -53 30 -57 36 -200 93 -213 85 -6 -4 -10 -15 -10 -26 0 -15 16 -28 63
-49 34 -16 81 -42 104 -58 l43 -28 -118 -89 c-64 -49 -124 -89 -132 -88 -8 0
-41 10 -72 22 -72 26 -121 28 -116 4 2 -11 18 -20 43 -25 31 -6 105 -37 105
-44 0 -1 -44 -46 -97 -101 l-98 -100 -44 19 c-23 11 -68 22 -98 25 -50 6 -55
4 -51 -13 2 -11 13 -20 28 -22 14 -2 50 -15 81 -29 l56 -24 -44 -77 c-39 -70
-80 -177 -97 -258 -8 -35 14 -67 42 -62 20 4 33 28 72 133 16 44 46 106 66
138 l37 59 24 -25 c14 -14 44 -62 68 -108 35 -70 46 -84 66 -84 15 0 25 7 27
19 5 25 -59 152 -102 203 -20 22 -36 45 -36 50 0 9 172 183 181 183 3 0 28
-27 54 -60 48 -60 71 -73 81 -45 7 16 -26 76 -64 118 -25 26 -25 27 -6 42 28
22 223 145 229 145 3 0 18 -9 33 -20 17 -13 35 -18 45 -14 19 7 23 39 7 49
-23 14 -6 34 75 89 46 32 96 71 110 88 23 27 24 33 12 52 -20 30 -34 29 -110
-5z"
                />
                <path
                  d="M1698 3303 c-97 -103 -175 -239 -221 -388 -31 -101 -35 -121 -46
-228 -16 -167 14 -324 85 -443 45 -76 83 -115 163 -166 54 -36 74 -43 127 -46
77 -5 148 24 219 89 236 217 277 548 111 877 -80 158 -222 332 -270 332 -24 0
-56 -32 -56 -55 0 -6 39 -62 86 -125 92 -122 169 -270 200 -380 41 -151 16
-333 -64 -455 -74 -113 -132 -155 -213 -155 -143 0 -288 234 -289 466 0 188
85 433 206 593 27 35 55 72 62 82 17 22 0 59 -27 59 -10 0 -43 -26 -73 -57z"
                />
                <path
                  d="M3320 3203 c-192 -209 -291 -460 -250 -634 74 -314 481 -459 709
-253 69 62 86 103 86 214 0 116 -24 198 -90 315 -86 152 -265 370 -313 382
-15 3 -33 15 -40 25 -7 10 -19 18 -27 18 -7 0 -41 -30 -75 -67z m175 -163
c216 -256 295 -434 255 -575 -52 -185 -394 -177 -519 12 -84 127 -80 264 15
458 33 66 142 231 149 223 1 -2 46 -55 100 -118z"
                />
                <path
                  d="M2702 2398 c-7 -7 -12 -22 -12 -34 0 -18 18 -33 81 -71 151 -89 219
-170 219 -262 0 -47 -18 -129 -30 -136 -7 -4 -115 135 -189 243 -34 49 -65 44
-95 -15 -34 -69 -81 -124 -132 -157 -25 -16 -46 -27 -48 -25 -2 2 5 44 15 92
19 97 71 217 120 278 35 44 36 82 3 87 -15 2 -35 -12 -68 -50 -89 -101 -148
-247 -166 -408 -17 -149 10 -172 122 -102 105 65 142 96 173 144 17 26 33 47
36 47 9 1 133 -158 170 -217 48 -78 83 -79 116 -3 113 260 44 439 -219 572
-64 32 -78 35 -96 17z"
                />
                <path
                  d="M3851 1621 c-6 -11 -11 -76 -11 -149 0 -161 -14 -216 -69 -265 -125
-112 -278 -37 -336 165 -9 32 -22 61 -29 65 -7 5 -18 18 -25 31 -15 29 -49 29
-60 -1 -5 -12 -14 -65 -20 -117 -20 -158 -40 -207 -105 -258 -80 -62 -171 11
-227 183 -14 40 -29 70 -39 72 -9 2 -20 14 -25 26 -6 14 -19 22 -34 22 -21 0
-27 -11 -60 -106 -56 -163 -101 -209 -204 -209 -41 0 -63 6 -98 28 -52 34 -68
51 -106 117 -24 41 -66 147 -79 203 -2 6 -10 12 -19 12 -10 0 -34 -39 -69
-112 -64 -137 -112 -188 -176 -188 -90 0 -181 104 -188 215 -6 94 27 142 121
176 35 12 48 31 28 43 -17 11 -106 -24 -144 -55 -53 -44 -77 -96 -77 -167 0
-94 26 -158 90 -224 126 -129 282 -97 377 78 l28 52 29 -60 c59 -121 161 -201
273 -214 121 -15 232 70 288 219 l18 49 22 -59 c40 -112 100 -182 172 -202 47
-14 59 -13 107 0 79 22 157 121 186 238 l12 44 28 -50 c119 -208 373 -203 474
10 38 80 53 181 39 262 -19 113 -65 176 -92 126z"
                />
                <path
                  d="M3550 843 c-56 -9 -151 -46 -194 -75 -50 -33 -95 -91 -128 -165 l-21
-47 -18 35 c-26 52 -101 116 -150 129 -92 25 -178 -7 -272 -102 -33 -32 -61
-58 -62 -56 -1 2 -9 50 -18 107 -9 58 -22 108 -29 112 -22 14 -116 22 -173 14
-111 -13 -224 -95 -277 -200 l-21 -39 -19 52 c-21 56 -103 154 -149 178 -48
24 -112 28 -152 9 -64 -30 -119 -128 -153 -274 -14 -61 -14 -67 3 -78 13 -10
14 -16 5 -25 -7 -7 -12 -27 -12 -45 0 -62 82 -128 232 -187 232 -91 697 -186
911 -186 365 0 701 145 882 381 51 65 56 92 21 114 -28 19 -55 10 -81 -28 -33
-48 -143 -151 -206 -193 -246 -163 -604 -206 -1014 -121 -450 94 -675 194
-675 299 0 14 -5 18 -16 14 -18 -7 -15 7 23 99 45 108 95 157 159 157 50 0 82
-35 141 -152 l48 -95 45 3 c33 2 49 9 60 25 110 160 162 198 271 201 l73 1 12
-75 c6 -41 19 -91 28 -110 30 -62 47 -90 56 -90 5 0 49 40 97 89 75 75 97 91
144 106 36 11 67 15 85 11 42 -11 95 -74 127 -152 46 -110 61 -127 95 -106 6
5 19 34 27 65 43 166 149 274 286 293 63 9 82 -5 108 -75 23 -64 61 -104 95
-99 41 6 26 102 -32 211 -37 68 -75 85 -162 70z"
                />
              </g>
            </svg> */}

            {/* <svg
              className="MyLogo"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="white"
                d="M226.063 24.188L222 58.718l32.688 25.626 23.75-50.03c-18.145-9.142-35.272-9.715-52.375-10.127zM166.75 61.093c-24.248 2.93-42.95 15.897-58.875 33.812h.03l96.407 62.594-37.562-96.406zM300.875 88.75l18.656 85.5-91.092-23.875L269 233.938l-140.594-89.375c-3.966 4.875-7.7 9.97-11.22 15.28-28.794 43.465-42.052 101.104-42.905 156.72 40.122 19.627 63.843 40.14 74.032 61.562 9.157 19.25 5.475 39.06-6.343 54.25 25.214 23.382 68.638 37.63 113.155 38.344 44.813.717 89.973-12.083 118.625-38.783-6.033-6.937-10.412-14.346-12.5-22.437-2.8-10.85-.952-22.554 5.188-33.28 11.757-20.542 37.646-39.263 80.062-59.69-.88-52.663-13.855-110.235-42.5-154.405-23.4-36.085-56.548-63.412-103.125-73.375zm-119.28 168.844c27.75 0 50.25 22.5 50.25 50.25s-22.5 50.25-50.25 50.25c-27.752 0-50.25-22.5-50.25-50.25s22.498-50.25 50.25-50.25zm149.468 0c27.75 0 50.25 22.5 50.25 50.25s-22.5 50.25-50.25 50.25-50.25-22.5-50.25-50.25 22.5-50.25 50.25-50.25zm-74.75 86.125c13.74 29.005 24.652 58.023 30.062 87.03-14.777 12.895-41.26 14.766-60.125 0 7.315-29.007 16.12-58.025 30.063-87.03z"
              />
            </svg> */}

            <svg
              className="MyLogo"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="white"
                d="M187.406 22.22l-41.562 41.843 62.875 29.843-8 16.875-68.845-32.655L59.97 150.53l33.31 96.97 56.876-7.156 10.53-42.47 18.126 4.47-45.843 185.25 55.31-49.656 10-9 4.94 12.5 14.81 37.53 31.25-41.624 8.126-10.844 7.25 11.47 30.406 48.217 22.657-46.75 5.092-10.5 9.125 7.25 62.532 49.782-62.814-182.22 17.656-6.094 12.782 37.063 60.562-.94 26.47-101.874-72.72-62.344-70.125 38.844-9.06-16.375 64.03-35.468-29.75-25.53-144.094-8.813zm190.688 85.5l13.28 67.218-107.28-16.25 94-50.97zm-246.188.936L229.97 160l-116.25 13.47 18.186-64.814zm123.188 122.5l55.844 64.75-36.25 12.875-17.407-42.655-15.374 43.344-35.344-13.564 48.532-64.75zm74.344 126.938L304.53 409.47l-7.342 15.155-8.97-14.25-32.124-50.97-33.156 44.19-10.063 13.342-6.125-15.53-15.97-40.594-30.436 27.312 25.53 66.406 61.407 35.22 98.814-39.563 16.937-65.343-33.592-26.75z"
              />
            </svg>

            {/* <svg
              className="MyLogo"
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <polygon
                  class="st0"
                  points="312.375,122.563 358.938,78.438 358.938,0 307.469,0 256,51.469 204.531,0 153.063,0 153.063,78.438 199.625,122.563"
                  fill="white"
                />
                <polygon
                  class="st0"
                  points="244.641,383.328 256,383.328 267.344,383.328 256,369.125"
                  fill="white"
                />
                <path
                  class="st0"
                  d="M225,322.594c-11.813-2.016-23.313,7.703-25.734,21.719c-2.391,14.016,5.234,27,17.063,29.031c11.813,2.016,23.328-7.703,25.734-21.719S236.813,324.625,225,322.594z"
                  fill="white"
                />
                <path
                  class="st0"
                  d="M381.938,239.641c-32.891-49-71.031-89.859-71.031-89.859H201.078c0,0-38.141,40.859-71.047,89.859c-22.016,32.797-36.078,67.703-36.078,110.313C93.953,439.438,166.5,512,256,512c89.484,0,162.047-72.563,162.047-162.047C418.047,307.344,403.969,272.438,381.938,239.641z M336.75,379.813c-7.406,18.594-29.219,27.813-42.281,31.766v15.688c0,2.828-2.281,5.141-5.125,5.141h-12.531c-2.844,0-5.125-2.313-5.125-5.141v-13.141h-4.281v13.141c0,2.828-2.313,5.141-5.141,5.141h-12.547c-2.828,0-5.125-2.313-5.125-5.141v-13.141h-4.281v13.141c0,2.828-2.297,5.141-5.125,5.141h-12.531c-2.844,0-5.141-2.313-5.141-5.141v-15.688c-13.078-3.969-34.875-13.172-42.297-31.766c-5.375-13.531-3.281-31.344,4.797-65.656c8.078-34.328,31.547-53.5,75.984-53.5c44.406,0,67.891,19.172,75.969,53.5C340.031,348.469,342.156,366.281,336.75,379.813z"
                  fill="white"
                />
                <path
                  class="st0"
                  d="M287,322.594c-11.813,2.031-19.469,15.016-17.063,29.031c2.391,14.016,13.906,23.734,25.719,21.719c11.828-2.031,19.453-15.016,17.063-29.031C310.313,330.297,298.813,320.578,287,322.594z"
                  fill="white"
                />
              </g>
            </svg> */}

            <h1 className="app-name">Taskopia</h1>
          </div>

          <ul className="nav-links">
            <Link to="/home" className="links">
              <li >Home</li>
            </Link>
            <Link to="/about" className="links">
              {" "}
              <li >About</li>
            </Link>
            <Link to="/contact" className="links">
              {" "}
              <li >Contact</li>
            </Link>
            <Link to="/login" className="links">
            <li className=" mob-log-btn">
              <a>login</a>
            </li>
            </Link>
          </ul>

          <div
            className="mobile-navbar-btn"
            onClick={() => setShowMobMenu(!showMobMenu)}
          >
            <svg
              className="open-menu"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
              width="26px"
              height="26px"
            >
              <path
                d="M 0 4 L 0 6 L 26 6 L 26 4 Z M 0 12 L 0 14 L 26 14 L 26 12 Z M 0 20 L 0 22 L 26 22 L 26 20 Z"
                fill="#ffffff"
              />
            </svg>

            <svg
              className="close-menu"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="28px"
              height="28px"
            >
              <path
                d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
                fill="#ffffff"
              />
            </svg>
          </div>

          {isAuthenticated ? (
            <div>
              <p>Hi, Biolgical_Ayush</p>
              <img src="" alt="" srcset="" />
            </div>
          ) : (
            <div className="nav-cta">
              <Link to="/login" className="nav-btn log-btn">
                <button className="btn-log">Login</button>
              </Link>
              <Link to="/signup" className="nav-btn sign-btn">
                <button className="btn-sign">Signup</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
