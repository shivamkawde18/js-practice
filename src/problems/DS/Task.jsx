import React, { lazy, Suspense, useMemo, useState } from "react";

import { useList, useNavigation } from "@refinedev/core";
import { GetFieldsFromList } from "@refinedev/nestjs-query";

import { DollarOutlined, RightCircleOutlined } from "@ant-design/icons";
import { AreaConfig } from "@ant-design/plots";
import { Button, Card, DatePicker, DatePickerProps } from "antd";
import dayjs from "dayjs";

import { Text } from "@/components";
import { DashboardDealsChartQuery } from "@/graphql/types";

import { DASHBOARD_DEALS_CHART_QUERY } from "./queries";

const Area = lazy(() => import("@ant-design/plots/es/components/area"));

export const DashboardDealsChart: React.FC = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<any>([]);
  const { list } = useNavigation();
  const { data, isError, error } = useList<
    GetFieldsFromList<DashboardDealsChartQuery>
  >({
    resource: "dealStages",
    filters: [{ field: "title", operator: "in", value: ["WON", "LOST"] }],
    meta: {
      gqlQuery: DASHBOARD_DEALS_CHART_QUERY,
    },
  });

  if (isError) {
    console.error("Error fetching deals chart data", error);
    return null;
  }

  // const dealData = useMemo(() => {
  //   let won;
  //   if (selectedDateRange.length <= 0) {
  //     console.log("innnnnn");
  //     won = data?.data
  //       .find((node) => node.title === "WON")
  //       ?.dealsAggregate.map((item) => {
  //         const { closeDateMonth, closeDateYear } = item.groupBy!;
  //         const date = dayjs(`${closeDateYear}-${closeDateMonth}-01`);
  //         return {
  //           timeUnix: date.unix(),
  //           timeText: date.format("MMM YYYY"),
  //           value: item.sum?.value,
  //           state: "Won",
  //         };
  //       });
  //   } else {
  //     const startingDate =
  //       selectedDateRange.length > 0 &&
  //       selectedDateRange[0]
  //         .format("MM-YYYY")
  //         .split("-")
  //         .map((e: string) => Number(e));
  //     const endingDate =
  //       selectedDateRange.length > 0 &&
  //       selectedDateRange[1]
  //         .format("MM-YYYY")
  //         .split("-")
  //         .map((e: string) => Number(e));

  //     console.log(startingDate, endingDate, "else");
  //     won = data?.data
  //       .find((node) => node.title === "WON")
  //       ?.dealsAggregate.map((item) => {
  //         const { closeDateMonth, closeDateYear } = item.groupBy!;

  //         if (
  //           (closeDateMonth ?? 0) >= (startingDate[0] ?? 0) &&
  //           (closeDateYear ?? 0) >= (startingDate[1] ?? 0) &&
  //           (closeDateMonth ?? Number.MAX_SAFE_INTEGER) <=
  //             (endingDate[0] ?? Number.MAX_SAFE_INTEGER) &&
  //           (closeDateYear ?? Number.MAX_SAFE_INTEGER) <=
  //             (endingDate[1] ?? Number.MAX_SAFE_INTEGER)
  //         ) {
  //           const date = dayjs(`${closeDateYear}-${closeDateMonth}-01`);
  //           return {
  //             timeUnix: date.unix(),
  //             timeText: date.format("MMM YYYY"),
  //             value: item.sum?.value,
  //             state: "Won",
  //           };
  //         }
  //         else{
  //           return null
  //         }
  //       });
  //   }

  //   let lost;
  //   if (selectedDateRange.length <= 0) {
  //     lost = data?.data
  //       .find((node) => node.title === "LOST")
  //       ?.dealsAggregate.map((item) => {
  //         const { closeDateMonth, closeDateYear } = item.groupBy!;
  //         const date = dayjs(`${closeDateYear}-${closeDateMonth}-01`);
  //         return {
  //           timeUnix: date.unix(),
  //           timeText: date.format("MMM YYYY"),
  //           value: item.sum?.value,
  //           state: "Lost",
  //         };
  //       });
  //   } else {
  //     const startingDate =
  //       selectedDateRange.length > 0 &&
  //       selectedDateRange[0]
  //         .format("MM-YYYY")
  //         .split("-")
  //         .map((e: string) => Number(e));
  //     const endingDate =
  //       selectedDateRange.length > 0 &&
  //       selectedDateRange[1]
  //         .format("MM-YYYY")
  //         .split("-")
  //         .map((e: string) => Number(e));

  //     console.log(startingDate, endingDate, "else");
  //     lost = data?.data
  //       .find((node) => node.title === "LOST")
  //       ?.dealsAggregate.map((item) => {
  //         const { closeDateMonth, closeDateYear } = item.groupBy!;

  //         if (closeDateYear ? closeDateYear <= endingDate[1] : 0) {
  //           const date = dayjs(`${closeDateYear}-${closeDateMonth}-01`);
  //           return {
  //             timeUnix: date.unix(),
  //             timeText: date.format("MMM YYYY"),
  //             value: item.sum?.value,
  //             state: "Lost",
  //           };
  //         }
  //         else{
  //           return null
  //         }
  //       });
  //   }

  //   return [...(won || []), ...(lost || [])].sort(
  //     // (a, b) => a.timeUnix - b.timeUnix
  //   );
  // }, [data, selectedDateRange]);

  const dealData = useMemo(() => {
    console.log("innnnnn");
    const won = data?.data
      .find((node) => node.title === "WON")
      ?.dealsAggregate.map((item) => {
        const { closeDateMonth, closeDateYear } = item.groupBy!;
        const date = dayjs(`${closeDateYear}-${closeDateMonth}-01`);
        return {
          timeUnix: date.unix(),
          timeText: date.format("MMM YYYY"),
          value: item.sum?.value,
          state: "Won",
        };
      });

    const lost = data?.data
      .find((node) => node.title === "LOST")
      ?.dealsAggregate.map((item) => {
        const { closeDateMonth, closeDateYear } = item.groupBy!;
        const date = dayjs(`${closeDateYear}-${closeDateMonth}-01`);
        return {
          timeUnix: date.unix(),
          timeText: date.format("MMM YYYY"),
          value: item.sum?.value,
          state: "Lost",
        };
      });

    return [...(won || []), ...(lost || [])].sort(
      (a, b) => a.timeUnix - b.timeUnix
    );
  }, [data]);

  console.log(data);

  const { RangePicker } = DatePicker;

  const config: AreaConfig = {
    isStack: false,
    data: dealData,
    xField: "timeText",
    yField: "value",
    seriesField: "state",
    animation: true,
    startOnZero: false,
    smooth: true,
    legend: {
      offsetY: -6,
    },
    yAxis: {
      tickCount: 4,
      label: {
        formatter: (v) => {
          return `$${Number(v) / 1000}k`;
        },
      },
    },
    tooltip: {
      formatter: (data) => {
        return {
          name: data.state,
          value: `$${Number(data.value) / 1000}k`,
        };
      },
    },
    areaStyle: (datum) => {
      const won = "l(270) 0:#ffffff 0.5:#b7eb8f 1:#52c41a";
      const lost = "l(270) 0:#ffffff 0.5:#f3b7c2 1:#ff4d4f";
      return { fill: datum.state === "Won" ? won : lost };
    },
    color: (datum) => {
      return datum.state === "Won" ? "#52C41A" : "#F5222D";
    },
  };

  const handleDateChange = (dates: any) => {
    // dates[0] is the start date, and dates[1] is the end date
    console.log("Selected Date Range:", dates);
    setSelectedDateRange(dates);
  };
  // console.log(selectedDateRange[0]?.format('DD-MM-YYYY')[2],"start date")
  // console.log(selectedDateRange[1]?.format('DD-MM-YYYY'),"end date")
  //   const formattedDate = selectedDateRange[1]?.format('MM-YYYY');
  // const convertedToNumber = formattedDate ? parseInt(formattedDate, 10) : null;

  console.log(selectedDateRange.length);

  return (
    <Card
      style={{ height: "100%" }}
      headStyle={{ padding: "8px 16px" }}
      bodyStyle={{ padding: "24px 24px 0px 24px" }}
      title={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <DollarOutlined />
          <Text size="sm" style={{ marginLeft: ".5rem" }}>
            Deals
          </Text>
        </div>
      }
      extra={
        <Button onClick={() => list("deals")} icon={<RightCircleOutlined />}>
          See sales pipeline
        </Button>
      }
    >
      <Suspense>
        <Area {...config} height={325} />
      </Suspense>
      <div>
        <RangePicker format="DD-MM-YYYY" onChange={handleDateChange} />
        {/* {selectedDateRange && (
        <div style={{display:"flex",justifyContent:"space-between"}}>
          Start Date: {selectedDateRange[0]?.format('YYYY-MM-DD')}
          <br />
          End Date: {selectedDateRange[1]?.format('YYYY-MM-DD')}
        </div>
      )} */}

        <div>
          {/* <RangePicker onChange={handleDateChange} /> */}
          {/* Access start and end dates from the state as needed */}
        </div>
      </div>
    </Card>
  );
};
