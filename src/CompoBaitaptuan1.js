import * as React from 'react';
import { Accordion, Col, Container, Row, Image } from 'react-bootstrap';
import bai1 from './bai1.1.PNG'
import bai2 from './bai1.2.PNG'
import bai3 from './bai1.3.PNG'
import bai4 from './bai1.4.PNG'
import bai5 from './bai1.5.PNG'
import bai6 from './bai1.6.PNG'
import bai7 from './bai1.7.PNG'
import bai8 from './bai1.8.PNG'
import bai9 from './bai1.9.PNG'
import bai10 from './bai1.10.PNG'
import bai11 from './bai1.11.PNG'
import bai12 from './bai1.12.PNG'
import bai13 from './bai1.13.PNG'
import bai14 from './bai1.14.PNG'
import bai15 from './bai1.15.PNG'
import bai16 from './bai1.16.PNG'

function CompoBaitaptuan1() {

  return (
      <Container>
        <Row>
        <Col></Col>
        <Col xs={10}></Col>
    
          <Accordion>
          <h3>A/ Các bài tập java cơ bản</h3>      
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Bài 01: In ra màn hình tất cả các hợp số nhỏ hơn 100
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai1} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5><h5>   4
6
8
9
10
12
14
15
16
18
20
21
22
24
25
26
27
28
30
32
33
34
35
36
38
39
40
42
44
45
46
48
49
50
51
52
54
55
56
57
58
60
62
63
64
65
66
68
69
70
72
74
75
76
77
78
80
81
82
84
85
86
87
88
90
91
92
93
94
95
96
98
99
</h5>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Bài 02: In ra màn hình 20 số nguyên tố đầu tiên
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai2} />
              <h3>Kết quả:</h3>
              <h5>Đỗ Duy Hưng 20183754</h5>
              <h5>2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 67 71</h5>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Bài 03: In ra màn hình tất cả các số nguyên tố từ 1000 đến 2000
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai3} />
              <h3>Kết quả: </h3>
              <h5>Đỗ Duy Hưng 20183754</h5><h5>   1009
1013
1019
1021
1031
1033
1039
1049
1051
1061
1063
1069
1087
1091
1093
1097
1103
1109
1117
1123
1129
1151
1153
1163
1171
1181
1187
1193
1201
1213
1217
1223
1229
1231
1237
1249
1259
1277
1279
1283
1289
1291
1297
1301
1303
1307
1319
1321
1327
1361
1367
1373
1381
1399
1409
1423
1427
1429
1433
1439
1447
1451
1453
1459
1471
1481
1483
1487
1489
1493
1499
1511
1523
1531
1543
1549
1553
1559
1567
1571
1579
1583
1597
1601
1607
1609
1613
1619
1621
1627
1637
1657
1663
1667
1669
1693
1697
1699
1709
1721
1723
1733
1741
1747
1753
1759
1777
1783
1787
1789
1801
1811
1823
1831
1847
1861
1867
1871
1873
1877
1879
1889
1901
1907
1913
1931
1933
1949
1951
1973
1979
1987
1993
1997
1999
1999</h5>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Bài 04: In ra màn hình các số nhỏ hơn 100 và chia hết cho 3,7
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai4} />
              <h3>Kết quả:</h3>
              <h5> Đỗ Duy Hưng 20183754</h5><h5>  
0
21
42
63
84</h5>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Bài 05: In ra màn hình các số nằm giữa 1000 và 2000 đồng thời chia hết cho 3,5,7
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai5} />
              <h3>Kết quả:</h3>
              <h5>Đỗ Duy Hưng 20183754</h5><h5>  
1050
1155
1260
1365
1470
1575
1680
1785
1890
1995
</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              Bài 06: In ra màn hình 5 số hoàn hảo đầu tiên (Số hoàn hảo là số có tổng bằng các ước số của mình kể cả 1)
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai6} />
              <h3>Kết quả:</h3>
              <h5>Đỗ Duy Hưng 20183754</h5><h5>  
6
28
496</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              Bài 07: Trong các số tự nhiên nhỏ hơn hoặc bằng 100, hãy đếm xem có bao nhiêu số
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai7} />
              <h3>Kết quả:</h3>
              <h5>Đỗ Duy Hưng 20183754 </h5>
<h5>Số số chia 5 dư 0: 21</h5>
<h5>Số số chia 5 dư 1: 20</h5>
<h5>Số số chia 5 dư 2: 20</h5>
<h5>Số số chia 5 dư 3: 20</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              Bài 08: Cho số tự nhiên N bất kỳ (đã gán trước đó), tìm và in ra ước số nguyên tố nhỏ nhất của N.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai8} />
              <h3>Kết quả:</h3>
              <h5>Đỗ Duy Hưng 20183754</h5><h5>  
5</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              Bài 09: Cho số tự nhiên N lớn hơn 1 bất kỳ (đã gán trước đó). In ra khai triển thành tích các số nguyên tố tính từ nhỏ đến lớn VD: 9🡪3.3; 12🡪2.2.3.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai9} />
              <h3>Kết quả:</h3>
              <h5>Đỗ Duy Hưng 20183754</h5><h5>  
[ 2, 2, 5, 5 ]</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              Bài 10: Cho trước số tự nhiên N bất kỳ (đã gán trước đó). In ra màn hình tất cả các ước số nguyên tố khác nhau của N.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai10} />
              <h3>Kết quả:</h3>
              <h5>Đỗ Duy Hưng 20183754</h5><h5>  
2
3</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>
              Bài 11: Viết chương trình tráo đổi ngẫu nhiên vị trí một dãy số cho trước. Để lấy một số int ngẫu nhiên từ 0 đến n-1 ta dùng lệnh int i = Random. nextInt(n); 
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai11} />
              <h3>Kết quả:</h3>
              <h5>Đỗ Duy Hưng 20183754</h5><h5>  
[1, 4, 5, 4,
  7, 6, 8, 6]</h5>

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>
              Bài 12. Viết chương trình nhập chiều cao h từ bàn phím, sau đó hiển thị các tam giác hình sao có chiều cao h như dưới đây. Chú ý có kiểm tra điều kiện của h: h lớn hơn hoặc bằng 2, nhỏ hơn hoặc bằng 10. Nếu h nằm ngoài đoạn trên, yêu cầu người dùng nhập lại. (cho lựa chọn in tam giác xuôi hoặc ngược)
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai12} />
              <h3>Kết quả:</h3>
              <h5>Đỗ Duy Hưng 20183754 </h5>
              <h5>*</h5>
              <h5>**</h5>
              <h5>***</h5>
              <h5>****</h5>
              <h5>*****</h5>
            </Accordion.Body>
          </Accordion.Item>
          <h3>B/ Bài tập về hàm và thủ tục (Method & function)   </h3>
          <Accordion.Item eventKey="13">
            <Accordion.Header>
              Bài 13: Cho số tự nhiên N bất kỳ.
              Tính tổng S=1+1/(1+2) + 1/(1+2+3) +…+ 1/(1+2+3+..+N)

            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai13} />
              <h3>Kết quả:</h3>
              <h5>Đỗ Duy Hưng 20183754</h5><h5>  
1.8181818181818181</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="14">
            <Accordion.Header>
              Bài 14: Cho số tự nhiên N bất kỳ, tính tổng S= 1+ 1/2! + 1/3! + … + 1/N!
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai14} />
              <h3>Kết quả:</h3>
              <h5>Đỗ Duy Hưng 20183754</h5><h5>  
1.7182818011463847</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="15">
            <Accordion.Header>
              Bài 15: Cho số tự nhiên N bất kỳ,
              tính tổng S=1+1/(1+2!) + 1/(1+2!+3!)+ ..+ 1/(1+2!+3!+..+N!)

            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai15} />
              <h3>Kết quả:</h3>
              <h5>Đỗ Duy Hưng 20183754</h5><h5>  
1.482622338259841</h5>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="16">
            <Accordion.Header>
              Bài 16: Dãy Fibonaxi 1, 2, 3, … F(k) = F(k-1) + F(k-2). Tính số Fibonaxi thứ N.
            </Accordion.Header>
            <Accordion.Body>
              <Image src={bai16} />
              <h3>Kết quả:</h3>
              <h5>Đỗ Duy Hưng 20183754</h5><h5> 
8</h5>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default CompoBaitaptuan1;