import { Offline, Online } from "react-detect-offline";

const OfflineData = () => (
  <div>
    <Online>Only shown when you're online</Online>
    <Offline>Only shown offline (surprise!)</Offline>
  </div>
);
export default OfflineData