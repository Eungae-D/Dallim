import Svg, {Path} from 'react-native-svg';

interface Props {
  width: number;
  height: number;
  color: string;
}

function Run2Icon({width, height, color}: Props) {
  return (
    <Svg width={width} height={height} viewBox="0 0 2672 3413" fill="none">
      <Path
        d="M1648.46 567.618C1805.15 559.33 1925.5 425.637 1917.21 269.007C1908.87 112.374 1775.15 -7.88342 1618.4 0.403864C1461.71 8.69172 1341.36 142.385 1349.65 299.015C1357.93 455.651 1491.71 575.905 1648.46 567.618Z"
        fill={color}
      />
      <Path
        d="M1154.44 2095.21C1152.95 2096.29 1151.47 2097.41 1150.04 2098.57L702.417 2454.3L702.411 2454.31L160.351 2328.59C90.6455 2312.42 20.3855 2356.2 4.20778 2425.87C-11.9643 2495.53 31.8316 2565.76 101.537 2581.92L754.373 2733.33L754.396 2733.34C767.985 2738.61 782.249 2741.83 796.655 2743C826.885 2748.68 857 2741.51 880.887 2725.18C880.944 2725.17 881.001 2725.15 881.001 2725.13C888.258 2721.15 895.287 2716.49 901.973 2711.15L1345.88 2358.38L1166.5 2113.86C1162.1 2107.85 1158.1 2101.66 1154.44 2095.21Z"
        fill={color}
      />
      <Path
        d="M2664.15 1129.35C2640.04 1064.12 2566.89 1030.48 2501.63 1054.6L2049.04 1221.85V1221.84L1773.89 846.923L1706.52 1303.91L1821.95 1461.3C1866.35 1521.73 1948.41 1539.15 2012.87 1504.85L2589.35 1291.81C2654.61 1267.69 2688.27 1194.58 2664.15 1129.35Z"
        fill={color}
      />
      <Path
        d="M1801.78 2361.61L1558.51 2029.99C1558.63 2029.05 1558.8 2028.15 1558.97 2027.25L1672.52 1257.65L1734.63 836.882C1736.75 822.495 1736.69 808.285 1734.69 794.521C1725.66 731.227 1675.83 678.379 1609.54 668.607L1512.28 654.311C1505.14 653.232 1497.94 652.74 1490.85 652.74C1482.57 652.74 1474.39 653.414 1466.39 654.756C1455.31 656.059 1444.16 658.657 1433.25 662.649L882.486 866.199C832.427 884.71 798.769 928.505 790.483 977.812C789.226 981.444 788.197 985.162 787.34 988.926L646.986 1593.44C644.609 1603.7 643.443 1613.97 643.443 1624.05C643.443 1685.95 686.182 1742.34 748.927 1756.91C759.196 1759.29 769.465 1760.45 779.557 1760.45C841.513 1760.45 897.972 1717.74 912.487 1655.03L1034.32 1130.22L1307.07 1029.45L1168.38 1969.65C1164.73 1994.26 1167.47 2018.42 1175.24 2040.43C1178.55 2052.62 1183.35 2064.55 1189.87 2075.89C1192.61 2080.73 1195.64 2085.43 1199.01 2090.01L1375.42 2330.4L1539.42 2553.9C1540.51 2555.43 1541.65 2556.86 1542.8 2558.3L1381.59 3252.86C1379.3 3262.67 1378.22 3272.45 1378.22 3282.13C1378.22 3341.21 1418.96 3395.04 1478.91 3408.94C1488.68 3411.23 1498.51 3412.3 1508.11 3412.3C1567.25 3412.3 1621.09 3371.56 1635.03 3311.67L1828.41 2478.78C1831.61 2464.88 1832.06 2450.94 1830.12 2437.58C1828.01 2410.96 1818.69 2384.6 1801.78 2361.61Z"
        fill={color}
      />
    </Svg>
  );
}

export default Run2Icon;