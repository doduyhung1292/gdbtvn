import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbarr from './navbarr.js';
import CompoBaitaptuan1 from './CompoBaitaptuan1.js';
import CompoBaitaptuan2 from './CompoBaitaptuan2.js';
import CompoBaitaptuan3 from './CompoBaitaptuan3.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'react-bootstrap';



export default function App() {
  return (
    <div>
      <Navbarr/>
      <h2 style = {{textAlign: "center"}}>Giao diện bài tập tuần 1, 2, 3</h2>
      <h3 style = {{paddingBottom: "1%", paddingTop: "3%"}}>Họ và tên: Đỗ Duy Hưng</h3>
      <h3 style = {{paddingBottom: "4%"}}>MSSV: 20183754</h3>
      <h2>
         <Badge bg="secondary">Bài tập tuần 1</Badge>
      </h2>
      <CompoBaitaptuan1/>
      <h2>
         <Badge bg="secondary">Bài tập tuần 2</Badge>
      </h2>
      <CompoBaitaptuan2/>
      <h2>
         <Badge bg="secondary">Bài tập tuần 3</Badge>
      </h2>
      <CompoBaitaptuan3/>
    </div>

  )}
    








