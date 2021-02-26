"use strict";

function printSource()  {
  const source = document.getElementById('source').value;
  const decodingSource = escape(source)
  const composingSource = decodingSource.normalize('NFC');
  const incodingSource = unescape(composingSource);
  document.getElementById("target").innerText = source;
  document.getElementById("decode").innerText = decodingSource;
  document.getElementById("composedDecode").innerText = composingSource;
  document.getElementById("result").innerText = incodingSource;
}

function secondePrintSource()  {
  const secondeSource = document.getElementById('secondeSource').value;
  const normalizeSource = secondeSource.normalize('NFD');
  const normalizeNFCSource = secondeSource.normalize('NFC');
  const secondeIncodingSource = unescape(normalizeNFCSource);

  const secondeDecodingSource = escape(secondeSource);
  const normalizeDecodingSource = escape(normalizeSource);
  const normalizeDecodingNFCSource = escape(normalizeNFCSource);

  document.getElementById("secondeDecode").innerText = secondeDecodingSource;
  document.getElementById("secondeTarget").innerText = normalizeDecodingSource;
  document.getElementById("secondeComposedTarget").innerText = normalizeDecodingNFCSource;
  document.getElementById("secondeResult").innerText = secondeIncodingSource;

}