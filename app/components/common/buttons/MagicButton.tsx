import React from "react";

const MagicButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="flex items-center border border-gold p-2 rounded-xl gap-2 text-black font-sm !bg-gradient-to-r from-gradient-gold-100 via-gradient-gold-200 to-gradient-gold-300 shadow-sm hover:shadow-glow transition-all duration-300"
      onClick={onClick}
    >
      <svg
        fill="none"
        height="17"
        viewBox="0 0 16 17"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.863499 16.088L0.0340576 15.2573L12.2586 3.03271L13.088 3.86216L0.863499 16.088Z"
          fill="url(#paint0_linear_2_1350)"
        />
        <path
          d="M12.8212 3.30072C12.5197 2.99922 12.2598 3.03272 12.2598 3.03272L10.0997 5.19276C10.227 5.16462 10.4508 5.27315 10.6505 5.47147C10.8488 5.66978 10.9573 5.89356 10.9292 6.0222L13.0892 3.86217C13.0879 3.86217 13.1227 3.60355 12.8212 3.30072Z"
          fill="url(#paint1_linear_2_1350)"
        />
        <path
          d="M2.7792 13.3425C2.47771 13.041 2.21776 13.0745 2.21776 13.0745L0.0510254 15.2399C0.178323 15.2117 0.408797 15.3149 0.608453 15.5132C0.806768 15.7115 0.909946 15.9433 0.881807 16.0706L3.0472 13.9039C3.0472 13.9039 3.0807 13.644 2.7792 13.3425Z"
          fill="url(#paint2_linear_2_1350)"
        />
        <path
          d="M12.2557 3.0354L3.15192 12.1405C3.05008 12.2423 3.15326 12.5103 3.38239 12.7381C3.61153 12.9673 3.87952 13.0704 3.98002 12.9686L13.0851 3.8635C13.0851 3.8635 13.1414 3.61159 12.8198 3.29938C12.4982 2.98716 12.2557 3.0354 12.2557 3.0354Z"
          fill="url(#paint3_linear_2_1350)"
          opacity="0.85"
        />
        <path
          d="M9.143 6.14821L0.0392472 15.2533C-0.0625905 15.3551 0.0405871 15.6231 0.269722 15.8509C0.498857 16.0801 0.766851 16.1832 0.867348 16.0814L9.97378 6.97766C9.97378 6.97766 10.0301 6.72574 9.70847 6.41353C9.38554 6.10266 9.143 6.14821 9.143 6.14821Z"
          fill="url(#paint4_linear_2_1350)"
          opacity="0.22"
        />
        <path
          d="M8.57746 2.00896L9.37876 1.21034C9.42298 1.16612 9.49936 1.2023 9.49266 1.26528L9.38948 2.20192C9.38546 2.2381 9.41092 2.2716 9.44844 2.27562L10.5955 2.41229C10.6625 2.42033 10.6772 2.51145 10.6142 2.53959L9.41896 3.07424C9.40154 3.08228 9.38814 3.09836 9.38278 3.11712L9.03707 4.30299C9.02099 4.36061 8.94327 4.36865 8.91513 4.31639L8.38048 3.34491C8.37416 3.33361 8.36476 3.32433 8.35338 3.31816C8.34199 3.31199 8.32908 3.30919 8.31616 3.31007L7.28975 3.39315C7.27609 3.39431 7.26241 3.39122 7.25057 3.38432C7.23873 3.37741 7.22931 3.36702 7.2236 3.35456C7.21788 3.34211 7.21615 3.32819 7.21863 3.31471C7.22112 3.30123 7.2277 3.28885 7.23749 3.27925L7.91819 2.61597C7.93829 2.59721 7.94365 2.56639 7.93293 2.54093L7.57248 1.71685C7.54836 1.66057 7.60598 1.60295 7.66226 1.62975L8.5051 2.0237C8.52788 2.03442 8.55736 2.02906 8.57746 2.00896Z"
          fill="url(#paint5_radial_2_1350)"
        />
        <path
          d="M11.4878 7.96378L12.123 8.25723C12.139 8.26527 12.1578 8.26259 12.1712 8.25187L12.8077 7.77082C12.8412 7.74536 12.8867 7.77216 12.8841 7.81236L12.8238 8.60294C12.8224 8.62036 12.8305 8.63778 12.8465 8.64716L13.4536 9.02235C13.4897 9.04513 13.4804 9.10141 13.4375 9.10945L12.6764 9.26623C12.6576 9.27025 12.6429 9.28365 12.6389 9.30241L12.4767 10.0193C12.4673 10.0622 12.4097 10.0702 12.3883 10.0314L12.0506 9.41363C12.0465 9.40586 12.0403 9.39938 12.0327 9.39489C12.0252 9.3904 12.0165 9.38807 12.0077 9.38817L11.2091 9.41363C11.1676 9.41497 11.1448 9.36673 11.1702 9.33457L11.6848 8.71952C11.6969 8.70612 11.6995 8.68736 11.6928 8.66994L11.4222 8.02408C11.4074 7.98522 11.449 7.94502 11.4878 7.96378Z"
          fill="url(#paint6_radial_2_1350)"
        />
        <path
          d="M14.1091 1.04825L15.2387 0.547099C15.295 0.521639 15.3445 0.577918 15.3151 0.631517L14.7563 1.66061C14.7429 1.68473 14.7456 1.71421 14.763 1.73297L15.973 2.90679C16.0092 2.9443 15.9783 3.0113 15.9234 3.01398L14.4387 2.75269C14.4159 2.75403 14.3945 2.76743 14.3824 2.78887L13.6012 4.21862C13.5718 4.27088 13.4967 4.26552 13.4847 4.21058L13.3319 2.81835C13.3289 2.80644 13.3223 2.79576 13.3129 2.78783C13.3035 2.7799 13.2919 2.77511 13.2796 2.77413L12.0536 2.57447C12.0013 2.57045 11.9812 2.50747 12.0214 2.46862L13.0465 1.68071C13.0612 1.66597 13.0693 1.64587 13.0666 1.62577L12.883 0.0740893C12.8776 0.0151307 12.9513 -0.0237285 12.9929 0.0164706L14.0407 1.03753C14.0582 1.05361 14.085 1.05763 14.1091 1.04825Z"
          fill="url(#paint7_radial_2_1350)"
        />
        <path
          d="M12.3187 3.08767C11.8175 3.2163 11.3097 3.32752 10.7911 3.3704C10.2725 3.4173 9.74594 3.37978 9.23407 3.28732C8.7222 3.19218 8.21971 3.07293 7.7132 2.97913C7.2067 2.88533 6.69751 2.81029 6.18564 2.75133C5.9297 2.72185 5.67243 2.70042 5.4165 2.67496C5.16592 2.65084 4.91803 2.65754 4.68219 2.71247C4.45038 2.77143 4.23464 2.88265 4.09529 3.06489C3.95459 3.24444 3.88759 3.4776 3.88759 3.71745C3.88491 4.20118 4.07921 4.68357 4.32576 5.11906C4.57366 5.55723 4.89927 5.9552 5.22488 6.35317C5.87343 7.15179 6.57423 7.91156 7.26967 8.67668C7.61807 9.05991 7.96646 9.4418 8.30949 9.83039C8.6552 10.2163 8.98886 10.6143 9.30777 11.0243C9.62802 11.433 9.9322 11.8604 10.1801 12.3241C10.2417 12.4366 10.3101 12.5613 10.3302 12.7113C10.3369 12.7877 10.3288 12.8721 10.2859 12.9472C10.2431 13.0222 10.172 13.0691 10.1037 13.0999C9.96301 13.1562 9.82366 13.1602 9.68966 13.1535C9.55566 13.1455 9.42435 13.124 9.29571 13.0946C8.78384 12.9699 8.30547 12.7569 7.84452 12.517C7.61405 12.3964 7.38893 12.2678 7.16784 12.1325C6.94808 11.9958 6.73235 11.8511 6.52063 11.7037C6.96014 11.977 7.41037 12.2316 7.87534 12.4527C8.34031 12.6725 8.82404 12.8641 9.32117 12.9646C9.44579 12.9874 9.5704 13.0061 9.69368 13.0101C9.81696 13.0142 9.94158 13.0034 10.0407 12.9606C10.089 12.9378 10.1292 12.9083 10.1493 12.8681C10.1694 12.8292 10.1747 12.7797 10.1694 12.7274C10.1533 12.6202 10.0957 12.513 10.03 12.4018C9.77944 11.9596 9.47259 11.5469 9.14563 11.1503C7.83782 9.56374 6.34778 8.12193 5.01853 6.52201C4.69291 6.11868 4.36328 5.70865 4.10467 5.24368C3.85007 4.78273 3.6397 4.27086 3.6464 3.71209C3.64908 3.43606 3.72947 3.14529 3.91171 2.91749C4.09261 2.68568 4.36328 2.55168 4.62993 2.48736C4.89927 2.4284 5.1753 2.4217 5.43928 2.45252C5.69655 2.48468 5.95516 2.51148 6.21244 2.54766C6.72699 2.62002 7.23886 2.70845 7.7467 2.81431C8.25455 2.92151 8.75704 3.05015 9.25953 3.15868C9.76068 3.26856 10.2725 3.32618 10.7871 3.29938C11.3003 3.27526 11.8108 3.18816 12.3187 3.08767Z"
          fill="#FDD835"
        />
        <path
          d="M8.49859 4.2628C6.99112 4.61387 5.26122 3.59281 3.66397 3.77237C3.05429 3.85276 2.80371 4.58171 3.38928 5.73676C4.53898 7.7159 6.21662 8.88435 6.83568 9.60928C6.00356 9.14297 4.29376 7.91421 3.10521 6.75782C1.31635 5.04266 1.64732 2.89871 3.3062 2.90541C3.86229 2.85181 4.93829 3.1198 5.38852 3.28462C5.83205 3.46283 7.34219 4.12076 8.49859 4.2628Z"
          fill="url(#paint8_radial_2_1350)"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_2_1350"
            x1="6.14619"
            x2="6.976"
            y1="9.14515"
            y2="9.97498"
          >
            <stop offset="0.595" stopColor="#616161" />
            <stop offset="0.775" stopColor="#565656" />
            <stop offset="1" stopColor="#424242" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_2_1350"
            x1="11.3258"
            x2="12.235"
            y1="4.11247"
            y2="5.02177"
          >
            <stop offset="0.262" stopColor="#F5F5F5" />
            <stop offset="0.466" stopColor="#EAEAEA" />
            <stop offset="0.822" stopColor="#CDCDCD" />
            <stop offset="0.989" stopColor="#BDBDBD" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_2_1350"
            x1="1.28018"
            x2="2.19163"
            y1="14.1566"
            y2="15.0679"
          >
            <stop offset="0.262" stopColor="#F5F5F5" />
            <stop offset="0.466" stopColor="#EAEAEA" />
            <stop offset="0.822" stopColor="#CDCDCD" />
            <stop offset="0.989" stopColor="#BDBDBD" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint3_linear_2_1350"
            x1="8.5796"
            x2="13.2156"
            y1="7.54132"
            y2="2.90529"
          >
            <stop stopColor="#FADA80" stopOpacity="0" />
            <stop offset="1" stopColor="#FADA80" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint4_linear_2_1350"
            x1="-0.920171"
            x2="2.28825"
            y1="17.0412"
            y2="13.8328"
          >
            <stop stopColor="#1A237E" />
            <stop offset="0.186" stopColor="#1D2A87" stopOpacity="0.814" />
            <stop offset="0.49" stopColor="#243DA0" stopOpacity="0.51" />
            <stop offset="0.873" stopColor="#2F5CC7" stopOpacity="0.127" />
            <stop offset="1" stopColor="#3367D6" stopOpacity="0" />
          </linearGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(9.58871 2.57913) rotate(2.144) scale(1.98101)"
            gradientUnits="userSpaceOnUse"
            id="paint5_radial_2_1350"
            r="1"
          >
            <stop stopColor="#FFEB3B" />
            <stop offset="1" stopColor="#FBC02D" />
          </radialGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(12.5834 8.13362) rotate(-20.089) scale(1.59229)"
            gradientUnits="userSpaceOnUse"
            id="paint6_radial_2_1350"
            r="1"
          >
            <stop stopColor="#FFEB3B" />
            <stop offset="1" stopColor="#FBC02D" />
          </radialGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(13.8916 2.03825) rotate(104.711) scale(2.14772 2.32169)"
            gradientUnits="userSpaceOnUse"
            id="paint7_radial_2_1350"
            r="1"
          >
            <stop offset="0.325" stopColor="#FFEB3B" />
            <stop offset="1" stopColor="#FBC02D" />
          </radialGradient>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(11.8462 8.87878) rotate(30.6965) scale(12.5596 7.52695)"
            gradientUnits="userSpaceOnUse"
            id="paint8_radial_2_1350"
            r="1"
          >
            <stop stopColor="#FFEE58" stopOpacity="0" />
            <stop offset="1" stopColor="#FDD835" />
          </radialGradient>
        </defs>
      </svg>
      Trouver une recette
    </button>
  );
};

export default MagicButton;
