import React from 'react';

export const FaceBookImage = (props) => {
  return (
    <div>
      <svg
        width="14"
        height="24"
        viewBox="0 0 14 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.625 4.5H8.875C8.18463 4.5 7.625 5.05965 7.625 5.75V9.5H12.625C12.7671 9.49685 12.902 9.563 12.9865 9.67737C13.071 9.79175 13.0948 9.94 13.05 10.075L12.125 12.825C12.0398 13.0774 11.8039 13.248 11.5375 13.25H7.625V22.625C7.625 22.9701 7.34513 23.25 7 23.25H3.875C3.52982 23.25 3.25 22.9701 3.25 22.625V13.25H1.375C1.02983 13.25 0.75 12.9701 0.75 12.625V10.125C0.75 9.77987 1.02983 9.5 1.375 9.5H3.25V5.75C3.25 2.98857 5.48863 0.75 8.25 0.75H12.625C12.9701 0.75 13.25 1.02983 13.25 1.375V3.875C13.25 4.22018 12.9701 4.5 12.625 4.5Z"
          fill={props.color}
        />
      </svg>
    </div>
  );
};

export const InstagramImage = (props) => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17 0.75H7C3.54822 0.75 0.75 3.54822 0.75 7V17C0.75 20.4517 3.54822 23.25 7 23.25H17C20.4517 23.25 23.25 20.4517 23.25 17V7C23.25 3.54822 20.4517 0.75 17 0.75ZM21.0625 17C21.0556 19.2407 19.2407 21.0556 17 21.0625H7C4.75919 21.0556 2.94436 19.2407 2.9375 17V7C2.94436 4.75919 4.75919 2.94436 7 2.9375H17C19.2407 2.94436 21.0556 4.75919 21.0625 7V17ZM17.9375 7.3125C18.6279 7.3125 19.1875 6.75285 19.1875 6.0625C19.1875 5.37215 18.6279 4.8125 17.9375 4.8125C17.2471 4.8125 16.6875 5.37215 16.6875 6.0625C16.6875 6.75285 17.2471 7.3125 17.9375 7.3125ZM12 6.375C8.8934 6.375 6.375 8.8934 6.375 12C6.375 15.1066 8.8934 17.625 12 17.625C15.1066 17.625 17.625 15.1066 17.625 12C17.6284 10.5071 17.0368 9.07446 15.9811 8.01885C14.9255 6.96324 13.4929 6.37168 12 6.375ZM8.5625 12C8.5625 13.8985 10.1015 15.4375 12 15.4375C13.8985 15.4375 15.4375 13.8985 15.4375 12C15.4375 10.1015 13.8985 8.5625 12 8.5625C10.1015 8.5625 8.5625 10.1015 8.5625 12Z"
          fill={props.color}
        />
      </svg>
    </div>
  );
};

export const TwitterImage = (props) => {
  return (
    <div>
      <svg
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.2161 3.39675C22.6356 4.17115 21.9338 4.84667 21.138 5.3972C21.138 5.59949 21.138 5.80178 21.138 6.01532C21.1443 9.68888 19.677 13.2114 17.0648 15.7931C14.4526 18.3749 10.9141 19.7999 7.24266 19.7486C5.12008 19.7558 3.02468 19.2711 1.12062 18.3326C1.01794 18.2878 0.951731 18.1863 0.952119 18.0741V17.9505C0.952119 17.7891 1.08288 17.6584 1.24418 17.6584C3.33062 17.5895 5.34262 16.8661 6.99552 15.5905C5.10701 15.5524 3.40783 14.4336 2.62584 12.7134C2.58636 12.6195 2.59864 12.5116 2.65831 12.429C2.71796 12.3464 2.81634 12.3009 2.91791 12.3089C3.49187 12.3665 4.07157 12.3131 4.62534 12.1515C2.54058 11.7188 0.974107 9.988 0.749919 7.86963C0.741957 7.768 0.787494 7.66963 0.870094 7.60988C0.952681 7.55025 1.06039 7.53788 1.15432 7.5775C1.71377 7.82438 2.31771 7.95438 2.92914 7.9595C1.10239 6.76058 0.313356 4.48006 1.00828 2.40778C1.08002 2.20641 1.25236 2.05765 1.46197 2.01618C1.67157 1.97469 1.88754 2.0466 2.03049 2.20549C4.49558 4.82906 7.88264 6.39245 11.4775 6.56599C11.3855 6.19857 11.3402 5.82095 11.3427 5.44215C11.3763 3.4559 12.6053 1.68651 14.4543 0.96234C16.3032 0.238177 18.4062 0.70254 19.7788 2.13805C20.7143 1.95982 21.6188 1.64557 22.4635 1.20526C22.5253 1.16664 22.6038 1.16664 22.6657 1.20526C22.7043 1.26717 22.7043 1.34565 22.6657 1.40755C22.2566 2.3444 21.5655 3.13015 20.6887 3.65524C21.4565 3.5662 22.2107 3.38509 22.9353 3.1158C22.9963 3.07428 23.0765 3.07428 23.1375 3.1158C23.1886 3.13918 23.2268 3.18389 23.242 3.23803C23.2571 3.29216 23.2476 3.35023 23.2161 3.39675Z"
          fill={props.color}
        />
      </svg>
    </div>
  );
};

export const LinkedInImage = (props) => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.25 0.75H20.75C22.1307 0.75 23.25 1.86929 23.25 3.25V20.75C23.25 22.1307 22.1307 23.25 20.75 23.25H3.25C1.86929 23.25 0.75 22.1307 0.75 20.75V3.25C0.75 1.86929 1.86929 0.75 3.25 0.75ZM7 19.5C7.34518 19.5 7.625 19.2201 7.625 18.875V10.125C7.625 9.77987 7.34518 9.5 7 9.5H5.125C4.77982 9.5 4.5 9.77987 4.5 10.125V18.875C4.5 19.2201 4.77982 19.5 5.125 19.5H7ZM6.0625 8.25C5.02696 8.25 4.1875 7.41054 4.1875 6.375C4.1875 5.33946 5.02696 4.5 6.0625 4.5C7.09804 4.5 7.9375 5.33946 7.9375 6.375C7.9375 7.41054 7.09804 8.25 6.0625 8.25ZM18.875 19.5C19.2201 19.5 19.5 19.2201 19.5 18.875V13.125C19.5406 11.1385 18.072 9.44315 16.1 9.2C14.7212 9.07406 13.3854 9.718 12.625 10.875V10.125C12.625 9.77987 12.3451 9.5 12 9.5H10.125C9.77987 9.5 9.5 9.77987 9.5 10.125V18.875C9.5 19.2201 9.77987 19.5 10.125 19.5H12C12.3451 19.5 12.625 19.2201 12.625 18.875V14.1875C12.625 13.152 13.4645 12.3125 14.5 12.3125C15.5355 12.3125 16.375 13.152 16.375 14.1875V18.875C16.375 19.2201 16.6549 19.5 17 19.5H18.875Z"
          fill={props.color}
        />
      </svg>
    </div>
  );
};
