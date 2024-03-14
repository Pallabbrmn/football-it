import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getLeagues,
  getLeagueName,
  getLeagueId,
  getFixtures,
  getTeams,
} from "../store/features/homeSlice";

const images = [
  {
    id: 1,
    src: "https://media.cnn.com/api/v1/images/stellar/prod/231210052634-01-aston-villa-arsenal-match-12092023.jpg?c=16x9&q=h_833,w_1480,c_fill",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-10/GettyImages-1431977428.jpg?itok=JM6GszVb",
    alt: "Image 2 ",
  },
  {
    id: 3,
    src: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/09/09/16627201529098.jpg",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://m.economictimes.com/thumb/msid-105446188,width-1600,height-900,resizemode-4,imgsize-51604/manchester-city-vs-liverpool-live-kickoff-time-team-news-injuries-head-to-head-how-to-watch-premier-league.jpg",
    alt: "Image 1",
  },
  {
    id: 5,
    src: "https://www.mlive.com/resizer/XJhe6X2-huZ6Oz2vx_kZTMfNoIE=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/JVDV7X2DVVGT7M7X5YPSNWA564.jpg",
    alt: "Image 2 ",
  },
  {
    id: 6,
    src: "https://premierskillsenglish.britishcouncil.org/sites/default/files/styles/main_large/public/learning/4699/image/salah.jpg?itok=ZoYN16O3",
    alt: "Image 3",
  },
];

const CompetitionsHome = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: false,
    autoplay: true,
    autoplaySpeed: 1700,
  };
  return (
    <div className="w-[85%] mx-auto">
      <div className="h-[80vh] py-8 w-full rounded-lg overflow-hidden">
        <Slider className="w=full h-full overflow-hidden" {...settings}>
          {images.map((item) => (
            <div className="rounded-lg overflow-hidden" key={item.id}>
              <img
                className="w-full h-full m-auto object-contain"
                src={item.src}
                alt={item.alt}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-evenly py-4">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="size-[80px] overflow-hidden flex justify-center">
              <img
                className="h-full w-full object-contain"
                src="https://resources.premierleague.com/photos/2023/04/06/c9fc1dca-fe99-40ab-ab41-be1979ee852d/ea_sports_black_435_x_290_360.png?width=217.5&height=145"
              />
            </div>
          </div>

          <h1 className="text-sm">Lead Partner</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="size-[80px] overflow-hidden flex justify-center">
              <img
                className="h-full w-full object-contain"
                src="https://resources.premierleague.com/photos/2023/01/26/11fe030b-2b2e-41ed-8f34-be72a8403ea0/Barclays_Sponsor.png?width=115&height=40"
              />
            </div>
          </div>

          <h1 className="text-sm">Official Bank</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="size-[80px] overflow-hidden flex justify-center">
              <img
                className="h-full w-full object-contain"
                src="https://resources.premierleague.com/photos/2023/11/28/812f7a8b-fa6c-4b49-841d-068b324ac71b/Bud_Sponsor.png?width=115&height=40"
              />
            </div>
          </div>

          <h1 className="text-sm">Official Beer</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="size-[80px] overflow-hidden flex justify-center">
              <img
                className="h-full w-full object-contain"
                src="https://resources.premierleague.com/photos/2023/06/02/9e65648a-c1b7-4b14-9f80-80fa2dca1dff/Castrol_New.png?width=200&height=83"
              />
            </div>
          </div>

          <h1 className="text-sm">Official Engine Oil Partner</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="size-[80px] overflow-hidden flex justify-center">
              <img
                className="h-full w-full object-contain"
                src="https://resources.premierleague.com/photos/2023/01/26/737c3235-de74-4d72-a2fc-496365258f4b/Hublot_Sponsor.png?width=150&height=75"
              />
            </div>
          </div>

          <h1 className="text-sm">Official Timekeeper</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="size-[80px] overflow-hidden flex justify-center">
              <img
                className="h-full w-full object-contain"
                src="https://resources.premierleague.com/photos/2023/01/26/8016f9bd-4ca7-4a1a-8336-bf9eac81e265/Nike_Sponsor.png?width=111&height=39"
              />
            </div>
          </div>

          <h1 className="text-sm">Official Ball</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="size-[80px] overflow-hidden flex justify-center">
              <img
                className="h-full w-full object-contain"
                src="https://resources.premierleague.com/photos/2023/01/26/c3238a2c-d4af-48a2-9345-0b7a82c18cd8/Oracle_Sponsor.png?width=150&height=75"
              />
            </div>
          </div>

          <h1 className="text-sm">Official Cloud Partner</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center">
            <div className="size-[80px] overflow-hidden flex justify-center">
              <img
                className="h-full w-full object-contain"
                src="https://resources.premierleague.com/photos/2023/01/26/29bca766-5224-4166-b20b-3aac01e67fb9/AD_Sponsor.png?width=140&height=45"
              />
            </div>
          </div>

          <h1 className="text-sm">Official Licensee</h1>
        </div>
      </div>
      {/* socials */}
      <div className="border-t py-8 ">
        <div className="flex justify-between">
          <h1 className="text-4xl pl-8">Socials</h1>
          <div className="flex justify-evenly gap-8 mr-10">
            <div className="flex">
              <div className="size-[40px]">
                <img
                  className="h-full w-full"
                  src="https://assets.laliga.com/assets/public/rrss/facebook-color-ea.svg"
                />
              </div>
            </div>
            <div className="flex">
              <div className="size-[40px]">
                <img
                  className="h-full w-full"
                  src="https://assets.laliga.com/assets/public/rrss/instagram-color-ea.svg"
                />
              </div>
            </div>
            <div className="flex">
              <div className="size-[40px] p-2">
                <img
                  className="h-full w-full"
                  src="https://assets.laliga.com/assets/public/rrss/twitter-x.svg"
                />
              </div>
            </div>
            <div className="flex">
              <div className="size-[40px]">
                <img
                  className="h-full w-full"
                  src="https://assets.laliga.com/assets/public/rrss/linkedin-color-ea.svg"
                />
              </div>
            </div>
            <div className="flex">
              <div className="size-[40px]">
                <img
                  className="h-full w-full"
                  src="https://assets.laliga.com/assets/public/rrss/tiktok-color-ea.svg"
                />
              </div>
            </div>
            <div className="flex">
              <div className="size-[40px]">
                <img
                  className="h-full w-full"
                  src="https://assets.laliga.com/assets/public/rrss/vk-color-ea.svg"
                />
              </div>
            </div>
            <div className="flex">
              <div className="size-[40px]">
                <img
                  className="h-full w-full"
                  src="https://assets.laliga.com/assets/public/rrss/youtube-color-ea.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionsHome;

// background: linear-gradient(180deg, transparent, #000 87.1%);
