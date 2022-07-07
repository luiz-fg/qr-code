
let imgDownload
let imgName
function generateQR()
{
  document.querySelector("#qr-image").getElementsByClassName.display = "block";
   QRText = document.querySelector("#text").value;
  //  imgName = QRText + ".png";
   imgName = QRText;

  if(QRText.trim().length == 0)
  {
    document.querySelector("#qr-image .error").innerHTML = "Por Favor, informe uma url";
    document.querySelector("#down-off").style.display='none';
    document.querySelector("#img-down").style.display='none';

    document.querySelector("#img").display = 'hidden'
    document.querySelector("#img").src = ""
    
  }
  else
  {

    document.querySelector("#img").style.display='block';
    document.querySelector("#down-off").style.display='block';
    document.querySelector("#img-down").style.display='block';
 
    document.querySelector("#qr-image .error").innerHTML = ""
    document.querySelector("#img").src = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + QRText;

    imgDownload = document.querySelector("#img").src = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + QRText;
    
  }
}

    async function downloadImage() {
      let input = document.querySelector("#text").value

      if(input.length == 0)
      {
        document.querySelector("#down-off").style.display='none';
        document.querySelector("#img-down").style.display='none';

        document.querySelector("#img").display = 'hidden'
        document.querySelector("#img").src = ""
      }
      else
      {
        const image = await fetch(imgDownload)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
      
        const link = document.createElement('a')
        link.href = imageURL
      
        link.download = "[ qr-code ] " +imgName + ".png";
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
        document.querySelector("#img").display = 'hidden'
        document.querySelector("#text").value = "";
        QRText = "";
        document.querySelector("#img").src = ""

      }

    
}


