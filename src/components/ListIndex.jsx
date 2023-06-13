import React, { useState } from "react";
import pressIndexData from "../data/RSB_DataSet.json";
import ".././index.css";

const ListIndex = () => {
  const listData = pressIndexData;
  const [filteredList, setFilteredList] = new useState(listData);

  const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...listData];
    updatedList = updatedList.filter((item) => {
      return item.Country.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };

  return (
    <section className="">
      {/* Desktop view */}
      <section className="backgroundC  ">
        {/* Search Bar  */}
        <div className="w-[90%] mx-auto pt-4">
          <legend className="sr-only">Find a Country</legend>
          <input
            className="backdrop-blur-md font-semibold px-4 py-2 border-2 rounded-md border-grey-500 focus:outline-gray-500 w-[100%] "
            type="text"
            name="Search"
            placeholder="Find a Country"
            onChange={filterBySearch}
          />
        </div>
        {/* List  */}
        <div>
          {/* List Components  */}
          <div className="custom-scroll mt-4">
            <div className="pl-1 cursor-pointer h-fit flex items-center backdrop-blur-2xl font-bold pr-2 mt-1 text-white  text-center">
              <div className="w-[2%] font-bold">#</div>
              <div className="w-[8%]">Ranking</div>
              <div className="w-[30%]">Country</div>
              <div className="w-[10%]">Score</div>
              <div className="w-[10%]">Political Context</div>
              <div className="w-[10%]">Economic Context</div>
              <div className="w-[10%]">Legal Framework</div>
              <div className="w-[10%]">Safety Score</div>
              <div className="w-[10%]">Sociocultural Context</div>
            </div>
            <ul className="pl-1 h-[57vh] overflow-y-auto custom-scroll ">
              {filteredList.map((ele) => {
                console.log(ele);
                return (
                  <li
                    key={ele.Ranking}
                    className="cursor-pointer hover:bg-slate-900 max-h-12 h-fit flex items-center backdrop-blur-xl font-semibold pr-2 mt-1 text-white"
                  >
                    <div
                      className={`w-[2%] h-10 ${
                        ele.Score > 85
                          ? `bg-green-500`
                          : ele.Score > 70
                          ? `bg-yellow-500`
                          : ele.Score > 55
                          ? `bg-orange-400`
                          : ele.Score > 40
                          ? `bg-red-600`
                          : `bg-red-900`
                      }  rounded-md `}
                    ></div>
                    <div className="w-[8%] text-center font-bold">
                      {ele.Ranking}
                    </div>
                    <div className="w-[30%]">{ele.Country}</div>
                    <div className="w-[10%] text-center">{ele.Score}</div>
                    <div className="w-[10%] text-center">
                      {ele.PoliticalContext}
                    </div>
                    <div className="w-[10%] text-center">
                      {ele.EconomicContext}
                    </div>
                    <div className="w-[10%] text-center">
                      {ele.LegalFramework}
                    </div>
                    <div className="w-[10%] text-center">{ele.SafetyScore}</div>
                    <div className="w-[10%] text-center">
                      {ele.SocioculturalContext}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Colour Coding  */}
        <div className="backdrop-blur-2xl mt-6 rounded-md">
          <div className="flex h-[7px]">
            <div className=" w-[20%] rounded-l bg-red-900"></div>
            <div className="w-[20%] bg-red-600"></div>
            <div className="w-[20%] bg-orange-400"></div>
            <div className="w-[20%] bg-yellow-500"></div>
            <div className="w-[20%] rounded-r bg-green-500"></div>
          </div>
          <div className="flex items-center font-medium text-white justify-between p-1">
            <div className="w-[20%]">0</div>
            <div className="w-[20%]">40</div>
            <div className="w-[20%]">55</div>
            <div className="w-[20%]">70</div>
            <div className="w-[20%]">85</div>
            <span>100</span>
          </div>
        </div>
      </section>
      {/* mobile View  */}
      <section>

      </section>
    </section>
  );
};

export default ListIndex;
