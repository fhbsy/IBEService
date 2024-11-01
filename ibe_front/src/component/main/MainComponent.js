import AllProductsComponent from './AllProductsComponent';
import BannerComponent from './BannerComponent';
import CategoryIconsComponent from './CategoryIconsComponent';
import './Main.css';
import TrendingProductsComponent from './TrendingProductsComponent';
import AdComponent from './AdComponent';

import banner_trust3 from '../assets/images/main/banner/banner_trust3.png';
const MainComponent = () => {
  return (
    <>
      {/* 헤더 픽스된 위치만큼 div 설정 */}
      <div id="div_headerHeight" />

      {/* carousel 배너 */}
      <div id="div_bgBanner">
        <BannerComponent />
      </div>

      {/* icon 카테고리 메뉴바 */}
      <div id="div_bgCategory">
        <CategoryIconsComponent />
      </div>

      {/* 전체 상품 */}
      <div>
        <AllProductsComponent />
      </div>
      {/* 인기 상품 */}
      <div>
        <TrendingProductsComponent />
      </div>

      {/* 광고 컴포넌트 */}
      <div className="section_ad">
        <AdComponent image={{ src: banner_trust3 }} />
      </div>

      <div id="div_endOfMainBody" />
      {/* 인기 상품 */}
      <div>
        <TrendingProductsComponent />
      </div>
      <div id="div_endOfMainBody" />
    </>
  );
};

export default MainComponent;
