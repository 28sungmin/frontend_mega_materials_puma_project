// HeaderCp.jsx
import logoImg from "../../assets/images/logo_puma_white.png";
import searchIcon from "../../assets/images/sns/search_icon.svg";
import favIcon from "../../assets/images/sns/fav_icon.svg";
import idIcon from "../../assets/images/sns/id_icon.svg";

import ImgAtm from "../atoms/ImgAtm";
import ListItemAtm from "../atoms/ListItemAtm";
import ButtonIconAtm from "../atoms/ButtonIconAtm";

const HeaderCp = () => {
  const searchEvt = () => {
    console.log("검색 클릭");
  };
  const favEvt = () => {
    console.log("좋아요 클릭");
  };
  const idEvt = () => {
    console.log("마이 클릭");
  };

  const header_menus = [
    { name: "new arrivals", link: "/new" },
    { name: "men", link: "/men" },
    { name: "women", link: "/women" },
    { name: "kids", link: "/kids" },
    { name: "collaborations", link: "/collaborations" },
    { name: "sport", link: "/sport" },
    { name: "outlets", link: "/outlets" },
  ];

  const header_myLinks = [
    {
      icon: searchIcon,
      altTxt: "검색 아이콘",
      clickEvt: searchEvt,
    },
    {
      icon: favIcon,
      altTxt: "좋아요 아이콘",
      clickEvt: favEvt,
    },
    {
      icon: idIcon,
      altTxt: "마이 아이콘",
      clickEvt: idEvt,
    },
  ];

  return (
    <header className="header-space h-60">
      <div
        className="wrap px-10 mx-auto d-flex 
      justify-content-between align-items-center h-100-per"
      >
        <div className="logo">
          <a href="/">
            <ImgAtm
              className="h-40"
              title="Puma Logo"
              srcProps={logoImg}
              altProps="퓨마 로고 이미지"
            />
          </a>
        </div>
        <nav>
          <ul className="d-flex">
            {header_menus.map((v, i) => (
              <ListItemAtm
                key={i}
                className="mx-10"
                nameProps={v.name}
                linkProps={v.link}
              />
            ))}
          </ul>
        </nav>
        <div className="myLink">
          <ul className="d-flex">
            {header_myLinks.map((v, i) => (
              <li key={i}>
                <ButtonIconAtm
                  srcProps={v.icon}
                  altProps={v.altTxt}
                  evtProps={v.clickEvt}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};
export default HeaderCp;
