import dayjs from "dayjs";
import { useEffect, useState } from "react";
export const processChartData = (
  data,
  month,
  planKey = "plan",
  actualKey = "actual",
  nameKey = "name"
) => {
  if (!Array.isArray(data)) {
    return []; 
  }

  return data?.map((item) => {
    const formattedDate =
      item?.date || item?.Date
        ? dayjs(item.date || item.Date).format("DD")
        : null;

    const targetValue = item?.target ??item?.Target?? 0; 
    const actualValue = item[actualKey] ?? 0; 

    return {
      [nameKey]: month
        ? formattedDate || "Invalid Date"
        : item.month ?? item.Month ?? "Unknown Month",
      [planKey]: parseFloat(targetValue),
      [actualKey]: parseFloat(actualValue),
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
    const normalizedTargetKey = targetKey?.toLowerCase();
    const normalizedActualKey = actualKey?.toLowerCase();
     
    if (!Array.isArray(chartData)) {
      console.error("Invalid chartData provided:", chartData);
      return { donutData: [], overallTotal: 0, formattedOverallTotal: 0 };
    }
  
    const totalTarget = chartData?.reduce(function (sum, curr) {
      // Check both lowercase and Pascal case for target
      return sum + (curr[normalizedTargetKey] != null ? curr[normalizedTargetKey] : curr[normalizedTargetKey.charAt(0)?.toUpperCase() + normalizedTargetKey?.slice(1)] != null ? curr[normalizedTargetKey?.charAt(0).toUpperCase() + normalizedTargetKey?.slice(1)] : 0);
    }, 0);
  
    const totalActual = chartData?.reduce(function (sum, curr) {
      // Check both lowercase and Pascal case for actual
      return sum + (curr[normalizedActualKey] != null ? curr[normalizedActualKey] : curr[normalizedActualKey.charAt(0)?.toUpperCase() + normalizedActualKey?.slice(1)] != null ? curr[normalizedActualKey?.charAt(0).toUpperCase() + normalizedActualKey?.slice(1)] : 0);
    }, 0);
  
    const overallTotal = totalTarget + totalActual;
    const formattedOverallTotal = formatNumber(overallTotal);
  
    const donutData = [
      { name: planLabel, value: totalTarget },
      { name: actualLabel, value: totalActual },
    ];
  const HorizontalData=[{
    "name":`${formattedOverallTotal}`,
    [planLabel]:totalTarget,
    [actualLabel]:totalActual
  }]
    return {
      chartData: donutData,
      OverallTotal: formattedOverallTotal,
      HorizontalData:HorizontalData
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

  export const capitalizeFirstLetter=(str)=> {
    if (str.length === 0) return str;  
    return str.charAt(0)?.toUpperCase() + str?.slice(1);
  }

  export const convertValue = (value) => {
    if (typeof value !== "number" || isNaN(value)) {
      return "Invalid Input"; // Handle non-numeric values
    }
  
    if (value < 0) {
      return "-" + convertValue(Math.abs(value)); // Handle negative values
    }
  
    if (value >= 10000000) {
      return (value / 10000000).toFixed(1).replace(/\.0$/, "") + " Cr"; // Convert to Crores (Cr)
    } else if (value >= 100000) {
      return (value / 100000).toFixed(1).replace(/\.0$/, "") + " L"; // Convert to Lakhs (L)
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1).replace(/\.0$/, "") + " K"; // Convert to Thousands (K)
    }
  
    return value.toString(); // Return the number as a string for consistency
  };
  