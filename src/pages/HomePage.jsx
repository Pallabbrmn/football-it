import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CompetitionCard from "../components/CompetitionCard";
import TodayMatch from "../components/TodayMatch";
import "../App.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import { API_KEY } from "../store/api";
const badge =
  "https://png.pngtree.com/png-clipart/20190611/original/pngtree-cartoon-black-and-white-football-logo-png-image_3157113.jpg";
const images = [
  {
    id: 1,
    src: "../images/football2.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "../images/football3.jpg",
    alt: "Image 2 ",
  },
  {
    id: 3,
    src: "../images/football4.jpg",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://media.cnn.com/api/v1/images/stellar/prod/230514184745-barcelona-laliga-celebration-title-spain-deportes.jpg?c=original",
    alt: "Image 1",
  },
  {
    id: 5,
    src: "https://imageio.forbes.com/specials-images/imageserve/658730c4d0c18f2974a44846/Atletico-De-Madrid-V-Sevilla-Fc---Laliga-Ea-Sports/960x0.jpg?format=jpg&width=960",
    alt: "Image 2 ",
  },
  {
    id: 6,
    src: "https://www.forbesindia.com/media/images/2023/Jun/img_209045_laligabg.jpg",
    alt: "Image 3",
  },
];

const HomePage = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: false,
    autoplay: true,
    autoplaySpeed: 1700,
  };

  const settings2 = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    infinite: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const settings3 = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-indexed
  const day = today.getDate().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const [competitions, setCompetitions] = useState([]);
  const [matchesToday, setMatchesToday] = useState([]);

  // https://apiv3.apifootball.com/?action=get_leagues&country_id=6&APIkey=xxxxxxxxxxxxxx

  useEffect(() => {
    axios(
      `https://apiv3.apifootball.com/?action=get_leagues&league_id=175,152,3,193,566,207,302,168,328&APIkey=${API_KEY}`
    ).then((res) => {
      setCompetitions(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios(
      `https://apiv3.apifootball.com/?action=get_events&from=${formattedDate}&to=${formattedDate}&league_id=152,175,566,3,193,207,328,302&APIkey=${API_KEY}`
    ).then((res) => {
      setMatchesToday(res.data);
      console.log(res.data);
    });
  }, []);

  if (!matchesToday) {
    return <div>No Matches for Today</div>;
  }

  const pops = competitions.filter(
    (competition) =>
      competition.league_id === "175" ||
      competition.league_id === "566" ||
      competition.league_id === "302" ||
      competition.league_id === "168" ||
      competition.league_id === "152" ||
      competition.league_id === "207" ||
      competition.league_id === "3" ||
      competition.league_id === "193" ||
      competition.league_id === "328"
  );
  console.log(pops);
  console.log(matchesToday);

  return (
    <>
      <div className="h-[30vh] w-[95%] sm:h-[70vh] sm:w-[85%] mx-auto rounded-md overflow-hidden">
        <Slider className="w=full h-full overflow-hidden" {...settings}>
          {images.map((item) => (
            <div className=" overflow-hidden" key={item.id}>
              <img
                className="w-full h-full m-auto object-contain"
                src={item.src}
                alt={item.alt}
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* <StandingsSample /> */}

      <div className="w-[95%] sm:w-[85%] mx-auto sm:mt-4 py-8">
        <h3 className="text-lg font-medium py-4">POPULAR COMPETITIONS</h3>

        <Slider className="matchSlider" {...settings2}>
          {pops.map((pop, idx) => {
            return (
              <Link to={`/CompetitionsLayout`} key={idx}>
                <CompetitionCard
                  league={pop.league_name}
                  logo={pop.league_logo}
                  country={pop.country_name}
                />
              </Link>
            );
          })}
        </Slider>
      </div>
      <div className=" w-[90%] sm:w-[85%] mx-auto">
        <h3 className="text-lg font-medium py-4">MATCHES TODAY</h3>
        <Slider className="matchSlider" {...settings3}>
          {matchesToday.map((match, idx) => {
            return (
              <Link to={`/CompetitionsLayout`} key={idx}>
                <TodayMatch
                  leagueLogo={match.league_logo}
                  leagueName={match.league_name}
                  matchTime={match.match_time}
                  homeBadge={
                    match.team_home_badge ? match.team_home_badge : badge
                  }
                  awayBadge={
                    match.team_away_badge ? match.team_away_badge : badge
                  }
                  homeTeam={match.match_hometeam_name}
                  awayTeam={match.match_awayteam_name}
                />
              </Link>
            );
          })}
        </Slider>
        {/* <div className="grid grid-cols-4 gap-4">
          {pops.map((pop, idx) => {
            return (
              <Link to={`/CompetitionsLayout`} key={idx}>
                <TodayMatch />
              </Link>
            );
          })}
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
