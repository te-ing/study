"use strict";

function resultPrint()  {
  const source = document.getElementById('source').value; // input값 가져오기
  const sourceC = source.normalize('NFC'); // 자모결합

  document.getElementById("target").innerText = sourceC;
}