const CompetitionCard = ({ league, logo, country }) => {
  return (
    <>
      <div className=" h-[80px] flex border justify-start gap-3 p-2 rounded-md items-center cursor-pointer hover:transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-lg cursor-pointer bg-white">
        <div className="flex flex-shrink-0 w-[50px] h-[50px] rounded-[50%] overflow-hidden justify-center items-center">
          <img className="object-cover" src={logo} />
        </div>
        <div className="flex flex-grow flex-col justify-center overflow-hidden">
          <h3 className="text-[1.3rem] font-normal max-w-xs truncate ... ">
            {league}
          </h3>
          <h5 className="text-[1rem] max-w-xs truncate ... ">{country}</h5>
        </div>
      </div>
    </>
  );
};

export default CompetitionCard;
