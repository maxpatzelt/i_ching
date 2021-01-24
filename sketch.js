function setup() {
  frameRate(1)
  canvasx = 1000
  canvasy = 1000
  rectlength = 300
  rectheight = 20
  y_pos1 = 200
  y_pos2 = y_pos1 + 40
  y_pos3 = y_pos2 + 40
  y_pos4 = y_pos3 + 40
  y_pos5 = y_pos4 + 40
  y_pos6 = y_pos5 + 40
  hexnumTotal = 0;

  createCanvas(canvasx, canvasy);

  centerx = (canvasx / 2) - (rectlength / 2);
  centery = (canvasy / 2) - (rectheight / 2);

}

function draw() {
  clear()
  background(10, 70, 0.1, 0.6);
  hexTotal = [0, 0, 0, 0, 0, 0]
  hex1 = hexLine(y_pos1);
  hex2 = hexLine(y_pos2);
  hex3 = hexLine(y_pos3);
  hex4 = hexLine(y_pos4);
  hex5 = hexLine(y_pos5);
  hex6 = hexLine(y_pos6);

  chooseHex(hex1, hex2, hex3, hex4, hex5, hex6)
}

function chooseHex(line1, line2, line3, line4, line5, line6) {
  hexTotal = [line1, line2, line3, line4, line5, line6]
  upperTrigram = [line1, line2, line3]
  lowerTrigram = [line4, line5, line6]
  text(hexTotal, centerx, centery)
  heavenName = ''
  earthName = ''
  hextotalName = ''
  hextotalNum = 0;

  if ((upperTrigram[0] == 9 || upperTrigram[0] == 7) && (upperTrigram[1] == 9 || upperTrigram[1] == 7) && (upperTrigram[2] == 9 || upperTrigram[2] == 7)) {
    heavenName = 'heaven'
  } else if ((upperTrigram[0] == 8 || upperTrigram[0] == 6) && (upperTrigram[1] == 9 || upperTrigram[1] == 7) && (upperTrigram[2] == 9 || upperTrigram[2] == 7)) {
    heavenName = 'lake'
  } else if ((upperTrigram[0] == 9 || upperTrigram[0] == 7) && (upperTrigram[1] == 8 || upperTrigram[1] == 6) && (upperTrigram[2] == 9 || upperTrigram[2] == 7)) {
    heavenName = 'fire'
  } else if ((upperTrigram[0] == 8 || upperTrigram[0] == 6) && (upperTrigram[1] == 8 || upperTrigram[1] == 6) && (upperTrigram[2] == 9 || upperTrigram[2] == 7)) {
    heavenName = 'thunder'
  } else if ((upperTrigram[0] == 9 || upperTrigram[0] == 7) && (upperTrigram[1] == 9 || upperTrigram[1] == 7) && (upperTrigram[2] == 8 || upperTrigram[2] == 6)) {
    heavenName = 'wind'
  } else if ((upperTrigram[0] == 8 || upperTrigram[0] == 6) && (upperTrigram[1] == 9 || upperTrigram[1] == 7) && (upperTrigram[2] == 8 || upperTrigram[2] == 6)) {
    heavenName = 'water'
  } else if ((upperTrigram[0] == 9 || upperTrigram[0] == 7) && (upperTrigram[1] == 8 || upperTrigram[1] == 6) && (upperTrigram[2] == 8 || upperTrigram[2] == 6)) {
    heavenName = 'mountain'
  } else if ((upperTrigram[0] == 8 || upperTrigram[0] == 6) && (upperTrigram[1] == 8 || upperTrigram[1] == 6) && (upperTrigram[2] == 8 || upperTrigram[2] == 6)) {
    heavenName = 'mountain'
  }

  if ((lowerTrigram[0] == 9 || lowerTrigram[0] == 7) && (lowerTrigram[1] == 9 || lowerTrigram[1] == 7) && (lowerTrigram[2] == 9 || lowerTrigram[2] == 7)) {
    earthName = 'heaven'
  } else if ((lowerTrigram[0] == 8 || lowerTrigram[0] == 6) && (lowerTrigram[1] == 9 || lowerTrigram[1] == 7) && (lowerTrigram[2] == 9 || lowerTrigram[2] == 7)) {
    earthName = 'lake'
  } else if ((lowerTrigram[0] == 9 || lowerTrigram[0] == 7) && (lowerTrigram[1] == 8 || lowerTrigram[1] == 6) && (lowerTrigram[2] == 9 || lowerTrigram[2] == 7)) {
    earthName = 'fire'
  } else if ((lowerTrigram[0] == 8 || lowerTrigram[0] == 6) && (lowerTrigram[1] == 8 || lowerTrigram[1] == 6) && (lowerTrigram[2] == 9 || lowerTrigram[2] == 7)) {
    earthName = 'thunder'
  } else if ((lowerTrigram[0] == 9 || lowerTrigram[0] == 7) && (lowerTrigram[1] == 9 || lowerTrigram[1] == 7) && (lowerTrigram[2] == 8 || lowerTrigram[2] == 6)) {
    earthName = 'wind'
  } else if ((lowerTrigram[0] == 8 || lowerTrigram[0] == 6) && (lowerTrigram[1] == 9 || lowerTrigram[1] == 7) && (lowerTrigram[2] == 8 || lowerTrigram[2] == 6)) {
    earthName = 'water'
  } else if ((lowerTrigram[0] == 9 || lowerTrigram[0] == 7) && (lowerTrigram[1] == 8 || lowerTrigram[1] == 6) && (lowerTrigram[2] == 8 || lowerTrigram[2] == 6)) {
    earthName = 'mountain'
  } else if ((lowerTrigram[0] == 8 || lowerTrigram[0] == 6) && (lowerTrigram[1] == 8 || lowerTrigram[1] == 6) && (lowerTrigram[2] == 8 || lowerTrigram[2] == 6)) {
    earthName = 'earth'
  }

  if (earthName == 'heaven'){
    if (heavenName == 'heaven'){
      hextotalNum = 1
      hextotalName = 'force'
    } else if (heavenName == 'earth'){
      hextotalNum = 11
      hextotalName = 'pervading'
    } else if (heavenName == 'water'){
      hextotalNum = 5
      hextotalName = 'attending'
    } else if (heavenName == 'fire'){
      hextotalNum = 14
      hextotalName = 'great possessing'
    } else if (heavenName == 'thunder'){
      hextotalNum = 34
      hextotalName = 'great invigorating'
    } else if (heavenName == 'mountain'){
      hextotalNum = 26
      hextotalName = 'great accumulating'
    } else if (heavenName == 'wind'){
      hextotalNum = 9
      hextotalName = 'small accumulating'
    } else if (heavenName == 'lake'){
      hextotalNum = 43
      hextotalName = 'displacement'
    }
  }
  
  if (earthName == 'earth'){
    if (heavenName == 'heaven'){
      hextotalNum = 12
      hextotalName = 'obstruction'
    } else if (heavenName == 'earth'){
      hextotalNum = 2
      hextotalName = 'field'
    } else if (heavenName == 'water'){
      hextotalNum = 8
      hextotalName = 'grouping'
    } else if (heavenName == 'fire'){
      hextotalNum = 35
      hextotalName = 'prospering'
    } else if (heavenName == 'thunder'){
      hextotalNum = 16
      hextotalName = 'providing for'
    } else if (heavenName == 'mountain'){
      hextotalNum = 23
      hextotalName = 'stripping'
    } else if (heavenName == 'wind'){
      hextotalNum = 20
      hextotalName = 'viewing'
    } else if (heavenName == 'lake'){
      hextotalNum = 45
      hextotalName = 'clustering'
    }
  }
  
  if (earthName == 'water'){
    if (heavenName == 'heaven'){
      hextotalNum = 6
      hextotalName = 'arguing'
    } else if (heavenName == 'earth'){
      hextotalNum = 7
      hextotalName = 'leading'
    } else if (heavenName == 'water'){
      hextotalNum = 29
      hextotalName = 'gorge'
    } else if (heavenName == 'fire'){
      hextotalNum = 64
      hextotalName = 'not yet fording'
    } else if (heavenName == 'thunder'){
      hextotalNum = 40
      hextotalName = 'taking apart'
    } else if (heavenName == 'mountain'){
      hextotalNum = 4
      hextotalName = 'enveloping'
    } else if (heavenName == 'wind'){
      hextotalNum = 59
      hextotalName = 'dispursing'
    } else if (heavenName == 'lake'){
      hextotalNum = 47
      hextotalName = 'confining'
    }
  }
  
  if (earthName == 'fire'){
    if (heavenName == 'heaven'){
      hextotalNum = 13
      hextotalName = 'concording people'
    } else if (heavenName == 'earth'){
      hextotalNum = 36
      hextotalName = 'darkening light'
    } else if (heavenName == 'water'){
      hextotalNum = 63
      hextotalName = 'already fording'
    } else if (heavenName == 'fire'){
      hextotalNum = 30
      hextotalName = 'radiance'
    } else if (heavenName == 'thunder'){
      hextotalNum = 55
      hextotalName = 'abounding'
    } else if (heavenName == 'mountain'){
      hextotalNum = 22
      hextotalName = 'adorning'
    } else if (heavenName == 'wind'){
      hextotalNum = 37
      hextotalName = 'dwelling people'
    } else if (heavenName == 'lake'){
      hextotalNum = 49
      hextotalName = 'skinning'
    }
  }
  
    if (earthName == 'thunder'){
    if (heavenName == 'heaven'){
      hextotalNum = 25
      hextotalName = 'without embroiling'
    } else if (heavenName == 'earth'){
      hextotalNum = 24
      hextotalName = 'returning'
    } else if (heavenName == 'water'){
      hextotalNum = 3
      hextotalName = 'sprouting'
    } else if (heavenName == 'fire'){
      hextotalNum = 21
      hextotalName = 'gnawing bite'
    } else if (heavenName == 'thunder'){
      hextotalNum = 51
      hextotalName = 'shake'
    } else if (heavenName == 'mountain'){
      hextotalNum = 27
      hextotalName = 'swallowing'
    } else if (heavenName == 'wind'){
      hextotalNum = 42 
      hextotalName = 'augmenting'
    } else if (heavenName == 'lake'){
      hextotalNum = 17
      hextotalName = 'following'
    }
  }
  
      if (earthName == 'mountain'){
    if (heavenName == 'heaven'){
      hextotalNum = 33
      hextotalName = 'retiring'
    } else if (heavenName == 'earth'){
      hextotalNum = 15
      hextotalName = 'humbling'
    } else if (heavenName == 'water'){
      hextotalNum = 39
      hextotalName = 'limping'
    } else if (heavenName == 'fire'){
      hextotalNum = 56
      hextotalName = 'sojourning'
    } else if (heavenName == 'thunder'){
      hextotalNum = 62
      hextotalName = 'small exceeding'
    } else if (heavenName == 'mountain'){
      hextotalNum = 52
      hextotalName = 'bound'
    } else if (heavenName == 'wind'){
      hextotalNum = 53 
      hextotalName = 'infiltrating'
    } else if (heavenName == 'lake'){
      hextotalNum = 31
      hextotalName = 'conjoining'
    }
  }
  
        if (earthName == 'wind'){
    if (heavenName == 'heaven'){
      hextotalNum = 44
      hextotalName = 'coupling'
    } else if (heavenName == 'earth'){
      hextotalNum = 46
      hextotalName = 'ascending'
    } else if (heavenName == 'water'){
      hextotalNum = 48
      hextotalName = 'welling'
    } else if (heavenName == 'fire'){
      hextotalNum = 50
      hextotalName = 'holding'
    } else if (heavenName == 'thunder'){
      hextotalNum = 22
      hextotalName = 'preserving'
    } else if (heavenName == 'mountain'){
      hextotalNum = 18
      hextotalName = 'correcting'
    } else if (heavenName == 'wind'){
      hextotalNum = 57 
      hextotalName = 'ground'
    } else if (heavenName == 'lake'){
      hextotalNum = 28
      hextotalName = 'great exceeding'
    }
  }
  
          if (earthName == 'lake'){
    if (heavenName == 'heaven'){
      hextotalNum = 10
      hextotalName = 'treading'
    } else if (heavenName == 'earth'){
      hextotalNum = 19
      hextotalName = 'nearing'
    } else if (heavenName == 'water'){
      hextotalNum = 60
      hextotalName = 'articulating'
    } else if (heavenName == 'fire'){
      hextotalNum = 38
      hextotalName = 'polarising'
    } else if (heavenName == 'thunder'){
      hextotalNum = 54
      hextotalName = 'converting the maiden'
    } else if (heavenName == 'mountain'){
      hextotalNum = 41
      hextotalName = 'diminishing'
    } else if (heavenName == 'wind'){
      hextotalNum = 61 
      hextotalName = 'center returning'
    } else if (heavenName == 'lake'){
      hextotalNum = 58
      hextotalName = 'open'
    }
  }
  
  
  text('heaven trigram:' + "" + heavenName, centerx, centery + 20)
  text('earth trigram:' + "" + earthName, centerx, centery + 40)
  text('hex number:' + "" + hextotalNum, centerx, centery + 60)
  text('hex name:' + "" + hextotalName, centerx, centery + 80)
  console.log(hexTotal)
}

function hexLine(height) {
  coin1 = int(random(0, 2))
  coin2 = int(random(0, 2))
  coin3 = int(random(0, 2))
  hexlineNumber = 7;
  if (coin1 && coin2 && coin3) {
    hexlineNumber = 9;
    fill('grey')
    rect(centerx, height, rectlength, rectheight)
    circle(centerx, height, 20)
  } else if ((coin1 && coin2) || (coin2 && coin3) || (coin3 && coin1)) {
    fill('grey')
    rect(centerx, height, rectlength / 2 - 10, rectheight)
    rect(centerx + 160, height, rectlength / 2 - 10, rectheight)
    hexlineNumber = 8;
  } else if (coin1 || coin2 || coin3) {
    fill('grey')
    rect(centerx, height, rectlength, rectheight)
    hexlineNumber = 7;
  } else {
    rect(centerx, height, rectlength / 2 - 10, rectheight)
    rect(centerx + 160, height, rectlength / 2 - 10, rectheight)
    circle(centerx, height, 20)
    hexlineNumber = 6;
  }
  return hexlineNumber
  console.log(coin1, coin2, coin3, hexlineNumber)

}