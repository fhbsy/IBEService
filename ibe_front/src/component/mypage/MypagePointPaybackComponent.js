import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import './Mypage.css'
import point_to_cash_icon from '../assets/images/mypage/point_to_cash_icon.png'

const MypagePointPaybackComponent = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const expectedPayback = inputValue ? (parseInt(inputValue) * 10).toLocaleString() : '0';

    return (
        <>
            <Container className="text-center my-5 containerPCharge">
                {/* 포인트 환급 타이틀*/}
                <h1 id="h1_pointTitle">포인트 환급</h1>
                <div id="div_pointInfo" className="text-muted">포인트를 현금으로 전환할 수 있습니다.</div>
                <div id="div_spacing"/>

                {/* 보유 포인트 */}
                <div id="div_pointData">
                    보유 포인트 : 
                    <span id="span_point">&nbsp;10,000&nbsp;</span>
                    <span id="span_p">P</span>
                </div>

                {/* 구분선 */}
                <hr />

                {/* 포인트 환급 금액 입력 */}
                <Container className="my-5">
                    <Row className="justify-content-center align-items-center">
                        <Col xs="auto">
                            <img src={point_to_cash_icon} alt="point_to_cash_icon" 
                                style={{ width:'100px', height:'100px', marginLeft:'200px', marginRight:'10px' }} />
                        </Col>
                        <Col xs={12} md={8}>
                            <Form inline className="d-flex align-items-center">
                                <Form.Group controlId="formPointInput">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="환급 받을 포인트를 입력해주세요." 
                                        style={{ borderColor:'#FFB800', width:'500px', height:'50px'}} 
                                        value={inputValue} 
                                        onChange={handleInputChange} 
                                    />
                                </Form.Group>
                                <Button 
                                    style={{ backgroundColor:'#FFD54F', borderColor:'#FFEB3B', marginLeft:'20px', width:'80px', height:'50px', color:'#000435' }}>
                                    입력
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                    {/* 포인트 환급 예상 금액 */}
                    {/* 포인트 입력마다 금액 보여주는 것까지 작성, 보유 포인트를 넘기지 않는지 확인시키는 코드 추가해야함 */}
                    <div className="mt-3">
                        고객님의 환급 예상 금액은 <strong>{expectedPayback}원</strong>입니다.
                    </div>
                </Container>

                <div id="div_spacing"/>

                {/* 포인트 약관 */}
                <div id="div_pointTerms">
                    <div style={{ fontWeight: 'bolder' }}>아이비 포인트 이용약관</div>
                    <div>아이비 포인트 잔액을 보유한 이용자는 회사에 요청하여 본인이 보유한 아이비 포인트 잔액을 환불받을 수 있습니다.</div>
                    <div>이용자가 실제 정상적인 구매내역이 기록되는 이용대금의 결제를 통하지 않고 비정상 경로로 취득한 아이비 포인트는 환불되지 않습니다.</div>
                    <div>문의사항은 아이비 고객 센터의 1:1문의하기를 통해 문의바랍니다.</div>
                </div>
            </Container>
        </>
    );
}

export default MypagePointPaybackComponent;
