import * as React from 'react';
import { Accordion, Col, Container, Row, Image } from 'react-bootstrap';
import ReactEmbedGist from 'react-embed-gist';


function CompoBaitaptuan2() {
  const bai1 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var arr = [1, 3, 2, 6, 4 ,7, 8, 10, 2];
    arr.sort(function(a, b) {
      return a-b;
    });
    result.push(arr + " ");
  return  result; }

  const bai2 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    console.log("Đỗ Duy Hưng 20183754 ");
    var arr = [8, 3, 2, 6, 4 ,7, 8, 10, 2, 13];

    function isPrime(n) { 
      if (n<2) return false; 
      for (var i= 2; i<n-1; i++) { 
        if (n%i == 0) {return false;}; 
      } 
      return true; 
    } 

    var k = 0;

    while (k<arr.length) {  
      if (isPrime(arr[k])) {result.push(arr[k]+ " ") } 
      k++;
      if (k == arr.length) break;

    } 
  return  result; }

  const bai3 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var arr = [8, 3, 2, 6, 4 ,7, 2, 8, 10, 2, 13];

    var temp = arr[0];
    for (var i=1; i< arr.length; i++) {
      if(arr[i] <= temp) temp = arr[i];
      }
    result.push(" So nho nhat:", temp + " ");

    for (i = 0; i<arr.length; i++) {
      if (arr[i] == temp) result.push(i+ " ");
      }
  return  result; }

  const bai4 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var arr = [8, 3, 2, 6, 4 ,7,13, 2, 8, 10, 2, 13];

    var temp = arr[0];
    for (var i=1; i< arr.length; i++) {
      if(arr[i] >= temp) temp = arr[i];
      }
    result.push(" So lon nhat:", temp + " ");

    for (i = 0; i<arr.length; i++) {
      if (arr[i] == temp) result.push(i);
      }
  return  result; }

  const bai5 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var arr = [8, 3, 2, 6, 4 ,7, 1, 13, 2, 8, 10, 2, 13, 1];

    function isPrime(n) { 
      if (n<2) return false; 
      for (var i= 2; i<n-1; i++) { 
        if (n%i == 0) {return false;}; 
      } 
      return true; 
    } 
    var snt = 0, hs = 0, k = 0;

    while (k<arr.length) { 
      if (isPrime(arr[k]) && arr[k] !== 1) snt++;
      if (!isPrime(arr[k]) && arr[k] !== 1) hs++;
      k++;
      if (k == arr.length) break;
    } 
    result.push("so so nguyen to: ", snt + " ");
    result.push("so hop so: ", hs + " ");
  return  result; }

  const bai6 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var arr = [8, 3, 2, 3, 5 ,6, 1, 9, 2, 2, 10, 5, 13, 1];
    var arr1 = [];
    for (var i = 0; i<arr.length; i++) { 
      for (var j = i+1; j < arr.length; j++) { 
        if(arr[j] % arr[i] == 0) {result.push(arr[i] + " "); break;}
      }
    }
  return  result; }

  const bai7 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var arr = [8, 3, 2, 6, 4 ,7, 1, 13, 2, 8, 10, 2, 13, 1];

    arr.sort((a, b) => {return a-b;}) // Sắp xếp tăng dần

    var minOk = arr[0];
    for(var i = 1; i<arr.length; i++) {
      if (arr[i] !== arr[i+1] && arr[i] !== arr[i-1]) {minOk = arr[i]; break;}
    }
    result.push(minOk);
  return  result; }

  const bai8 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var arr = [8, 3, 2, 6, 0, 4 ,7, 1, 13, 0];
    arr.splice(arr.indexOf(0), 1);
    result.push(arr);
  return  result; }

  const bai9 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var arr = [8, 3, 2, 6, 4 ,7, 1, 13, 2, 8, 10, 2, 13, 1];
    var c = 2;
    var eC=0, uC=0, dC=0;
    for (var i=0; i<arr.length; i++) {
      if (arr[i] == c) {eC++;}
      else if (arr[i] >c) {uC++;}
      else {dC++;}
    }
    result.push("So so lon hon C: ", uC + " ");
    result.push(" So so nho hon C: ", dC + " ");
    result.push(" So so bang C: ", eC + " ");
  return  result; }

  const bai10 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var arr = [8, 3, 2, 6, 5 ,6, 1, 13, 2, 2, 10, 2, 13, 1];

    var temp = 1, i=0;
    var arr2 = [];
     while (i<arr.length) {
       if (arr[i] == arr[i-1]) temp += 1;
       else {arr2.push(temp); temp = 1;}
       i++
     }
    var max = arr2[0];
    for (var i=1; i< arr2.length; i++) {
      if(arr2[i] >= max) max = arr2[i];
      }
    result.push("dãy con dài nhất: ", max + " ");
    var index=0;
    for(i = 0; i<arr2.length; i++) {
      if (arr2[i] == max) {
        for(var j=0; j<=i-1; j++) {
          index += arr2[j];
        }
      }
    }
    result.push("chỉ số đầu tiên: ", index+1 + " ");
  return  result; }

  const bai11 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var arr = [8, 3, 2, 3, 5 ,6, 1, 13, 2, 2, 10, 5, 13, 1];
    var arr2 = [];
    var k=0, temp=1;
    while (k< arr.length) {
      if ( arr[k] > arr[k-1]) temp += 1;
      else {arr2.push(temp); temp = 1;}
      k++;
    }

    var max = arr2[0];
    for (var i=1; i< arr2.length; i++) {
      if(arr2[i] >= max) max = arr2[i];
      }

    var index=0;
    for(i = 0; i<arr2.length; i++) {
      if (arr2[i] == max) {
        for(var j=0; j<=i-1; j++) {
          index += arr2[j];
        }
      }
    }
    var start = index - 1;
    var end = start + max;
    for ( i = start; i < end; i++) {
      result.push(arr[i] + " ");
    }
  return  result; }

  const bai12 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var arr = [3, 5, 13];
    var arr1 = [8, 3, 2, 3, 5 ,6, 1, 13, 2, 2, 10, 5, 13, 1];

    var a = 0, b = 0;
    while(a<= arr.length && b<= arr1.length ) {
      for (var j=b; j < arr1.length; j++ ) {
          if (arr[a] == arr1[j]) {arr.splice(0, j);}
          a++; b = j++; break;}
      if(arr == []) result.push("La day con");
         
    }
  return  result; }
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
              <ReactEmbedGist gist="doduyhung1292/0206f8e6b741a9b0c7f70a8cf8f77cea" />
              <h3>Kết quả:</h3>
              <div> {bai1()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Bài 02: Cho dãy số tự nhiên, in ra màn hình tất cả các số nguyên tố của dãy này.
            </Accordion.Header>
            <Accordion.Body>
            <ReactEmbedGist gist="doduyhung1292/c9efb11aa9476f0bb81e48e19fa33d37" />
              <h3>Kết quả:</h3>
              <div> {bai2()}</div>
              
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              Bài 03: Cho một dãy các số tự nhiên, tìm và in ra 1 giá trị min của dãy này và tất cả các chỉ số ứng với giá trị min này.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/ed99b6d258591f41a524b1812ce12eef" />
              <h3>Kết quả:</h3>
              <div> {bai3()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Bài 04: Cho một dãy các số tự nhiên, tìm và in ra 1 giá trị max của dãy này và tất cả các chỉ số ứng với giá trị max này
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/e3f0c627aacd1df2443cad96acc60d10" />
              <h3>Kết quả:</h3>
              <div> {bai4()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              Bài 05: Cho một dãy số tự nhiên, hãy đếm xem trong dãy số trên có bao nhiêu số nguyên tố, có bao nhiêu hợp số.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/ad1092ed88b669e963b9e6cf0056bcef" />
              <h3>Kết quả:</h3>
              <div> {bai5()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              Bài 06: Cho một dãy số tự nhiên, hãy in ra tất cả các số hạng của dãy trên thỏa mãn: số này là ước số thực sự của 1 số hạng khác trong dãy trên.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/4d713353bdc3a9b9037e8ea69e787494" />
              <h3>Kết quả:</h3>
              <div> {bai6()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              Bài 07: Cho một dãy số tự nhiên, hãy tìm 1 số tự nhiên nhỏ nhất c không bằng bất cứ số nào trong dãy trên.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/56859a5797a5821934eb71628782be02" />
              <h3>Kết quả:</h3>
              <div> {bai7()}</div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8">
            <Accordion.Header>
              Bài 08: Cho một dãy số nguyên bất kỳ, hãy xóa đi trong dãy này các số hạng =0 và in ra màn hình các số còn lại.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/7c3e9d53b11ed973cf9df1e51e447a0c" />
              <h3>Kết quả:</h3>
              <div> {bai8()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              Cho một dãy số nguyên bất kỳ, cho trước 1 số c. Hãy đếm có bao nhiêu số của dãy trên nhỏ hơn c; lớn hơn c; bằng c.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/2462db2739bd6dbbef7eae8574abf6b3" />
              <h3>Kết quả:</h3>
              <div> {bai9()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              Bài 10: Cho một dãy số nguyên bất kỳ, hãy tìm ra 1 một dãy số liền nhau dài nhất bao gồm các số bằng nhau. Hãy in ra số lượng và các chỉ số đầu tiên của dãy con này.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/6745616f7f19fa6b78c15a0d84889874" />
              <h3>Kết quả:</h3>
              <div> {bai10()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>
              Bài 11: Cho một dãy số nguyên bất kỳ. Hãy tìm 1 một dãy con liên tục đơn điệu tăng dài nhất của dãy trên.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/722a42d30fe942f6748610c41780b81c" />
              <h3>Kết quả:</h3>
              <div> {bai11()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>
              Bài 12: Dãy số a[ ] được gọi là dãy con của b[ ] nếu từ b [ ] xóa đi 1 vài số sẽ thu được   a[ ]. Cho trước 2 dãy số nguyên a[ ]; b[ ]. Hãy kiểm tra xem a[ ] có là dãy con của b[ ] hay không?.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/f0f2a857b500111635d3ce90db9ac9c5" />
              <h3>Kết quả:</h3>
              <div> {bai12()}</div>
            </Accordion.Body>
          </Accordion.Item>

 		</Accordion>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default CompoBaitaptuan2;