import Svg, { Path } from "react-native-svg";
import HomeScreen from "../screens/HomeScreen";
import WithdrawScreen from "../screens/WithdrawScreen";
import DepositScreen from "../screens/DepositScreen";
import AssetScreen from "../screens/AssetScreen";
import BillsScreen from "../screens/BillsScreen";

const home = (
  <Svg width={24} height={24} fill="none">
    <Path
      d="M10.07 2.82 3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01v0Z"
      stroke="#CCF0FF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      stroke="#CCF0FF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const withdraw = (
  <Svg width={24} height={24} fill="none">
    <Path
      d="M12 2v6l2-2m-2 2-2-2"
      stroke="#CCF0FF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5 12V8c0-2.01 0-3.67 3-3.96M19 12V8c0-2.01 0-3.67-3-3.96M7 12c-4 0-4 1.79-4 4v1c0 2.76 0 5 5 5h8c4 0 5-2.24 5-5v-1c0-2.21 0-4-4-4-1 0-1.28.21-1.8.6l-1.02 1.08a3 3 0 0 1-4.37 0L8.8 12.6C8.28 12.21 8 12 7 12Z"
      stroke="#CCF0FF"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const deposit = (
  <Svg width={24} height={24} fill="none">
    <Path
      d="M8 12h8m-4 4V8M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke="#CCF0FF"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const assets = (
  <Svg width={24} height={24} fill="none">
    <Path
      d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
      stroke="#CCF0FF"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.25 14h4.25M9 18h8.5m-2-16v7.86c0 .44-.52.66-.84.37l-2.32-2.14a.496.496 0 0 0-.68 0l-2.32 2.14c-.32.29-.84.07-.84-.37V2h7Z"
      stroke="#CCF0FF"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const bills = (
  <Svg width={24} height={24} fill="none">
    <Path
      d="M11.4 2.4 6.3 7.5c-.2.2-.2.5 0 .7L8 9.9c.2.2.5.2.7 0l5.1-5.1c.2-.2.2-.5 0-.7l-1.7-1.7c-.2-.2-.5-.2-.7 0v0Zm3.9 3.9-9 9c-.2.2-.2.5 0 .7L8 17.7c.2.2.5.2.7 0l9-9c.2-.2.2-.5 0-.7L16 6.3c-.2-.2-.5-.2-.7 0Zm3.9 3.9-9 9c-.2.2-.2.5 0 .7l1.7 1.7c.2.2.5.2.7 0l9-9c.2-.2.2-.5 0-.7l-1.7-1.7c-.2-.2-.5-.2-.7 0ZM4.1 13.8l-1.7-1.7c-.2-.2-.2-.5 0-.7l1.7-1.7c.2-.2.5-.2.7 0l1.7 1.7c.2.2.2.5 0 .7l-1.7 1.7c-.2.2-.5.2-.7 0Z"
      stroke="#CCF0FF"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const BottomTabData = [
  {
    id: 1,
    title: "Home",
    icon: home,
    component: HomeScreen,
    testID: "home-screen",
  },
  {
    id: 2,
    title: "Withdraw",
    icon: withdraw,
    component: WithdrawScreen,
    testID: "withdraw-screen",
  },
  {
    id: 3,
    title: "Deposit",
    icon: deposit,
    component: DepositScreen,
    testID: "deposit-screen",
  },
  {
    id: 4,
    title: "Assets",
    icon: assets,
    component: AssetScreen,
    testID: "assets-screen",
  },
  {
    id: 5,
    title: "Bills",
    icon: bills,
    component: BillsScreen,
    testID: "bills-screen",
  },
];
