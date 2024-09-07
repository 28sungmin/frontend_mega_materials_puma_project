import "./assets/scss/app.scss";

// Components
import HeaderCp from "./components/common/HeaderCp"; // 1
import FooterCp from "./components/common/FooterCp"; // 7

import Content1Cp from "./components/main/Content1Cp"; // 3
import Content2Cp from "./components/main/Content2Cp"; // 4
import Content3Cp from "./components/main/Content3Cp"; // 6
import MainVideoCp from "./components/main/MainVideoCp"; // 2
import MaiBannerCp from "./components/main/MainBannerCp"; // 5

function App() {
  return (
    <div className="App">
      <HeaderCp />
      <MainVideoCp />
      <Content1Cp />
      <Content2Cp />
      <MaiBannerCp />
      <Content3Cp />
      <FooterCp />
    </div>
  );
}

export default App;
