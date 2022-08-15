//atm bakiye,para çekme,para yatırma,bakiye sorgulama vb fonksiyonelliklerin dosyası

//ornek bakiye
var bakiye = 100;

//hesap geçmiş işlemleri için log dizisi-array
var logs = [];

// hesaplar dictionary-javascript object key-pair olarak tutulacak
//admin hesap no:19
let hesaplar = { 19: bakiye };

//para yatırma fonksiyonu
//default hesap no parametre admin'in hesabı
function paraYatir(hesapNo = 19, yatirilanMiktar) {
  // console.log("parayatir calisti", hesapNo, yatirilanMiktar);
  //hesap no dogru ise

  if (hesaplar.hasOwnProperty(hesapNo.toString())) {
    var date = new Date().toLocaleString();

    hesaplar[hesapNo] = hesaplar[hesapNo] + parseInt(yatirilanMiktar);
    logs.push(
      "+" +
        yatirilanMiktar +
        " Yeni Bakiye: " +
        hesaplar[hesapNo] +
        " İşlem Zamanı:" +
        date +
        "<br>"
    );
  }
}

//para  çekme fonksiyonu
function paraCek(hesapNo = 19, cekilenMiktar) {
  if (hesaplar.hasOwnProperty(hesapNo.toString())) {
    var date = new Date().toLocaleString();

    hesaplar[hesapNo] = hesaplar[hesapNo] - parseInt(cekilenMiktar);
    logs.push(
      "-" +
        cekilenMiktar +
        " Yeni Bakiye: " +
        hesaplar[hesapNo] +
        " İşlem Zamanı:" +
        date +
        "<br>"
    );
  }
}

function hesabaParaGonder(gonderenId, hesapId, gonderilenMiktar) {
  var date = new Date().toLocaleString();
  //gonderenin bakiyesini eksilt

  if (gonderenId in hesaplar) {
    hesaplar[gonderenId] -= parseInt(gonderilenMiktar);
  } else {
    alert(
      "Bankamızda böyle bir hesap numaralı kullanıcı yoktur! -Ornek Admin hesap no:19 deneyebilirsiniz"
    );
  }

  //hesaplarda hesapId id'sine sahip hesap sahibi varsa hesaba ekle
  if (hesapId in hesaplar) {
    hesaplar[hesapId] += parseInt(gonderilenMiktar);
    alert("İşlem başarılı para hesaba ulaşmıştır");
  } else {
    alert(
      "Bankamızda böyle bir hesap numaralı kullanıcı yoktur! -Ornek Admin hesap no:19 deneyebilirsiniz"
    );
  }

  logs.push(
    gonderilenMiktar +
      " " +
      hesapId +
      " hesabına gonderildi." +
      "Yeni Bakiye :" +
      hesaplar[hesapId],
    " İşlem Zamanı:" + date + "<br>"
  );
}
//console.log("atm çalisti");
