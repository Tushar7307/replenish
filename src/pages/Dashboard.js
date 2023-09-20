import React, { useEffect } from "react";
import { BsBox } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { FaSort } from "react-icons/fa";

import InputComponent from "../components/InputComponent";

import TotalDataCard from "../components/Cards/TotalDataCard";
import ReactApexChart from "react-apexcharts";

export default function Dashboard() {
  const series = [
    {
      name: "Series 1",
      data: [0, 20000, 34300, 6785, 65783, 7678, 60000, 80000],
      color: "#000000",
      stroke: {
        curve: "smooth",
        // OR provide an array
        curve: ["smooth", "monotoneCubic", "straight", "stepline"],
      },
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
    },

    toolbar: {
      show: false, // Set to false to hide the toolbar
    },
    grid: {
      show: false, // Set to false to hide grid lines
    },
    yaxis: {
      axisBorder: {
        show: true,
        color: "#000000",
      },
      labels: {
        formatter: function (val) {
          console.log(val);
          if (val >= 1000) {
            return (val / 1000).toFixed() + "k";
          }
          return val;
        },
      },
    },

    xaxis: {
      axisBorder: {
        show: true,
        color: "#000000",
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  return (
    <div className="px-4">
      <div className="flex flex-wrap gap-6 py-3 ">
        <TotalDataCard
          title={"Total product in stock"}
          Icon={BsBox}
          total={2500}
        />
        <TotalDataCard
          title={"Total product in stock"}
          Icon={BsBox}
          total={2500}
        />
        <TotalDataCard
          title={"Total product in stock"}
          Icon={BsBox}
          total={2500}
        />
        <TotalDataCard
          title={"Total product in stock"}
          Icon={BsBox}
          total={2500}
        />
        <TotalDataCard
          title={"Total product in stock"}
          Icon={BsBox}
          total={2500}
        />
        <TotalDataCard
          title={"Total product in stock"}
          Icon={BsBox}
          total={2500}
        />
        <TotalDataCard
          title={"Total product in stock"}
          Icon={BsBox}
          total={2500}
        />
      </div>
      <div className=" flex w-full flex-col md:flex-row gap-4 ">
        <div className="md:flex-1 border border-gray-scale-gray-500 p-4 ">
          <div className="flex justify-between text-gray-scale-gray-500 font-serif">
            <div className="flex flex-col ml-10">
              <span>Income</span>
              <span>3545667$</span>
            </div>
            <div>
              <select>
                <option>2022</option>
                <option>2023</option>
                <option>2021</option>
                <option>2020</option>
              </select>
            </div>
          </div>
          <div>
            <ReactApexChart
              options={options}
              series={series}
              type="line"
              height={300}
            />
          </div>
        </div>

        <div className="md:flex-1 border border-gray-scale-gray-500 p-4">
          <div className="flex justify-between text-gray-scale-gray-500 font-serif">
            <div className="flex flex-col ml-10">
              <span>Income</span>
              <span>3545667$</span>
            </div>
            <div>
              <select>
                <option>2022</option>
                <option>2023</option>
                <option>2021</option>
                <option>2020</option>
              </select>
            </div>
          </div>
          <div>
            <ReactApexChart
              options={options}
              series={series}
              type="line"
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="text-gray-scale-gray-500 mt-4">
        <span> Recently Added Products</span>
      </div>

      <div className="flex gap-4 items-center  w-full ">
        <label
          htmlFor="filter"
          className="flex items-center gap-2 bg-gray-scale-gray-500
         text-md p-2 text-white"
        >
          <span className="text-xl">
            <FiFilter />
          </span>
          <span>Filter</span>
        </label>
        <div className="flex w-full mt-4 px-2">
          <InputComponent
            id="filter"
            placeholder="Search"
            inputClassName="placeholder:text-lightblack"
            Icon={BsSearch}
          />
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs  bg-tablegray text-black">
            <tr className="">
              <th scope="col" className="px-6 py-3 font-normal">
                <div className="flex  gap-1 cursor-pointer"  >
                  <span>
                    <FaSort />
                  </span>
                  <span>Sno</span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 font-normal">
                <div className="flex  gap-1 cursor-pointer"  >
                  <span>
                    <FaSort />
                  </span>
                  <span>Product Name</span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 font-normal">
                <div className="flex  gap-1 cursor-pointer"  >
                  <span>
                    <FaSort />
                  </span>
                  <span>In Stock</span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 font-normal">
                <div className="flex  gap-1 cursor-pointer"  >
                  <span>
                    <FaSort />
                  </span>
                  <span>Price ($)</span>
                </div>
              </th>
              <th scope="col" className="px-6 py-3 font-normal">
                <div className="flex  gap-1 cursor-pointer"  >
                  <span>
                    <FaSort />
                  </span>
                  <span>Total Sale</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50 ">
              <td className="px-6 py-4 text-black font-light text-sm">1</td>
              <th
                scope="row"
                className="px-6 py-4 text-black font-light text-sm  text-gray-900 whitespace-nowrap "
              >
                Botex Injection
              </th>
              <td className="px-6 py-4 text-black font-light text-sm">
                Silver
              </td>
              <td className="px-6 py-4 text-black font-light text-sm">
                Laptop
              </td>
              <td className="px-6 py-4 text-black font-light text-sm">$2999</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50 ">
              <td className="px-6 py-4 text-black font-light text-sm">1</td>
              <th
                scope="row"
                className="px-6 py-4 text-black font-light text-sm  text-gray-900 whitespace-nowrap "
              >
                Botex Injection
              </th>
              <td className="px-6 py-4 text-black font-light text-sm">
                Silver
              </td>
              <td className="px-6 py-4 text-black font-light text-sm">
                Laptop
              </td>
              <td className="px-6 py-4 text-black font-light text-sm">$2999</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50 ">
              <td className="px-6 py-4 text-black font-light text-sm">1</td>
              <th
                scope="row"
                className="px-6 py-4 text-black font-light text-sm  text-gray-900 whitespace-nowrap "
              >
                Botex Injection
              </th>
              <td className="px-6 py-4 text-black font-light text-sm">
                Silver
              </td>
              <td className="px-6 py-4 text-black font-light text-sm">
                Laptop
              </td>
              <td className="px-6 py-4 text-black font-light text-sm">$2999</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50 ">
              <td className="px-6 py-4 text-black font-light text-sm">1</td>
              <th
                scope="row"
                className="px-6 py-4 text-black font-light text-sm  text-gray-900 whitespace-nowrap "
              >
                Botex Injection
              </th>
              <td className="px-6 py-4 text-black font-light text-sm">
                Silver
              </td>
              <td className="px-6 py-4 text-black font-light text-sm">
                Laptop
              </td>
              <td className="px-6 py-4 text-black font-light text-sm">$2999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
