// #1
function getDayOfWeek(dayNumber) {
    let dayName;
  
    switch (dayNumber) {
      case 1:
        dayName = 'понедельник';
        break;
      case 2:
        dayName = 'вторник';
        break;
      case 3:
        dayName = 'среда';
        break;
      case 4:
        dayName = 'четверг';
        break;
      case 5:
        dayName = 'пятница';
        break;
      case 6:
        dayName = 'суббота';
        break;
      case 7:
        dayName = 'воскресенье';
        break;
      default:
        dayName = 'некорректный день недели';
    }
  
    return dayName;
  }
  
  const dayNumber = 69; // Здесь можно изменить номер дня недели
  
  const dayName = getDayOfWeek(dayNumber);
  console.log(dayName);

  // #2
  function определитьМасть(номерМасти) {
    switch (номерМасти) {
      case 1:
        return "пики";
      case 2:
        return "трефы";
      case 3:
        return "бубны";
      case 4:
        return "червы";
      default:
        return "Некорректный номер масти";
    }
  }
  
  // ример использования:
  const номерМасти = 3;
  const названиеМасти = определитьМасть(номерМасти);
  console.log(названиеМасти);

// #3
function Card(NumM, NumD) {
    let NameM;
    let NameD;
  
    switch (NumM) {
      case 1:
        NameM = "пики";
        break;
      case 2:
        NameM = "трефы";
        break;
      case 3:
        NameM = "бубны";
        break;
      case 4:
        NameM = "червы";
        break;
      default:
        return "Некорректный номер масти";
    }
  
    if (NumD >= 6 && NumD <= 14) {
      switch (NumD) {
        case 11:
            NameD = "валет";
          break;
        case 12:
            NameD = "дама";
          break;
        case 13:
            NameD = "король";
          break;
        case 14:
            NameD = "туз";
          break;
        default:
            NameD = NameD.toString();
          break;
      }
      return NameD + " " + NameM;
    } else {
      return "Некорректный номер достоинства";
    }
  }
  
  // Пример использования:
  const NumM = 1;
  const NumD = 14;
  const FullName = Card(NumM, NumD);
  console.log(FullName);