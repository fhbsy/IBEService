import { Col, Container, Row } from "react-bootstrap";
import "./Mypage.css";
import MypageSidenavComponent from "./MypageSidenavComponent";
import MemberInfoCardComponent from "./MemberInfoCardComponent";
import MemberPointCardComponent from "./MemberPointCardComponent";
import MypagePurchaseListComponent from "./MypagePurchaseListComponent";
import MypageSalesListComponent from "./MypageSalesListComponent";

const MypageComponent = () => {
    return (
        <>  
            {/* 헤더 픽스된 위치만큼 div 설정 */}
            <div id="div_headerHeight"/>
            
            <Container fluid>
                <Row>
                    {/* 마이페이지 사이드메뉴 */}
                    <Col md={1} className="p-3" id="mypage_col_001">
                        <MypageSidenavComponent />
                    </Col>
                    {/* 마이페이지 바디 */}
                    <Col className="p-3" id="mypage_col_002">
                        <Row>
                            <Col className="p-2 d-flex justify-content-end">
                                {/* 회원 정보 카드 */}
                                <MemberInfoCardComponent />
                            </Col>
                            <Col className="p-2">
                                {/* 회원 포인트 정보 카드 */}
                                <MemberPointCardComponent />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {/* 구매 목록 */}
                                <MypagePurchaseListComponent/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                {/* 판매 목록 */}
                                <MypageSalesListComponent/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default MypageComponent;
