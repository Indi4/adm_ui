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
    console.log(item.date,item.Date,"item.date")
    const formattedDate = (item.date ?? item.Date) 
    ? dayjs(item.date ?? item.Date).format("DD")
    : "Invalid Date";
    const targetValue = item.target ?? item.Target ?? 0;
    const actualValue = item.actual ?? item.Actual ?? 0;

    return {
      [nameKey]: month ? formattedDate :(item.month ?? item.Month) ?? "Unknown Month",
      [planKey]:targetValue,
      [actualKey]: actualValue
    };
  });
};


function formatNumber(num) {
if (isNaN(num)) return 0;
  if (num < 1000) return num;
    const formatted = num / 1000;
    return Number.isInteger(formatted) ? `${formatted}K` : `${formatted.toFixed(1)}K`;
  }
  
  export const processPieChartData = (chartData, targetKey, actualKey, planLabel, actualLabel) => {
    // Set default values if parameters are not provided.
    targetKey = targetKey || "target";
    actualKey = actualKey || "actual";
    planLabel = planLabel || "plan";
    actualLabel = actualLabel || "Actual";
    
    // Normalize the keys to handle different capitalizations for 'target', 'Target', 'actual', 'Actual', etc.
    const normalizedTargetKey = targetKey.toLowerCase();
    const normalizedActualKey = actualKey.toLowerCase();
    const normalizedMonthKey = "month";  // month is consistently the same for both formats
  
    if (!Array.isArray(chartData)) {
      console.error("Invalid chartData provided:", chartData);
      return { donutData: [], overallTotal: 0, formattedOverallTotal: 0 };
    }
  
    var totalTarget = chartData.reduce(function (sum, curr) {
      // Check both lowercase and Pascal case for target
      return sum + (curr[normalizedTargetKey] != null ? curr[normalizedTargetKey] : curr[normalizedTargetKey.charAt(0).toUpperCase() + normalizedTargetKey.slice(1)] != null ? curr[normalizedTargetKey.charAt(0).toUpperCase() + normalizedTargetKey.slice(1)] : 0);
    }, 0);
  
    var totalActual = chartData.reduce(function (sum, curr) {
      // Check both lowercase and Pascal case for actual
      return sum + (curr[normalizedActualKey] != null ? curr[normalizedActualKey] : curr[normalizedActualKey.charAt(0).toUpperCase() + normalizedActualKey.slice(1)] != null ? curr[normalizedActualKey.charAt(0).toUpperCase() + normalizedActualKey.slice(1)] : 0);
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
  };
  

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