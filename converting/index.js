"use strict";

function printSource()  {
  const source = document.getElementById('source').value;
  const decodingSource = escape(source)
  document.getElementById("target").innerText = source;
  document.getElementById("decode").innerText = decodingSource;
}

function secondePrintSource()  {
  const secondeSource = document.getElementById('secondeSource').value;
  const normalizeSource = secondeSource.normalize('NFD');
  const secondeDecodingSource = escape(secondeSource);
  const normalizeDecodingSource = escape(normalizeSource);
  document.getElementById("secondeDecode").innerText = secondeDecodingSource;
  document.getElementById("secondeTarget").innerText = normalizeDecodingSource;
}
