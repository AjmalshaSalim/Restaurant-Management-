import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import Chart from "react-apexcharts";
import {
  useMaterialTailwindController
} from "../../context/index";
export function StatisticsChart({ color, chart, title, description, footer }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType} =
    controller;
  //   const options = {
  //      grid: {
  //   show: true
  // }
    // };
  return (
    <Card className={` shadow-sm ${
      sidenavType === "dark" ? " bg-black" : "border border-blue-gray-100 bg-white"
    }`}>
      <CardHeader variant="gradient" color={color} floated={false} shadow={false}>
        <Chart className={`${
      sidenavType === "dark" ? " bg-black" : "bg-white"
    }`} {...chart}
    // options={options}
     />
      </CardHeader>
      <CardBody className="px-6 pt-0">
        <Typography variant="h6" color={sidenavType === 'dark' ? "white" : "blue-gray"}>
          {title}
        </Typography>
        <Typography variant="small" className={`font-normal ${
      sidenavType === "dark" ? "text-white" : "text-blue-gray-600"
    }`}>
          {description}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-gray-700 px-6 py-5">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

StatisticsChart.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsChart.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  chart: PropTypes.object.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsChart.displayName = "/src/widgets/charts/statistics-chart.jsx";

export default StatisticsChart;
