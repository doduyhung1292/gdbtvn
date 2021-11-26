import * as React from 'react';
import { Accordion, Col, Container, Row, Image } from 'react-bootstrap';
import bai1 from './bai2.1.PNG'
import bai2 from './bai2.2.PNG'
import bai3 from './bai2.3.PNG'
import bai4 from './bai2.4.PNG'
import bai5 from './bai2.5.PNG'
import bai6 from './bai2.6.PNG'
import bai7 from './bai2.7.PNG'
import bai8 from './bai2.8.PNG'
import bai9 from './bai2.9.PNG'
import bai10 from './bai2.10.PNG'
import bai11 from './bai2.11.PNG'
import bai12 from './bai2.12.PNG'


function CompoBaitaptuan2() {

  return (
      <Container>
        <Row>
        <Col></Col>
        <Col xs={10}></Col>
        <Accordion>    
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Bài  01: Cho một dãy số tự nhiên, viết chương trình sắp xếp dãy này theo thứ tự tăng dần.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai1} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5>
              <h5>[
  1, 2, 2,  3, 4,
  6, 7, 8, 10
]</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Bài 02: Cho dãy số tự nhiên, in ra màn hình tất cả các số nguyên tố của dãy này.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai2} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5>
              <h5> 3
2
7
2
13</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Bài 03: Cho một dãy các số tự nhiên, tìm và in ra 1 giá trị min của dãy này và tất cả các chỉ số ứng với giá trị min này.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai3} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5>
              <h5> So nho nhat: 2</h5><h5>
2
6
9</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Bài 04: Cho một dãy các số tự nhiên, tìm và in ra 1 giá trị max của dãy này và tất cả các chỉ số ứng với giá trị max này
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai4} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5>
              <h5>So lon nhat: 13</h5><h5>
6
11</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Bài 05: Cho một dãy số tự nhiên, hãy đếm xem trong dãy số trên có bao nhiêu số nguyên tố, có bao nhiêu hợp số.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai5} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5>
              <h5>so so nguyen to 7</h5><h5>
so hop so 5</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              Bài 06: Cho một dãy số tự nhiên, hãy in ra tất cả các số hạng của dãy trên thỏa mãn: số này là ước số thực sự của 1 số hạng khác trong dãy trên.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai6} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5>
              <h5>3
2
3
5
1
2
2</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              Bài 07: Cho một dãy số tự nhiên, hãy tìm 1 số tự nhiên nhỏ nhất c không bằng bất cứ số nào trong dãy trên.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai7} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5>
              <h5>3</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              Bài 08: Cho một dãy số nguyên bất kỳ, hãy xóa đi trong dãy này các số hạng =0 và in ra màn hình các số còn lại.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai8} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5>
              <h5>[
  8, 3,  2, 6, 4,
  7, 1, 13, 0
]</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              Cho một dãy số nguyên bất kỳ, cho trước 1 số c. Hãy đếm có bao nhiêu số của dãy trên nhỏ hơn c; lớn hơn c; bằng c.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai9} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5>
              <h5>So so lon hon C: 9</h5><h5>
So so nho hon C: 2</h5><h5>
So so bang C: 3</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              Bài 10: Cho một dãy số nguyên bất kỳ, hãy tìm ra 1 một dãy số liền nhau dài nhất bao gồm các số bằng nhau. Hãy in ra số lượng và các chỉ số đầu tiên của dãy con này.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai10} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5>
              <h5>dãy con dài nhất: 2</h5><h5>
chỉ số đầu tiên: 10</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>
              Cho một dãy số nguyên bất kỳ. Hãy tìm 1 một dãy con liên tục đơn điệu tăng dài nhất của dãy trên.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai11} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5>
              <h5>2
3
5
6</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>
              Dãy số a[ ] được gọi là dãy con của b[ ] nếu từ b [ ] xóa đi 1 vài số sẽ thu được   a[ ]. Cho trước 2 dãy số nguyên a[ ]; b[ ]. Hãy kiểm tra xem a[ ] có là dãy con của b[ ] hay không?.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai12} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5>
              <h5>La day con</h5>
            </Accordion.Body>
          </Accordion.Item>

 		</Accordion>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default CompoBaitaptuan2;