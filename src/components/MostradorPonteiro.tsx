import { useEffect, useState } from "react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

interface MostradorPonteiroProps {
  value: number;
  max?: number;
  size?: number;
  barColor?: string;
  bgColor?: string;
  needleColor?: string;
  strokeWidth?: number;
  title?: string;
}

const MostradorPonteiro = ({
  value,
  max = 100,
  size = 300,
  barColor = "#3baaf6",
  bgColor = "#e5e7eb",
  needleColor = "#ef4444",
  strokeWidth = 20,
  title,
}: MostradorPonteiroProps) => {
  const [viewportWidth, setViewportWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  let computedSize = size;
  if (viewportWidth < 640) {
    computedSize = Math.round(size * 0.65);
  } else if (viewportWidth < 1024) {
    computedSize = Math.round(size * 0.85);
  }

  const width = computedSize;
  const height = computedSize * 0.55;
  const centerX = width / 2;
  const centerY = height * 0.75;

  const needleLength = computedSize * 0.18;

  const angle = 180 - (value * 180) / max;
  const rad = (angle * Math.PI) / 180;

  const needleX = centerX + needleLength * Math.cos(rad);
  const needleY = centerY - needleLength * Math.sin(rad);

  const data = [{ value, fill: barColor }];

  return (
    <div className="flex flex-col items-center text-gray-800 dark:text-white">
      {title && <h2 className="text-2xl text-center md:text-4xl font-bold ">{title}</h2>}

      <div className="relative -mt-3">
        <RadialBarChart
          width={width}
          height={height}
          cx={centerX}
          cy={centerY}
          innerRadius="70%"
          outerRadius="100%"
          barSize={strokeWidth}
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <PolarAngleAxis type="number" domain={[0, max]} tick={false} />
          <RadialBar
            background={{ fill: bgColor }}
            dataKey="value"
            cornerRadius={15}
          />
        </RadialBarChart>

        <svg
          width={width}
          height={height}
          className="absolute top-0 left-0 overflow-visible"
        >
          <line
            x1={centerX}
            y1={centerY}
            x2={needleX}
            y2={needleY}
            stroke={needleColor}
            strokeWidth={8}
            strokeLinecap="round"
          />

          <circle
            cx={centerX}
            cy={centerY}
            r={computedSize * 0.03}
            className="dark:fill-gray-500 fill-gray-800"
          />
        </svg>
      </div>
      <p className="text-2xl font-bold">
        {value}/{max}
      </p>
    </div>
  );
};

export default MostradorPonteiro;
