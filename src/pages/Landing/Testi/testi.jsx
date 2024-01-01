import React from "react";

import "./testi.css";

import Carousel from "../../../components/carousel";

const Testi = () => {
  // below is the dataset for the carousel component

  const dataset = [
    {
      name: "John Doe",
      pic: "src\assets\testi-1.jpg",
      testi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.",
    },
    {
      name: "John Doe",
      pic: "src/assets/testi-2.jpg",
      testi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.",
    },
    {
      name: "John Doe",
      pic: "src/assets/testi-3.jpg",

      testi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.",
    },
    {
      name: "John Doe",
      pic: "src/assets/testi-4.jpg",
      testi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.",
    },
  ];

  return (
    <>
      {/* <svg
          width="84"
          height="64"
          viewBox="0 0 84 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M83.683 38.8483C84.1871 43.0493 83.851 46.242 82.6747 48.4265C81.4985 50.611 79.9861 53.0475 78.1377 55.7361C76.4573 56.2402 75.5331 56.7444 75.3651 57.2485C75.197 57.7526 74.861 58.0887 74.3568 58.2567C72.8445 59.2649 71.0801 60.0211 69.0636 60.5252C67.2152 60.8613 65.1988 60.9453 63.0143 60.7773C60.9978 60.6092 59.0654 60.1051 57.217 59.2649C55.3685 58.4247 54.1083 57.3325 53.4361 55.9882C52.5959 56.1562 52.0078 56.1562 51.6717 55.9882C51.3356 55.6521 50.9155 55.4001 50.4114 55.232C50.4114 53.5516 49.5712 52.7114 47.8909 52.7114C48.0589 51.0311 47.8068 50.0228 47.1347 49.6868C46.6306 49.3507 46.2105 48.9306 45.8744 48.4265C46.3785 47.7543 46.4625 47.1662 46.1264 46.6621C45.7904 45.9899 45.7904 45.2337 46.1264 44.3936C45.7904 43.7214 45.3703 43.3013 44.8662 43.1333C44.5301 42.9652 44.194 42.7132 43.8579 42.3771C43.3538 41.2008 43.5219 40.2766 44.362 39.6045C45.2022 38.9323 45.5383 37.9241 45.3703 36.5798C45.0342 36.2437 44.4461 35.9917 43.6059 35.8236C42.9337 35.6556 42.3456 35.4035 41.8415 35.0674C42.1776 34.5633 42.0935 34.0592 41.5894 33.5551C41.2533 33.051 40.9173 32.6309 40.5812 32.2948C40.9173 31.1185 41.2533 30.3624 41.5894 30.0263C41.9255 29.6902 42.0935 29.2701 42.0935 28.766C45.6223 24.7331 48.479 21.2043 50.6635 18.1796C53.016 14.9869 55.6206 11.9622 58.4772 9.10556C60.1576 8.09733 61.67 7.42518 63.0143 7.08911C64.5266 6.75303 65.7029 6.08088 66.5431 5.07265C68.7276 4.90461 70.9961 4.48452 73.3486 3.81236C75.8692 2.97217 78.0537 3.39227 79.9021 5.07265C79.9021 5.91284 79.2299 6.58499 77.8856 7.08911C76.5413 7.42518 75.6171 7.17313 75.113 6.33293C74.4409 7.5092 73.7687 8.18135 73.0966 8.34939C72.5924 8.51743 72.2564 8.85351 72.0883 9.35762C66.7111 10.5339 62.6782 13.3065 59.9896 17.6755C57.301 22.0445 56.8809 27.0016 58.7293 32.5469C60.0736 33.051 61.2499 32.967 62.2581 32.2948C63.4344 31.4546 64.5266 31.1186 65.5348 31.2866C67.7193 31.7907 69.2317 31.8747 70.0719 31.5386C70.9121 31.2026 71.5002 31.4546 71.8363 32.2948C73.3486 31.9587 74.5249 32.1268 75.3651 32.7989C76.2053 33.4711 77.2135 33.9752 78.3898 34.3113C80.2382 35.4875 81.3304 36.4958 81.6665 37.336C82.1706 38.0081 82.8428 38.5122 83.683 38.8483ZM41.8415 44.3936C42.1776 45.2337 42.1776 46.326 41.8415 47.6703C41.5054 49.0146 40.6652 49.8548 39.3209 50.1909C38.6488 52.3754 38.0606 54.3078 37.5565 55.9882C37.0524 57.5005 36.3802 59.0129 35.5401 60.5252C34.1957 60.8613 33.0195 61.3654 32.0113 62.0376C31.1711 62.7097 30.2469 63.2138 29.2386 63.5499C26.382 64.3901 23.6934 64.054 21.1728 62.5417C18.6522 61.0293 16.4677 59.3489 14.6193 57.5005C11.7627 54.6439 9.15807 51.6192 6.80554 48.4265C4.45301 45.0657 2.77263 41.7049 1.7644 38.3442C1.59636 37.8401 1.59636 37.42 1.7644 37.0839C1.93244 36.7478 2.01646 36.2437 2.01646 35.5716C1.00823 34.7314 0.504114 33.9752 0.504114 33.303C0.504114 32.4629 0.336076 31.7907 0 31.2866C1.17627 29.9423 2.18449 28.4299 3.02469 26.7496C3.86488 25.0692 4.70507 23.3888 5.54526 21.7084C6.38545 20.028 7.30966 18.4317 8.31788 16.9193C9.32611 15.407 10.5864 14.1467 12.0987 13.1385C12.4348 11.7942 12.9389 10.87 13.6111 10.3658C14.2832 9.6937 14.8714 8.93753 15.3755 8.09733C17.2239 6.92107 18.9043 5.57676 20.4166 4.06442C21.929 2.55208 23.8614 1.37581 26.2139 0.535621C27.5582 0.367583 28.9866 0.199545 30.4989 0.0315071C32.1793 -0.136531 33.4396 0.367583 34.2798 1.54385C34.2798 2.38404 34.1117 3.14021 33.7757 3.81236C33.4396 4.31648 33.1035 4.90461 32.7674 5.57676C30.4149 5.91284 28.0624 6.50097 25.7098 7.34116C23.3573 8.01332 21.7609 9.35762 20.9207 11.3741C20.2486 11.206 19.8285 11.3741 19.6605 11.8782C19.4924 12.3823 19.1563 12.8024 18.6522 13.1385C18.1481 14.4828 17.728 15.9111 17.3919 17.4234C17.0559 18.9358 16.4677 20.1961 15.6275 21.2043C15.7956 22.5486 15.7956 23.8929 15.6275 25.2372C15.6275 26.4135 15.2915 27.5057 14.6193 28.514C15.2915 28.682 15.5435 29.1021 15.3755 29.7742C15.2074 30.2784 15.0394 30.7825 14.8714 31.2866C15.0394 32.1268 15.3755 32.7989 15.8796 33.303C16.5517 33.6391 17.0559 34.1432 17.3919 34.8154C18.7362 33.4711 20.1646 32.7149 21.6769 32.5469C23.3573 32.3788 24.9537 32.1268 26.466 31.7907C28.1464 32.6309 30.3309 33.7231 33.0195 35.0674C35.8761 36.2437 37.8086 37.504 38.8168 38.8483C39.4889 40.5287 40.0771 41.7049 40.5812 42.3771C41.2533 42.8812 41.6734 43.5534 41.8415 44.3936ZM52.932 30.2784C51.9238 29.1021 51.3356 28.682 51.1676 29.0181C50.9996 29.3542 50.5795 29.5222 49.9073 29.5222C50.9155 30.8665 51.5877 31.4546 51.9238 31.2866C52.2598 30.9505 52.5959 30.6144 52.932 30.2784ZM71.3322 36.8318C69.4837 35.9917 67.9714 36.1597 66.7951 37.336C65.7869 38.3442 64.3586 38.8483 62.5102 38.8483C61.1659 39.8565 59.7375 40.7807 58.2252 41.6209C56.7128 42.4611 55.0325 43.3013 53.184 44.1415C53.8562 45.4858 54.2763 46.0739 54.4443 45.9059C54.7804 45.7379 55.2005 45.7379 55.7046 45.9059C56.2087 44.5616 57.1329 43.6374 58.4772 43.1333C59.8216 42.6292 61.4179 42.2931 63.2663 42.125C63.6024 40.7807 64.7787 39.9405 66.7951 39.6045C68.9796 39.1004 70.492 38.1761 71.3322 36.8318ZM78.6418 40.1086C76.9614 39.6045 76.0372 39.5205 75.8692 39.8565C75.7011 40.0246 75.4491 40.1926 75.113 40.3606C73.4326 40.8648 72.0883 41.5369 71.0801 42.3771C70.2399 43.2173 69.3997 43.8054 68.5595 44.1415C68.3915 44.8137 67.7193 45.4018 66.5431 45.9059C65.3668 46.242 64.1065 46.494 62.7622 46.6621C64.4426 48.0064 65.8709 48.1744 67.0472 47.1662C68.3915 46.158 69.5678 45.6538 70.576 45.6538C70.2399 46.326 69.8198 46.8301 69.3157 47.1662C68.8116 47.3342 68.3915 47.6703 68.0554 48.1744C66.8792 47.6703 66.039 47.9224 65.5348 48.9306C65.0307 49.7708 64.1065 50.1909 62.7622 50.1909C60.7458 49.1826 59.5695 49.2667 59.2334 50.4429C59.5695 50.779 59.9056 50.695 60.2416 50.1909C60.7458 49.6868 61.3339 49.5187 62.006 49.6868C61.3339 50.695 60.7458 51.5352 60.2416 52.2073C59.9056 52.8795 59.3174 53.2996 58.4772 53.4676C59.3174 55.4841 60.6617 56.4923 62.5102 56.4923C64.3586 56.4923 66.4591 56.6603 68.8116 56.9964C69.9879 55.9882 71.3322 54.98 72.8445 53.9717C74.5249 52.9635 75.8692 51.7872 76.8774 50.4429C78.0537 49.0986 78.8939 47.5863 79.398 45.9059C79.9021 44.2255 79.65 42.2931 78.6418 40.1086ZM54.6964 37.336C53.184 35.9917 52.0918 35.6556 51.4196 36.3277C50.9155 36.8318 50.2434 37.2519 49.4032 37.588C51.0836 38.5962 52.1758 38.9323 52.6799 38.5962C53.184 38.0921 53.8562 37.672 54.6964 37.336ZM67.2992 41.873C66.6271 41.7049 66.039 41.873 65.5348 42.3771C65.1988 42.7132 64.6106 42.7132 63.7704 42.3771C62.5942 44.2255 60.8298 45.4018 58.4772 45.9059C56.2928 46.41 54.4443 47.3342 52.932 48.6785C55.7886 49.3507 58.1412 48.8466 59.9896 47.1662C61.838 45.4858 63.9385 44.4776 66.291 44.1415L67.2992 41.873ZM56.2087 39.3524C54.6964 39.0163 53.3521 39.3524 52.1758 40.3606C51.1676 41.3689 50.6635 42.2931 50.6635 43.1333C51.6717 42.7972 52.5959 42.2931 53.4361 41.6209C54.4443 40.9488 55.3685 40.1926 56.2087 39.3524ZM10.3343 23.7249C9.66219 23.7249 8.99004 24.061 8.31788 24.7331C7.81377 25.4053 7.39368 26.0774 7.0576 26.7496C6.88956 27.4217 6.88956 28.0939 7.0576 28.766C7.39368 29.4382 8.14985 29.7742 9.32611 29.7742C9.66219 28.766 9.91425 27.8418 10.0823 27.0016C10.2503 26.1614 10.3343 25.0692 10.3343 23.7249ZM37.5565 47.9224C37.7245 46.5781 37.4725 45.4858 36.8003 44.6456C36.2962 43.6374 35.8761 42.7132 35.5401 41.873C33.6916 41.2008 32.1793 40.3606 31.003 39.3524C29.9948 38.1762 28.8185 37.1679 27.4742 36.3277C25.9619 36.4958 24.7856 36.6638 23.9454 36.8318C23.1052 36.8318 22.5171 37.0839 22.181 37.588C23.0212 37.7561 23.6934 37.7561 24.1975 37.588C24.7016 37.2519 25.2057 36.9999 25.7098 36.8318C26.0459 39.1844 25.3737 40.7807 23.6934 41.6209C22.013 42.2931 20.7527 43.4693 19.9125 45.1497C21.929 44.8137 23.6093 44.2255 24.9537 43.3853C26.298 42.3771 28.0624 42.041 30.2469 42.3771C31.087 43.3853 31.3391 44.3936 31.003 45.4018C30.835 46.41 30.4149 47.3342 29.7427 48.1744C29.0706 48.8466 28.3144 49.4347 27.4742 49.9388C26.634 50.4429 25.9619 50.863 25.4578 51.1991C25.2897 52.5434 25.0377 53.4676 24.7016 53.9717C24.3655 54.4758 23.9454 54.98 23.4413 55.4841C23.9454 57.5005 24.1975 58.6768 24.1975 59.0129C25.0377 59.0129 25.7938 59.0969 26.466 59.2649C27.3062 59.433 28.2304 59.3489 29.2386 59.0129C29.9108 58.8448 30.751 58.2567 31.7592 57.2485C32.7674 56.2402 33.6916 55.148 34.5318 53.9717C35.372 52.6274 36.0442 51.4512 36.5483 50.4429C37.2204 49.2667 37.5565 48.4265 37.5565 47.9224ZM9.83023 31.2866C8.99004 31.1186 8.31788 31.2026 7.81377 31.5386C7.47769 31.8747 7.0576 32.1268 6.55348 32.2948C6.72152 33.135 6.55348 33.8072 6.04937 34.3113C5.71329 34.8154 5.71329 35.4875 6.04937 36.3277C7.39367 34.9834 8.65396 33.303 9.83023 31.2866ZM29.2386 45.9059C27.5582 44.8977 26.298 44.7296 25.4578 45.4018C24.6176 45.9059 23.6093 46.326 22.4331 46.6621C20.4166 47.5023 18.9883 48.2584 18.1481 48.9306C17.476 49.6027 16.2997 49.8548 14.6193 49.6868C15.1234 50.863 15.7956 51.8713 16.6358 52.7114C17.476 53.3836 18.0641 54.3918 18.4002 55.7361C21.0888 54.0557 23.1052 52.3754 24.4495 50.695C25.7938 48.8466 27.3902 47.2502 29.2386 45.9059ZM12.0987 37.588C10.9225 37.588 10.1663 37.8401 9.83023 38.3442C9.49415 38.8483 8.90602 39.2684 8.06583 39.6045C9.24209 40.7807 10.0823 40.9488 10.5864 40.1086C11.2586 39.2684 11.7627 38.4282 12.0987 37.588ZM17.3919 42.6292C16.5517 42.7972 15.6275 43.1333 14.6193 43.6374C13.6111 44.1415 12.7709 44.7296 12.0987 45.4018C11.5946 45.9059 11.2586 46.494 11.0905 47.1662C11.0905 47.8383 11.7627 48.5105 13.107 49.1826C13.275 47.6703 13.9472 46.5781 15.1234 45.9059C16.4677 45.0657 17.2239 43.9735 17.3919 42.6292ZM77.6336 44.1415C77.6336 45.1497 77.2975 45.8219 76.6254 46.158C76.1212 46.494 75.7012 47.0822 75.3651 47.9224C73.3486 48.7625 72.3404 48.8466 72.3404 48.1744C73.3486 46.6621 74.1888 45.6538 74.861 45.1497C75.7012 44.6456 76.2053 43.8894 76.3733 42.8812L77.6336 44.1415ZM74.1048 45.4018C72.5924 45.9059 71.6682 45.9899 71.3322 45.6538C72.3404 45.1497 73.0966 44.8977 73.6007 44.8977C74.1048 44.7296 74.2728 44.2255 74.1048 43.3853V45.4018ZM72.0883 49.4347C72.4244 50.2749 72.1724 51.0311 71.3322 51.7032C70.66 52.2073 70.1559 52.7955 69.8198 53.4676C70.3239 52.2913 70.576 51.4512 70.576 50.947C70.744 50.4429 70.66 50.0228 70.3239 49.6868L72.0883 49.4347Z"
            fill="white"
          />
        </svg> */}

      <div className="testi-title-wrapper">
        <div
          className="testi-title"
          // data-aos="fade-down"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          // data-aos-easing="ease-in-out"
        >
          <h>TESTIMONIALS</h>
        </div>
      </div>

      <Carousel dataset={dataset} />
    </>
  );
};

export default Testi;
