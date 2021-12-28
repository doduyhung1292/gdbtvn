 import * as React from 'react';
import { Accordion, Col, Container, Row, Image } from 'react-bootstrap';
import ReactEmbedGist from 'react-embed-gist';

function CompoBaitaptuan3() {
  const bai1 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var str = " odao   oaso f   efw   ";
    str = str.replace(/\s+/g, ' ');
    var arr = str.split('');
    for(var i = 0; i<arr.length; i++) {
      if (arr[i] == " ") arr.splice(i,1);
      else break;
    }
    for(i=arr.length-1; i>=0; i--) {
      if (arr[i] == " ") arr.splice(i,1);
      else break;
    }
    var str2 = arr.join('');

    result.push(str2 + " ");
  return  result; }

  const bai2 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var str = "aoeabceorabc";

    var dem = 0;
    for (var i = 0; i<str.length; i++) {
      if(str[i] == "a" && str[i+1] == "b" && str[i+2] == "c") {dem++;}
    }

    result.push(dem);
  return  result; }

  const bai3 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var str = "Nguyen van anh";
    str.trim();
    var index = str.lastIndexOf(" ");

    var results = str.slice(index+1, str.length)
    result.push(results);   
  return  result; }

  const bai4 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var str = "Nguyen van anh";
    str.trim();
    var index = str.indexOf(" ");

    var results = str.slice(0, index);
    result.push(results);
    return  result; }

  const bai5 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var str = "01010111101";
    var arr = str.split('');
    for (var i = 0 ;i< arr.length; i++) { 
      if(arr[i]==0) arr[i]=2;
      else arr[i]=0;
    }
    for (i = 0 ;i< arr.length; i++) { 
      if(arr[i]==2) arr[i]=1;
    }
    var str2 = arr.join('');
    result.push(str2);
  return  result; }


  const bai6 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var str = "abcdefgh";
    var arr = str.split('');
    var arr2  = [];
    for (var i = arr.length-1; i>=0; i--) { 
        arr2[arr.length-1 - i] = arr[i];
    }
    var str2 = arr2.join('');
    result.push(str2);
  return  result; }


  const bai7 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var str = "ab2cd3ef34gh";
    var arr = str.split('');
    var arr2  = [];
    for (var i = 0; i<arr.length; i++) { 
        if (arr[i] == "0" || arr[i] == "1" || arr[i] == "2" || arr[i] == "3" || arr[i] == "4" || arr[i] == "5" || arr[i] == "6" || arr[i] == "7" || arr[i] == "8" || arr[i] == "9" ) {arr2[i] = "$"} else {arr2[i] = arr[i];}
    }
    var str2 = arr2.join('');
    result.push(str2);
      
  return  result; }

  const bai8 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var str = "abc xyaz aoe ekz eoa aoe dkz aoe";
    var str2 = "aoe";

    var i = 0, dem = 0;
    while (i < str.length) {
      if (!str.indexOf(str2, i)) {console.log("not found"); break;} else { dem++;}
      i = str.indexOf(str2, i)+str2.length;

    } 
    result.push(dem);
  return  result; }

  const bai9 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var str = "abcdefgh";
    var arr = str.split('');
    var i =3, j = 4;
    var temp = arr[i];
    arr[i] = arr[j]; arr[j] = temp;
    var str2 = arr.join('');
    result.push(str2);
  return  result; }


  const bai10 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var arr = [
      "abc",
      "abel",
      "eoeak",
      "e",
      "ew"
    ];
    var arr2 = [];
    for (var i = 0; i<arr.length; i++) {
      arr2[i] = arr[i].length;
    }
    arr2.sort((a, b) => {return b-a;})
    result.push(arr2[0]);
  return  result; }

  const bai11 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    console.log("Đỗ Duy Hưng 20183754 ");

    var arr = [
      "Nguyễn Văn An",
      "La Peo La",
      "Nguyễn Thị An",
      "La Peo Minh",
      "Nguyễn Minh An",
      "Kim Me"
    ];
    var dem = 0;
    for (var i = 0; i<arr.length; i++) {
      if ( arr[i].endsWith(" An")) dem++;
    }
    result.push(dem);
  return  result; }

  const bai12 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var arr = [
      "Nguyễn Văn An",
      "La Peo La",
      "Nguyễn Thị An",
      "La Peo Minh",
      "Nguyễn Minh An",
      "Kim Me"
    ];
    var dem = 0;
    for (var i = 0; i<arr.length; i++) {
      if ( arr[i].includes(" Thị ", 0)) dem++;
    }
    result.push(dem);
  return  result; }

  const bai13 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var arr = [
      "Nguyễn Văn An",
      "La Peo La",
      "Nguyễn Thị An",
      "La Peo Minh",
      "Nguyễn Minh Hường",
      "Kim Hoa"
    ];
    var dem = 0;
    for (var i = 0; i<arr.length; i++) {
      if ( arr[i].startsWith("H", arr[i].lastIndexOf(" ")+1)) dem++;
    }
    result.push(dem);
  return  result; }

  const bai14 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    var s1="1111100000";
    var arr1 = s1.split('');
    var arr = [];
    var temp=0;
    for(var i=0; i<arr1.length-1; i++) { 
      temp = arr1[i];
      arr1[i] = arr1[i+1];
      arr1[i+1] = temp;
      arr.push(arr1.join(''));
    }
    result.push(arr+ " ");
  return  result; }

  const bai15 = () => {
    let result = ["Đỗ Duy Hưng 20183754 .....    "];
    console.log("Đỗ Duy Hưng 20183754 ");

    var str= "1111100000" ;
    var arr = str.split('');
    var str2 ="2222";

    var str3 = str.slice(0, str.length/2) + str2 + str.slice(str.length/2 + 1, str.length);
    result.push(str3);
  return  result; }


  return (
      <Container>
        <Row>
        <Col></Col>
        <Col xs={10}></Col>
    
       <Accordion>    
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Bài 01: Cho trước 1 xâu ký tự là họ tên người đầy đủ nhưng khi nhập có thể thừa một số dấu cách. Hãy xóa đi các dấu cách thừa và in ra họ tên chính xác.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/1d4c1abec122259d83d68bb7665689fd" />
              <h3>Kết quả:</h3>
              <div> {bai1()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Bài 02: Cho trước xâu ký tự bất kỳ. Hãy đếm xem trong xâu có bao nhiêu lần xuất hiện xâu con “abc”
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/ec7e62eebbd5c300fe0d43a9d772037a" />
              <h3>Kết quả:</h3>
              <div> {bai2()}</div>
            </Accordion.Body>
          </Accordion.Item>

       <Accordion.Item eventKey="3">
            <Accordion.Header>
              Bài 03: Cho trước 1 xâu ký tự là họ tên người đầy đủ, hãy tách ra phần tên của người này
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/940496115b2276280c3b33444a962a3e" />
              <h3>Kết quả:</h3>
              <div> {bai3()}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              Bài 04: Cho trước 1 xâu ký tự là họ tên người đầy đủ, hãy tách ra phần họ của người này
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/df8de684f37c2a6e8abe22a6854a1c45" />
              <h3>Kết quả:</h3>
              <div> {bai4()}</div>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="5">
            <Accordion.Header>
              Bài 05: Cho một xâu ký tự bao gồm toàn các ký tự 0,1. Hãy biến đổi xâu này theo cách 0🡪1, 1🡪0 và in ra kết quả.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/5c4904046a50fd6920afb8dd24422272" />
              <h3>Kết quả:</h3>
              <div> {bai5()}</div>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="6">
            <Accordion.Header>
              Bài 06: Cho trước xâu ký tự S, in ra xâu S1 ngược lại xâu S.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/ab2bd290382317ef4f96bec876e2c119" />
              <h3>Kết quả:</h3>
              <div> {bai6()}</div>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="7">
            <Accordion.Header>
              Bài 07: Cho trước xâu ký tự S. Hãy biến đổi S theo quy tắc sau: Chữ số thì biến thành “$”, ký tự thì giữ nguyên.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/09d708748f10b38034f5d95ff54d7745" />
              <h3>Kết quả:</h3>
              <div> {bai7()}</div>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="8">
            <Accordion.Header>
              Bài 08: Cho trước 2 xâu ký tự S1, S2. Hãy đếm xem xâu S1 xuất hiện trong S2 tại bao nhiêu vị trí.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/f12fe7edce3715ece3297482313ea353" />
              <h3>Kết quả:</h3>
              <div> {bai8()}</div>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="9">
            <Accordion.Header>
              Bài 09: Cho xâu S và 2 chỉ số i, j. Hãy đổi chỗ 2 vị trí i, j trong S.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/4436f4283ec49cdc8287dedfcb004a5a" />
              <h3>Kết quả:</h3>
              <div> {bai9()}</div>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="10">
            <Accordion.Header>
              Bài 10: Cho mảng xâu ký tự S1, S2, ..Sn. Hãy tìm và in ra phần tử xâu có độ dài lớn nhất.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/1318a7cfc333ff2cbeafc51a753e8f19" />
              <h3>Kết quả:</h3>
              <div> {bai10()}</div>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="11">
            <Accordion.Header>
              Bài 11: Cho danh sách họ tên đầy đủ học sinh. Hãy đếm xem có bao nhiêu bạn tên “An”.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/ba3bf5b1d7f0a073f08a2f6e8bdf9582" />
              <h3>Kết quả:</h3>
              <div> {bai11()}</div>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="12">
            <Accordion.Header>
              Bài 12: Cho danh sách họ tên đầy đủ học sinh. Hãy đếm xem có bao nhiêu bạn có phần đệm là  “Thị”.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/462c1c51bec875f31fa755153594fdb6" />
              <h3>Kết quả:</h3>
              <div> {bai12()}</div>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="13">
            <Accordion.Header>
              Bài 13: Cho danh sách họ tên đầy đủ học sinh. Hãy đếm xem có bao nhiêu bạn  có tên bắt đầu bằng chữ “H”.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/0639b3ca6846d7079f03288d4e057062" />
              <h3>Kết quả:</h3>
              <div> {bai13()}</div>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="14">
            <Accordion.Header>
              Bài 14: Dãy xâu ký tự S1, S2,… được cho theo quy tắc sau: S1= “1111100000”, Sk thu được từ Sk-1 bằng cách thay đổi cho lần lượt các vị trí  1-2;  2-3;  3-4; 4-5; 5-6;  6-7; 7-8;  8-9; 9-10. Cho trước số tự nhiên N, Hãy in ra xâu Sn.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/c678c3c332fd50bdd8d3e43cb17d8394" />
              <h3>Kết quả:</h3>
              <div> {bai14()}</div>
            </Accordion.Body>
          </Accordion.Item>

<Accordion.Item eventKey="15">
            <Accordion.Header>
              Bài 15: Cho trước 2 xâu ký tự S, S2. Hãy chèn xâu S1 vào giữa xâu S2 và in kết quả.
            </Accordion.Header>
            <Accordion.Body>
              <ReactEmbedGist gist="doduyhung1292/918c89aa19a1c19b1b8286cfb523d419" />
              <h3>Kết quả:</h3>
              <div> {bai15()}</div>
            </Accordion.Body>
          </Accordion.Item>


       </Accordion>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default CompoBaitaptuan3;