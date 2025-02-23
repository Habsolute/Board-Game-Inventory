import { IconType } from "utils/types/iconType";

export const GenreIcon = ({ className, color }: IconType) => {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M9 6C9 6.39397 9.0776 6.78407 9.22836 7.14805C9.37913 7.51203 9.6001 7.84274 9.87868 8.12132C10.1573 8.3999 10.488 8.62087 10.852 8.77164C11.2159 8.9224 11.606 9 12 9C12.394 9 12.7841 8.9224 13.1481 8.77164C13.512 8.62087 13.8427 8.3999 14.1213 8.12132C14.3999 7.84274 14.6209 7.51203 14.7716 7.14805C14.9224 6.78407 15 6.39396 15 6C15 5.60603 14.9224 5.21593 14.7716 4.85195C14.6209 4.48797 14.3999 4.15725 14.1213 3.87868C13.8427 3.6001 13.512 3.37912 13.148 3.22836C12.7841 3.0776 12.394 3 12 3C11.606 3 11.2159 3.0776 10.8519 3.22836C10.488 3.37913 10.1573 3.6001 9.87868 3.87868C9.6001 4.15726 9.37912 4.48797 9.22836 4.85195C9.0776 5.21593 9 5.60604 9 6L9 6Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M4.43781 13.9015C4.09663 14.0985 3.79758 14.3607 3.55775 14.6733C3.31792 14.9858 3.142 15.3426 3.04004 15.7231C2.93807 16.1037 2.91206 16.5006 2.96348 16.8912C3.0149 17.2818 3.14275 17.6584 3.33974 17.9996C3.53672 18.3408 3.79897 18.6398 4.11153 18.8796C4.42408 19.1195 4.78081 19.2954 5.16136 19.3974C5.5419 19.4993 5.9388 19.5253 6.32939 19.4739C6.71999 19.4225 7.09663 19.2946 7.43781 19.0977C7.779 18.9007 8.07804 18.6384 8.31787 18.3259C8.5577 18.0133 8.73362 17.6566 8.83559 17.276C8.93756 16.8955 8.96357 16.4986 8.91215 16.108C8.86072 15.7174 8.73287 15.3408 8.53589 14.9996C8.33891 14.6584 8.07665 14.3594 7.7641 14.1195C7.45154 13.8797 7.09481 13.7038 6.71427 13.6018C6.33373 13.4998 5.93683 13.4738 5.54623 13.5252C5.15564 13.5767 4.779 13.7045 4.43781 13.9015L4.43781 13.9015Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M19.5622 13.9015C19.9034 14.0985 20.2024 14.3607 20.4422 14.6733C20.6821 14.9859 20.858 15.3426 20.96 15.7231C21.0619 16.1037 21.0879 16.5006 21.0365 16.8912C20.9851 17.2818 20.8572 17.6584 20.6603 17.9996C20.4633 18.3408 20.201 18.6398 19.8885 18.8796C19.5759 19.1195 19.2192 19.2954 18.8386 19.3974C18.4581 19.4993 18.0612 19.5253 17.6706 19.4739C17.28 19.4225 16.9034 19.2946 16.5622 19.0977C16.221 18.9007 15.922 18.6384 15.6821 18.3259C15.4423 18.0133 15.2664 17.6566 15.1644 17.276C15.0624 16.8955 15.0364 16.4986 15.0879 16.108C15.1393 15.7174 15.2671 15.3408 15.4641 14.9996C15.6611 14.6584 15.9234 14.3594 16.2359 14.1195C16.5485 13.8797 16.9052 13.7038 17.2857 13.6018C17.6663 13.4998 18.0632 13.4738 18.4538 13.5252C18.8444 13.5767 19.221 13.7045 19.5622 13.9015L19.5622 13.9015Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.06962 6.64319C9.02341 6.43253 8.99993 6.217 8.99993 6.0003C8.99993 5.60634 9.07753 5.21623 9.22829 4.85225C9.30001 4.67912 9.3876 4.51352 9.48973 4.35747C9.17327 4.44938 8.86149 4.55879 8.55584 4.68539C7.46391 5.13768 6.47176 5.80062 5.63603 6.63634C4.80031 7.47207 4.13737 8.46422 3.68508 9.55616C3.23279 10.6481 3 11.8184 3 13.0003C3 13.7255 3.08765 14.4464 3.25988 15.1475C3.34396 14.981 3.44359 14.8223 3.55768 14.6736C3.79752 14.361 4.09656 14.0988 4.43774 13.9018C4.62541 13.7935 4.82381 13.706 5.02936 13.6407C5.00983 13.4282 5 13.2145 5 13.0003C5 12.0811 5.18106 11.1708 5.53284 10.3215C5.88462 9.47224 6.40024 8.70057 7.05025 8.05056C7.63547 7.46533 8.31932 6.98905 9.06962 6.64319ZM14.9303 6.64313C15.6806 6.989 16.3645 7.4653 16.9497 8.05055C17.5998 8.70056 18.1154 9.47224 18.4672 10.3215C18.8189 11.1708 19 12.081 19 13.0003C19 13.2145 18.9902 13.4282 18.9706 13.6408C19.1761 13.7061 19.3745 13.7935 19.5621 13.9018C19.9033 14.0988 20.2023 14.361 20.4422 14.6736C20.5563 14.8223 20.656 14.9811 20.7401 15.1476C20.9123 14.4465 21 13.7256 21 13.0003C21 11.8184 20.7672 10.6481 20.3149 9.55615C19.8626 8.46422 19.1997 7.47206 18.364 6.63634C17.5282 5.80061 16.5361 5.13768 15.4441 4.68538C15.1385 4.55876 14.8266 4.44935 14.5101 4.35742C14.6122 4.51348 14.6999 4.6791 14.7716 4.85225C14.9223 5.21623 14.9999 5.60633 14.9999 6.0003C14.9999 6.21698 14.9765 6.43249 14.9303 6.64313ZM18.2303 19.4952C18.0439 19.5056 17.8565 19.4987 17.6705 19.4742C17.2799 19.4228 16.9033 19.2949 16.5621 19.098C16.3746 18.9897 16.1998 18.8617 16.0405 18.7164C15.6169 19.0159 15.1603 19.268 14.6788 19.4675C13.8295 19.8192 12.9193 20.0003 12 20.0003C11.0807 20.0003 10.1705 19.8192 9.32122 19.4675C8.83965 19.268 8.38304 19.0158 7.95941 18.7164C7.80015 18.8616 7.62531 18.9897 7.43775 19.098C7.09656 19.2949 6.71992 19.4228 6.32932 19.4742C6.1434 19.4987 5.95604 19.5056 5.7697 19.4952C6.5768 20.2694 7.52156 20.8868 8.55585 21.3152C9.64778 21.7675 10.8181 22.0003 12 22.0003C13.1819 22.0003 14.3522 21.7675 15.4442 21.3152C16.4784 20.8868 17.4232 20.2694 18.2303 19.4952Z"
        fill={color}
      />
    </svg>
  );
};
