import React, { useState } from "react";
import pressIndexData from "../data/RSB_DataSet.json";
import ".././index.css";

const List = () => {
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
    <section className="background rounded-md px-4 py-6 md:py-2 mx-auto w-[100%] md:w-[100%] md:mx-2 md:max-w-sm ">
      {/* Search Bar  */}
      <div className="w-[95%] mx-auto py-2">
        <legend className="sr-only">Find a Country</legend>
        <input
          className="backdrop-blur-sm font-semibold px-4 py-1 border-2 rounded-md border-grey-500 focus:outline-gray-500 w-[100%] "
          type="text"
          name="Search"
          placeholder="Find a Country"
          onChange={filterBySearch}
        />
      </div>
      {/* List  */}
      <div>
        <div className="flex justify-between font-semibold px-1 m-2 text-white">
          <p>Index 2022</p>
          <p>Global Score</p>
        </div>
        {/* List Components  */}

        <div className="custom-scroll">
          <ul className="max-h-[50%] min-h-max h-60 md:h-[60vh] overflow-y-auto custom-scroll ">
            {filteredList.map((ele) => (
              <li
                key={ele.Ranking}
                className="cursor-pointer hover:bg-cyan-400 max-h-12 h-fit flex items-center backdrop-blur-2xl font-semibold pr-2 mt-1 text-white"
              >
                <div
                  className={`w-[4%] h-10 ${
                    ele.Score > 85
                      ? `bg-green-500`
                      : ele.Score > 70
                      ? `bg-yellow-500`
                      : ele.Score > 55
                      ? `bg-orange-400`
                      : ele.Score > 40
                      ? `bg-red-600`
                      : `bg-[#820263]`
                  }  rounded-md `}
                ></div>
                <div className="w-[20%] text-center font-bold">
                  {ele.Ranking}
                </div>
                <div className="w-[46%]">{ele.Country}</div>
                <div className="w-[30%] text-right ">{ele.Score}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Colour Coding  */}

      <div className="backdrop-blur-2xl mt-4 rounded-md">
        <div className="flex h-[7px]">
          <div className=" w-[20%] rounded-l bg-[#820263]"></div>
          <div className="w-[20%] bg-red-600"></div>
          <div className="w-[20%] bg-orange-400"></div>
          <div className="w-[20%] bg-yellow-500"></div>
          <div className="w-[20%] rounded-r bg-green-500"></div>
        </div>
        <div className="flex items-center font-medium text-white justify-between px-1">
          <div className="w-[20%]">0</div>
          <div className="w-[20%]">40</div>
          <div className="w-[20%]">55</div>
          <div className="w-[20%]">70</div>
          <div className="w-[20%]">85</div>
          <span>100</span>
        </div>
      </div>
    </section>
  );
};

export default List;
