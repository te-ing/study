class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    throw new Error("서브클래스에서 처리하도록 설계");
  }

  get volumeCredits() {
    throw new Error("서브클래스에서 처리하도록 설계");
  }
}

class TragedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 40000;
    if (this.performance.audience > 30)
      result += 1000 * (this.performance.audience - 30);
    return result;
  }
  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0);
  }
}
class ComedyCalculator extends PerformanceCalculator {
  get amount() {
    let result = 30000;
    if (this.performance.audience > 20)
      result += 1000 + 500 * (this.performance.audience - 20);
    result += 300 * this.performance.audience;

    return result;
  }
  get volumeCredits() {
    return Math.floor(this.performance.audience / 5);
  }
}

export default function createStatementData(invoice, plays) {
  const statementData = {};
  statementData.customer = invoice.customer; // 고객데이터를 중간 데이터로 옮김
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);
  return statementData;

  function enrichPerformance(aPerformance) {
    // 각각 공연별로 이름, 총금액, 총포인트들을 새로할당
    const calculator = createPerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result);
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result; // 얕은복사
  }

  function createPerformanceCalculator(aPerformance, aPlay) {
    switch (aPlay.type) {
      case "tragedy":
        return new TragedyCalculator(aPerformance, aPlay);
      case "comedy":
        return new ComedyCalculator(aPerformance, aPlay);
      default:
        throw new Error(`알 수 없는 장르: ${aPlay.type}`);
    }
  }
  // 타입 (tragedy, comedy)
  function playFor(aPerformance) {
    return plays[aPerformance.playID];
  }

  function totalVolumeCredits(data) {
    return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
  }

  function totalAmount(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }
}
