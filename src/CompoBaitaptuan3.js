 import * as React from 'react';
import { Accordion, Col, Container, Row, Image } from 'react-bootstrap';
import bai1 from './bai3.1.PNG'
import bai2 from './bai3.2.PNG'
import bai3 from './bai3.3.PNG'
import bai4 from './bai3.4.PNG'
import bai5 from './bai3.5.PNG'
import bai6 from './bai3.6.PNG'
import bai7 from './bai3.7.PNG'
import bai8 from './bai3.8.PNG'
import bai9 from './bai3.9.PNG'
import bai10 from './bai3.10.PNG'
import bai11 from './bai3.11.PNG'
import bai12 from './bai3.12.PNG'
import bai13 from './bai3.13.PNG'
import bai14 from './bai3.14.PNG'
import bai15 from './bai3.15.PNG'

function CompoBaitaptuan3() {

  return (
      <Container>
        <Row>
        <Col></Col>
        <Col xs={10}></Col>
    
       <Accordion>
          <h3>A/ Các bài tập java cơ bản</h3>      
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Bài 01: Cho trước 1 xâu ký tự là họ tên người đầy đủ nhưng khi nhập có thể thừa một số dấu cách. Hãy xóa đi các dấu cách thừa và in ra họ tên chính xác.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai1} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5>
              <h5>odao oaso f efw
              </h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Bài 02: Cho trước xâu ký tự bất kỳ. Hãy đếm xem trong xâu có bao nhiêu lần xuất hiện xâu con “abc”
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai2} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5><h5>2
              </h5>
            </Accordion.Body>
          </Accordion.Item>

       <Accordion.Item eventKey="3">
            <Accordion.Header>
              Bài 03: Cho trước 1 xâu ký tự là họ tên người đầy đủ, hãy tách ra phần tên của người này
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai3} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5><h5>anh
              </h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Bài 04: Cho trước 1 xâu ký tự là họ tên người đầy đủ, hãy tách ra phần họ của người này
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai4} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5>
              <h5>Nguyen
              </h5>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="5">
            <Accordion.Header>
              Bài 05: Cho một xâu ký tự bao gồm toàn các ký tự 0,1. Hãy biến đổi xâu này theo cách 0🡪1, 1🡪0 và in ra kết quả.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai5} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5><h5>10101000010
              </h5>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="6">
            <Accordion.Header>
              Bài 06: Cho trước xâu ký tự S, in ra xâu S1 ngược lại xâu S.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai6} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5><h5>hgfedcba
              </h5>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="7">
            <Accordion.Header>
              Bài 07: Cho trước xâu ký tự S. Hãy biến đổi S theo quy tắc sau: Chữ số thì biến thành “$”, ký tự thì giữ nguyên.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai7} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5><h5>ab$cd$ef$$gh
              </h5>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="8">
            <Accordion.Header>
              Bài 08: Cho trước 2 xâu ký tự S1, S2. Hãy đếm xem xâu S1 xuất hiện trong S2 tại bao nhiêu vị trí.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai8} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5><h5>3
              </h5>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="9">
            <Accordion.Header>
              Bài 09: Cho xâu S và 2 chỉ số i, j. Hãy đổi chỗ 2 vị trí i, j trong S.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai9} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5><h5>abcedfgh
              </h5>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="10">
            <Accordion.Header>
              Bài 10: Cho mảng xâu ký tự S1, S2, ..Sn. Hãy tìm và in ra phần tử xâu có độ dài lớn nhất.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai10} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5><h5>5
              </h5>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="11">
            <Accordion.Header>
              Bài 11: Cho danh sách họ tên đầy đủ học sinh. Hãy đếm xem có bao nhiêu bạn tên “An”.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai11} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5><h5>3
              </h5>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="12">
            <Accordion.Header>
              Bài 12: Cho danh sách họ tên đầy đủ học sinh. Hãy đếm xem có bao nhiêu bạn có phần đệm là  “Thị”.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai12} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5><h5>1
              </h5>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="13">
            <Accordion.Header>
              Bài 13: Cho danh sách họ tên đầy đủ học sinh. Hãy đếm xem có bao nhiêu bạn  có tên bắt đầu bằng chữ “H”.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai13} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5><h5>2
              </h5>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="14">
            <Accordion.Header>
              Bài 14: Dãy xâu ký tự S1, S2,… được cho theo quy tắc sau: S1= “1111100000”, Sk thu được từ Sk-1 bằng cách thay đổi cho lần lượt các vị trí  1-2;  2-3;  3-4; 4-5; 5-6;  6-7; 7-8;  8-9; 9-10. Cho trước số tự nhiên N, Hãy in ra xâu Sn.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai14} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5><h5>[
  '1111100000',
  '1111100000',
  '1111100000',
  '1111100000',
  '1111010000',
  '1111001000',
  '1111000100',
  '1111000010',
  '1111000001'
]
              </h5>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="15">
            <Accordion.Header>
              Bài 15: Cho trước 2 xâu ký tự S, S2. Hãy chèn xâu S1 vào giữa xâu S2 và in kết quả.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai15} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5><h5>1111122220000
              </h5>
            </Accordion.Body>
          </Accordion.Item>


       </Accordion>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default CompoBaitaptuan3;