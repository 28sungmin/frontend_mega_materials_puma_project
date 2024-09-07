// 캐싱으로 저장 : 변경된 값이 없다면 캐시 메모리로부터 가져온다. (속도 문제를 효율적으로 처리할 수 있음)
// import { memo } from "react";

const ImgAtm = ({ srcProps, altProps, ...props }) => {
  console.log(srcProps);
  console.log(altProps);
  console.log(props);

  //   {...props}는 src와 alt를 제외한 className이나 title과 같은 걸 반환한다.
  return <img {...props} src={srcProps} alt={altProps} />;
};

// export default memo(ImgAtm);
export default ImgAtm;
