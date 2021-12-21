import * as React from 'react';
import { Accordion, Col, Container, Row, Image } from 'react-bootstrap';
import Gist from "react-gist";
import ReactEmbedGist from 'react-embed-gist';


function CompoBaitaptuan1() {
  const bai1 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
  for ( var i = 2; i < 100 ; i++) {
    var j = 2;
    while (j<i-1) {
      if (i % j == 0) {result.push(i + ' '); break;}
      else {j++;}
    }
  }
  return  result; }

const bai2 = () => {
    let result = ["Đỗ Duy Hưng 20183754 ......    "];
    function isPrime(n) {
    if (n<2) return false;
    for ( var i= 2; i<n-1; i++) {
      if (n%i == 0) {return false;};
    }

    return true;
  }
  var k = 2, dem=0;
  while (k<100) {
    if (isPrime(k)) {result.push(k + " "); dem +=1;}
    if(dem == 20) break;
    k++;
  }
  
  return  result; }

  const bai3 = () => {
    let result = ["Đỗ Duy Hưng 20183754 ......    "];
    console.log("Đỗ Duy Hưng 20183754 ");
    function isPrime(n) {
      if (n<2) return false;
      for (var i= 2; i<n-1; i++) {
        if (n%i == 0) {return false;};
      }

      return true;
    }
    var j = 1000;
    while (j<2000) {
      if (isPrime(j) == true) result.push(j + " ");
      j++;
    }
  
  return  result; }

  const bai4 = () => {
    let result = ["Đỗ Duy Hưng 20183754 ......    "];
    console.log("Đỗ Duy Hưng 20183754 ");
    for (var i = 1000; i<=2000; i++) {
      if (i%3==0 && i%7==0 & i%5==0) result.push(i + " ");
    }
  
  return  result; }

  const bai6 = () => {
    let result = ["Đỗ Duy Hưng 20183754 ......    "];
    function isPerfect(n) {
      var tem = 0;
      for ( var i=0; i<n; i++) {
        if (n%i == 0 ) tem += i;
      }
      if (tem !== 0 && tem == n) return true;
      else return false;
    }
    var dem = 0;
    var n = 1;
    while (n< 10000) {
      if(isPerfect(n) == true) {result.push(n + " "); dem++;}
      if (dem == 5) break;
      n++;
}
  
  return  result; }

  const bai7 = () => {
    let result = ["Đỗ Duy Hưng 20183754 ......    "];
    console.log("Đỗ Duy Hưng 20183754 ");
  var a=0, b=0, c=0, d=0;
  for (var i=0; i<=100; i++) { 
    if (i%5 == 0) a +=1;
    if (i%5 == 1) b +=1;
    if (i%5 == 2) c +=1;
    if (i%5 == 3) d +=1;
  }
  result.push("Số số chia 5 dư 0: " + a + " ");
  result.push("Số số chia 5 dư 1: " + b + " ");
  result.push("Số số chia 5 dư 2: " + c + " ");
  result.push("Số số chia 5 dư 3: " + d + " ");
  
  return  result; }

const bai8 = () => {
    let result = ["Đỗ Duy Hưng 20183754 ......    "];
    var n = 145;
    for (var i = 2; i< n-1; i++) {
      if (n%i == 0 ) {result.push(i + " "); break;}
    }
  
  return  result; }

  const bai9 = () => {
    let result = ["Đỗ Duy Hưng 20183754 ......    "];
    let arr = [];
    var k = 1;
    var tem;
    function TRY(n) {
      for (var i = 2; i < n-1; i++) {
        if (n%i == 0 ) {
          arr.push(i);
          TRY(n/i);
          break;
        }
      }
      tem = n;
    }
    TRY(100);
    for (var i = 0; i< arr.length; i++) {
        k *=arr[i];
      }
    arr.push(tem/k);
    result.push(arr);
  
  return  result + arr; }

  const bai10 = () => {
    let result = ["Đỗ Duy Hưng 20183754 ......    "];
    let arr = [];
    var k = 1;
    var tem;
    function TRY(n) {
      for (var i = 2; i < n-1; i++) {
        if (n%i == 0 ) {
          arr.push(i);
          TRY(n/i);
          break;
        }
      }
      tem = n;
    }
    TRY(144);
    for (var i = 0; i< arr.length; i++) {
        k *=arr[i];
      }
    arr.push(tem/k);

    if (arr.length == 0) {result.push("..." + " ");}
   result.push(arr[0] + " ");
    var temp = arr[0];
    for(i=0; i<arr.length; i++) {
      
      // console.log(temp);
      if (arr[i] !== temp) { 
        temp = arr[i];
        result.push(temp + " ");
      }
    }
  
  return  result; }

  const bai11 = () => {
    let result = ["Đỗ Duy Hưng 20183754 ......    "];
    var arr = [1, 4, 5, 6, 7, 6, 8, 4];
    function swap(arra) {
      var random1 = Math.floor(Math.random()*arr.length);
      var random2 = Math.floor(Math.random()*arr.length);
      var temp = arr[random1];
      arr[random1] = arr[random2];
      arr[random2] = temp;
      result.push(arra + " ");
    } 
    swap(arr);
  
  return  result; }

  const bai12 = () => {
    let result = ["Đỗ Duy Hưng 20183754 ......    "];
    var arr = [];
    var n = 5;
    for (var i = 0; i<n; i++) {
      arr.push("*");
    }
    var arra;
    for (var i = 0; i<arr.length; i++) {
      arra += arr[i];
      result.push(arra);
    }
  
  return  result; }

  const bai1b = () => {
    let result = ["Đỗ Duy Hưng 20183754 ......    "];
    var sum = 0;
    var finalSum = 0;
    for (var i = 1; i<=10; i++) {
      sum +=i;
      finalSum += 1/sum;
    }
  
  return  finalSum; }

  const bai2b = () => {
    let result = ["Đỗ Duy Hưng 20183754 ......    "];
    var mul = 1;
    var finalSum = 0;
    for (var i = 1; i<=10; i++) {
      mul *=i;
     finalSum += 1/mul;
    }
  
  return  finalSum; }

  const bai3b = () => {
    let result = ["Đỗ Duy Hưng 20183754 ......    "];
    var mul = 1, sum = 0;
    var finalSum = 0;
    var arr = [];
    for (var i = 1; i<=10; i++) {
      mul *=i;
      arr.push(mul);
    }
    for (var i = 0; i< arr.length; i++) {
      sum += arr[i];
      finalSum += 1/sum
    }
  
  return  finalSum; }

  const bai4b = () => {
    let result = ["Đỗ Duy Hưng 20183754 ......    "];
    var k;
    function F(k) {
      if (k == 1) return 1;
      if (k == 2) return 2;
      return F(k-1) + F(k-2);
    }
    F(5);
  
  return  F(5); }


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
             <ReactEmbedGist gist="doduyhung1292/ce18a14bd2753c5ab2d1c3d5a736c925" />
              <h3>Kết quả:</h3>
              <div> {bai1()}</div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Bài 02: In ra màn hình 20 số nguyên tố đầu tiên
            </Accordion.Header>
            <Accordion.Body>
             <ReactEmbedGist gist="doduyhung1292/4cfe71aaef93802607e7f25c9c23df94" />
              <h3>Kết quả:</h3>
              <p> {bai2()}</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Bài 03: In ra màn hình tất cả các số nguyên tố từ 1000 đến 2000
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/30392eacbeeda7a1815c68471c260f79" />
              <h3>Kết quả:</h3>
              <p> {bai3()}</p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Bài 05: In ra màn hình các số nằm giữa 1000 và 2000 đồng thời chia hết cho 3,5,7
            </Accordion.Header>
            <Accordion.Body>
            <ReactEmbedGist gist="doduyhung1292/b520f6af0d9be770822d35f593bdfdc1" />
              <h3>Kết quả:</h3>
              <div>{bai4()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              Bài 06: In ra màn hình 5 số hoàn hảo đầu tiên (Số hoàn hảo là số có tổng bằng các ước số của mình kể cả 1)
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/5c0eefe7e57dfda3b42d4bbe90cab0a3" />
              <h3>Kết quả:</h3>
              <div>{bai6()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              Bài 07: Trong các số tự nhiên nhỏ hơn hoặc bằng 100, hãy đếm xem có bao nhiêu số
            </Accordion.Header>
            <Accordion.Body>
             <ReactEmbedGist gist="doduyhung1292/2136d1e0d8376f94a1847569cc717648" />
              <h3>Kết quả:</h3>
              <div>{bai7()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              Bài 08: Cho số tự nhiên N bất kỳ (đã gán trước đó), tìm và in ra ước số nguyên tố nhỏ nhất của N.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/5fc9f46f267261fe0c4e12e6a033f441" />
              <h3>Kết quả:</h3>
              <div>{bai8()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              Bài 09: Cho số tự nhiên N lớn hơn 1 bất kỳ (đã gán trước đó). In ra khai triển thành tích các số nguyên tố tính từ nhỏ đến lớn VD: 9🡪3.3; 12🡪2.2.3.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/72655bd185c164ef11321344fa7fdee9" />
              <h3>Kết quả:</h3>
              <div>{bai9()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              Bài 10: Cho trước số tự nhiên N bất kỳ (đã gán trước đó). In ra màn hình tất cả các ước số nguyên tố khác nhau của N.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/e16321caf48cdf6d52954a3ff8db3920" />
              <h3>Kết quả:</h3>
              <div>{bai10()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>
              Bài 11: Viết chương trình tráo đổi ngẫu nhiên vị trí một dãy số cho trước. Để lấy một số int ngẫu nhiên từ 0 đến n-1 ta dùng lệnh int i = Random. nextInt(n); 
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/ce296589f0e6fd6f542c3d85799968cf" />
              <h3>Kết quả:</h3>
              <div>{bai11()}</div>

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>
              Bài 12. Viết chương trình nhập chiều cao h từ bàn phím, sau đó hiển thị các tam giác hình sao có chiều cao h như dưới đây. Chú ý có kiểm tra điều kiện của h: h lớn hơn hoặc bằng 2, nhỏ hơn hoặc bằng 10. Nếu h nằm ngoài đoạn trên, yêu cầu người dùng nhập lại. (cho lựa chọn in tam giác xuôi hoặc ngược)
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/436db1408ed787bb5f4317f8d96d109c" />
              <h3>Kết quả:</h3>
              <div>{bai12()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <h3>B/ Bài tập về hàm và thủ tục (Method & function)   </h3>
          <Accordion.Item eventKey="13">
            <Accordion.Header>
              Bài 13: Cho số tự nhiên N bất kỳ.
              Tính tổng S=1+1/(1+2) + 1/(1+2+3) +…+ 1/(1+2+3+..+N)

            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/16a9210263ecc066514f6d14a296dc6e" />
              <h3>Kết quả:</h3>
              <div>{bai1b()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="14">
            <Accordion.Header>
              Bài 14: Cho số tự nhiên N bất kỳ, tính tổng S= 1+ 1/2! + 1/3! + … + 1/N!
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/082af9e481b47a2a67aad27b18965dbc" />
              <h3>Kết quả:</h3>
              <div>{bai2b()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="15">
            <Accordion.Header>
              Bài 15: Cho số tự nhiên N bất kỳ,
              tính tổng S=1+1/(1+2!) + 1/(1+2!+3!)+ ..+ 1/(1+2!+3!+..+N!)

            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/3d20fdfabd80cc2e131924e66e0aac4b" />
              <h3>Kết quả:</h3>
              <div>{bai3b()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="16">
            <Accordion.Header>
              Bài 16: Dãy Fibonaxi 1, 2, 3, … F(k) = F(k-1) + F(k-2). Tính số Fibonaxi thứ N.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/8f7b39673fec624bcbf4b95a4add4f93" />
              <h3>Kết quả:</h3>
              <div>{bai4b()}</div>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default CompoBaitaptuan1;