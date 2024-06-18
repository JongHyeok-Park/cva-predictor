const formatFactorList = (stroke) => {
  let factorList = [];

  if (stroke.isWeight) {
    factorList.push("높은 체중");
  }
  if (stroke.isAge) {
    factorList.push("높은 연령대");
  }
  if (stroke.isBloodPressure) {
    factorList.push("높은 혈압");
  }
  if (stroke.isHeartDisease) {
    factorList.push("심혈관계 질환 보유");
  }
  
  return factorList;
}

const calcStrokeToText = (stroke) => {
  let result;

  if (stroke.probability < 0.4) {
    result = '양호';
  } else if (stroke.probability < 0.6) {
    result = '주의';
  } else {
    result = '위험';
  }

  return result;
}

export { formatFactorList, calcStrokeToText };