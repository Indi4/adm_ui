import dayjs from "dayjs";
import { useEffect, useState } from "react";
export const processChartData = (
  data,
  month,
  nameKey = "name",
  planKey = "plan",
  actualKey = "actual"
) => {
  return data.map((item) => {
    const formattedDate = item.date ? dayjs(item.date).format("DD") : "Invalid Date";
    return {
      [nameKey]: month ? formattedDate : item.month ?? "Unknown Month",
      [planKey]: item.target ?? 0,
      [actualKey]: item.actual ?? 0,
    };
  });
};


function formatNumber(num) {
if (isNaN(num)) return 0;
  if (num < 1000) return num;
    const formatted = num / 1000;
    return Number.isInteger(formatted) ? `${formatted}K` : `${formatted.toFixed(1)}K`;
  }
  
  export const processPieChartData=(chartData, targetKey, actualKey, planLabel, actualLabel) =>{
    // Set default values if parameters are not provided.
    targetKey = targetKey || "target";
    actualKey = actualKey || "actual";
    planLabel = planLabel || "plan";
    actualLabel = actualLabel || "Actual";
  
    if (!Array.isArray(chartData)) {
      console.error("Invalid chartData provided:", chartData);
      return { donutData: [], overallTotal: 0, formattedOverallTotal: 0 };
    }
    var totalTarget = chartData.reduce(function (sum, curr) {
      return sum + (curr[targetKey] != null ? curr[targetKey] : 0);
    }, 0);
  
    var totalActual = chartData.reduce(function (sum, curr) {
      return sum + (curr[actualKey] != null ? curr[actualKey] : 0);
    }, 0);
  
    var overallTotal = totalTarget + totalActual;
    var formattedOverallTotal = formatNumber(overallTotal);
    var donutData = [
      { name: planLabel, value: totalTarget },
      { name: actualLabel, value: totalActual },
    ];
   return {
      chartData: donutData,
      OverallTotal: formattedOverallTotal
    };
  }

  export const useLoading=(data, delay = 2000)=> {
    const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
      if (data) {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, delay);
        return () => clearTimeout(timer);
      } else {
        setIsLoading(true);
      }
    }, [data, delay]);
  
    return isLoading;
  }